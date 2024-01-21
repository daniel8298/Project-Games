import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesResolver } from './resolvers/games.resolver';

import { GamesService } from './services/games.service';
import { GameSchema } from './schemas/games.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])],
  providers: [GamesResolver, GamesService],
})
export class GamesModule {}
