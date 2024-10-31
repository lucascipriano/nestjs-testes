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
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  // Tem que mandar tudo
  @Put(':id')
  async update(@Body() data: UpdateUserDTO, @Param('id') id) {
    return this.userService.update(id, data);
  }
  @Patch(':id')
  async patch(@Body() data: UpdatePatchUserDTO, @Param('id') id) {
    return this.userService.patch(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return id;
  }
}
