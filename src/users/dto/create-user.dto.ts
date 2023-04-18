import { userGender } from '../user.model';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  readonly id: string;
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly age: number;

  @IsNotEmpty()
  readonly gender: userGender;

  readonly height: number;
  readonly education: string;
  readonly bio: string;

  @IsNotEmpty()
  readonly city: string;
}
