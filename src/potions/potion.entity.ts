import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Potion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-array')
  ingredients: string[];
  
}
