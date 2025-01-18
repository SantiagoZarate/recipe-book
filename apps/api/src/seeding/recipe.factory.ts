import { Faker } from '@faker-js/faker';
import { Recipe } from 'src/entities/recipe.entity';
import { setSeederFactory } from 'typeorm-extension';

const difficulties = ['easy', 'medium', 'hard'];

export const recipeFactory = setSeederFactory(Recipe, (faker: Faker) => {
  const recipe = new Recipe();

  recipe.difficulty = faker.helpers.arrayElement(difficulties);
  recipe.name = faker.word.words(2);

  return recipe;
});
