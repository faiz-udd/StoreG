// src/components/FilePreviewModal.js
import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { Close, Download } from "@mui/icons-material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  maxHeight: "90vh",
  overflow: "auto",
};

const FilePreviewModal = ({ open, file, onClose }) => {
  if (!file) return null; // No file to preview

  // Render file preview based on type
  const renderFileContent = () => {
    const fileType = file.type || "unknown";

    switch (fileType) {
      case "image":
        return <img src={file.url} alt={file.name} style={{ maxWidth: "100%", maxHeight: "70vh" }} />;
      case "pdf":
        return (
          <iframe
            src={file.url}
            title={file.name}
            style={{ width: "100%", height: "70vh" }}
            frameBorder="0"
          ></iframe>
        );
      case "text":
        return (
          <Box sx={{ whiteSpace: "pre-wrap", maxHeight: "70vh", overflow: "auto" }}>
            {file.content}
          </Box>
        );
      default:
        return <Typography variant="body2">Preview not available for this file type.</Typography>;
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="file-preview-modal">
      <Box sx={modalStyle}>
        {/* Modal Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography id="file-preview-modal" variant="h6" component="h2">
            {file.name}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        {/* File Content */}
        <Box>{renderFileContent()}</Box>

        {/* Footer Actions */}
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Download />}
            href={file.url}
            download={file.name}
          >
            Download
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FilePreviewModal;
