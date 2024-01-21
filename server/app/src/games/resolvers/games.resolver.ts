import {
  Args,
  Context,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { GamesService } from '../services/games.service';
import { PubSub } from 'graphql-subscriptions';
import {
  BadRequestException,
  NotFoundException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { GameType, MessageType } from '../models/game.model';
import { GameInputCreate } from '../dto/game.input';
import { CacheOneInterceptor } from '../../redis/cacheInterceptor';
import { GraphqlCacheKey } from '../../redis/graphqlCecheKey.decorator';
import { LoginGuard } from '../../auth/guards/login/login.guard';
import { GameInputUpdate } from '../dto/game.update';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
const pubsub = new PubSub();

@Resolver()
export class GamesResolver {
  constructor(private readonly gamesService: GamesService) {}

  @Query(() => [GameType])
  @UseInterceptors(CacheInterceptor)
  @CacheKey('games')
  async games() {
    try {
      const games = await this.gamesService.findGames();
      return games;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Query(() => GameType)
  @UseInterceptors(CacheOneInterceptor)
  @GraphqlCacheKey('game')
  async game(@Args('id') id: string) {
    try {
      const game = await this.gamesService.findGame(id);
      pubsub.publish('gameSearch', { gameSearch: 'success' });
      return game;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Query(() => [GameType])
  @UseInterceptors(CacheOneInterceptor)
  @GraphqlCacheKey('gamesByUserId')
  async gamesByUserId(@Args('id') userId: string) {
    try {
      const games = await this.gamesService.findGamesByUserId(userId);
      return games;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Mutation(() => String)
  @UseGuards(LoginGuard)
  async createGame(
    @Args('inputGame')
    inputGame: GameInputCreate,
    @Context() context,
  ) {
    try {
      const { req } = context;
      const userId = req.user.id;
      const newGame = await this.gamesService.create(userId, inputGame);
      if (newGame) return 'Game Created!';
    } catch (error) {
      throw new BadRequestException('game a not created');
    }
  }
  @Mutation(() => String)
  @UseGuards(LoginGuard)
  async updateGame(
    @Args('id') gameId: string,
    @Args('inputGame') inputGame: GameInputUpdate,
    @Context() context,
  ) {
    try {
      const { req } = context;
      const userId = req.user.id;
      const updatedGame = await this.gamesService.update(
        userId,
        gameId,
        inputGame,
      );
      if (updatedGame) return 'Game Updated!';
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Mutation(() => String)
  @UseGuards(LoginGuard)
  async deleteGame(@Args('id') gameId: string, @Context() context) {
    try {
      const { req } = context;
      const { isAdmin, id } = req.user;
      const gameDeleted = await this.gamesService.remove(isAdmin, id, gameId);
      if (gameDeleted) return 'Game Deleted!';
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Mutation(() => MessageType)
  async sendMessage(@Args('massage') massage: string) {
    const message = {
      massage,
    };

    pubsub.publish('newMessage', { newMessage: message });
    return 'Message sent successfully';
  }

  @Subscription(() => MessageType)
  newMessage() {
    return pubsub.asyncIterator('newMessage');
  }

  @Subscription(() => String)
  gameSearch() {
    return pubsub.asyncIterator('gameSearch');
  }
}
