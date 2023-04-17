import { userGender } from '../user.model';

export class getUsersFilterDto {
  readonly gender?: userGender;
  readonly search?: string;
}
