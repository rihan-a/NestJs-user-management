import { userGender } from '../user.model';

export class CreateUserDto {
  readonly id: string;
  readonly name: string;
  readonly age: number;
  readonly gender: userGender;
  readonly height: number;
  readonly education: string;
  readonly bio: string;
  readonly city: string;
}
