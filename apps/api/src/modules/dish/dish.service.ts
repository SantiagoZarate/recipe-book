import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from 'src/entities/dish.entity';
import { Repository } from 'typeorm';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish) private dishRepository: Repository<Dish>,
  ) {}

  async create(createDishDto: CreateDishDto) {
    const newDish = this.dishRepository.create(createDishDto);
    const result = await this.dishRepository.save(newDish);
    return result;
  }

  async findAll() {
    const results = await this.dishRepository.find();
    return results;
  }

  async findOne(id: string) {
    const result = await this.dishRepository.findOneBy({
      id,
    });
    return result;
  }

  update(id: number, updateDishDto: UpdateDishDto) {
    console.log(updateDishDto);
    return `This action updates a #${id} dish`;
  }

  remove(id: number) {
    return `This action removes a #${id} dish`;
  }
}
