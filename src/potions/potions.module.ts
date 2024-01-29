// src/potions/potions.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Potion } from './potion.entity';
import { PotionsController } from './potions.controller';
import { PotionsService } from './potions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Potion])],
  controllers: [PotionsController],
  providers: [PotionsService],
})
export class PotionsModule {}
