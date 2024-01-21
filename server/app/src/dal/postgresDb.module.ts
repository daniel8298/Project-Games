import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cyanBright } from 'chalk';
import { Users } from '../users/entities/user.entity';

const { HOST, PG_PORT, PG_PASSWORD, PG_USER ,PG_DB} = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: HOST,
      port: Number(PG_PORT),
      password: PG_PASSWORD,
      username: PG_USER,
      entities: [Users],
      database: PG_DB,
      synchronize: true,
      logging: true,
    }),
  ],
})
export class PostgresDBModule {
  constructor() {
    console.log(cyanBright('connected to PG! 🥳'));
  }
}
