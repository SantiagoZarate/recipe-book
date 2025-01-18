import { dbConfig } from 'src/config/dbConfig';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';
import { dishFactory } from './dish.factory';
import { MainSeeder } from './main.seeder';
import { recipeFactory } from './recipe.factory';
import { userFactory } from './user.factory';

const options: DataSourceOptions & SeederOptions = {
  ...dbConfig,
  factories: [recipeFactory, userFactory, dishFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);
dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
