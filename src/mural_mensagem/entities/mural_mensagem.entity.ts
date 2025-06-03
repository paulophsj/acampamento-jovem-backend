import { EntidadeAuditavel } from "src/utils/entidade-auditavel.util";
import { Column, Entity } from "typeorm";

@Entity('mensagem')
export class MuralMensagem extends EntidadeAuditavel{
    @Column({type: 'text'})
    mensagem: string

    @Column({type: 'text'})
    nome: string

    @Column({type: "boolean", default: false})
    isActive: boolean
}