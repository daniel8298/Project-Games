import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderSignInButton from "./HeaderSignInButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import HeaderLogOutButton from "./HeaderLogOutButton ";
import { setDecodedToken } from "../../token/tokenSlice";
import { jwtDecode } from "jwt-decode";
import { TokenType } from "../types/token";
import { useEffect } from "react";
// import SideBar from "../../../games/components/SideBar";
import { FlexButtons } from "../../../exchangeGames/styles/Exchange.styled";
import { Logo, Nav } from "../../styles/components/Header.styled";
import { setThemeMode } from "../../styles/themes/themeModeSlice";

const HeaderNavigate = () => {
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
    <Nav>
      <Logo
        src="../../../../../public/ps5-controller.svg"
        alt="controller"
        width={"50px"}
        onClick={() => {
          navigate("/");
        }}
      />
      <FlexButtons>
        {decodedToken === null ? (
          <HeaderSignInButton />
        ) : (
          <HeaderLogOutButton />
        )}
        <IconButton
          onClick={() => {
            dispatch(setThemeMode(!themeMode));
          }}
        >
          {themeMode ? <DarkModeIcon /> : <Brightness7Icon />}
        </IconButton>
        {/* <SideBar /> */}
      </FlexButtons>

      {/* {decodedToken && <ShowOrdersHistory />}  */}
    </Nav>
  );
};

export default HeaderNavigate;
