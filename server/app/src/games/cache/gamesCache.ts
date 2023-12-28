import { RedisJSON } from "@redis/json/dist/commands";
import { redisClient } from "../../redis/client/client";
import { getAllGamesFromMongoDB } from "../dal/gamesDal";
import { GameInterface } from "../types/types";

export const getCachedGames = async () => {
  try {
    const cachedGames = await redisClient.json.get("games");
    if (!cachedGames) return null;
    return cachedGames;
  } catch (error) {
    console.log(error);
  }
};

export const getCachedGameById = async (gameId: string) => {
  try {
    const isExist = await redisClient.exists("games");
    if (isExist !== 1) {
      const games = await getAllGamesFromMongoDB();
      await redisClient.json.set("games", ".", games as unknown as RedisJSON);
    }
    const cachedGames = (await redisClient.json.get("games")) as
      | GameInterface[]
      | null;
    const cachedGame =
      cachedGames && cachedGames.find((game) => game._id === gameId);
    return cachedGame;
  } catch (error) {
    console.log("game from cache is fail");
  }
};
