import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Potion } from './potion.entity';
import { findPotionByIngredients} from '../utils/functions'

@Injectable()
export class PotionsService {
  private readonly INVALID_INGREDIENTS_MESSAGE = 'Recette de potion invalide. Vérifiez les ingrédients.';
  private readonly INVALID_POTION_COUNT_MESSAGE = 'Une potion doit contenir exactement 3 ingrédients.';
  constructor(
    @InjectRepository(Potion)
    private potionsRepository: Repository<Potion>,
  ) {}

  async findAll(): Promise<Potion[]> {
    return this.potionsRepository.find();
  }

  async findById(id: number): Promise<Potion> {
    return this.potionsRepository.findOneBy({
      id: id
    });
  }

  async create(ingredients: string[]): Promise<Potion> {
    if (!ingredients || ingredients.length !== 3) {
      throw new BadRequestException(this.INVALID_POTION_COUNT_MESSAGE);
    }

    const potion = findPotionByIngredients(ingredients);

    if (!potion) {
      throw new BadRequestException(this.INVALID_INGREDIENTS_MESSAGE);
    }

    const createdPotion = this.potionsRepository.create({
      name: potion.name,
      ingredients,
    });

    await this.potionsRepository.save(createdPotion);

    return createdPotion;
  }

  
}
