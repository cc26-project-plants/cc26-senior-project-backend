import { Controller, Get } from "@nestjs/common";

@Controller('user')
class UserController {
    @Get()
    getUser() {
        return "Get User"
    }

}