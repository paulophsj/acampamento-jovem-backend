import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { LoginAminDTO } from "src/admin/dto/login-admin.dto";
import { Admin } from "src/admin/entities/admin.entity";
import { comparePassword } from "src/utils/bycrpt";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>,
        private jwtService: JwtService
    ) { }
    async loginAdmin(adminDto: LoginAminDTO): Promise<{ access_token: string }>{
        const findAdmin = await this.adminRepository.findOneBy({ email: adminDto.email })
        if(!findAdmin){
            throw new NotFoundException(`Email: ${adminDto.email} não localizado`)
        }
        const checkPassword = await comparePassword(adminDto.password, findAdmin.password)
        if(!checkPassword){
            throw new UnauthorizedException("Credenciais inválidas")
        }
        const payload = { sub: findAdmin.id, email: findAdmin.email };
        const token = await this.jwtService.signAsync(payload);

        return { access_token: token };
    }
}