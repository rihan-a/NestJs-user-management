import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserGender } from '../user-gender.enum';

export class getUsersFilterDto {
  @IsOptional()
  @IsEnum(UserGender)
  readonly gender?: UserGender;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  readonly search?: string;
}
