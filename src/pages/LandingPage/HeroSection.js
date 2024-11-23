import React from "react";
import { Box, Typography, Button } from "@mui/material";
import '../../styles/LandingPage.css'; // For additional styles, if needed

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/hero-bg.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: 3,
      }}
    >
      {/* Hero Title */}
      <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
        Dear Users, You got the Deal.
      </Typography>

      {/* Hero Subtitle */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Make your Data safe, secure and Available as you needed.
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          paddingX: 4,
          paddingY: 1,
          fontSize: "1.2rem",
          textTransform: "none",
          borderRadius: 8,
        }}
        href="/signup" // Navigate to Sign-Up page
      >
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;
