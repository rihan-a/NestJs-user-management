import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { getUsersFilterDto } from './dto/get-users-filter.dto';
//import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRespository: Repository<User>,
  ) {}

  // private users: User[] = [];
  // getAllUsers(): User[] {
  //   return this.users;
  // }
  // getUsersWithFilter(filterDto: getUsersFilterDto): User[] {
  //   const { gender, search } = filterDto;
  //   // define temp array to hold results
  //   let users = this.getAllUsers();
  //   // filter with gender
  //   if (gender) {
  //     users = users.filter((user) => user.gender === gender);
  //   }
  //   // filter with search
  //   if (search) {
  //     users = users.filter((user) => {
  //       if (
  //         user.name.includes(search) ||
  //         user.bio.includes(search) ||
  //         user.city.includes(search)
  //       ) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }
  //   return users;
  // }

  // GET USER BY ID
  async getUserById(id: string): Promise<User> {
    const user = await this.usersRespository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // CREATE USER
  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const { name, age, gender, height, education, bio, city } = CreateUserDto;
    const user = this.usersRespository.create({
      name,
      age,
      gender,
      height,
      education,
      bio,
      city,
    });

    await this.usersRespository.save(user);
    return user;
  }

  // DELETE USER BY ID
  async deleteUserById(id: string): Promise<string> {
    const result = await this.usersRespository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }
    return 'User is deleted successfuly';
  }

  // UPDATE USER NAME BYT ID
  async updateUserNameById(id: string, name: string): Promise<User> {
    const user = await this.getUserById(id);
    user.name = name;

    await this.usersRespository.save(user);

    return user;
  }
}
