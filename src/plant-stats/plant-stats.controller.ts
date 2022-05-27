import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('plant-stats')
export class PlantStatsController {
  @Get('/plantId') //double check route
  getStatsByPlantId() {
    return 'Stats by Plant Id'; // try to get all stats for that plant
  }

  @Get('/:plantStatsId')
  getStatbyId() {
    return 'Get stat by id';
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
