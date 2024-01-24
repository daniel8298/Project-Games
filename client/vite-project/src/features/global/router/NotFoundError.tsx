import { FC } from "react";
import { TitleH1 } from "../styles/components/Title";

type NotFoundErrorProps = { message: string };

const NotFoundError: FC<NotFoundErrorProps> = ({ message }) => {
  return (
    <>
      <TitleH1>{message}</TitleH1>
    </>
  );
};

export default NotFoundError;
