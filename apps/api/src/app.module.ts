import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { DishModule } from './modules/dish/dish.module';
import { RecipeModule } from './modules/recipe/recipe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'rootpass',
      database: 'test',
      entities: [join(__dirname, './entity/**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    RecipeModule,
    DishModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
