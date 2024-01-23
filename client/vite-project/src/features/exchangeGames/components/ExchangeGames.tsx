import CardUser from "./CardUser";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Icon } from "../../global/styles/components/Header.styled";
import { Button } from "../../global/styles/components/Button.styled";
import GameInterface from "../../games/interfaces/GameInterface";
import PageHeader from "../../global/layout/Header/PageHeader";
import { StyledCard } from "../../global/styles/components/Card.styled";

type GamesProps = {
  userGames: GameInterface[];
  userSwapGames: GameInterface[];
};

const ExchangeGamesPage = ({ userGames, userSwapGames }: GamesProps) => {
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
        <StyledCard>
          <CardUser
            userName="UserSwap"
            url="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
            games={userSwapGames}
          />
        </StyledCard>
        <StyledCard>
          <CardUser
            userName="Me"
            url="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
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
        <Button disabled={false}>Submit</Button>
      </ContainerWithFlex>
    </>
  );
};

export default ExchangeGamesPage;
