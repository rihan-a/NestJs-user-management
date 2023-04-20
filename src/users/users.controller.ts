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
import { UsersService } from './users.service';
import { getUsersFilterDto } from './dto/get-users-filter.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // // Get all Users or get user by search filter
  // @Get()
  // getUsers(@Query() filterDto: getUsersFilterDto): User[] {
  //   if (Object.keys(filterDto).length) {
  //     // service function to filter users by search query
  //     return this.usersService.getUsersWithFilter(filterDto);
  //   } else {
  //     return this.usersService.getAllUsers();
  //   }
  // }

  // get User by Id Route
  @Get('/:id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  // Create User Route
  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    //console.log(CreateUserDto);
    return this.usersService.createUser(CreateUserDto);
  }

  // // Delete User Route
  @Delete('/:id')
  deleteUserById(@Param('id') id: string): Promise<string> {
    return this.usersService.deleteUserById(id);
  }

  // Update User Route
  @Patch('/:id/name')
  updateUserNameById(
    @Param('id') id: string,
    @Body('name') name: string,
  ): Promise<User> {
    return this.usersService.updateUserNameById(id, name);
  }
}
