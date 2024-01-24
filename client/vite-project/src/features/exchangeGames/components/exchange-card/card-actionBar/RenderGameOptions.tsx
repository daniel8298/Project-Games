import GameInterface from "../../../../games/interfaces/GameInterface";
import { StyledOption } from "../../../styles/Exchange.styled";

export const RenderGameOptions = (
  games: GameInterface[],
  selectedPlatform: string
) => {
  if (selectedPlatform) {
    const filteredGames = games.filter(
      (game) => game.platforms === selectedPlatform
    );
    return filteredGames.map((game) => (
      <StyledOption key={game._id} value={game.name}>
        {game.name}
      </StyledOption>
    ));
  }
  return [];
};

export default RenderGameOptions;
