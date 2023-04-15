import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
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
}
