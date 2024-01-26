import ExchangeGames from "../components/ExchangeGames";
import SpinnerComponent from "../../global/spinner/components/WaitingComponent";
import NotFoundPage from "../../global/layout/NotFoundPage/NotFoundPage";
import useGamesByUserSwapId from "../hooks/useGamesByUserSwapId";
import useGamesByUserId from "../hooks/useGamesByUserId";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import getGame from "../../games/services/getGame";

const ExchangeGamesPage = () => {
  const { userId, gameId } = useParams();
  const dispatch = useAppDispatch();
  const { game } = useAppSelector((store) => store.games);

  useEffect(() => {
    dispatch(getGame(gameId as string));
  }, [game]);

  const { error, pending, gamesFromUserSwap } = useGamesByUserSwapId(
    userId as string
  );
  const { gamesFromUser } = useGamesByUserId("1");

  if (pending) return <SpinnerComponent />;
  if (!game || error) return <NotFoundPage />;

  return (
    <>
      <ExchangeGames
        userGames={gamesFromUser}
        userSwapGames={gamesFromUserSwap}
        selectedGame={game}
      />
    </>
  );
};

export default ExchangeGamesPage;
