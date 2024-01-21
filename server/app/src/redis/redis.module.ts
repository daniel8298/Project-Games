import { CacheModule, CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';
import { magenta } from 'chalk';

const { REDIS_HOST, REDIS_PORT } = process.env;
console.log(REDIS_HOST);

const RedisOptions: CacheModuleAsyncOptions = {
  isGlobal: true,
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const store = await redisStore({
      ttl: 5300,
      socket: {
        host: configService.get<string>(`${REDIS_HOST}`),
        port: configService.get<number>(`${REDIS_PORT}`)!,
      },
    });
    console.log(magenta('connected to redis! 🥳'));

    return {
      store: () => store,
    };
  },
  inject: [ConfigService],
};

@Module({
  imports: [CacheModule.registerAsync(RedisOptions)],
})
export class RedisModule {}
