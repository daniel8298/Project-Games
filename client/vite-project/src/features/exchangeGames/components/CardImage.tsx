import { FC } from "react";
import { TitleH3 } from "../../global/styles/components/Title";
import { Image } from "../styles/Exchange.styled";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
type CardImageProps = { url: string; userName: string; email: string };

const CardImage: FC<CardImageProps> = ({ url, userName, email }) => {
  return (
    <ContainerWithFlex
      display="flex"
      alignitems="center"
      flexdirection="column"
    >
      <Image
        radius="50%"
        hei="200px"
        wid="200px"
        src={url}
        alt="user"
        margin="15px 0"
      />
      <TitleH3>
        {userName}: {email}
      </TitleH3>
    </ContainerWithFlex>
  );
};

export default CardImage;
