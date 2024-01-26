import React from "react";
import GameInterface from "../../interfaces/GameInterface";
import { useNavigate } from "react-router-dom";
import { ContainerWithFlex } from "../../../global/styles/components/Flex.styled";
import { CardStyle } from "../../../global/styles/components/Card.styled";
import {
  ImageCard,
  ImageContainer,
} from "../../../exchangeGames/styles/Exchange.styled";
import { P, TitleH4 } from "../../../global/styles/components/Title";
import { Button } from "../../../global/styles/components/Button.styled";

interface GameCardProps {
  game: GameInterface;
}
const GameDetailsCard: React.FC<GameCardProps> = ({ game }) => {
  const navigate = useNavigate();

  return (
    <CardStyle>
      <ImageContainer>
        <ImageCard alt={game.imageAlt} src={game.imageUrl}></ImageCard>
      </ImageContainer>

      <ContainerWithFlex padding="15px">
        <TitleH4>{game.name}</TitleH4>
        <P>Genre: {game.genre}</P>
        <P>Platform: {game.platforms}</P>
        <P>Upload Date: {game.dateGame.slice(0, 10)}</P>
        <P>{game.description}</P>
      </ContainerWithFlex>
      <ContainerWithFlex padding="10px" display="flex" justifycontent="center">
        {game.userId !== "1" && (
          <Button
            onClick={() => {
              navigate(`/exchangeGamesPage/${game.userId}/${game._id}`);
            }}
          >
            Swap With User
          </Button>
        )}
      </ContainerWithFlex>
    </CardStyle>
  );
};
export default GameDetailsCard;
