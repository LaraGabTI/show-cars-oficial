import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

//nosso garçom, recebe nossas response
//configura todas as nossas rotas
@Controller('users') //tem que ter parentese, é funcao //rota sempre no plural
export class UserController { // tem que ter uma classe depois do decoreito

    @Post() //cria
    async create(@Body(){name, cpf, email, password, }){ // recebe o que o post manda p gente
        return {
            name, 
            cpf,
            email, 
            password
        }
    }

    @Get() //pegar e mostrar
    async read(){
        return { users: []}
    }

    @Get(':id') //mostra apenas um
    async readOnly(@Param() param){
        return {user: {}, param}
    }

    @Put(':id') //atualiza(id) e tem que passar todo mundo, precisa receber informação por isso o Body
    async update(@Body() body, @Param() param){
        return{ // como n tem bd, a gente só devolve os metodos p la
            method: 'PUT',
            body,
            param
        }
    }

    @Patch(':id') //att só uma parte do elemento
    async updatePartial(@Body() body, @Param() param){
        return{
            method: 'PATCH',
            body,
            param
        }
    }

    @Delete(':id') //deleta todo o contato, mas não todos os contatos
    async delete(@Param() param){
        return { param }

    }
}