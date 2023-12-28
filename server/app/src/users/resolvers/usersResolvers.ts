import {
  getUser,
  getUsers,
  signUpUser,
  signInUser,
  userRegister,
} from "../services/usersServices";

export const usersQueries = {
  getUser,
  getUsers,
};
export const usersMutations = {
  signUpUser,
  signInUser,
};
export const usersSubscriptions = {
  userRegister,
};
