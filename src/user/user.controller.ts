import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get()
  fetchAllUsers() {
    return 'Fetch all users';
  }

  @Get('/:id')
  fetchParticularUser() {
    return 'Fetch particular user';
  }

  @Post()
  createUser() {
    return 'Create user';
  }

  @Put()
  updateUser() {
    return 'Update user';
  }

  @Delete()
  deleteUser() {
    return 'Delete user';
  }
}
