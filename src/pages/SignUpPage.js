// src/pages/SignUpPage.js
import React from "react";
import SignUpForm from "./SignUpForm";
import { Box } from "@mui/material";

const SignUpPage = () => {
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
      <SignUpForm />
    </Box>
  );
};

export default SignUpPage;
