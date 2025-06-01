
import { Body, Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAminDTO } from 'src/admin/dto/login-admin.dto';
import { AuthGuard } from './auth.guards';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    signIn(@Body() adminDto: LoginAminDTO) {
        return this.authService.loginAdmin(adminDto);
    }
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
