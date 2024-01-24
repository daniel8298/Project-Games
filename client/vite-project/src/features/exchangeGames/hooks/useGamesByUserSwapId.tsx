// useGamesByUserId.js
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import getGamesByUserSwapId from "../services/getGamesByUserSwapId";

const useGamesByUserSwapId = (userId: string) => {
  const dispatch = useAppDispatch();
  const { error, pending, gamesFromUserSwap } = useAppSelector(
    (store) => store.exchangeGames
  );

  useEffect(() => {
    dispatch(getGamesByUserSwapId(userId));
  }, [userId]);

  return { error, pending, gamesFromUserSwap };
};

export default useGamesByUserSwapId;
