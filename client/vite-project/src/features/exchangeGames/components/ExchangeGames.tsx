import { useState } from "react";
import CardUser from "../components/CardUser";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Logo } from "../../global/styles/components/Header.styled";
import { Button } from "../../global/styles/components/Button.styled";
import SelectGames from "../components/SelectGames";
import { platforms } from "../db/games";
import GameInterface from "../../games/interfaces/GameInterface";
import CardExchangeUser from "./CardExchangeUser";

type GamesProps = {
  userGames: GameInterface[];
  userExchange: GameInterface[];
};

const ExchangeGamesPage = ({ userGames, userExchange }: GamesProps) => {
  const [gamesExchangeUser, setGamesExchangeUser] = useState<GameInterface[]>(
    []
  );
  const [gamesUser, setGamesUser] = useState<GameInterface[]>([]);

  const handleGameDeleteAdmin = (id: string) => {
    const updatedGames = gamesExchangeUser.filter((game) => game._id !== id);
    setGamesExchangeUser(updatedGames);
  };
  const handleGameDeleteUser = (id: string) => {
    const updatedGames = gamesUser.filter((game) => game._id !== id);
    setGamesUser(updatedGames);
  };

  return (
    <>
      <ContainerWithFlex
        display="flex"
        alignitems="center"
        flexdirection="column"
        padding="20px"
      >
        <h1>
          Choice{"  "}
          <Logo
            src="../../../../public/icons8-exchange.png"
            alt="delete"
            width={"25px"}
          />
          {"  "}
          Games
        </h1>
        <h3>Welcome To The Game Exchange Page</h3>
      </ContainerWithFlex>

      <ContainerWithFlex
        display="flex"
        justifycontent="center"
        alignitems="center"
        flexdirection="row"
        flexwrap="wrap"
      >
        <ContainerWithFlex
          background="rgb(2,0,36);
          background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,84,173,1) 35%, rgba(0,212,255,1) 100%);"
          display="flex"
          alignitems="center"
          justifycontent="center"
          flexwrap="wrap"
          boxshadow="0 0 10px rgba(0, 0, 0, 0.7)"
          radius="15px"
          margin="20px"
        >
          <SelectGames
            gamesArray={gamesExchangeUser}
            setGames={setGamesExchangeUser}
            games={userExchange}
            platforms={platforms}
          />

          <CardExchangeUser
            email={userExchange[0]?.email.split("@")[0]}
            games={gamesExchangeUser}
            handleGameDelete={handleGameDeleteAdmin}
          />
        </ContainerWithFlex>
        <ContainerWithFlex
          background="rgb(200,196,50);
          background: linear-gradient(90deg, rgba(200,196,50,1) 35%, rgba(0,212,255,1) 100%);"
          display="flex"
          alignitems="center"
          justifycontent="center"
          flexwrap="wrap"
          boxshadow="0 0 10px rgba(0, 0, 0, 0.7)"
          radius="15px"
          margin="20px"
        >
          <CardUser
            email={userGames[0]?.email.split("@")[0]}
            games={gamesUser}
            handleGameDelete={handleGameDeleteUser}
          />
          <SelectGames
            gamesArray={gamesUser}
            setGames={setGamesUser}
            games={userGames}
            platforms={platforms}
          />
        </ContainerWithFlex>
      </ContainerWithFlex>

      <ContainerWithFlex
        display="flex"
        alignitems="center"
        flexdirection="column"
        padding="20px"
      >
        <Button disabled={false}>Submit</Button>
      </ContainerWithFlex>
    </>
  );
};

export default ExchangeGamesPage;
