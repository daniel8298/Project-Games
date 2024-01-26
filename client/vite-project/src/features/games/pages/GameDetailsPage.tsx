import { useParams } from "react-router-dom";
import SpinnerComponent from "../../global/spinner/components/WaitingComponent";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import GameDetailsCard from "../components/GameDetails/GameDetailsCard";
import getGame from "../services/getGame";
import { ContainerWithFlex } from "../../global/styles/components/Flex.styled";
import NotFoundPage from "../../global/layout/NotFoundPage/NotFoundPage";

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const dispatch = useAppDispatch();
  const { error, pending, game } = useAppSelector((store) => store.games);

  useEffect(() => {
    dispatch(getGame(gameId as string));
  }, [game]);

  if (pending) return <SpinnerComponent />;
  if (!game || error) return <NotFoundPage />;

  return (
    <ContainerWithFlex>
      <GameDetailsCard game={game} />
    </ContainerWithFlex>
  );
};
export default GameDetailsPage;
