import { Controller, Get, Post, Put } from '@nestjs/common';
import { PlantsService } from './plants.service';

//Handles plant related HTTP requests

@Controller('plants')
export class PlantsController {
  constructor(private readonly service: PlantsService) {}
  @Get('/:plantId')
  getPlantById() {
    return 'Plant by Id';
  }

  @Post()
  createNewPlant() {
    return 'Create New Plant';
  }

  @Put('/:plantId')
  updatePlant() {
    return 'Update plant by id';
  }
}
