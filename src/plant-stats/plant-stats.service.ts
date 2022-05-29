import { Injectable } from '@nestjs/common';
import { PlantStats } from './plant-stats.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { time } from 'console';

@Injectable()
export class PlantStatsService {
  constructor(
    @InjectRepository(PlantStats)
    private readonly plantstatsRepository: Repository<PlantStats>,
  ) {}

  getStatAll() {
    return this.plantstatsRepository.find();
  }

  updateStas(
    lightLevel: number,
    soilWaterLevel: number,
    humidityLevel: number,
    temperature: number,
    time: Date,
  ) {
    const data = new PlantStats();
    data.lightLevel = lightLevel;
    data.soilWaterLevel = soilWaterLevel;
    data.humidityLevel = humidityLevel;
    data.temperature = temperature;
    data.time = time;
    // return this.plantstatsRepository(data)
  }
}

// Column     |            Type             | Collation | Nullable | Default
// ----------------+-----------------------------+-----------+----------+---------
//  id             | integer                     |           | not null |
//  lightLevel     | double precision            |           | not null |
//  soilWaterLevel | double precision            |           | not null |
//  humidityLevel  | double precision            |           | not null |
//  temperature    | integer                     |           | not null |
//  time           | timestamp without time zone |           | not null |
