import { SwipeableDrawer, Button, Box, Badge } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Platforms } from "./Platforms";
const SideBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") return;
      setOpen(open);
    };
  return (
    <Box>
      <Box component={Button} onClick={() => setOpen(true)} variant="outlined">
        <Badge color="primary">
          <MenuIcon sx={{ color: "white" }} />
        </Badge>
      </Box>
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Platforms />
      </SwipeableDrawer>
    </Box>
  );
};
export default SideBar;
