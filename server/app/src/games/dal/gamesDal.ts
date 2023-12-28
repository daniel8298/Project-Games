import { readJsonFileGames } from "../../initialData/initialData";
import { redisClient } from "../../redis/client/client";
import { Game } from "../models/mongoose/GamesSchema";
import { GameInterface } from "../types/types";

export const getAllGamesFromJSON = async () => {
  try {
    const games = await readJsonFileGames();
    return games;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const insertGamesIntoMongoose = async () => {
  try {
    const games = await getAllGamesFromJSON();

    const existingOrdersCount = await Game.countDocuments();

    if (existingOrdersCount === 0) {
      await Game.insertMany(games);
      await redisClient.json.del("games");
      console.log("Games inserted successfully!");
    } else {
      console.log("Already have games in Mongoose");
    }
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error);
  }
};

export const getAllGamesFromMongoDB = async () => {
  try {
    const games = await Game.find();
    return games;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const editGameById = async (id: string, game: GameInterface) => {
  try {
    const updatedGame = await Game.findOneAndUpdate({ _id: id }, game, {
      new: true,
    });
    if (!updatedGame) throw new Error("game not found");
    return updatedGame;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const deleteGameById = async (id: string) => {
  try {
    const existingGame = await Game.findByIdAndDelete(id);
    if (!existingGame) throw new Error("game not found");
    return existingGame;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const addGameToGames = async (game: GameInterface) => {
  try {
    const newGame = await Game.create(game);
    return newGame;
  } catch (error) {
    return Promise.reject(error);
  }
};
