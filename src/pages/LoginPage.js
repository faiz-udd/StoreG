// src/pages/LoginPage.js
import React from "react";
import LoginForm from "./LoginForm";
import { Box } from "@mui/material";

const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: 3,
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
