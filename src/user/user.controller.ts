import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController{
    constructor(private readonly userService:UserService){}
    @Get()
    getUsers(){
        const users = this.userService.getAll()
        return users

    }
    @Post()
    async createUser(@Body() createUser:CreateUserDTO){
        const user = await this.userService.create(createUser);
        return {
            user
        }
    }
}