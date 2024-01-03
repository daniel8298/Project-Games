import { HorizontalLine, StyledCard } from "../../global/styles/Card.styled";
import { Logo } from "../../global/styles/Header.styled";
import { Checkbox, Image } from "../styles/Exchange.styled";

const CardAdmin = () => {
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
        <label>
          <Logo
            src="../../../../../public/delete-svgrepo-com.svg"
            alt="delete"
            width={"25px"}
          />
          <Checkbox type="checkbox" />
          Gta V
        </label>
        <br />
        <label>
          <Logo
            src="../../../../../public/delete-svgrepo-com.svg"
            alt="delete"
            width={"25px"}
          />
          <Checkbox type="checkbox" />
          Call Of Duty
        </label>
      </div>
    </StyledCard>
  );
};

export default CardAdmin;
