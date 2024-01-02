import {
  getGame,
  getGames,
  editGame,
  deleteGame,
  addGame,
  getGamesByUserId,
} from "../services/gamesServices";

export const gamesQueries = {
  getGames,
  getGame,
  getGamesByUserId,
};
export const gamesMutations = {
  editGame,
  deleteGame,
  addGame,
};

// export const productsSubscriptions = {
//   productCreated,
// };
