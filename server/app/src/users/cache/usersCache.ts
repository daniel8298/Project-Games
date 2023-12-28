import { RedisJSON } from "@redis/json/dist/commands";
import { redisClient } from "../../redis/client/client";
import { getUsersFromDB } from "../dal/usersDal";
import { UserInterface } from "../interfaces/usersInterfaces";

export const getCacheUsers = async () => {
  try {
    const cachedUsers = await redisClient.json.get("users");
    return cachedUsers && cachedUsers;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
export const getCacheUserByID = async (userId: string) => {
  try {
    const isExist = await redisClient.exists("users");

    if (isExist !== 1) {
      const users = await getUsersFromDB();
      await redisClient.json.set("users", ".", users as unknown as RedisJSON);
    }
    const cachedUsers = (await redisClient.json.get("users")) as
      | UserInterface[]
      | null;

    const cachedUser =
      cachedUsers && cachedUsers.find((user) => String(user._id) === userId);

    return cachedUser;
  } catch (error) {
    console.log("user from cache is fail");
  }
};
