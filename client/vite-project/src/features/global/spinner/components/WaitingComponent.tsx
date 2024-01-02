import { Box, CssBaseline } from "@mui/material";
import { formStyle } from "../formStyle";

const SpinnerComponent = () => {
  return (
    <Box sx={formStyle} data-testid="test-id">
      <CssBaseline />
      <Box
        component="img"
        src="https://media0.giphy.com/media/NqmnZucBsS7IdYkGW2/giphy.gif?cid=ecf05e4760q0gf04dqthfaahwd8see17hzzycpl86zqlof3y&ep=v1_gifs_related&rid=giphy.gif&ct=g"
        width={445}
        sx={{ backgroundColor: "transparent" }}
      />
    </Box>
  );
};

export default SpinnerComponent;
