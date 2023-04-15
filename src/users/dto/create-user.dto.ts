import { userGender } from '../user.model';

export class CreateUserDto {
  id: string;
  name: string;
  age: number;
  gender: userGender;
  height: number;
  education: string;
  bio: string;
  city: string;
}
