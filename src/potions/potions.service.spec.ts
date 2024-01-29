import { Test, TestingModule } from '@nestjs/testing';
import { PotionsService } from './potions.service';

describe('PotionsService', () => {
  let service: PotionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotionsService],
    }).compile();

    service = module.get<PotionsService>(PotionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
