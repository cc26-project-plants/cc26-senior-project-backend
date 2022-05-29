import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { PlantStatsService } from './plant-stats.service';

@Controller('plant-stats')
export class PlantStatsController {
  constructor(private readonly service: PlantStatsService) {}

  @Get('/plantId') //double check route
  getStatsByPlantId() {
    return 'Stats by Plant Id'; // try to get all stats for that plant
  }

  @Get('/:plantStatsId')
  getStatbyId() {
    return 'Get stat by id';
  }

  @Get('/')
  getStatAll() {
    return this.service.getStatAll();
  }

  @Post()
  createStats(@Body() body) {
    console.log(body);
    return 'Create Stats'; //should create stats and send data to database
  }

  @Put('/:plantStatsId')
  updateStats() {
    return 'Updates Stats at id';
  }
}
