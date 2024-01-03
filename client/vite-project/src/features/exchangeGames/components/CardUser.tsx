import { HorizontalLine, StyledCard } from "../../global/styles/Card.styled";
import { Logo } from "../../global/styles/Header.styled";
import { Checkbox, Image } from "../styles/Exchange.styled";

const CardUser = () => {
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
        <label>
          <Logo
            src="../../../../../public/delete-svgrepo-com.svg"
            alt="delete"
            width={"25px"}
          />
          <Checkbox type="checkbox" />
          Mario
        </label>
        <br />
        <label>
          <Logo
            src="../../../../../public/delete-svgrepo-com.svg"
            alt="delete"
            width={"25px"}
          />
          <Checkbox type="checkbox" />
          Tomb Raider
        </label>
      </div>
    </StyledCard>
  );
};

export default CardUser;
