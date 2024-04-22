import { Body, Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    async create(@Body(){name, cpf, email, password}){
        return {
            name, 
            cpf,
            email, 
            password
        }
    }
}