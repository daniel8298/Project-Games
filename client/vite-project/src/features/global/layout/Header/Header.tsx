import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Box, IconButton, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderSignInButton from "./HeaderSignInButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setThemeMode } from "../../themes/themeModeSlice";
import ShowOrdersHistory from "../HeaderLoggedIn/ShowOrdersHistory";
import HeaderLogOutButton from "./HeaderLogOutButton ";
import { setDecodedToken } from "../../token/tokenSlice";
import { jwtDecode } from "jwt-decode";
import { TokenType } from "../types/token";
import { useEffect } from "react";
import SideBar from "../../../games/components/SideBar";
import GamepadIcon from "@mui/icons-material/Gamepad";

const Header = () => {
  const navigate = useNavigate();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const { decodedToken } = useAppSelector((store) => store.token);
  const { token } = useAppSelector((store) => store.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (token) {
      dispatch(setDecodedToken(jwtDecode(token) as TokenType));
    } else {
      dispatch(setDecodedToken(null));
    }
  }, [token]);
  return (
    <AppBar position="fixed" sx={{ width: "100%", backgroundColor: "#ffab40" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex" }}>
            <IconButton
              onClick={() => {
                navigate("/store/home");
              }}
              sx={{
                display: { xs: "inline-flex", md: "inline-flex" },
                marginRight: 2,
                color: "inherit",
              }}
            >
              <GamepadIcon
                sx={{
                  width: 30,
                  height: 30,
                }}
              />
            </IconButton>

            {decodedToken && <ShowOrdersHistory />}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          ></Box>
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            {decodedToken === null ? (
              <HeaderSignInButton />
            ) : (
              <HeaderLogOutButton />
            )}
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                dispatch(setThemeMode(!themeMode));
              }}
              color="inherit"
            >
              {themeMode ? <DarkModeIcon /> : <Brightness7Icon />}
            </IconButton>
            <SideBar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
