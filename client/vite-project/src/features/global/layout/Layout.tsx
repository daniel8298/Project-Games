import { FC } from "react";
import Main from "./Main";
import Footer from "./Footer";
import { ContainerWithFlex } from "../styles/components/Flex.styled";
import {
  StyleHeader,
  StyleHeaderMobile,
} from "../styles/components/Header.styled";
import HeaderNavigate from "./Header/HeaderNavigate";

type LayoutProps = { children: JSX.Element[] | JSX.Element };

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ContainerWithFlex display="flex" flexdirection="column" height="100vh">
      <StyleHeader>
        <HeaderNavigate />
      </StyleHeader>
      <StyleHeaderMobile>
        <HeaderNavigate />
      </StyleHeaderMobile>

      <Main>{children}</Main>
      <Footer />
    </ContainerWithFlex>
  );
};

export default Layout;
