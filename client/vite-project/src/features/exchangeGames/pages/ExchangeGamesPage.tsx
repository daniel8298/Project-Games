import ExchangeGames from "../components/ExchangeGames";
import SpinnerComponent from "../../global/spinner/components/WaitingComponent";
import NotFoundPage from "../../global/layout/NotFoundPage/NotFoundPage";
import useGamesByUserSwapId from "../hooks/useGamesByUserSwapId";
import useGamesByUserId from "../hooks/useGamesByUserId";
import { useParams } from "react-router-dom";

const ExchangeGamesPage = () => {
  const { userId } = useParams();
  const { error, pending, gamesFromUserSwap } = useGamesByUserSwapId(
    userId as string
  );
  const { gamesFromUser } = useGamesByUserId("6");

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
