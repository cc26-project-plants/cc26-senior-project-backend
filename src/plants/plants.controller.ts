import { Controller, Get, Post, Put } from "@nestjs/common";


@Controller('plants')
export class PlantsController {

    @Get("/:plantId")
    getPlantById() {
        return "Plant by Id";
    }

    @Post()
    createNewPlant() {
        return "Create New Plant";
    }

    @Put('/:plantId')
    updatePlant() {
        return "Update plant by id";
    }
}
