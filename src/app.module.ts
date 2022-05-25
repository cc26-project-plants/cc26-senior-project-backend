import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { plantsController } from './plants/plants.controller';
import { UserController } from "./user/user.controller"

@Module({
  imports: [TypeOrmModule],
  controllers: [AppController, UserController, plantsController ],
  providers: [AppService],
})
export class AppModule {}
