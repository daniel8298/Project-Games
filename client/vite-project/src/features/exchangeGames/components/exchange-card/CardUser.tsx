import GameInterface from "../../../games/interfaces/GameInterface";
import { ContainerWithFlex } from "../../../global/styles/components/Flex.styled";
import CardActionBar from "./card-actionBar/CardActionBar";
import CardImage from "./card-head/CardImage";
import CardListItems from "./CardListItems";
import { FC, useEffect, useState } from "react";

type CardUserProps = {
  games: GameInterface[];
  user: string;
  url: string;
  selectedGame?: GameInterface;
};

const CardUser: FC<CardUserProps> = ({ games, user, url, selectedGame }) => {
  const [gamesUserArray, setGamesUserArray] = useState<GameInterface[]>([]);

  useEffect(() => {
    if (selectedGame && gamesUserArray.length === 0) {
      setGamesUserArray([selectedGame]);
    }
  }, []);

  const handleGameDeleteUser = (id: string) => {
    const updatedGames = gamesUserArray.filter((game) => game._id !== id);
    setGamesUserArray(updatedGames);
  };

  return (
    <>
      <ContainerWithFlex display="flex" flexwrap="wrap" justifycontent="center">
        <CardImage userName={games[0]?.userName} user={user} url={url} />
        <CardActionBar
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
