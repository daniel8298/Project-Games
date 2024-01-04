import { useState } from "react";
import { Button } from "../../global/styles/components/Button.styled";
import { FlexSelectAndButton, Select } from "../styles/Exchange.styled";
import { Game, GamesProps } from "../types/games";

const SelectGames = ({ setGames, gamesArray, games }: GamesProps) => {
  const [selectedGame, setSelectedGame] = useState("");

  const renderGameOptions = (games: Game[]) => {
    return games.map((game) => (
      <option key={game.id} value={game.name}>
        {game.name}
      </option>
    ));
  };

  const handleAddGame = () => {
    if (
      selectedGame &&
      !gamesArray.find((game) => game.name === selectedGame)
    ) {
      const newGame = { name: selectedGame, id: Date.now().toString() };
      setGames([...gamesArray, newGame]);
      setSelectedGame("");
    }
  };
  return (
    <FlexSelectAndButton>
      <Select
        onChange={(e) => setSelectedGame(e.target.value)}
        value={selectedGame}
      >
        <option value="">Select Game</option>
        {renderGameOptions(games)}
      </Select>
      <Button bg="black" color="white" onClick={handleAddGame}>
        Add Game
      </Button>
    </FlexSelectAndButton>
  );
};

export default SelectGames;
