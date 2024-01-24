import { useState } from "react";
import { Button } from "../../../../global/styles/components/Button.styled";
import {
  FlexSelectAndButton,
  Select,
  StyledOption,
} from "../../../styles/Exchange.styled";
import { GamesProps } from "../../../types/games";

import renderGameOptions from "./RenderGameOptions";
import { platforms } from "../../../db/games";
import renderPlatformOptions from "./RenderPlatformOptions";
import { ContainerWithFlex } from "../../../../global/styles/components/Flex.styled";

const CardActionBar = ({ setGamesArray, gamesArray, games }: GamesProps) => {
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
          <StyledOption value="">SELECT PLATFORM</StyledOption>
          {renderPlatformOptions(games, platforms)}
        </Select>
        <Select
          onChange={(e) => setSelectedGame(e.target.value)}
          value={selectedGame}
          disabled={!selectedPlatform}
        >
          <StyledOption value="">SELECT GAME</StyledOption>
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

export default CardActionBar;
