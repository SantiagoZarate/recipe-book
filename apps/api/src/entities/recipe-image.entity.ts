import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity('recipe_image')
export class RecipeImage {
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
  url: string;

  // RELATIONS
  @ManyToOne(() => Recipe, (recipe) => recipe.images)
  recipe: Recipe;
}
