import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

//Handles any HTTP requests involving user

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return 'Get User Test'; // Don't actually give this data
  }

  @Get('/:userId')
  getStudentById(@Param() params: { userId: number }) {
    console.log(params);
    return 'Get Student by Id'; // single user
  }

  @Post()
  createUser(@Body() body) {
    console.log(body);
    return 'Create User'; //should create User and send data to database
  }

  @Put('/:userId')
  updateUser(@Param('userId') params: { userId: number }, @Body() body) {
    console.log(params);
    return 'Updates User by Id'; //should allow user info to be updated
  }
}
