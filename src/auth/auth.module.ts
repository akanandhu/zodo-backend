import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/entity/users.entity';
import { ConfigModule } from '@nestjs/config';
import { UtilsModule } from 'src/utils/utils.module';
import { ResponseModule } from 'src/response/response.module';

@Module({
  providers: [AuthService, UsersService, JwtService],
  controllers: [AuthController],
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: {
      expiresIn: process.env.JWT_ACCESS_EXPIRY,

    }
  }), TypeOrmModule.forFeature([Users]), UtilsModule, ResponseModule],
  exports:[AuthService]
})
export class AuthModule { }
