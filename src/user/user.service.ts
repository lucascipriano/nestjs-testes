import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ name, email, password }: CreateUserDTO) {
    return this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
      },
    });
  }

  async list() {
    return this.prisma.user.findMany();
  }
  async show(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
