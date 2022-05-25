import { Controller, Get, Post, Put } from "@nestjs/common";

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
        return "Create User";
    }

    @Put('/:userId')
    updateUser() {
        return "Updates User by Id";
    }
    
}