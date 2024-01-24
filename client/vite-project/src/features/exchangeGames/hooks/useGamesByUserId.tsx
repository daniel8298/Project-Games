// useGamesByUserId.js
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import getGamesByUserId from "../services/getGamesByUserId";

const useGamesByUserId = (userId: string) => {
  const dispatch = useAppDispatch();
  const { gamesFromUser } = useAppSelector((store) => store.exchangeGames);

  useEffect(() => {
    dispatch(getGamesByUserId(userId));
  }, [userId]);

  return { gamesFromUser };
};

export default useGamesByUserId;
