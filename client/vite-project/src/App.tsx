import Header from "./features/global/layout/Header/Header";
import RouterDOM from "./features/global/router/RouterDOM";
import Footer from "./features/global/layout/Footer";
import { useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/global/themes/themes";
import { Box, Container } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Layout from "./features/global/layout/Layout";
import RouterDom from "./features/global/router/RouterDOM";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./features/global/styles/Global";

// import { pullFromLocalStorage } from "./features/cart/cartSlice";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  // const dispatch = useAppDispatch();
  // dispatch(pullFromLocalStorage());
  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <GlobalStyles />
        {/* <ThemeProvider theme={themeMode ? themeLight : themeDark}> */}
        {/* <CssBaseline /> */}
        {/* <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Header />
          <Box
            className="product-grid"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "90%",
              justifyContent: "center",
            }}
          >
            <RouterDOM />
          </Box>
          <Footer />
        </Container> */}
        <Layout>
          <RouterDom />
        </Layout>
      </ThemeProvider>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
