import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = ['Rihan', 'Ahmed'];

  getAllUsers() {
    return this.users;
  }
}
