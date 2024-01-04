import {
  HorizontalLine,
  StyledCard,
} from "../../global/styles/components/Card.styled";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Logo } from "../../global/styles/components/Header.styled";
import { Checkbox, Image } from "../styles/Exchange.styled";
import { GamesPropsDelete } from "../types/games";

const CardUser = ({ games, handleGameDelete }: GamesPropsDelete) => {
  return (
    <StyledCard>
      <Image
        src="https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"
        alt="user"
      />
      <h3>Me: Daniel</h3>
      <HorizontalLine />
      <div>
        <h4>Games For Exchange</h4>
        {games.map((game) => (
          <div key={game.id}>
            <label>
              <ContainerWithFlex display="flex" alignItems="center">
                <Logo
                  src="../../../../public/delete-svgrepo-com.svg"
                  alt="delete"
                  width={"25px"}
                  onClick={() => handleGameDelete(game.id)}
                />
                <Checkbox type="checkbox" />
                {game.name}
              </ContainerWithFlex>
            </label>
            {<br />}
          </div>
        ))}
      </div>
    </StyledCard>
  );
};

export default CardUser;
