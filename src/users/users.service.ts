import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { getUsersFilterDto } from './dto/get-users-filter.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUsersWithFilter(filterDto: getUsersFilterDto): User[] {
    const { gender, search } = filterDto;

    // define temp array to hold results
    let users = this.getAllUsers();
    // filter with gender
    if (gender) {
      users = users.filter((user) => user.gender === gender);
    }

    // filter with search
    if (search) {
      users = users.filter((user) => {
        if (
          user.name.includes(search) ||
          user.bio.includes(search) ||
          user.city.includes(search)
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    return users;
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(CreateUserDto: CreateUserDto): User {
    const { name, age, gender, height, education, bio, city } = CreateUserDto;

    const User: User = {
      id: uuidv4(),
      name,
      age,
      gender,
      height,
      education,
      bio,
      city,
    };

    this.users.push(User);
    return User;
  }

  deleteUserById(id: string): string {
    this.users = this.users.filter((user) => user.id !== id);
    return 'User is deleted successfuly';
  }

  updateUserNameById(id: string, name: string) {
    const user = this.getUserById(id);
    user.name = name;
    return user;
  }
}
