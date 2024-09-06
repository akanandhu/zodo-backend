import { Body, Controller, Headers, Post, Req } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { DoctorsService } from './doctors.service';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { AuthService } from 'src/auth/auth.service';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { Request } from 'express';

@Controller('doctors')
export class DoctorsController {
  constructor(
    private readonly doctorsServices: DoctorsService,
    private readonly authServices: AuthService,
  ) {}
  // Doctor signup controller
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
  // Doctor signin controller
  @Post('login')
  login(@Body() signIndto: SignInDto, @Headers() headers: any) {
    console.log(signIndto);
    return this.authServices.signIn(signIndto, headers)
  }

  @Post("logout")
    logout(@Req() req: Request) {
      console.log(req.user);
        // return this.authServices.logout(req.user['sub'])
    }
}
