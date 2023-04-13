import { Injectable } from '@nestjs/common';
import { User, userGender } from './user.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(
    name: string,
    age: number,
    gender: userGender,
    height: number,
    education: string,
    bio: string,
    city: string,
  ): User {
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
}
