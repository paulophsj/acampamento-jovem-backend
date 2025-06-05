import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateMensagemDTO {
    @IsNotEmpty({ message: "A mensagem é obrigatória." })
    @IsString({ message: "O tipo deve ser texto." })
    readonly mensagem: string

    @IsNotEmpty({ message: "O nome é obrigatório." })
    @IsString({ message: "O nome deve ser um texto." })
    @Length(1, 50, { message: "O campo nome ter no mínimo 1 caractere e no máximo 50" })
    readonly nome: string;

    @Exclude()
    readonly isActive: never;
}