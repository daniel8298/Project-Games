import { redisClient } from "../../redis/client/client";
import { getCachedGameById, getCachedGames } from "../cache/gamesCache";
import {
  addGameToGames,
  deleteGameById,
  editGameById,
  getAllGamesFromMongoDB,
} from "../dal/gamesDal";
import { GameInterface } from "../types/types";
import { RedisJSON } from "@redis/json/dist/commands";

export const getGames = async () => {
  const cachedGames = await getCachedGames();
  if (cachedGames != null) {
    console.log("games from cached");
    return cachedGames;
  } else {
    try {
      const games = await getAllGamesFromMongoDB();
      await redisClient.json.set("games", ".", games as unknown as RedisJSON);
      console.log("games from MongoDB");
      return games;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      return null;
    }
  }
};

export const getGame = async (_: unknown, { id }: { id: string }) => {
  try {
    const cachedGame = await getCachedGameById(id);
    cachedGame ? console.log("game from cached") : console.log("not find game");
    return cachedGame;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
export const editGame = async (
  _: unknown,
  { id, game }: { id: string; game: GameInterface }
) => {
  try {
    const editGame = await editGameById(id, game);
    await redisClient.json.del("games");
    return editGame;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
export const deleteGame = async (_: unknown, { id }: { id: string }) => {
  try {
    const deleteGame = await deleteGameById(id);
    await redisClient.json.del("games");
    return deleteGame;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
export const addGame = async (
  _: unknown,
  { game }: { game: GameInterface }
) => {
  try {
    const addGame = await addGameToGames(game);
    await redisClient.json.del("games");
    return addGame;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

// const pubsub = new PubSub();

// pubsub.publish("PRODUCT_CREATED", {
//   productCreated: { ...cachedProduct, id: cachedProduct.id },
// });

// export const productCreated = {
//   subscribe: () => pubsub.asyncIterator(["PRODUCT_CREATED"]),
// };
