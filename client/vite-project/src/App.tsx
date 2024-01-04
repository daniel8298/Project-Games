// import Header from "./features/global/layout/Header/Header";
// import RouterDOM from "./features/global/router/RouterDOM";
// import Footer from "./features/global/layout/Footer";
import { useAppSelector } from "./store/hooks";
import { themeDark, themeLight } from "./features/global/styles/themes/themes";
// import { Box, Container } from "@mui/material";
// import { CssBaseline } from "@mui/material";
import Layout from "./features/global/layout/Layout";
import RouterDom from "./features/global/router/RouterDOM";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./features/global/styles/components/Global";

// import { pullFromLocalStorage } from "./features/cart/cartSlice";

const App = () => {
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  // const dispatch = useAppDispatch();
  // dispatch(pullFromLocalStorage());
  return (
    <>
      <ThemeProvider theme={themeMode ? themeLight : themeDark}>
        <GlobalStyles />
        <Layout>
          <RouterDom />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
