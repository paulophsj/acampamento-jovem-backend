import { IsEnum, IsNotEmpty, IsOptional, IsString, Matches, MaxLength } from "class-validator";
import { TamanhoCamisa } from "src/enums/tamanho-camisa.enum";

export class CreateUsuarioDTO {
    @IsNotEmpty({ message: "O nome é obrigatório." })
    @IsString({ message: "O nome deve ser um texto." })
    @Matches(/^(?!^\d+$).*$/, {
        message: "O campo 'nome' não pode ser apenas números.",
    })
    readonly nome: string;

    @IsNotEmpty({ message: "O telefone do usuário é obrigatório." })
    @Matches(/^\(\d{2}\) 9 \d{4}-\d{4}$/, {
        message: "O telefone deve estar no formato (99) 9 9999-9999.",
    })
    readonly telefoneUsuario: string;

    @IsNotEmpty({ message: "O telefone do responsável é obrigatório." })
    @Matches(/^\(\d{2}\) 9 \d{4}-\d{4}$/, {
        message: "O telefone deve estar no formato (99) 9 9999-9999.",
    })
    readonly telefoneResponsavel: string;

    @IsNotEmpty({ message: "O nome do responsável é obrigatório." })
    @IsString({ message: "O nome do responsável deve ser um texto." })
    @Matches(/^(?!^\d+$).*$/, {
        message: "O campo 'nomeResponsavel' não pode ser apenas números.",
    })
    readonly nomeResponsavel: string;

    @IsNotEmpty({ message: "O nome do responsável é obrigatório." })
    @IsString({ message: "O parentesco do responsável deve ser um texto." })
    @MaxLength(30, { message: "O parentesco do responsável deve ter no máximo 30 caracteres." })
    @Matches(/^(?!^\d+$).*$/, {
        message: "O campo 'parentescoResponsavel' não pode ser apenas números.",
    })
    readonly parentescoResponsavel: string;

    @IsNotEmpty({ message: "O tamanho da camisa é obrigatório." })
    @IsEnum(TamanhoCamisa, { message: "O tamanho da camisa deve ser um dos seguintes valores: PP, P, M, G, GG ou XG." })
    readonly tamanhoCamisa: TamanhoCamisa;

    @IsString({ message: "O campo 'temMedicamento' deve ser um texto." })
    @MaxLength(200, { message: "O campo 'temMedicamento' deve ter no máximo 200 caracteres." })
    @IsOptional()
    @Matches(/^(?!^\d+$).*$/, {
        message: "O campo 'temMedicamento' não pode ser apenas números.",
    })
    readonly temMedicamento: string

    @IsString({ message: "O campo 'temAlergia' deve ser um texto." })
    @MaxLength(200, { message: "O campo 'temAlergia' deve ter no máximo 200 caracteres." })
    @IsOptional()
    @Matches(/^(?!^\d+$).*$/, {
        message: "O campo 'temAlergia' não pode ser apenas números.",
    })
    readonly temAlergia: string;

    @IsString({ message: "O campo 'temMedicamentoControlado' deve ser um texto." })
    @MaxLength(200, { message: "O campo 'temMedicamentoControlado' deve ter no máximo 200 caracteres." })
    @IsOptional()
    @Matches(/^(?!^\d+$).*$/, {
        message: "O campo 'temMedicamentoControlado' não pode ser apenas números.",
    })
    readonly temMedicamentoControlado: string;

    @IsString({ message: "O nome do grupo deve ser um texto." })
    @IsOptional()
    @Matches(/^(?!^\d+$).*$/, {
        message: "O campo 'nomeGrupo' não pode ser apenas números.",
    })
    readonly nomeGrupo: string;

    @IsOptional()
    @IsString({ message: "O campo 'Rede' deve ser tipo texto" })
    readonly rede: string
}