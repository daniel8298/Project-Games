import { useNavigate, useParams } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import SpinnerComponent from "../../spinner/components/WaitingComponent";
import NotFoundError from "../../router/NotFoundError";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import getProduct from "../services/getGame";
import GameDetailsCard from "../components/GameDetails/GameDetailsCard";

const ProductDetailsPage = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, pending, game } = useAppSelector((store) => store.games);

  useEffect(() => {
    dispatch(getProduct(gameId as string));
  }, [game]);
  if (pending) return <SpinnerComponent />;
  if (!game) return <NotFoundError message="game in not found" />;
  if (error) navigate("/store/notFound");

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          position: "fixed",
          top: "100px",
          right: "20px",
        }}
      ></Box>
      <GameDetailsCard game={game} />;
    </>
  );
};
export default ProductDetailsPage;
