import { Module } from "@nestjs/common";
import { MuralMensagem } from "./entities/mural_mensagem.entity";
import { MuralMensagemService } from "./mural_mensagem.service";
import { MuralMensagemController } from "./mural_mensagem.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([MuralMensagem])],
    providers: [MuralMensagemService],
    controllers: [MuralMensagemController]
})
export class MuralMensagemModule{}