import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';
import { Plants } from './plants.entity';

@Module({
  controllers: [PlantsController],
  imports: [TypeOrmModule.forFeature([Plants])],
  providers: [PlantsService],
})
export class PlantsModule {}
