import { Body, Controller, Post, Headers, Req } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post("login")
    signIn(@Body() data: SignInDto, @Headers() headers: any) {
        return this.authService.signIn(data, headers)
    }

    @Post("logout")
    logout(@Req() req: Request) {
        return this.authService.logout(req.user['sub'])
    }
}
