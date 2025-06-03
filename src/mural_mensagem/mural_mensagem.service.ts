import { Injectable, NotFoundException } from "@nestjs/common";
import { MuralMensagem } from "./entities/mural_mensagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { CreateMensagemDTO } from "./dto/create-mensagem.dto";

@Injectable()
export class MuralMensagemService {
    constructor(
        @InjectRepository(MuralMensagem)
        private readonly muralMesagemRpository: Repository<MuralMensagem>
    ) { }

    async getAllMessages(): Promise<MuralMensagem[]> {
        const getAllMessages = await this.muralMesagemRpository.find()
        if (!getAllMessages) {
            throw new NotFoundException('Não foi possível localizar nenhuma mensagem')
        }
        return getAllMessages
    }
    async buscarMensagem(filtros: { id?: number; nome?: string, prefixo?: string, nomeUsuario?: string }): Promise<MuralMensagem> {
        const where: any = {};
        if (filtros.id) where.id = filtros.id;
        if (filtros.nome) where.nome = filtros.nome;
        if (filtros.prefixo) where.mensagem = Like(`${filtros.prefixo}%`)
        if (filtros.nomeUsuario) where.nome = Like(`${filtros.nomeUsuario}%`)


        try {
            const mensagem = await this.muralMesagemRpository.findOneByOrFail(where);
            return mensagem;
        } catch (err) {
            throw new NotFoundException('Mensagem não encontrada com os critérios fornecidos.');
        }
    }
    async salvarMensagem(createMensagemDTO: CreateMensagemDTO): Promise<MuralMensagem>{
        const create = this.muralMesagemRpository.create(createMensagemDTO)
        return this.muralMesagemRpository.save(create)
    }
    async mensagensAosUsuarios(): Promise<MuralMensagem[]>{
        const mensagens = await this.muralMesagemRpository.find({where: {isActive: true}})
        if(!mensagens){
            throw new NotFoundException("Nenhuma mensagem a ser exibida")
        }
        return mensagens
    }
}