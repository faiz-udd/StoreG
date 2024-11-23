import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Define the theme
const theme = createTheme({
  palette: {
    mode: "light", // You can switch to "dark" for a dark theme
  },
});

// Create the root element and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);