import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { magentaBright } from 'chalk';

@Module({
  imports: [
    GraphQLModule.forRoot({
      subscriptions: {
        'graphql-ws': true,
      },

      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class ApolloServerModule {
  constructor() {
    console.log(magentaBright('connected to ApolloServer! 🥳'));
  }
}
