import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/dbConfig';
import { DishModule } from './modules/dish/dish.module';
import { RecipeModule } from './modules/recipe/recipe.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), RecipeModule, DishModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
