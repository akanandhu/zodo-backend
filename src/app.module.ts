import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { ResponseModule } from './response/response.module';
// import { SeederModule } from './seeders/seeders.module';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [UsersModule, RolesModule, DatabaseModule, AuthModule, ResponseModule, DoctorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
