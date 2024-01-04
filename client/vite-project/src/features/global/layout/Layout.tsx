import { FC } from "react";
import Main from "./Main";
import Header from "./Header/Header";
import Footer from "./Footer";
import { ContainerWithFlex } from "../styles/components/Flex.styled";

type LayoutProps = { children: JSX.Element[] | JSX.Element };

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ContainerWithFlex
      display="flex"
      minHeight="100vh"
      minWidth="100%"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ContainerWithFlex>
  );
};

export default Layout;
