import { client } from "../../dataAccess/postgreSQL";
import { readJsonFileUsers } from "../../initialData/initialData";
import { UserInterface } from "../interfaces/usersInterfaces";
import { insertUsersIntoPGFunc } from "../types/types";
import { comparePassword } from "../helpers/bcrypt";
import { redisClient } from "../../redis/client/client";
import { checkingUsersExist } from "../utils/usersUtils";

export const getAllUsersFromJSON = async () => {
  try {
    const users: UserInterface[] = await readJsonFileUsers();
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const insertUsersIntoPG: insertUsersIntoPGFunc = async (val) => {
  try {
    const tableName = "users";
    const columns = ["email", "password"];
    const values = val;
    const query = `INSERT INTO ${tableName} (${columns.join(
      ", "
    )}) VALUES ($1, $2)`;
    await client.query(query, values);
  } catch (error) {
    console.log("failed to insert to PG");
    return Promise.reject(error);
  }
};

export const insertUsersFromJSONIntoPG = async () => {
  try {
    const check = await checkingUsersExist();
    if (check) {
      console.log("Already have users in PG");
    } else {
      await redisClient.json.del("users");
      const users = await getAllUsersFromJSON();
      users.forEach(async (user) => {
        await insertUsersIntoPG([user.email, user.password]);
      });
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUsersFromDB = async () => {
  try {
    const queryUsers = "SELECT * FROM users";
    const users = await client.query(queryUsers);
    return users.rows;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerUserToDB = async (email: string, password: string) => {
  try {
    const tableName = "users";
    const columns = ["email", "password"];
    const values = [email, password];
    const query = `INSERT INTO ${tableName} (${columns.join(
      ", "
    )}) VALUES ($1, $2) RETURNING *`;
    const registerUser = await client.query(query, values);
    console.log("User successfully registered:", email);
    return registerUser.rows[0];
  } catch (error) {
    console.log("failed to insert to PG");
    return Promise.reject(error);
  }
};

export const loginToDB = async (email: string, password: string) => {
  try {
    const queryUserLogin = `SELECT password FROM users WHERE email = $1`;
    const passwordFromDB = await client.query(queryUserLogin, [email]);

    if (passwordFromDB.rowCount! === 0)
      throw new Error("The email or password is incorrect!");
    if (!comparePassword(password, passwordFromDB.rows[0].password))
      throw new Error("The email or password is incorrect!");
    return passwordFromDB.rows[0].password;
  } catch (error) {
    return Promise.reject(error);
  }
};
