// import { useNavigate } from "react-router-dom";
// import { Box, Button, Typography } from "@mui/material";
// import { useAppSelector } from "../../../store/hooks";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// const ShowOrdersHistory = () => {
//   const navigate = useNavigate();
//   const { decodedToken } = useAppSelector((store) => store.token);
//   const { token } = useAppSelector((store) => store.users);
//   if (!token) return;
//   const userId = decodedToken && decodedToken._id;
//   return (
//     <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
//       <>
//         <Typography sx={{ mt: "5px" }}>
//           Hey: {decodedToken && decodedToken.email}
//         </Typography>

//         <Button
//           color="inherit"
//           onClick={() => navigate(`/store/order-details/${userId}`)}
//           sx={{ ml: "5px", mr: "5px", backgroundColor: "green" }}
//         >
//           Add Your Product <AddCircleIcon />
//         </Button>
//       </>
//     </Box>
//   );
// };

// export default ShowOrdersHistory;

/////////////////////////////////////////////////////////------------

import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import { setDecodedToken } from "../../token/tokenSlice";
import { removeToken } from "../../users/services/localStorageService";
import { useDispatch } from "react-redux";
const ShowOrdersHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { decodedToken } = useAppSelector((store) => store.token);
  const { token } = useAppSelector((store) => store.users);
  if (!token) return;
  const userId = decodedToken && decodedToken._id;

  const settings = ["Logout"];

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const stringToColor = (string: string) => {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  const stringAvatar = (email: string) => {
    return {
      sx: {
        bgcolor: stringToColor(email),
      },
      children: `${email.split(" ")[0][0]}`,
    };
  };

  return (
    <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              {...stringAvatar(
                decodedToken ? decodedToken && decodedToken.email : ""
              )}
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <Typography sx={{ margin: "10px", color: "lightblue" }}>
            {decodedToken && (decodedToken.email as string)}
          </Typography>
          {settings.map((setting) => (
            <MenuItem
              key={setting}
              onClick={() => {
                handleCloseUserMenu();
                if (setting === "Logout") {
                  navigate("/store/home");
                  removeToken();
                  dispatch(setDecodedToken(null));
                }
              }}
            >
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Button
        color="inherit"
        onClick={() => navigate(`/store/order-details/${userId}`)}
        sx={{ ml: "5px", mr: "5px", backgroundColor: "green" }}
      >
        Add Your Product <AddCircleIcon />
      </Button>
    </Box>
  );
};

export default ShowOrdersHistory;

//////////////////////
