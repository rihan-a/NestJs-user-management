import { Body, Controller, Get, Post } from '@nestjs/common';
import { User, userGender } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Post()
  createUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('gender') gender: userGender,
    @Body('height') height: number,
    @Body('education') education: string,
    @Body('bio') bio: string,
    @Body('city') city: string,
  ) {
    console.log(name, age, gender, height, education, bio, city);

    return this.usersService.createUser(
      name,
      age,
      gender,
      height,
      education,
      bio,
      city,
    );
  }
}
