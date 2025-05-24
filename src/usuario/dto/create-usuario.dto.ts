import { Transform } from "class-transformer";
import { IsEmpty, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Matches, MaxLength } from "class-validator";
import { TamanhoCamisa } from "src/enums/tamanho-camisa.enum";

export class CreateUsuarioDTO {
    @IsNotEmpty({ message: "O nome é obrigatório." })
    @IsString({ message: "O nome deve ser uma string." })
    readonly nome: string;

    @IsNotEmpty({ message: "O telefone do usuário é obrigatório." })
    @Matches(/^\(\d{2}\) 9 \d{4}-\d{4}$/, {
        message: "O telefone deve estar no formato (99) 9 9999-999.",
    })
    readonly telefoneUsuario: string;

    @IsNotEmpty({ message: "O telefone do responsável é obrigatório." })
    @Matches(/^\(\d{2}\) 9 \d{4}-\d{4}$/, {
        message: "O telefone deve estar no formato (99) 9 9999-9999.",
    })
    readonly telefoneResponsavel: string;

    @IsNotEmpty({ message: "O nome do responsável é obrigatório." })
    @IsString({ message: "O nome do responsável deve ser uma string." })
    readonly nomeResponsavel: string;

    @IsNotEmpty({ message: "O nome do responsável é obrigatório." })
    @IsString({ message: "O parentesco do responsável deve ser uma string." })
    @MaxLength(30, { message: "O parentesco do responsável deve ter no máximo 30 caracteres." })
    readonly parentescoResponsavel: string;

    @IsNotEmpty({ message: "O tamanho da camisa é obrigatório." })
    @IsEnum(TamanhoCamisa, { message: "O tamanho da camisa deve ser um dos seguintes valores: PP, P, M, G, GG ou XG." })
    readonly tamanhoCamisa: TamanhoCamisa;

    @IsString({ message: "O campo 'temMedicamento' deve ser uma string." })
    @MaxLength(200, { message: "O campo 'temMedicamento' deve ter no máximo 100 caracteres." })
    @IsOptional()
    readonly temMedicamento: string

    @IsString({ message: "O campo 'temAlergia' deve ser uma string." })
    @MaxLength(200, { message: "O campo 'temAlergia' deve ter no máximo 200 caracteres." })
    @IsOptional()
    readonly temAlergia: string;

    @IsString({ message: "O campo 'temMedicamentoControlado' deve ser uma string." })
    @MaxLength(200, { message: "O campo 'temMedicamentoControlado' deve ter no máximo 200 caracteres." })
    @IsOptional()
    readonly temMedicamentoControlado: string;

    @IsString({ message: "O nome do grupo deve ser uma string." })
    @IsOptional()
    readonly nomeGrupo: string;
}