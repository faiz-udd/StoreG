import React from "react";
import { Typography, Box } from "@mui/material";

const HelpPage = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Help
      </Typography>
      <Typography variant="body1">
        How can we assist you? Here are some common help topics.
      </Typography>
      {/* Add help content here */}
    </Box>
  );
};

export default HelpPage;
