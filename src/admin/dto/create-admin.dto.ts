import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDTO {
    @IsString({ message: "O nome deve ser um texto." })
    @IsNotEmpty({ message: "O nome é obrigatório." })
    readonly nome: string;
    @IsString({ message: "A senha deve ser um texto." })
    @IsNotEmpty({ message: "A senha é obrigatória." })
    readonly password: string;
    @IsNotEmpty({message: "O email deve ser obrigatório"})
    @IsEmail({}, {message: "Formato inválido"})
    readonly email: string
}