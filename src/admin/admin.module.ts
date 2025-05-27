import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateAdminDTO } from "./dto/create-admin.dto";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { Admin } from "./entities/admin.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Admin, CreateAdminDTO])],
    controllers: [AdminController],
    providers: [AdminService],
})
export class AdminModule {}