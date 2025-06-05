import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UsuarioService } from "src/usuario/usuario.service";
import { CreateUsuarioDTO } from "./dto/create-usuario.dto";
import { AuthGuard } from "src/auth/auth.guards";
import { Usuario } from "./entities/usuario.entity";

@Controller("usuario")
export class UsuarioController {
    constructor(
        private readonly usuarioService: UsuarioService
    ){}

    @Post("/create")
    async createUsuario(@Body() createUsuarioDTO: CreateUsuarioDTO): Promise<CreateUsuarioDTO> {
        return await this.usuarioService.createUsuario(createUsuarioDTO);
    }
    @UseGuards(AuthGuard)
    @Get("/")
    async findAllUsers(): Promise<Usuario[]>{
        return await this.usuarioService.getAllUsers()
    }
    @UseGuards(AuthGuard)
    @Get(":id")
    async findOneUser(@Param("id") id: number): Promise<Usuario>{
        return await this.usuarioService.findOneUser(id)
    }
    @UseGuards(AuthGuard)
    @Put(":id")
    async updateUser(@Param("id") id: number, @Body() usuario: CreateUsuarioDTO): Promise<Usuario>{
        return await this.usuarioService.updateUser(id, usuario)
    }
    @UseGuards(AuthGuard)
    @Delete(":id")
    async deleteUser(@Param("id") id:number): Promise<void>{
        return await this.usuarioService.deleteUser(id)
    }
}