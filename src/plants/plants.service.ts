import { Injectable } from '@nestjs/common';
import { Plants } from './plants.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plants)
    private readonly plantsRepository: Repository<Plants>,
  ) {}
}
