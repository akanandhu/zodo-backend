import { Body, Controller, Post } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { DoctorsService } from './doctors.service';
import { CreateUserDto } from 'src/users/dto/create-user-dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsServices: DoctorsService) {}
  @Post('signup')
  create(
    @Body() userSignupDto: CreateUserDto,
    @Body() doctorSignUpDto: CreateDoctorDto,
  ) {
    const { first_name, last_name, gender, email, phone, password, is_active } =
      userSignupDto;
    const { specilisation, is_online } = doctorSignUpDto;
    return this.doctorsServices.createDoctor(
      first_name,
      last_name,
      gender,
      email,
      phone,
      password,
      is_active,
      specilisation,
      is_online,
    );
  }
}
