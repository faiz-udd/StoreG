import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import FileGrid from "../components/FileGrid/FileGrid";
import "../styles/HomePage.css";

const HomePage = ({ files, onDeleteFile, onRestoreFile }) => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Define routes */}
      <Routes>
        {/* Default route to display the FileGrid */}
        <Route
          path="/"
          element={
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FileGrid
                  files={files}
                  onDeleteFile={onDeleteFile}
                  onRestoreFile={onRestoreFile}
                  showAddMenu={true} // Pass true to show AddNewMenu
                />
              </Grid>
            </Grid>
          }
        />
        {/* Add other routes here */}
      </Routes>
    </Box>
  );
};

export default HomePage;
