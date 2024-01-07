import GameInterface from "../../games/interfaces/GameInterface";

export type Game = {
  id: string;
  name: string;
  platform: string; // הוספת שדה פלטפורמה לטיפוס משחק
};
export type Platform = {
  id: string;
  name: string;
};

export type GamesProps = {
  setGames: React.Dispatch<React.SetStateAction<GameInterface[]>>;
  gamesArray: GameInterface[];
  games: GameInterface[];
  platforms: Platform[];
};

export type GamesPropsDelete = {
  games: GameInterface[];
  handleGameDelete: (id: string) => void;
  email?: string;
};
