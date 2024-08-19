import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly userRepo: Repository<Users>) { }

    async findOneWithUsername(username: string) {
        return await this.userRepo.findOne({ where: { email: username } })
    }
}
