import { UserGender } from '../user.model';

export class getUsersFilterDto {
  readonly gender?: UserGender;
  readonly search?: string;
}
