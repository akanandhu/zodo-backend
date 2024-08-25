import { Body, Controller, Post } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { DoctorsService } from './doctors.service';

@Controller('doctors')

export class DoctorsController {
    constructor(private readonly doctorsServices: DoctorsService) { }
    @Post('signup')
    create(@Body() doctorSignUpDto: CreateDoctorDto) {
    //   console.log("Create role",createRoleDto);
    return this.doctorsServices.createDoctor(doctorSignUpDto);
    }
}

