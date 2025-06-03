import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { MuralMensagemService } from "./mural_mensagem.service";
import { MuralMensagem } from "./entities/mural_mensagem.entity";
import { CreateMensagemDTO } from "./dto/create-mensagem.dto";
import { AuthGuard } from "src/auth/auth.guards";

@Controller('mural_mensagem')
export class MuralMensagemController {
    constructor(
        private readonly muralMensagemService: MuralMensagemService
    ) { }

    @UseGuards(AuthGuard)
    @Get('/')
    async getAllMessages(): Promise<MuralMensagem[]> {
        return await this.muralMensagemService.getAllMessages()
    }
    @UseGuards(AuthGuard)
    @Get('buscar')
    async buscarMensagem(
        @Query('id') id?: number,
        @Query('nome') nome?: string,
        @Query('prefixo') prefixo?: string,
        @Query('nomeUsuario') nomeUsuario?: string
    ) {
        return this.muralMensagemService.buscarMensagem({ id, nome, prefixo, nomeUsuario });
    }
    @Post('/')
    async salvarMensagem(@Body() mensagem: CreateMensagemDTO): Promise<MuralMensagem>{
        return this.muralMensagemService.salvarMensagem(mensagem)
    }
}