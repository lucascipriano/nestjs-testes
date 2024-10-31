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

@Controller('users')
export class UserController {
  @Get()
  async list() {
    return { users: [] };
  }

  @Get(':id')
  async show(@Param() param) {
    return { user: {}, param };
  }

  @Post()
  async create(@Body() { name, email, password }: CreateUserDTO) {
    return { name, email, password };
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
