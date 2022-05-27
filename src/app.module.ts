import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
// import { PlantsController } from './plants/plants.controller';
// import { PlantsService } from './plants/plants.service';
// import { PlantStatsService } from './plant-stats/plant-stats.service';
import { UserModule } from './user/user.module';
import { PlantsModule } from './plants/plants.module';
import { PlantStatsModule } from './plant-stats/plant-stats.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    PlantsModule,
    PlantStatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
