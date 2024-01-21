import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { ConfigModule } from '@nestjs/config';
import { ApolloServerModule } from './graphql/apolloServer.module';
import { PostgresDBModule } from './dal/postgresDb.module';
import { MongooseDBModule } from './dal/mongooseDb.module';
import { RedisModule } from './redis/redis.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// import 'dotenv/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MongooseDBModule,
    PostgresDBModule,
    RedisModule,
    ApolloServerModule,
    GamesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
