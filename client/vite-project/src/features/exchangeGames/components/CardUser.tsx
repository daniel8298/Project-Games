import GameInterface from "../../games/interfaces/GameInterface";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import ActionsGames from "./ActionsGames";
import CardImage from "./CardImage";
import CardListItems from "./CardListItems";
import { FC, useState } from "react";

type CardUserProps = { games: GameInterface[]; userName: string; url: string };

const CardUser: FC<CardUserProps> = ({ games, userName, url }) => {
  const [gamesUserArray, setGamesUserArray] = useState<GameInterface[]>([]);
  const handleGameDeleteUser = (id: string) => {
    const updatedGames = gamesUserArray.filter((game) => game._id !== id);
    setGamesUserArray(updatedGames);
  };
  return (
    <>
      <ContainerWithFlex display="flex" flexwrap="wrap" justifycontent="center">
        <CardImage
          email={games[0]?.email.split("@")[0]}
          userName={userName}
          url={url}
        />
        <ActionsGames
          gamesArray={gamesUserArray}
          setGamesArray={setGamesUserArray}
          games={games}
        />
      </ContainerWithFlex>

      <CardListItems
        games={gamesUserArray}
        handleGameDelete={handleGameDeleteUser}
      />
    </>
  );
};

export default CardUser;
