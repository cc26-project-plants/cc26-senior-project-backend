import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";

@Controller('plant-stats')
export class PlantStatsController{




    @Post()
    createUser( @Body() body) {
        console.log(body);
        return "Create Stats"; //should create stats and send data to database
    }
}