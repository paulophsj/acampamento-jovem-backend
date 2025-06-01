import { Body, Controller, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDTO } from "./dto/create-admin.dto";

@Controller("admin")
export class AdminController {
    constructor(
        private readonly adminService: AdminService
    ){}

    @Post("create")
    async createUser(@Body() AdminDTO: CreateAdminDTO) {
        return await this.adminService.createAdmin(AdminDTO);
    }
}