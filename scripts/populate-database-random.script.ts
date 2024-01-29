// populate-database-random.script.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { IngredientsService } from '../src/ingredients/ingredients.service';
import * as faker from 'faker';

async function run() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const ingredientsService = app.get(IngredientsService);

  const ingredientsData = [
    'Argent',
    'Bave de lama',
    'Épine de hérisson',
    'Plume de griffon',
    'Hélium liquide',
    'Poil de yéti',
    'Or',
    'Azote liquide',
    'Queue d\'écureuil',
    'Crin de licorne',
    'Jus de Horglup',
    'Noix de coco',
    'Yttrium',
    'Mandragore',
  ];

  for (const ingredientName of ingredientsData) {
    const randomQuantity = faker.random.number({ min: 1, max: 100 });
    await ingredientsService.create({ name: ingredientName, quantity: randomQuantity });
  }

  console.log('Database populated with ingredients and random quantities.');
  await app.close();
}

run();
