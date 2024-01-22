import {
  HorizontalLine,
  StyledCard,
} from "../../global/styles/components/Card.styled";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Logo } from "../../global/styles/components/Header.styled";
import { TitleH3, TitleH4 } from "../../global/styles/components/Title";
import { Checkbox, Image } from "../styles/Exchange.styled";
import { GamesPropsDelete } from "../types/games";
import ActionsGames from "./ActionsGames";
import CardImage from "./CardImage";
import CardListItems from "./CardListItems";

const CardUser = ({ email, games, handleGameDelete }: GamesPropsDelete) => {
  return (
    <div>
      <CardImage email={email} />
      <ActionsGames
        gamesArray={gamesSwapUser}
        setGames={setGamesSwapUser}
        games={userSwapGames}
        platforms={platforms}
      />
      <CardListItems />
    </div>
  );
};

export default CardUser;
