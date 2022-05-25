import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlantsController } from './plants/plants.controller';
import { PlantsService } from './plants/plants.service';
import { UserController } from "./user/user.controller"
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule],
  controllers: [AppController, UserController, PlantsController],
  providers: [AppService, UserService, PlantsService],
})
export class AppModule { }
