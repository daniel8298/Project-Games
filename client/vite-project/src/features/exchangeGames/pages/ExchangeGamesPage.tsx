import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ExchangeGames from "../components/ExchangeGames";
import SpinnerComponent from "../../global/spinner/components/WaitingComponent";
import NotFoundPage from "../../global/layout/NotFoundPage/NotFoundPage";
import getGamesByUserId from "../../games/services/getGamesByUserId";

const ExchangeGamesPage = () => {
  const dispatch = useAppDispatch();
  const { error, pending, games } = useAppSelector((store) => store.games);

  useEffect(() => {
    dispatch(getGamesByUserId("1"));
  }, [games]);

  if (pending) return <SpinnerComponent />;
  if (error) return <NotFoundPage />;
  return (
    <>
      <ExchangeGames games={games} />
    </>
  );
};

export default ExchangeGamesPage;
