import React from "react";
import {
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@mui/material";
import { Restore, DeleteForever } from "@mui/icons-material";
import FileCard from "../components/FileGrid/FileCard";

const TrashPage = ({ trash, onRestoreFile, onDeletePermanently, onEmptyTrash }) => {
  const handleRestore = (file) => {
    onRestoreFile(file.id); // Restore file to the main list
  };

  const handleDeletePermanently = (file) => {
    onDeletePermanently(file.id); // Permanently delete the file
  };

  return (
    <Box padding={3}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: "center", color: "#1a73e8", fontWeight: "bold" }}
      >
        Trash
      </Typography>

      {trash.length === 0 ? (
        <Typography
          variant="h6"
          color="textSecondary"
          sx={{ textAlign: "center", marginTop: 4 }}
        >
          Your trash is empty.
        </Typography>
      ) : (
        <>
          <Grid container spacing={3} sx={{ marginBottom: 3 }}>
            {trash.map((file) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={file.id}>
                <FileCard
                  file={file}
                  actionLabel="Restore"
                  actionColor="success"
                  onActionClick={() => handleRestore(file)}
                />
                <Box display="flex" justifyContent="space-between" marginTop={1}>
                  <IconButton
                    color="success"
                    onClick={() => handleRestore(file)}
                  >
                    <Restore />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeletePermanently(file)}
                  >
                    <DeleteForever />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="right">
            <Button
              variant="contained"
              color="error"
              onClick={onEmptyTrash}
              sx={{ marginTop: 2 }}
            >
              Empty Trash
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TrashPage;
