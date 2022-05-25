import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from "./user/user.controller"

@Module({
  imports: [TypeOrmModule],
  controllers: [AppController, UserController ],
  providers: [AppService],
})
export class AppModule {}
