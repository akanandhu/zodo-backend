import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctors } from './entity/doctors.entity';
import { Repository } from 'typeorm';
import { GenderType, Users } from 'src/users/entity/users.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Users) private userRepo: Repository<Users>,
    @InjectRepository(Doctors) private readonly doctorRepo: Repository<Doctors>,
  ) {}

  async createDoctor(
    first_name: string,
    last_name: string,
    gender: GenderType,
    email: string,
    phone: string,
    password: string,
    is_active: boolean,
    specilisation: string,
    is_online: boolean,
  ) {
    try {
      // create user
      const user = await this.userRepo.create({
        first_name,
        last_name,
        gender,
        email,
        phone,
        password,
        is_active,
      });
      await this.userRepo.save(user);
      // Add doctor's attributes to doctor table
      const doctor = await this.doctorRepo.create({
        specilisation,
        is_online
      });
      return this.doctorRepo.save(doctor);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        // Adjust error code based on your database
        throw new BadRequestException('A user with that email already exists.');
      }
      throw error; // Re-throw other errors
    }
  }
}
