import { Injectable } from '@nestjs/common';
import { PlantStats } from './plant-stats.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlantStatsService {
  constructor(
    @InjectRepository(PlantStats)
    private readonly plantstatsRepository: Repository<PlantStats>,
  ) {}
}
