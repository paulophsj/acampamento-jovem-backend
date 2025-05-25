import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUsuarioDTO } from "src/usuario/dto/create-usuario.dto";
import { Repository } from "typeorm";
import { Usuario } from "./entities/usuario.entity";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ) { }

    async createUsuario(createUsuarioDTO: CreateUsuarioDTO): Promise<Usuario> {
        const { telefoneUsuario, telefoneResponsavel } = createUsuarioDTO;
        const usuarioExistente = await this.usuarioRepository.findOneBy({
            telefoneUsuario,
        });

        if (usuarioExistente) {
            throw new ConflictException(
                `O telefone do usuário '${telefoneUsuario}' já está cadastrado.`,
            );
        }
        const responsavelExistente = await this.usuarioRepository.findOneBy({
            telefoneResponsavel,
        });

        if (responsavelExistente) {
            throw new ConflictException(
                `O telefone do responsável '${telefoneResponsavel}' já está cadastrado.`,
            );
        }
        const novoUsuario = this.usuarioRepository.create(createUsuarioDTO);
        return await this.usuarioRepository.save(novoUsuario);
    }
}