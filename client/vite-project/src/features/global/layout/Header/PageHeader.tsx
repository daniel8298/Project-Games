import { FC, ReactNode } from "react";
import { ContainerWithFlex } from "../../styles/components/Flex.styled";
import { TitleH1, TitleH2 } from "../../styles/components/Title";

type PageHeaderProps = { title: ReactNode; subtitle: string };

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <ContainerWithFlex
      display="flex"
      alignitems="center"
      flexdirection="column"
      padding="20px"
    >
      <TitleH1>{title}</TitleH1>
      <TitleH2>{subtitle}</TitleH2>
    </ContainerWithFlex>
  );
};

export default PageHeader;
