import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { GameCard } from "../../games/components/GameCard";
import { useAppSelector } from "../../../store/hooks";

const SearchPage = () => {
  const { platforms } = useAppSelector((store) => store.games);
  console.log("categories", platforms);

  return (
    <Container>
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
        {platforms?.length &&
          platforms.map((platforms, i) => (
            <Box
              key={`${platforms._id}-${i}`}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "90%",
                justifyContent: "center",
              }}
            >
              <GameCard game={platforms} />
            </Box>
          ))}
      </Box>
    </Container>
  );
};

export default SearchPage;
