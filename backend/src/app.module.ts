import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

import { AuthModule } from './modules/auth/auth.module';

import { TypeOrmConfigService } from './config/database.config';
import { ConfigModule } from '@nestjs/config/dist';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
