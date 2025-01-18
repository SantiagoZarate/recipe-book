import { Faker } from '@faker-js/faker';
import { User } from 'src/entities/user.entity';
import { setSeederFactory } from 'typeorm-extension';

export const userFactory = setSeederFactory(User, (faker: Faker) => {
  const user = new User();

  user.email = faker.person.jobDescriptor();
  user.name = faker.person.firstName();
  user.password = faker.person.jobTitle();

  return user;
});
