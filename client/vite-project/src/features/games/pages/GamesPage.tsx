import { useEffect } from "react";
import { GameCard } from "../components/GameCard";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import SpinnerComponent from "../../global/spinner/components/WaitingComponent";
import NotFoundPage from "../../global/layout/NotFoundPage/NotFoundPage";
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
    <Container>
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
              key={`${game._id}-${i}`}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "90%",
                justifyContent: "center",
              }}
            >
              <GameCard game={game} />
            </Box>
          ))}
      </Box>
    </Container>
  );
};

export default GamesPage;
