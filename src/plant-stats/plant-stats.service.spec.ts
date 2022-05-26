import { Test, TestingModule } from '@nestjs/testing';
import { PlantStatsService } from './plant-stats.service';

describe('PlantStatsService', () => {
  let service: PlantStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantStatsService],
    }).compile();

    service = module.get<PlantStatsService>(PlantStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
