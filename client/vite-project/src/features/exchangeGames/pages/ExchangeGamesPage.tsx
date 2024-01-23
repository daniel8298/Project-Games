import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ExchangeGames from "../components/ExchangeGames";
import SpinnerComponent from "../../global/spinner/components/WaitingComponent";
import NotFoundPage from "../../global/layout/NotFoundPage/NotFoundPage";
import getGamesByUserId from "../services/getGamesByUserId";
import getGamesByAnotherUserId from "../services/getGamesByAnotherUserId";

const ExchangeGamesPage = () => {
  const dispatch = useAppDispatch();
  const { error, pending, gamesFromUser } = useAppSelector(
    (store) => store.exchangeGames
  );
  const { gamesFromAnotherUser } = useAppSelector(
    (store) => store.exchangeGames
  );

  useEffect(() => {
    dispatch(getGamesByUserId("1"));
    dispatch(getGamesByAnotherUserId("2"));
  }, []);

  if (pending) return <SpinnerComponent />;
  if (error) return <NotFoundPage />;

  return (
    <>
      <ExchangeGames
        userGames={gamesFromUser}
        userSwapGames={gamesFromAnotherUser}
      />
    </>
  );
};

export default ExchangeGamesPage;
