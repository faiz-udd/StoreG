import React from "react";
import { Typography, Box, Button } from "@mui/material";

const SettingsPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Settings
      </Typography>
      {/* Add various setting options here */}
      <Button variant="contained" color="primary">
        Change Password
      </Button>
      <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
        Log Out
      </Button>
    </Box>
  );
};

export default SettingsPage;
