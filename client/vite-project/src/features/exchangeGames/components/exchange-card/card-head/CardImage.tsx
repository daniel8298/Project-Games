import { FC } from "react";
import { TitleH3 } from "../../../../global/styles/components/Title";
import { Image } from "../../../styles/Exchange.styled";
import { ContainerWithFlex } from "../../../../global/styles/components/Flex.styled";
type CardImageProps = { url?: string; user?: string; userName?: string };

const CardImage: FC<CardImageProps> = ({ url, user, userName }) => {
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
        {user}: {userName}
      </TitleH3>
    </ContainerWithFlex>
  );
};

export default CardImage;
