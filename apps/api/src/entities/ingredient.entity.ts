import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecipeToIngredient } from './recipe-ingredient.entity';

@Entity('ingredient')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  // RELATIONS
  @OneToMany(
    () => RecipeToIngredient,
    (recipeToIngredient) => recipeToIngredient.ingredient,
  )
  recipeToIngredients: RecipeToIngredient;
}
