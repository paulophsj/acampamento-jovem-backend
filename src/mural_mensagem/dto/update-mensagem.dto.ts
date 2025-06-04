import { IsBoolean, IsNotEmpty } from "class-validator";

export class UpdateMensagemDTO {
    @IsNotEmpty({message: "O campo isActive deve ser obrigatório"})
    @IsBoolean({message: "O tipo deve ser boolean"})
    readonly isActive: boolean
}