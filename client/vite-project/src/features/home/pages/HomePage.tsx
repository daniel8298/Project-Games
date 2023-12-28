import { Box, Container, CssBaseline } from "@mui/material";
import GamesPage from "../../games/pages/GamesPage";
const HomePage = () => {
  return (
    <>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            right: "20px",
          }}
        ></Box>
        <Box
          sx={{
            position: "fixed",
            top: "100px",
            left: "20px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "70px",
            marginTop: "60px",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GamesPage />
        </Box>
      </Container>
    </>
  );
};
export default HomePage;
