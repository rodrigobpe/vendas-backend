import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    private readonly users = []

    async create({name,email,password}){
        const user = this.users.push(
            {
                id: Math.floor(Math.random() * 100),
                name,
                email,
                password
            }
        )
        return user
    }

    async getAll(){
        return this.users
    }
}