import { generateToken } from "../../auth/JWT";
import { client } from "../../dataAccess/postgreSQL";
import ServerError from "../../utils/ServerError";
import { loginToDB, registerUserToDB } from "../dal/usersDal";
import { generateUserPassword } from "../helpers/bcrypt";
import { UserInterface } from "../interfaces/usersInterfaces";

export const userExistInDB = async (email: string) => {
  try {
    const queryExistUsers = `SELECT * FROM users WHERE email = $1`;
    const user = await client.query(queryExistUsers, [email]);

    return user.rowCount;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const checkingUsersExist = async () => {
  try {
    const queryCount = "SELECT COUNT(*) FROM users";
    const queryUsers = "SELECT * FROM users";
    const resultCount = await client.query(queryCount);
    const resultUsers = await client.query(queryUsers);

    if (resultCount.rows[0].count > 0) {
      return resultUsers.rows;
    } else {
      return false;
    }
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`Error in getAllUsersFromPG: ${error.message}`);
  }
};

export const register = async (user: UserInterface) => {
  try {
    const userExist = await userExistInDB(user.email);

    if (userExist !== 0)
      throw new ServerError(
        401,
        "it is not possible to register again with an existing email"
      );
    const password = generateUserPassword(user.password);

    const email = user.email;

    const userRegistered = await registerUserToDB(email, password);
    if (!userRegistered)
      throw new ServerError(401, "did not receive user from db");

    return userRegistered;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const login = async (user: UserInterface) => {
  try {
    const userLogin = await loginToDB(user.email, user.password);
    if (!userLogin) {
      throw new ServerError(400, "unauthorized");
    } else {
      const { email } = user;
      const token = generateToken(email);
      return { token: token };
    }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
