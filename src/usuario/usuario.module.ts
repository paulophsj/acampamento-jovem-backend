import { Module } from "@nestjs/common";
import { UsuarioController } from "src/usuario/usuario.controller";
import { UsuarioService } from "./usuario.service";
import { CreateUsuarioDTO } from "src/usuario/dto/create-usuario.dto";
import { Usuario } from "./entities/usuario.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario, CreateUsuarioDTO])],
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule {}