import { useState } from "react";
import { Button } from "../../global/styles/components/Button.styled";
import { FlexSelectAndButton, Select } from "../styles/Exchange.styled";
import { GamesProps } from "../types/games";

import renderGameOptions from "../hooks/renderGameOptions";
import { platforms } from "../db/games";
import renderPlatformOptions from "../hooks/renderPlatformOptions";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";

const ActionsGames = ({ setGamesArray, gamesArray, games }: GamesProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedGame, setSelectedGame] = useState("");

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlatform(e.target.value);
    setSelectedGame("");
  };

  const handleAddGame = () => {
    if (
      selectedGame &&
      !gamesArray.find((game) => game.name === selectedGame)
    ) {
      const selectedGameObject = games.find(
        (game) => game.name === selectedGame
      );
      if (selectedGameObject) {
        const newGame = selectedGameObject;
        setGamesArray([...gamesArray, newGame]);
        setSelectedGame("");
      }
    }
  };

  return (
    <ContainerWithFlex display="flex" alignitems="center">
      <FlexSelectAndButton>
        <Select onChange={handlePlatformChange} value={selectedPlatform}>
          <option value="">SELECT PLATFORM</option>
          {renderPlatformOptions(games, platforms)}
        </Select>
        <Select
          onChange={(e) => setSelectedGame(e.target.value)}
          value={selectedGame}
          disabled={!selectedPlatform}
        >
          <option value="">SELECT GAME</option>
          {renderGameOptions(games, selectedPlatform)}
        </Select>
        <Button
          bg="black"
          color="white"
          onClick={handleAddGame}
          disabled={!selectedGame}
        >
          Add Game
        </Button>
      </FlexSelectAndButton>
    </ContainerWithFlex>
  );
};

export default ActionsGames;
