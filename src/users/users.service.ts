import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepo: Repository<Users>,
  ) {}

  async findOneWithEmail(email: string) {
    return await this.userRepo.findOne({ where: { email } });
  }

  // Create users service
  async signUp(username: string, pass: string, isUserType: string) {
    const user = await this.userRepo.save({
      username,
      password: pass,
      isUserType,
    });
    console.log('USER ', user);
    if (!user) {
      throw new InternalServerErrorException();
    }
    delete user.password;
    return user;
  }
}
