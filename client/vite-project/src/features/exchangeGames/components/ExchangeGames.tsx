import { useState } from "react";
import CardUser from "./CardUser";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Icon } from "../../global/styles/components/Header.styled";
import { Button } from "../../global/styles/components/Button.styled";
import SelectGames from "./ActionsGames";
import { platforms } from "../db/games";
import GameInterface from "../../games/interfaces/GameInterface";
import PageHeader from "../../global/layout/Header/PageHeader";
import { StyledCard } from "../../global/styles/components/Card.styled";

type GamesProps = {
  userGames: GameInterface[];
  userSwapGames: GameInterface[];
};

const ExchangeGamesPage = ({ userGames, userSwapGames }: GamesProps) => {
  const [gamesSwapUser, setGamesSwapUser] = useState<GameInterface[]>([]);
  const [gamesUser, setGamesUser] = useState<GameInterface[]>([]);

  const handleGameDeleteSwapUser = (id: string) => {
    const updatedGames = gamesSwapUser.filter((game) => game._id !== id);
    setGamesSwapUser(updatedGames);
  };
  const handleGameDeleteUser = (id: string) => {
    const updatedGames = gamesUser.filter((game) => game._id !== id);
    setGamesUser(updatedGames);
  };

  return (
    <>
      <PageHeader
        title={
          <>
            Choice{" "}
            <Icon
              src="../../../../public/icons8-exchange.png"
              alt="icon-exchange"
            />{" "}
            Games
          </>
        }
        subtitle="Welcome To The Game Exchange Page"
      />

      <ContainerWithFlex display="flex" flexwrap="wrap">
        <StyledCard
        // background="rgb(2,0,36);
        // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,84,173,1) 35%, rgba(0,212,255,1) 100%);"
        // display="flex"
        // alignitems="center"
        // justifycontent="center"
        // flexwrap="wrap"
        // boxshadow="0 0 10px rgba(0, 0, 0, 0.7)"
        // radius="15px"
        // margin="20px"
        >
          {/* <SelectGames
            gamesArray={gamesSwapUser}
            setGames={setGamesSwapUser}
            games={userSwapGames}
            platforms={platforms}
          /> */}

          <CardUser
            email={userSwapGames[0]?.email.split("@")[0]}
            games={gamesSwapUser}
            handleGameDelete={handleGameDeleteSwapUser}
          />
        </StyledCard>
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
