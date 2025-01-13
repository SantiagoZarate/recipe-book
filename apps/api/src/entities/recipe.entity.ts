import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Dish } from './dish.entity';
import { RecipeImage } from './recipe-image.entity';
import { RecipeToIngredient } from './recipe-ingredient';
import { RecipeInstruction } from './recipe-intruction.entity';
import { User } from './user.entity';

@Entity('recipe')
export class Recipe {
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
  difficulty: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: string;

  // RELATIONS
  @ManyToOne(() => User, (user) => user.recipes)
  user: User;

  @OneToMany(() => RecipeImage, (recipeImage) => recipeImage.recipe)
  images: RecipeImage[];

  @ManyToOne(() => Dish, (dish) => dish.recipes)
  dish: Dish;

  @OneToMany(
    () => RecipeToIngredient,
    (recipeToIngredient) => recipeToIngredient.recipe,
  )
  ingredients: RecipeToIngredient[];

  @OneToMany(
    () => RecipeInstruction,
    (recipeInstruction) => recipeInstruction.recipe,
  )
  instructions: RecipeInstruction[];
}
