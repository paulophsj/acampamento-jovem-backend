import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginAminDTO {
    @IsEmail({}, { message: "Formato inválido" })
    @IsNotEmpty({ message: "O email deve ser obrigatório" })
    readonly email: string

    @IsString({ message: "A senha deve ser um texto." })
    @IsNotEmpty({ message: "A senha é obrigatória." })
    readonly password: string;
}