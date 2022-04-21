import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
            synchronize: process.env.NODE_ENV === 'development',
            keepConnectionAlive: true,
            autoLoadEntities: true,
        };
    }
}
