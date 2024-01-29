import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { IngredientsModule } from './ingredients/ingredient.module';
import { PotionsModule } from './potions/potions.module';

@Module({
  imports: [DataBaseModule, ConfigModule.forRoot(), IngredientsModule, PotionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
