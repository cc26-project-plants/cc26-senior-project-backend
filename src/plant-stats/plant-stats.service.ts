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
    return await this.plantstatsRepository.insert(data);
  }
}

// projectplant=# \d plant_stats
//                             Table "public.plant_stats"
//      Column     |              Type              | Collation | Nullable | Default
// ----------------+--------------------------------+-----------+----------+---------
//  id             | integer                        |           | not null |
//  lightLevel     | double precision               |           | not null |
//  soilWaterLevel | double precision               |           | not null |
//  humidityLevel  | double precision               |           | not null |
//  temperature    | integer                        |           | not null |
//  created_at     | timestamp(0) without time zone |           | not null | now()
//  updated_at     | timestamp(0) without time zone |           | not null | now()
// Indexes:
//     "PK_6f9498f18f9fb0329c839bf8b72" PRIMARY KEY, btree (id)
