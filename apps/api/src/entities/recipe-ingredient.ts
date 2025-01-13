import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { Recipe } from './recipe.entity';

@Entity('recipe_ingredient')
export class RecipeToIngredient {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  amount: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  unit: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  optional: string;

  // RELATIONS
  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  recipe: Recipe;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  ingredient: Ingredient;
}
