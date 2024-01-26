import CardUser from "./exchange-card/CardUser";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Icon } from "../../global/styles/components/Header.styled";
import { Button } from "../../global/styles/components/Button.styled";
import GameInterface from "../../games/interfaces/GameInterface";
import PageHeader from "../../global/layout/Header/PageHeader";
import { StyledCard } from "../../global/styles/components/Card.styled";

type GamesProps = {
  userGames: GameInterface[];
  userSwapGames: GameInterface[];
  selectedGame: GameInterface;
};

const ExchangeGamesPage = ({
  userGames,
  userSwapGames,
  selectedGame,
}: GamesProps) => {
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
          background="background: rgb(200,196,50);
          background: linear-gradient(90deg, rgba(200,196,50,1) 0%, rgba(255,0,64,1) 100%);"
        >
          <CardUser
            selectedGame={selectedGame}
            user="UserSwap"
            url="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
            games={userSwapGames}
          />
        </StyledCard>
        <StyledCard
          background="background: rgb(200,196,50);
          background: linear-gradient(90deg, rgba(200,196,50,1) 0%, rgba(0,69,255,1) 100%);"
        >
          <CardUser
            user="Me"
            url="https://www.svgrepo.com/show/382103/male-avatar-boy-face-man-user-2.svg"
            games={userGames}
          />
        </StyledCard>
      </ContainerWithFlex>

      <ContainerWithFlex
        display="flex"
        alignitems="center"
        flexdirection="column"
        padding="20px"
      >
        <Button disabled={true}>Submit</Button>
      </ContainerWithFlex>
    </>
  );
};

export default ExchangeGamesPage;
