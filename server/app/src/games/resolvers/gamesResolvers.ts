import {
  getGame,
  getGames,
  editGame,
  deleteGame,
  addGame,
} from "../services/gamesServices";

export const gamesQueries = {
  getGames,
  getGame,
};
export const gamesMutations = {
  editGame,
  deleteGame,
  addGame,
};

// export const productsSubscriptions = {
//   productCreated,
// };
