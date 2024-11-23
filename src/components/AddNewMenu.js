import React, { useRef, useState } from "react";
import { Fab, Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from "@mui/material";
import { Add, CloudUpload, CreateNewFolder } from "@mui/icons-material";

const AddNewMenu = ({ onAddFile, onAddFolder }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // Upload state
  const fileInputRef = useRef(null);
  const open = Boolean(anchorEl);

  // Handle floating button click to open the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);

      // Simulate file upload
      setTimeout(() => {
        const mockUploadedFile = {
          id: Date.now(), // Unique ID for the file
          name: file.name,
          type: file.type.split("/")[0], // Extract main type (e.g., "image", "video")
          size: `${(file.size / 1024).toFixed(2)} KB`, // File size in KB
          modified: new Date().toLocaleDateString(), // Current date
        };
        onAddFile(mockUploadedFile); // Pass the uploaded file to parent handler
        setIsUploading(false);
        handleClose();
      }, 1000);
    }
  };

  // Trigger file input dialog programmatically
  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  // Handle adding a new folder
  const handleAddFolder = () => {
    const newFolder = {
      id: Date.now(),
      name: "New Folder",
      type: "folder",
      size: "-",
      modified: new Date().toLocaleDateString(),
    };
    onAddFolder(newFolder); // Add new folder
    handleClose();
  };

  return (
    <>
      {/* Floating action button */}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <Add />
      </Fab>

      {/* Menu with file upload and folder creation options */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {/* Upload File Option */}
        <MenuItem onClick={triggerFileUpload}>
          <ListItemIcon>
            <CloudUpload fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {isUploading ? "Uploading..." : "Upload File"}
          </ListItemText>
        </MenuItem>

        {/* Create New Folder Option */}
        <MenuItem onClick={handleAddFolder}>
          <ListItemIcon>
            <CreateNewFolder fontSize="small" />
          </ListItemIcon>
          <ListItemText>Create New Folder</ListItemText>
        </MenuItem>
      </Menu>

      {/* Hidden file input for triggering file upload */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
        disabled={isUploading}
      />
    </>
  );
};

export default AddNewMenu;
