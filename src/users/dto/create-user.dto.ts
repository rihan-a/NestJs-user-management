import { UserGender } from '../user-gender.enum';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  readonly id: string;
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly age: number;

  @IsNotEmpty()
  @IsEnum(UserGender)
  readonly gender: UserGender;

  readonly height: number;
  readonly education: string;
  readonly bio: string;

  @IsNotEmpty()
  readonly city: string;
}
