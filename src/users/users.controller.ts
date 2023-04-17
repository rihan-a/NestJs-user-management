import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';
import { getUsersFilterDto } from './dto/get-users-filter.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Query() filterDto: getUsersFilterDto): User[] {
    if (Object.keys(filterDto).length) {
      // service function to filter
      return this.usersService.getUsersWithFilter(filterDto);
    } else {
      return this.usersService.getAllUsers();
    }
  }

  @Get('/:id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    console.log(CreateUserDto);
    return this.usersService.createUser(CreateUserDto);
  }

  @Delete('/:id')
  deleteUserById(@Param('id') id: string): string {
    return this.usersService.deleteUserById(id);
  }

  @Patch('/:id/name')
  updateUserNameById(
    @Param('id') id: string,
    @Body('name') name: string,
  ): User {
    return this.usersService.updateUserNameById(id, name);
  }
}
