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
  async create(@Body() body: CreateUserDTO) {
    return { body };
  }

  @Put(':id')
  async update(@Body() body, @Param() param) {
    return {
      method: 'PUT',
      body,
      param,
    };
  }
  @Patch(':id')
  async patch(@Body() body, @Param() param) {
    return {
      method: 'Patch',
      body,
      param,
    };
  }

  @Delete(':id')
  async delete(@Param() params) {
    return params;
  }
}
