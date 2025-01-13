import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity('recipe_instruction')
export class RecipeInstruction {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  order: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  content: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  duration: string;

  // RELATIONS
  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  recipe: Recipe;
}
