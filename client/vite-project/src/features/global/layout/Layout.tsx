import { FC } from "react";
import Main from "./Main";
import Header from "./Header/Header";
import Footer from "./Footer";

type LayoutProps = { children: JSX.Element[] | JSX.Element };

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
