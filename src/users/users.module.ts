import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { DoctorsModule } from 'src/doctors/doctors.module';
import { Doctors } from 'src/doctors/entity/doctors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), TypeOrmModule.forFeature([Doctors])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
