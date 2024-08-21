import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { Users } from 'src/users/entity/users.entity';
import { SignInDto } from './dto/sign-in.dto';
import * as jwt from 'jsonwebtoken'
import { Repository } from 'typeorm';
import { UtilsService } from 'src/utils/utils.service';
import { ResponseService } from 'src/response/response.service';
import { InjectRepository } from '@nestjs/typeorm';

require("dotenv").config();

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
        @InjectRepository(Users) private userRepository: Repository<Users>, private utilsService: UtilsService, private responseService: ResponseService) { }

    async signIn(signInDto: SignInDto, headers: any) {
        const user = await this.validateUser(signInDto, headers)
        if (user) {
            const tokens = await this.getTokens((await user).id, (await user).email)
            await this.updateRefreshToken(user.id, tokens.refreshToken)
            return this.responseService.successResponse('Login Success', { tokens, id: user.id })
        } else {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "User not found",
            }, HttpStatus.NOT_FOUND)
        }
    }


    async validateUser(signInDto: SignInDto, headers: any): Promise<Users> {
        const { email, password } = signInDto
        const user = await this.userService.findOneWithEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            return user
        }
        return null
    }

    async getTokens(userId: string, username: string) {
        const accessToken = jwt.sign({
            sub: userId,
            username
        }, process.env.JWT_ACCESS_SECRET,
            {
                expiresIn: process.env.JWT_ACCESS_EXPIRY
            }
        )

        const refreshToken = jwt.sign({
            sub: userId,
            username
        }, process.env.JWT_REFRESH_SECRET, {
            expiresIn: process.env.JWT_EXPIRY_EXPIRY
        })

        const combinedToken = jwt.sign({
            sub: userId,
            username,
            accessToken,
            refreshToken
        }, process.env.JWT_ACCESS_SECRET, {
            expiresIn: process.env.JWT_ACCESS_EXPIRY
        })

        return {
            accessToken: combinedToken,
            refreshToken
        }
    }

    async updateRefreshToken(user_id: string, refresh_token: string): Promise<void> {
        const user = await this.userRepository.findOne({
            where: {
                id: user_id
            }
        }).then(d => this.utilsService.expectExistsCheck(d, 'cant parse user'));
        user.refresh_token = refresh_token;
        await this.userRepository.save(user)
    }

    async logout(userId: string): Promise<Object> {
        await this.updateRefreshToken(userId, null)

        return this.responseService.successResponse('User logged out')
    }
}
