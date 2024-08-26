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
     
   

}
