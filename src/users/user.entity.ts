import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserGender } from './user-gender.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: UserGender;

  @Column()
  height: number;

  @Column()
  education: string;

  @Column()
  bio: string;

  @Column()
  city: string;
}
