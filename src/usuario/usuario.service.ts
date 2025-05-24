import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUsuarioDTO } from "src/usuario/dto/create-usuario.dto";
import { Repository } from "typeorm";
import { Usuario } from "./entities/usuario.entity";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ){}

    async createUsuario(createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario> {
        const novoUsuario = this.usuarioRepository.create(createUsuarioDTO);
        return await this.usuarioRepository.save(novoUsuario);
    }
}