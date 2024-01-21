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
  }, [dispatch]);

  if (pending) return <SpinnerComponent />;
  if (error) return <NotFoundPage />;

  console.log("gamesFromUser", gamesFromUser); // Log the data to check if it's empty
  console.log("gamesFromAnotherUser", gamesFromAnotherUser);

  return (
    <>
      <ExchangeGames
        userGames={gamesFromUser}
        userExchange={gamesFromAnotherUser}
      />
    </>
  );
};

export default ExchangeGamesPage;
