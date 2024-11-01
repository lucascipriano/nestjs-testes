import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly JWTService: JwtService,
    private readonly prisma: PrismaService,
  ) {}
  async createToken() {
    // return this.JWTService.sign();
  }

  async checkToken(token: string) {
    // return this.JWTService.verify();
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Email/senha incorretos');
    }

    return user;
  }
  async forget(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw new UnauthorizedException('Email incorreto');
    }

    // TO DO ENVIAR O EMAIL
    return true;
  }
  async resetPassowrd(password: string, token: string) {
    // TO DO: Se o token for válido...
    const id = 'asdasds';
    await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });

    return true;
  }
}
