import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
  } from '@nestjs/typeorm';
  import { ConfigService, ConfigModule } from '@nestjs/config';
  import { join } from 'path'; 
  
  const AdminUser = require('nestjs-admin').AdminUserEntity;
  export default class TypeOrmConfig {
    static getOrmConfig(configServise: ConfigService): TypeOrmModuleOptions {
      return {
        type: 'mysql', 
        port: 3306,
        username: 'redwan',
        password: 'redwan1999',
        database: 'invoice',
        entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
        migrations: ['dist/migrations/*{.ts,.js}'],
        subscribers: ['dist/subscribers/**/*{.js,.ts}'],
        migrationsTableName: 'migrations_typeorm',
        migrationsRun: true,
        synchronize: true
      };
    }
  }
  
  export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (
      configServise: ConfigService,
    ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configServise),
    inject: [ConfigService],
  };
  