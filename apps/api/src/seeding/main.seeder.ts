import { faker } from '@faker-js/faker';
import { Dish } from 'src/entities/dish.entity';
import { Ingredient } from 'src/entities/ingredient.entity';
import { RecipeImage } from 'src/entities/recipe-image.entity';
import { Recipe } from 'src/entities/recipe.entity';
import { User } from 'src/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { ingredients } from './ingredients';

export class MainSeeder implements Seeder {
  track?: boolean;
  async run(dataSource: DataSource, factoryManager: SeederFactoryManager) {
    console.log('🌱 Seeding [Ingredients]');
    const ingredientsRepository = dataSource.getRepository(Ingredient);
    await ingredientsRepository.save(ingredients.map((i) => ({ name: i })));

    // Seed users
    console.log('🌱 Seeding [Users]');
    const userFactory = factoryManager.get(User);
    const users = await userFactory.saveMany(20);

    // Seed dishes
    console.log('🌱 Seeding [Dishes]');
    const dishFactory = factoryManager.get(Dish);
    const dishRepository = dataSource.getRepository(Dish);

    const dishes = await Promise.all(
      Array(20)
        .fill(1)
        .map((_n) => {
          const dish = dishFactory.make();
          return dish;
        }),
    );

    const savedDishes = await dishRepository.save(dishes);

    // Seed recipes
    console.log('🌱 Seeding [Recipes]');
    const recipeFactory = factoryManager.get(Recipe);
    const recipeRepository = dataSource.getRepository(Recipe);

    const recipes = await Promise.all(
      Array(50)
        .fill(1)
        .map((_n) => {
          const recipe = recipeFactory.make({
            dish: faker.helpers.arrayElement(savedDishes),
            user: faker.helpers.arrayElement(users),
          });
          return recipe;
        }),
    );

    const recipesWithImages = [];
    const savedRecipes = await recipeRepository.save(recipes);

    // Assing images to recipes
    await Promise.all(
      Array(10)
        .fill(1)
        .map(async (_n) => {
          const availableRecipes = savedRecipes.filter(
            (recipe) => !recipesWithImages.includes(recipe.id), // Filter out used recipes
          );

          const selectedRecipe = faker.helpers.arrayElement(availableRecipes);
          recipesWithImages.push(selectedRecipe.id); // Track used recipe

          // Each recipe is gonna have 3 images
          const images = await Promise.all(
            Array(3)
              .fill(1)
              .map((_m, index) => {
                const image = new RecipeImage();
                image.order = index;
                image.url = faker.image.url();
                image.recipe = selectedRecipe;

                return image;
              }),
          );
          // Add image (you can customize this part)
          selectedRecipe.images = images; // Assuming "image" is a property on Recipe
          return selectedRecipe;
        }),
    );

    await recipeRepository.save(recipes);
  }
}
