import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";
import SpinnerComponent from "../../global/spinner/components/WaitingComponent";
import NotFoundError from "../../global/router/NotFoundError";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import GameDetailsCard from "../components/GameDetails/GameDetailsCard";
import getGame from "../services/getGame";

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, pending, game } = useAppSelector((store) => store.games);

  useEffect(() => {
    dispatch(getGame(gameId as string));
  }, [game]);
  if (pending) return <SpinnerComponent />;
  if (!game) return <NotFoundError message="Game a not found!" />;
  if (error) navigate("/notFound");

  return (
    <>
      <GameDetailsCard game={game} />;
    </>
  );
};
export default GameDetailsPage;
