import { Module } from '@nestjs/common';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { Doctors } from './entity/doctors.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/users/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctors]), TypeOrmModule.forFeature([Users])],
  controllers: [DoctorsController],
  providers: [DoctorsService]
})
export class DoctorsModule {}
