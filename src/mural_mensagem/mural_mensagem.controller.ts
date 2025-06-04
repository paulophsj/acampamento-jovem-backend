import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { MuralMensagemService } from "./mural_mensagem.service";
import { MuralMensagem } from "./entities/mural_mensagem.entity";
import { CreateMensagemDTO } from "./dto/create-mensagem.dto";
import { AuthGuard } from "src/auth/auth.guards";
import { UpdateMensagemDTO } from "./dto/update-mensagem.dto";

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
    @UseGuards(AuthGuard)
    @Patch(':id')
    async atualizarMensagem(@Param('id') id: number, @Body() novaMensagem: UpdateMensagemDTO): Promise<MuralMensagem>{
        return this.muralMensagemService.atualizarMensagemForum(id, novaMensagem)
    }
}