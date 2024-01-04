import { useState } from "react";
import CardAdmin from "../components/CardAdmin";
import CardUser from "../components/CardUser";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Logo } from "../../global/styles/components/Header.styled";
import { Button } from "../../global/styles/components/Button.styled";
import SelectGames from "../components/SelectGames";
import { Game } from "../types/games";
import { arrayGamesAdmin, arrayGamesUser } from "../db/games";

const ExchangeGamesPage = () => {
  const [gamesAdmin, setGamesAdmin] = useState<Game[]>([]);
  const [gamesUser, setGamesUser] = useState<Game[]>([]);

  const handleGameDeleteAdmin = (id: string) => {
    const updatedGames = gamesAdmin.filter((game) => game.id !== id);
    setGamesAdmin(updatedGames);
  };
  const handleGameDeleteUser = (id: string) => {
    const updatedGames = gamesUser.filter((game) => game.id !== id);
    setGamesUser(updatedGames);
  };

  return (
    <>
      <ContainerWithFlex
        display="flex"
        alignItems="center"
        flexDirection="column"
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
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <SelectGames
          gamesArray={gamesAdmin}
          setGames={setGamesAdmin}
          games={arrayGamesAdmin}
        />

        <CardAdmin
          games={gamesAdmin}
          handleGameDelete={handleGameDeleteAdmin}
        />
        <CardUser games={gamesUser} handleGameDelete={handleGameDeleteUser} />
        <SelectGames
          gamesArray={gamesUser}
          setGames={setGamesUser}
          games={arrayGamesUser}
        />
      </ContainerWithFlex>

      <ContainerWithFlex
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Button>Submit</Button>
      </ContainerWithFlex>
    </>
  );
};

export default ExchangeGamesPage;
