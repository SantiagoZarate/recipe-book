import { Dish } from 'src/entities/dish.entity';
import { Ingredient } from 'src/entities/ingredient.entity';
import { RecipeImage } from 'src/entities/recipe-image.entity';
import { RecipeToIngredient } from 'src/entities/recipe-ingredient';
import { RecipeInstruction } from 'src/entities/recipe-intruction.entity';
import { Recipe } from 'src/entities/recipe.entity';
import { User } from 'src/entities/user.entity';
import { DataSourceOptions } from 'typeorm';

export const dbConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'rootpass',
  database: 'test',
  entities: [
    User,
    Ingredient,
    Dish,
    Recipe,
    RecipeImage,
    RecipeInstruction,
    RecipeToIngredient,
  ],
  synchronize: true,
};
