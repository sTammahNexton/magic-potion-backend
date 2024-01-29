import { Test, TestingModule } from '@nestjs/testing';
import { PotionsController } from './potions.controller';

describe('PotionsController', () => {
  let controller: PotionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotionsController],
    }).compile();

    controller = module.get<PotionsController>(PotionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
