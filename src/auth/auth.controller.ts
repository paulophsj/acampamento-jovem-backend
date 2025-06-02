
import { Body, Controller, Post, Get, UseGuards, Request, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAminDTO } from 'src/admin/dto/login-admin.dto';
import { AuthGuard } from './auth.guards';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async signIn(
        @Body() adminDto: LoginAminDTO,
        @Res({ passthrough: true }) res: Response
    ) {
        const { access_token } = await this.authService.loginAdmin(adminDto);
        res.cookie("access_token", access_token, {
            httpOnly: true,
            secure: false,
            sameSite: 'none',
            maxAge: 1000*60,
        }).status(HttpStatus.OK).json({message: "Login bem-sucedido"})
    }
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
