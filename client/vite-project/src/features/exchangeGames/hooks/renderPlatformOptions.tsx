import GameInterface from "../../games/interfaces/GameInterface";
import { Platform } from "../types/games";

const renderPlatformOptions = (
  games: GameInterface[],
  platforms: Platform[]
) => {
  const platformsWithGames = platforms.filter((platform) =>
    games.some((game) => game.platforms === platform.name)
  );

  return platformsWithGames.map((platform) => (
    <option key={platform.id} value={platform.name}>
      {platform.name}
    </option>
  ));
};
export default renderPlatformOptions;
