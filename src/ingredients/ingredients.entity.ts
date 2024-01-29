import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;
}


export default Ingredients