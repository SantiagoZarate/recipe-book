import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/db/database.module';
import { DishModule } from './modules/dish/dish.module';
import { RecipeModule } from './modules/recipe/recipe.module';

@Module({
  imports: [ConfigModule, DatabaseModule, RecipeModule, DishModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
