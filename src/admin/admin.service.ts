import { Injectable } from "@nestjs/common";
import { Admin } from "./entities/admin.entity";
import { Repository } from "typeorm";
import { CreateAdminDTO } from "./dto/create-admin.dto";
import { encodePassword } from "src/utils/bycrpt";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AdminService{
    constructor (
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>
    ){}

    async createUser(Admin: CreateAdminDTO): Promise<Admin> {
        const passwordHash = await encodePassword(Admin.password);
        const newAdmin = this.adminRepository.create({...Admin, password: passwordHash});
        return await this.adminRepository.save(newAdmin);
    }
}