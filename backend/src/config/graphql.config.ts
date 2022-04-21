import { Injectable } from '@nestjs/common';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { GqlOptionsFactory } from '@nestjs/graphql';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: true,
      cors: {
        credentials: true,
        origin: true,
      },
    };
  }
}
