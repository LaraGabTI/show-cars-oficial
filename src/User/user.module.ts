import { Module } from "@nestjs/common"; //chama o module, porque vai criar o decoreito
import { UserController } from "./user.controller";

@Module({ //decoreito é funcao precisa do parentese, pede pelo menos um argumento
    imports: [UserModule], //tem o modulo pai, o UserModule, e o pai dele é o appModule
    controllers: [UserController], //add o controle o user aqui
    providers: [],
    exports: [],
}) 
export class UserModule { // logo depois vem minha classe 

}