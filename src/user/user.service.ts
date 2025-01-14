import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDTO } from './dto/update-put-user-dto';
import { UpdatePatchUserDTO } from './dto/patch-put-user-dto';

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

  async update(id: string, { name, email, password, birthAt }: UpdateUserDTO) {
    await this.exits(id);
    if (!birthAt) {
      birthAt = null;
    }
    return this.prisma.user.update({
      data: {
        name,
        email,
        password,
        birthAt: birthAt ? new Date(birthAt) : null,
      },
      where: { id },
    });
  }
  async patch(
    id: string,
    { name, email, password, birthAt }: UpdatePatchUserDTO,
  ) {
    await this.exits(id);
    const data: any = {};
    if (birthAt) {
      data.birthAt = new Date(birthAt);
    }
    if (name) {
      data.name = name;
    }
    if (email) {
      data.email = email;
    }
    if (password) {
      data.password = password;
    }
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }
  async delete(id: string) {
    await this.exits(id);
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async exits(id: string) {
    if (!(await this.show(id))) {
      throw new NotFoundException(` Usuário ${id} não encontrado`);
    }
  }
}
