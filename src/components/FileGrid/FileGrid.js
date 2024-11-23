import React, { useState } from "react";
import { Grid, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FileCard from "./FileCard";
import useFileManager from "../../hooks/useFileManager";
import BreadcrumbsNav from "../../hooks/BreadcrumbsNav";
import AddNewMenu from "../AddNewMenu";
import RenameModal from "./RenameModal";
import filesData from "../../data/files";

function FileGrid({ showAddMenu }) {
  const {
    currentPath,
    currentFiles,
    isFolderEmpty,
    openFolder,
    openFile,
    navigateBack,
    setFiles,
  } = useFileManager(filesData);

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [menuFile, setMenuFile] = useState(null);
  const [renameModalFile, setRenameModalFile] = useState(null);

  const handleMenuOpen = (event, file) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuFile(file);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setMenuFile(null);
  };

  const handleDelete = () => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== menuFile.id));
    handleMenuClose();
  };

  const handleRename = () => {
    setRenameModalFile(menuFile);
    handleMenuClose();
  };

  const handleRenameSave = (fileId, newName) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === fileId ? { ...file, name: newName.trim() } : file
      )
    );
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const fileBlob = new Blob(["This is the file content"], { type: "text/plain" });
    element.href = URL.createObjectURL(fileBlob);
    element.download = menuFile.name;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    handleMenuClose();
  };

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <BreadcrumbsNav currentPath={currentPath} navigateBack={navigateBack} />

      {/* File Grid */}
      <Grid container spacing={2} padding={2}>
        {isFolderEmpty ? (
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{ textAlign: "center", width: "100%" }}
          >
            This folder is empty.
          </Typography>
        ) : (
          currentFiles.map((file) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={file.id}>
              <div style={{ position: "relative" }}>
                <FileCard
                  file={file}
                  onClick={() => {
                    if (file.type === "folder") {
                      openFolder(file);
                    } else {
                      openFile(file);
                    }
                  }}
                />

                {/* Three-dot menu button */}
                <IconButton
                  onClick={(e) => handleMenuOpen(e, file)}
                  style={{ position: "absolute", top: 8, right: 8 }}
                >
                  <MoreVertIcon />
                </IconButton>
              </div>
            </Grid>
          ))
        )}
      </Grid>

            {/* Floating Add New Menu */}
      {showAddMenu && (
        <AddNewMenu
          onAddFile={(newFile) => setFiles((prevFiles) => [...prevFiles, newFile])}
          onAddFolder={(newFolder) => setFiles((prevFiles) => [...prevFiles, newFolder])}
        />
      )}


      {/* Actions Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleRename}>Rename</MenuItem>
        <MenuItem onClick={handleDownload}>Download</MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: "red" }}>
          Delete
        </MenuItem>
      </Menu>

      {/* Rename Modal */}
      {renameModalFile && (
        <RenameModal
          file={renameModalFile}
          onClose={() => setRenameModalFile(null)}
          onRename={handleRenameSave}
        />
      )}
    </div>
  );
}

export default FileGrid;
