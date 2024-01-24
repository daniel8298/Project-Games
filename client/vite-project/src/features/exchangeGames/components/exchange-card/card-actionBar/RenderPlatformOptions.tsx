import GameInterface from "../../../../games/interfaces/GameInterface";
import { StyledOption } from "../../../styles/Exchange.styled";
import { Platform } from "../../../types/games";

const RenderPlatformOptions = (
  games: GameInterface[],
  platforms: Platform[]
) => {
  const platformsWithGames = platforms.filter((platform) =>
    games.some((game) => game.platforms === platform.name)
  );

  return platformsWithGames.map((platform) => (
    <StyledOption key={platform.id} value={platform.name}>
      {platform.name}
    </StyledOption>
  ));
};
export default RenderPlatformOptions;
