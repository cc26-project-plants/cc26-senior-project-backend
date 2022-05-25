import { Controller, Get, Post, Put } from "@nestjs/common";


//Handles any HTTP requests involving user


@Controller('user')
export class UserController {
    @Get()
    getUsers() {
        return "Get User Test"; // Don't actually give this data
    }

    @Get('/:userId')
    getStudentById() {
        return "Get Student by Id"; // single user
    }

    @Post()
    createUser() {
        return "Create User"; //should create User and send data to database
    }

    @Put('/:userId')
    updateUser() {
        return "Updates User by Id"; //should allow user info to be updated
    }

}