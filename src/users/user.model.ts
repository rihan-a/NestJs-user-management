export interface User {
  id: string;
  name: string;
  age: number;
  gender: UserGender;
  height: number;
  education: string;
  bio: string;
  pictures: string[];
  city: string;
}

enum UserGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}
