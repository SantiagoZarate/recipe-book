import { Faker } from '@faker-js/faker';
import { Dish } from 'src/entities/dish.entity';
import { setSeederFactory } from 'typeorm-extension';

export const dishFactory = setSeederFactory(Dish, (faker: Faker) => {
  const dish = new Dish();

  dish.description = faker.word.words({ count: { max: 15, min: 5 } });
  dish.name = faker.word.words(1);

  return dish;
});
