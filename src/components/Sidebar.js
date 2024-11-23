import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography, LinearProgress, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Close, Dashboard, People, Star, Delete, Settings, Help } from "@mui/icons-material";

const Sidebar = ({ isVisible, onClose }) => {
  const items = [
    { text: "My Drive", icon: <Dashboard color="primary" />, link: "/" },
    { text: "Shared with me", icon: <People color="primary" />, link: "/shared" },
    { text: "Starred", icon: <Star color="primary" />, link: "/starred" },
    { text: "Trash", icon: <Delete color="primary" />, link: "/trash" },
  ];

  const bottomItems = [
    { text: "Settings", icon: <Settings color="primary" />, link: "/settings" },
    { text: "Help", icon: <Help color="primary" />, link: "/help" },
  ];

  // Mock storage data
  const storageUsed = 75;
  const totalStorage = 100;

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: 240 },
        bgcolor: "#f9f9f9",
        height: "calc(100vh - 64px)",
        position: { xs: "fixed", sm: "sticky" },
        top: "64px",
        zIndex: { xs: 1000, sm: 1 },
        display: isVisible ? "block" : { xs: "none", sm: "block" },
        boxShadow: { xs: "2px 0 5px rgba(0, 0, 0, 0.2)", sm: "none" },
      }}
    >
      {/* Close Button for Mobile */}
      <Box display={{ sm: "none" }} textAlign="right">
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <List>
        {items.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {bottomItems.map((item, index) => (
          <ListItem button key={index} component={Link} to={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      {/* Storage Usage */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2" color="textSecondary">
          Storage Used: {storageUsed} GB / {totalStorage} GB
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(storageUsed / totalStorage) * 100}
          sx={{ height: 10, borderRadius: 5, mt: 1 }}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
