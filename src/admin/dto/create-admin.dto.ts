import { IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDTO {
    @IsString({ message: "O nome deve ser um texto." })
    @IsNotEmpty({ message: "O nome é obrigatório." })
    nome: string;
    @IsString({ message: "A senha deve ser um texto." })
    @IsNotEmpty({ message: "A senha é obrigatória." })
    password: string;
}