import { useState } from "react";
import CardAdmin from "../components/CardAdmin";
import CardUser from "../components/CardUser";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Logo } from "../../global/styles/components/Header.styled";
import { Button } from "../../global/styles/components/Button.styled";
import SelectGames from "../components/SelectGames";
import { platforms } from "../db/games";
import GameInterface from "../../games/interfaces/GameInterface";

type GamesProps = {
  games: GameInterface[];
};

const ExchangeGamesPage = ({ games }: GamesProps) => {
  const [gamesAdmin, setGamesAdmin] = useState<GameInterface[]>([]);
  const [gamesUser, setGamesUser] = useState<GameInterface[]>([]);

  const handleGameDeleteAdmin = (id: string) => {
    const updatedGames = gamesAdmin.filter((game) => game._id !== id);
    setGamesAdmin(updatedGames);
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
        <SelectGames
          gamesArray={gamesAdmin}
          setGames={setGamesAdmin}
          games={games}
          platforms={platforms}
        />

        <CardAdmin
          // email={games[0].genre}
          games={gamesAdmin}
          handleGameDelete={handleGameDeleteAdmin}
        />
        <CardUser
          // email={"username"}
          games={gamesUser}
          handleGameDelete={handleGameDeleteUser}
        />
        {/* <SelectGames
          gamesArray={gamesUser}
          setGames={setGamesUser}
          games={arrayGamesUser}
          platforms={platforms}
        /> */}
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
