import {
  HorizontalLine,
  StyledCard,
} from "../../global/styles/components/Card.styled";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Logo } from "../../global/styles/components/Header.styled";
import { Checkbox, Image } from "../styles/Exchange.styled";
import { GamesPropsDelete } from "../types/games";

const CardUser = ({ email, games, handleGameDelete }: GamesPropsDelete) => {
  return (
    <StyledCard>
      <Image
        radius="50%"
        hei="200px"
        wid="200px"
        src="https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"
        alt="user"
      />
      <h3>Me: {email}</h3>
      <HorizontalLine />
      <br />
      <div>
        <h4>Games For Exchange</h4>
        <br />
        {games.map((game) => (
          <div key={game._id}>
            <label>
              <ContainerWithFlex display="flex" alignitems="center">
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
            <br />
          </div>
        ))}
      </div>
    </StyledCard>
  );
};

export default CardUser;
