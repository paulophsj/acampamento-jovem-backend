
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST as any,
      port: process.env.DB_PORT as any,
      username: process.env.DB_USER as any,
      password: process.env.DB_PASSWORD as any,
      database: process.env.DB_TYPE as any,
      entities: [Usuario],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsuarioModule,
    AdminModule
  ],
})
export class AppModule {}
