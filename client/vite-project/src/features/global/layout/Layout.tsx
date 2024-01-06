import { FC } from "react";
import Main from "./Main";
import Header from "./Header/Header";
import Footer from "./Footer";
import { ContainerWithFlex } from "../styles/components/Flex.styled";

type LayoutProps = { children: JSX.Element[] | JSX.Element };

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ContainerWithFlex display="flex" flexdirection="column" height="100vh">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ContainerWithFlex>
  );
};

export default Layout;
