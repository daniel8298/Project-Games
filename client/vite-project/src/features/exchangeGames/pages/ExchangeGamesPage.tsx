import { useAppSelector } from "../../../store/hooks";
import ExchangeGames from "../components/ExchangeGames";
import SpinnerComponent from "../../global/spinner/components/WaitingComponent";
import NotFoundPage from "../../global/layout/NotFoundPage/NotFoundPage";
import useGamesByUserSwapId from "../hooks/useGamesByUserSwapId";
import useGamesByUserId from "../hooks/useGamesByUserId";

const ExchangeGamesPage = () => {
  const { userSwapId } = useAppSelector((store) => store.exchangeGames);
  const { error, pending, gamesFromUserSwap } =
    useGamesByUserSwapId(userSwapId);
  const { gamesFromUser } = useGamesByUserId("1");

  if (pending) return <SpinnerComponent />;
  if (error) return <NotFoundPage />;

  return (
    <>
      <ExchangeGames
        userGames={gamesFromUser}
        userSwapGames={gamesFromUserSwap}
      />
    </>
  );
};

export default ExchangeGamesPage;
