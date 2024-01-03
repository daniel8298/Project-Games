import { Button } from "../../global/styles/Button.styled";
import { ContainerWithFlex } from "../../global/styles/Container.styled";
import { Flex } from "../../global/styles/Flex.styled";
import { Logo } from "../../global/styles/Header.styled";
import CardAdmin from "../components/CardAdmin";
import CardUser from "../components/CardUser";
import { FlexSelectAndButton, Select } from "../styles/Exchange.styled";

const ExchangeGamesPage = () => {
  return (
    <ContainerWithFlex>
      <h1>
        Choice{"  "}
        <Logo
          src="../../../../../public/icons8-exchange.png"
          alt="delete"
          width={"25px"}
        />
        {"  "}
        Games
      </h1>

      <Flex>
        <FlexSelectAndButton>
          <Select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Select>
          <Button bg="black" color="white">
            Add Game
          </Button>
        </FlexSelectAndButton>
        <CardAdmin />
        <CardUser />
        <FlexSelectAndButton>
          <Select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </Select>
          <Button bg="black" color="white">
            Add Game
          </Button>
        </FlexSelectAndButton>
      </Flex>
      <Button>Submit</Button>
    </ContainerWithFlex>
  );
};

export default ExchangeGamesPage;
