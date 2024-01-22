import { FC } from "react";
import { TitleH3 } from "../../global/styles/components/Title";
import { Image } from "../styles/Exchange.styled";
type CardImageProps = { url: string; user: string; email: string };

const CardImage: FC<CardImageProps> = ({ url, user, email }) => {
  return (
    <div>
      <Image
        radius="50%"
        hei="200px"
        wid="200px"
        src={url}
        alt="user"
        margin="15px 0"
      />
      <TitleH3>
        {user}: {email}
      </TitleH3>
    </div>
  );
};

export default CardImage;
