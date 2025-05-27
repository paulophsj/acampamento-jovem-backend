import { EntidadeAuditavel } from "src/utils/entidade-auditavel.util";
import { Column, Entity } from "typeorm";

@Entity("admin")
export class Admin extends EntidadeAuditavel {
    @Column({type: "text"})
    nome: string;
    @Column({ type: "text"})
    password: string;
}