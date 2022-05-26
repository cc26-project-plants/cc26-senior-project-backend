import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { PlantsController } from './plants/plants.controller';
import { PlantsService } from './plants/plants.service';
import { UserController } from "./user/user.controller"
import { UserService } from './user/user.service';
import { PlantStatsService } from './plant-stats/plant-stats.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController, UserController, PlantsController],
  providers: [AppService, UserService, PlantsService, PlantStatsService],
})
export class AppModule { }
