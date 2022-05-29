import { Injectable } from '@nestjs/common';
import { PlantStats } from './plant-stats.entity';
import { Repository, InsertResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { time } from 'console';

@Injectable()
export class PlantStatsService {
  constructor(
    @InjectRepository(PlantStats)
    private readonly plantstatsRepository: Repository<PlantStats>,
  ) {}

  async getStatAll() {
    return await this.plantstatsRepository.find();
  }

  async getStatLatest() {
    const alldata = await this.plantstatsRepository.find();
    const latest = alldata.slice(0, 12); //the latest ~ 12h ago
    return latest;
  }

  // async getStatbyId() {
  //     return await this.plantstatsRepository.findOne({plant.id});
  //   }

  //   async getStatsByPlantId(plantId: number) {
  //     return await this.plantstatsRepository.findOne({ plantId });
  //   }

  async updateStas(posted: any): Promise<InsertResult> {
    const data = new PlantStats();
    data.lightLevel = posted.lightLevel;
    data.soilWaterLevel = posted.soilWaterLevel;
    data.humidityLevel = posted.humidityLevel;
    data.temperature = posted.temperature;
    // data.time = time;
    return await this.plantstatsRepository.insert(data);
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
