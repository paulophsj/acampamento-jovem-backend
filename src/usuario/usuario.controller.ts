import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "src/usuario/usuario.service";
import { CreateUsuarioDTO } from "./dto/create-usuario.dto";

@Controller("usuario")
export class UsuarioController {
    constructor(
        private readonly usuarioService: UsuarioService
    ){}

    @Post("/create")
    async createUsuario(@Body() createUsuarioDTO: CreateUsuarioDTO): Promise<CreateUsuarioDTO> {
        return await this.usuarioService.createUsuario(createUsuarioDTO);
    }
}