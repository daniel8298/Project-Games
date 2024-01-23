import GameInterface from "../../../../games/interfaces/GameInterface";

export const RenderGameOptions = (
  games: GameInterface[],
  selectedPlatform: string
) => {
  if (selectedPlatform) {
    const filteredGames = games.filter(
      (game) => game.platforms === selectedPlatform
    );
    return filteredGames.map((game) => (
      <option key={game._id} value={game.name}>
        {game.name}
      </option>
    ));
  }
  return [];
};

export default RenderGameOptions;
