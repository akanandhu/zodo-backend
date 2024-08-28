import { forwardRef, Module } from '@nestjs/common';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { Doctors } from './entity/doctors.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/users/entity/users.entity';
import { AuthService } from 'src/auth/auth.service';
import { ResponseService } from 'src/response/response.service';
import { UtilsModule } from 'src/utils/utils.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Doctors]),TypeOrmModule.forFeature([Users]), UtilsModule],
  controllers: [DoctorsController],
  providers: [DoctorsService, AuthService, UsersService, ResponseService]
})
export class DoctorsModule {}
