import React from "react";
import { Typography, Button } from "@mui/material";
import { Image } from "../../../exchangeGames/styles/Exchange.styled";
import { ContainerWithFlex } from "../../styles/components/Flex.styled";
const NotFoundPage: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <ContainerWithFlex
      display="inherit"
      flexdirection="column"
      justifycontent="center"
      alignitems="center"
      boxshadow="0 0 10px rgba(0, 0, 0, 0.7)"
    >
      <Image
        hei="470px"
        wid="700px"
        src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
        alt="404"
      />
      <Typography variant="h5" style={{ marginTop: "16px", color: "#333" }}>
        Oops! It looks like you're lost.
      </Typography>
      <Typography
        variant="body1"
        style={{ marginBottom: "16px", color: "#555" }}
      >
        The page you are looking for might be under construction or does not
        exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleRefresh}>
        Refresh Page
      </Button>
      <Typography
        variant="body2"
        style={{ marginTop: "16px", color: "#777" }}
      ></Typography>
      {/* </Paper> */}
    </ContainerWithFlex>
  );
};
export default NotFoundPage;
