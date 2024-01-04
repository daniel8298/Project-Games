import { FC } from "react";
import { Container } from "../styles/components/Container.styled";

type MainProps = { children: JSX.Element | JSX.Element[] };

const Main: FC<MainProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
