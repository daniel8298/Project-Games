import { getUsersFromDB } from "../dal/usersDal";
import { login, register } from "../utils/usersUtils";
import { redisClient } from "../../redis/client/client";
import { PubSub } from "graphql-subscriptions";
import { getCacheUserByID, getCacheUsers } from "../cache/usersCache";
import { RedisJSON } from "@redis/json/dist/commands";
import userValidation from "../models/joi/userValidation";
import { UserInterface } from "../interfaces/usersInterfaces";

const pubsub = new PubSub();

export const getUsers = async () => {
  try {
    const cachedUsers = await getCacheUsers();
    if (cachedUsers) {
      console.log("Users from cached");
      return cachedUsers;
    } else {
      const users = await getUsersFromDB();
      redisClient.json.set("users", ".", users as unknown as RedisJSON);
      console.log("users from PostgresDB");
      return users;
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
export const getUser = async (_: unknown, { id }: { id: string }) => {
  try {
    const user = await getCacheUserByID(id);
    user ? console.log("user from cached") : console.log("not find user");
    return user;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const signUpUser = async (_: unknown, args: { user: UserInterface }) => {
  try {
    const { error } = userValidation(args.user);
    if (error?.details[0].message) throw new Error(error?.details[0].message);

    const user_register = await register(args.user);
    // pubsub.publish("USER_REGISTER", {
    //   userRegister: {
    //     ...user_register,
    //   },
    // });
    await redisClient.json.del("users");
    return user_register;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const signInUser = async (_: unknown, args: { user: UserInterface }) => {
  try {
    const { error } = userValidation(args.user);
    if (error?.details[0].message) throw new Error(error?.details[0].message);

    const token = await login(args.user);
    console.log(`The Token Of ${args.user.email} Is: ${token?.token}`);
    return token;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
export const userRegister = {
  subscribe: () => pubsub.asyncIterator(["USER_REGISTER"]),
};
