import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity('dish')
export class Dish {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: string;

  // RELATIONS
  @OneToMany(() => Recipe, (recipe) => recipe.dish)
  recipes: Recipe[];
}
