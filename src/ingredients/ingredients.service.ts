import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredients } from './ingredients.entity';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredients)
    private readonly ingredientsRepository: Repository<Ingredients>,
  ) {}

  findAll(): Promise<Ingredients[]> {
    return this.ingredientsRepository.find();
  }

  findOne(id: number): Promise<Ingredients> {
    return this.ingredientsRepository.findOneBy({id: id});
  }

  async updateQuantity(id: number, newQuantity: number): Promise<Ingredients> {
    const ingredient = await this.ingredientsRepository.findOneBy({id: id});

    if (ingredient) {
      ingredient.quantity = newQuantity;
      await this.ingredientsRepository.save(ingredient);
    }

    return ingredient;
  }

  async create(data: Partial<Ingredients>): Promise<Ingredients> {
    const newIngredient = this.ingredientsRepository.create(data);
    return await this.ingredientsRepository.save(newIngredient);
  }

}
