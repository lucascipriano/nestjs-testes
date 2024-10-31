import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { UpdateUserDTO } from './dto/update-put-user-dto';
import { UpdatePatchUserDTO } from './dto/patch-put-user-dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    return this.userService.show(id);
  }

  @Post()
  async create(@Body() { name, email, password }: CreateUserDTO) {
    return this.userService.create({ name, email, password });
  }

  // Tem que mandar tudo
  @Put(':id')
  async update(
    @Body() { name, email, password }: UpdateUserDTO,
    @Param() param,
  ) {
    return {
      method: 'PUT',
      name,
      email,
      password,
      param,
    };
  }
  @Patch(':id')
  async patch(
    @Body() { name, email, password }: UpdatePatchUserDTO,
    @Param() param,
  ) {
    return {
      method: 'Patch',
      name,
      email,
      password,
      param,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return id;
  }
}
