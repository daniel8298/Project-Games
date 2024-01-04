export type Game = {
  name: string;
  id: string;
};

export type GamesProps = {
  games: Game[];
  gamesArray: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
};

export type GamesPropsDelete = {
  games: Game[];
  handleGameDelete: (id: string) => void;
};
