import GameInterface from "../../games/interfaces/GameInterface";

export type Game = {
  id: string;
  name: string;
  platform: string;
};
export type Platform = {
  id: string;
  name: string;
};

export type GamesProps = {
  setGamesArray: React.Dispatch<React.SetStateAction<GameInterface[]>>;
  gamesArray: GameInterface[];
  games: GameInterface[];
};

export type GamesPropsDelete = {
  games: GameInterface[];
  email: string;
  handleGameDelete: (id: string) => void;
};
