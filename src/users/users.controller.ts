import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { sign } from 'crypto';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    getHello(): string {
        return 'user log'
    }
     
    //Add users
    @Post('signup')
    signUp(@Body() signInDto: Record<string, any>){
        return this.usersService.signUp(signInDto.username, signInDto.password, signInDto.isUserType);
        // console.log(signInDto);
        // return this.UsersService.signIn(signInDto.username, signInDto.password);
        // return "created successfully"
    }

}
