import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { PlantStatsService } from './plant-stats.service';
import { CreatePlantStatsDto } from './create-plant-stats-dto';

@Controller('plant-stats')
export class PlantStatsController {
  constructor(private readonly service: PlantStatsService) {}

  @Get('/')
  getStatAll() {
    return this.service.getStatAll();
  }

  @Get('/latest')
  getStatLatest() {
    return this.service.getStatLatest();
  }

  // @Get(':id') //double check route
  // getStatsByPlantId(@Param() params): any {
  //   console.log(params.id);
  //   return this.service.getStatsByPlantId(params.id); // try to get all stats for that plant
  // }

  // @Get('/:plantStatsId')
  // getStatbyId() {
  //   return 'Get stat by id';
  // }

  @Post()
  async createStats(@Body() body: CreatePlantStatsDto) {
    console.log('postedBody', body); // check the struncture of "request body"
    return await this.service.updateStas(body);
  }

  @Put('/:plantStatsId')
  updateStats() {
    return 'Updates Stats at id';
  }
}
