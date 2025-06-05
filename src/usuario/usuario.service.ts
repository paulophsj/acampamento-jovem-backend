import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUsuarioDTO } from "src/usuario/dto/create-usuario.dto";
import { EntityNotFoundError, Repository } from "typeorm";
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
    async getAllUsers(): Promise<Usuario[]> {
        const users = await this.usuarioRepository.find()
        if (!users) {
            throw new NotFoundException("Nenhum usuário está cadastrado.")
        }
        return users

    }
    async updateUser(id: number, usuario: CreateUsuarioDTO): Promise<Usuario> {
        const existingUser = await this.usuarioRepository.findOneBy({ id });
        if (!existingUser) {
            throw new NotFoundException("Nenhum usuário com o id relacionado foi encontrado.");
        }

        await this.usuarioRepository.update(id, { ...usuario });

        return await this.usuarioRepository.findOneByOrFail({ id });
    }
    async findOneUser(id: number): Promise<Usuario> {
        try {
            return await this.usuarioRepository.findOneByOrFail({ id });
        } catch (error) {
            throw new NotFoundException(`Usuário com id ${id} não foi encontrado.`);
        }
    }
    async deleteUser(id: number):Promise<void>{
        const findUser = await this.findOneUser(id)
        await this.usuarioRepository.remove(findUser)
    }
}