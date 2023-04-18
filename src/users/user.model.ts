export interface User {
  id: string;
  name: string;
  age: number;
  gender: UserGender;
  height: number;
  education: string;
  bio: string;
  city: string;
}

//export type userGender = 'female' | 'male' | 'other';

export enum UserGender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  OTHER = 'OTHER',
}
