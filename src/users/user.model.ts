export interface User {
  id: string;
  name: string;
  age: number;
  gender: userGender;
  height: number;
  education: string;
  bio: string;
  city: string;
}

export type userGender = 'female' | 'male' | 'other';
