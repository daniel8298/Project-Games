import {
  HorizontalLine,
  StyledCard,
} from "../../global/styles/components/Card.styled";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import { Logo } from "../../global/styles/components/Header.styled";
import { Checkbox, Image } from "../styles/Exchange.styled";
import { GamesPropsDelete } from "../types/games";

const CardAdmin = ({ games, handleGameDelete }: GamesPropsDelete) => {
  return (
    <StyledCard>
      <div>
        <Image
          src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
          alt="userAdmin"
        />
      </div>
      <h3>User Name: David</h3>
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

export default CardAdmin;
