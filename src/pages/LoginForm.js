import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import apiClient from "../api/apiClient";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiClient.post("/api/v1/users/login", {
        email: formData.email,
        password: formData.password,
      });

      const { token } = response.data;
      localStorage.setItem("authToken", token);
      console.log("Login successful:", response.data);
      alert("Login Successful!");
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || "Invalid credentials. Please try again.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: "auto",
        marginTop: 4,
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom>
        Log In
      </Typography>
      {errorMessage && (
        <Typography color="error" textAlign="center" gutterBottom>
          {errorMessage}
        </Typography>
      )}
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
        margin="normal"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Log In
      </Button>
      <Typography textAlign="center" variant="body2" sx={{ marginY: 2 }}>
        OR
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<Google />}
            onClick={() => alert("Google Login Not Implemented Yet")}
          >
            Google
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<GitHub />}
            onClick={() => alert("GitHub Login Not Implemented Yet")}
          >
            GitHub
          </Button>
        </Grid>
      </Grid>
      <Typography textAlign="center" variant="body2" sx={{ marginY: 2 }}>
        Don't have an account?{" "}
        <Link to="/signup" style={{ color: "#1a73e8", textDecoration: "none" }}>
          Sign up here
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
