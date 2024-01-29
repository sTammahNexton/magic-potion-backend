import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  findAll() {
    return this.ingredientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ingredientsService.findOne(+id);
  }

  @Patch(':id')
  async updateQuantity(@Param('id') id: number, @Body('quantity') quantity: number) {
    return await this.ingredientsService.updateQuantity(+id, quantity);
  }
}
