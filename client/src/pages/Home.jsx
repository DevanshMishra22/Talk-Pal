import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      bgcolor={"#433e3e"}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant="h5" color="white" textAlign={"center"}>
        Select Your friend to chat 😁
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
