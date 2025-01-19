import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GenericResponse } from 'src/common/dto/generic-response.dto';
import { DishService } from './dish.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post()
  async create(@Body() createDishDto: CreateDishDto) {
    const result = await this.dishService.create(createDishDto);
    return new GenericResponse({
      code: HttpStatus.CREATED,
      data: result,
      message: 'dish created succesfully!',
    });
  }

  @Get()
  async findAll() {
    const data = await this.dishService.findAll();
    if (!data.length) {
      throw new NotFoundException('Dishes not found');
    }
    return new GenericResponse({
      code: HttpStatus.OK,
      message: 'Getting all dishes',
      data,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.dishService.findOne(id);
    if (!data) {
      throw new NotFoundException(`Dish with id ${id} not found`);
    }
    return new GenericResponse({
      code: HttpStatus.OK,
      message: `Getting dish with id ${id}`,
      data,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDishDto: UpdateDishDto) {
    return this.dishService.update(+id, updateDishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dishService.remove(+id);
  }
}
