import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctors } from './entity/doctors.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctors) private readonly doctorRepo: Repository<Doctors>,
  ) {}

    async createDoctor(doctorSignUpDto){
        console.log(doctorSignUpDto);
        try {
          const doctor = await this.doctorRepo.create(doctorSignUpDto);
          return await this.doctorRepo.save(doctor);
        } catch (error) {
          if (error.code === 'ER_DUP_ENTRY') { // Adjust error code based on your database
            throw new BadRequestException('A user with that email already exists.');
          }
          throw error; // Re-throw other errors
        }
    }  
}
