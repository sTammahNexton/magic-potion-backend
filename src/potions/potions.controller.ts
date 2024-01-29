// src/potions/potions.controller.ts

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PotionsService } from './potions.service';
import { Potion } from './potion.entity';

@Controller('potions')
export class PotionsController {
  constructor(private readonly potionsService: PotionsService) {}

  @Get()
  findAll(): Promise<Potion[]> {
    return this.potionsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Potion> {
    return this.potionsService.findById(+id);
  }

  @Post()
  create(@Body() ingredients: string[]): Promise<Potion> {
    return this.potionsService.create(ingredients);
  }

  @Get('all')
  getAllPotions(): Promise<Potion[]> {
    return this.potionsService.findAll();
  }
}
