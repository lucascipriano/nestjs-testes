import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login-dto';
import { AuthRegisterDTO } from './dto/auth-register-dto';
import { AuthForgetDTO } from './dto/auth-forget-dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthResetDTO } from './dto/auth-reset-password-dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}
  @Post('login')
  async login(@Body() { email, password }: AuthLoginDTO) {
    return this.authService.login(email, password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.register(body);
  }

  @Post('forget')
  async forget(@Body() { email }: AuthForgetDTO) {
    return this.authService.forget(email);
  }

  @Post('resetPassword')
  async resetPassword(@Body() { password, token }: AuthResetDTO) {
    return this.authService.resetPassowrd(password, token);
  }
  @Post('me')
  async me(@Body() body) {
    return this.authService.checkToken(body.token);
  }
}
