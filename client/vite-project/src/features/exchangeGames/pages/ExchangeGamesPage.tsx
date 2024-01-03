import { Button } from "../../global/styles/Button.styled";
import {
  Container,
  ContainerWithFlex,
} from "../../global/styles/Container.styled";
import { Flex } from "../../global/styles/Flex.styled";
import { Logo } from "../../global/styles/Header.styled";
import CardAdmin from "../components/CardAdmin";
import CardUser from "../components/CardUser";
// import { Input, Select } from "../styles/Exchange.styled";

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
      {/* <Select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </Select> */}

      <Flex>
        <CardAdmin />
        <CardUser />

        {/* </ContainerFlex> */}
        {/* <Input /> */}
      </Flex>
      <Button>Submit</Button>
    </ContainerWithFlex>
  );
};

export default ExchangeGamesPage;
