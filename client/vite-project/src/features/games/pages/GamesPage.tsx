import { useEffect } from "react";
import { ProductCard } from "../components/GameCard";
import { Box, CssBaseline, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import SpinnerComponent from "../../spinner/components/WaitingComponent";
import NotFoundPage from "../../layout/NotFoundPage/NotFoundPage";
import getAllGames from "../services/getAllGames";

const GamesPage = () => {
  const dispatch = useAppDispatch();
  const { error, pending, games } = useAppSelector((store) => store.games);

  useEffect(() => {
    dispatch(getAllGames());
  }, [games]);

  if (pending) return <SpinnerComponent />;
  if (error) return <NotFoundPage />;

  return (
    <>
      <CssBaseline />
      <Typography
        sx={{ textAlign: "center", marginBottom: "30px" }}
      ></Typography>
      <Box
        className="product-grid"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "90%",
          justifyContent: "center",
        }}
      >
        {games?.length &&
          games.map((game, i) => (
            <Box
              key={`${game.name}-${i}`}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "90%",
                justifyContent: "center",
              }}
            >
              <ProductCard game={game} />
            </Box>
          ))}
      </Box>
    </>
  );
};

export default GamesPage;
