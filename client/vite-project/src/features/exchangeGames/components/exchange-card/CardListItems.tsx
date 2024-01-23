import { FC } from "react";
import { HorizontalLine } from "../../../global/styles/components/Card.styled";
import { ContainerWithFlex } from "../../../global/styles/components/Flex.styled";
import { Logo } from "../../../global/styles/components/Header.styled";
import { Checkbox } from "../../styles/Exchange.styled";
import GameInterface from "../../../games/interfaces/GameInterface";
import { TitleH4 } from "../../../global/styles/components/Title";

type CardListItemsProps = {
  games: GameInterface[];
  handleGameDelete: (id: string) => void;
};

const CardListItems: FC<CardListItemsProps> = ({ games, handleGameDelete }) => {
  return (
    <>
      <HorizontalLine />
      <TitleH4>Games For Exchange</TitleH4>
      {games.map((game) => (
        <div key={game._id}>
          <label>
            <ContainerWithFlex
              display="flex"
              alignitems="center"
              margin="15px 0"
            >
              <Logo
                src="../../../../public/delete-svgrepo-com.svg"
                alt="delete"
                width={"25px"}
                onClick={() => handleGameDelete(game._id)}
              />
              <Checkbox type="checkbox" />
              {game.name}
            </ContainerWithFlex>
          </label>
        </div>
      ))}
    </>
  );
};

export default CardListItems;
