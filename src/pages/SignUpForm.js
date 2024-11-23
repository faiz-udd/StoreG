import React, { useState } from "react";
import {
  Box,TextField, Button,Checkbox,FormControlLabel,Typography,Grid,
} from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import apiClient from "../api/apiClient"; // Import the centralized Axios instance

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.termsAccepted) {
      alert("You must accept the Terms & Conditions!");
      return;
    }

    try {
      const response = await apiClient.post("/api/v1/users/signup", {
        username: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("Sign-up successful:", response.data);
      alert("Sign-up Successful! Please log in.");
    } catch (error) {
      console.error("Sign-up error:", error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || "Something went wrong. Please try again.");
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
        Sign Up
      </Typography>
      {errorMessage && (
        <Typography color="error" textAlign="center" gutterBottom>
          {errorMessage}
        </Typography>
      )}
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
      />
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
      <TextField
        fullWidth
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        type="password"
        margin="normal"
        required
      />
      <FormControlLabel
        control={
          <Checkbox
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
        }
        label={
          <Typography variant="body2">
            I agree to the{" "}
            <a href="/terms" style={{ color: "#1a73e8" }}>
              Terms & Conditions
            </a>
            .
          </Typography>
        }
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Sign Up
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
            onClick={() => alert("Google Sign-Up Not Implemented Yet")}
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
            onClick={() => alert("GitHub Sign-Up Not Implemented Yet")}
          >
            GitHub
          </Button>
        </Grid>
      </Grid>
      <Typography textAlign="center" variant="body2" sx={{ marginY: 2 }}>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#1a73e8", textDecoration: "none" }}>
          Log in here
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUpForm;
