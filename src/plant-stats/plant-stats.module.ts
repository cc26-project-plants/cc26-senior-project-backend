import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantStatsService } from './plant-stats.service';
import { PlantStatsController } from './plant-stats.controller';
import { PlantStats } from './plant-stats.entity';

@Module({
  controllers: [PlantStatsController],
  imports: [TypeOrmModule.forFeature([PlantStats])],
  providers: [PlantStatsService],
})
export class PlantStatsModule {}
