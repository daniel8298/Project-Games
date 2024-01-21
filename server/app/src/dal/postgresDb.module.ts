import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cyanBright } from 'chalk';
import { Users } from '../users/entities/user.entity';

const { HOST, PG_PORT, PASSWORD, USER } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: HOST,
      port: Number(PG_PORT),
      password: PASSWORD,
      username: USER,
      entities: [Users],
      database: 'postgres',
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
