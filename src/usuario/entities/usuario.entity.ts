import { Column, Entity } from "typeorm";
import { EntidadeAuditavel } from "../../utils/entidade-auditavel.util";
import { TamanhoCamisa } from "src/enums/tamanho-camisa.enum";

@Entity()
export class Usuario extends EntidadeAuditavel {
    @Column({ nullable: false, type: 'text' })
    nome: string;

    @Column({ nullable: false, unique: true, type: "varchar", length: 20 })
    telefoneUsuario: string;

    @Column({ nullable: false, unique: true, type: "varchar", length: 20 })
    telefoneResponsavel: string;

    @Column({ nullable: true, type: "text" })
    nomeGrupo: string;

    @Column({ nullable: false, type: "text" })
    nomeResponsavel: string;

    @Column({ nullable: false, type: "varchar", length: 30 })
    parentescoResponsavel: string;

    @Column({ nullable: false, type: "enum", enum: TamanhoCamisa })
    tamanhoCamisa: TamanhoCamisa;

    @Column({ nullable: true, type: "text", default: "Não" })
    temMedicamento: string

    @Column({ nullable: true, type: "text", default: "Não" })
    temAlergia: string;

    @Column({ nullable: true, type: "text", default: "Não" })
    temMedicamentoControlado: string;
}