import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, InputBase, IconButton, Box } from "@mui/material";
import { Search, Apps, AccountCircle, Menu } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

const SearchBar = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#f1f3f4", 0.15),
  "&:hover": {
    backgroundColor: alpha("#f1f3f4", 0.25),
  },
  marginLeft: theme.spacing(3),
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "40ch",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Navbar = ({ onToggleSidebar }) => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        {/* Menu Toggle Button for Mobile */}
        <IconButton
          color="primary"
          edge="start"
          sx={{ display: { sm: "none" }, mr: 2 }}
          onClick={onToggleSidebar}
        >
          <Menu />
        </IconButton>

        {/* Logo */}
        <DriveEtaIcon color="primary" sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          noWrap
          sx={{ display: { xs: "none", sm: "block" }, color: "#1a73e8" }}
        >
          Google Drive Clone
        </Typography>

        {/* Search Bar */}
        <SearchBar>
          <Box
            sx={{
              padding: "0 16px",
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Search />
          </Box>
          <StyledInputBase
            placeholder="Search in Drive…"
            inputProps={{ "aria-label": "search" }}
          />
        </SearchBar>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Icons */}
        <IconButton color="primary">
          <Apps />
        </IconButton>
        <IconButton color="primary">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
