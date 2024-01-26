import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameInputCreate } from '../dto/game.input';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { GameInputUpdate } from '../dto/game.update';
import { GameInterface } from '../interfaces/gameInterface';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel('Game') private gameModel: Model<GameInterface>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async findGames() {
    try {
      const games = await this.gameModel.find();
      if (!games.length) throw new Error('no any games');
      console.log('Games from Db');
      return games;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findGame(id: string) {
    try {
      const game = await this.gameModel.findById(id);
      if (!game) throw new Error(`Game with id ${id} not found`);

      console.log('Game from DB!');
      return game;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async findGamesByUserId(userId: string) {
    try {
      const games = await this.gameModel.find({ userId: userId });
      if (!games.length)
        throw new Error(`Games with User id ${userId} not found`);

      console.log('Games from DB!');
      return games;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async create(userId: string, userName: string, gameInput: GameInputCreate) {
    try {
      const newGame = new this.gameModel({ userId, userName, ...gameInput });
      const gameCreated = await newGame.save();
      if (!gameCreated) throw new Error('Game its a not created');
      await this.cacheManager.reset();
      return newGame;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async update(userId: string, gameId: string, gameInput: GameInputUpdate) {
    try {
      const gameToUpdate = await this.gameModel.findOne({
        _id: gameId,
        userId: userId,
      });
      if (!gameToUpdate) throw new Error(`Game with id ${gameId} not found`);

      const updatedGame = await this.gameModel.findOneAndUpdate(
        { _id: gameId },
        gameInput,
        {
          new: true,
        },
      );
      if (!updatedGame) throw new Error(`Game with id ${gameId} not found`);
      await this.cacheManager.reset();
      return updatedGame;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async remove(userAdmin: string, userId: string, gameId: string) {
    try {
      if (!userAdmin) {
        const gameToDelete = await this.gameModel.findOne({
          _id: gameId,
          userId: userId,
        });
        if (!gameToDelete) throw new Error(`Game with id ${gameId} not found`);
      }
      const deleteGame = await this.gameModel.findByIdAndDelete(gameId);
      if (!deleteGame) throw new Error(`Game with id ${gameId} not deleted`);
      await this.cacheManager.reset();
      return deleteGame;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
