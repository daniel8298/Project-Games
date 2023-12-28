import React from "react";
import { Typography, Button, Container, Paper } from "@mui/material";
const NotFoundPage: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "40px", minHeight: "80vh" }}>
      <Paper elevation={2} style={{ padding: "45px", textAlign: "center" }}>
        <img
          src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
          alt="404"
          style={{ maxWidth: "80%" }}
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
      </Paper>
    </Container>
  );
};
export default NotFoundPage;
