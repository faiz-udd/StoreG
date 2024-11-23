import React from "react";
import { Card, CardContent, Typography, CardActionArea, CardActions, Button } from "@mui/material";
import getFileIcon from "../../utils/fileIcons";

const FileCard = ({ file, onClick, actionLabel = "Open", actionColor = "primary", onActionClick }) => {
  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardActionArea
        sx={{
          padding: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick} // Handles file/folder click event
      >
        {/* File Icon */}
        <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 bg-gray-100 rounded-full">
          {getFileIcon(file.type)} {/* Use icon helper from utils */}
        </div>

        {/* File Details */}
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: file.type === "folder" ? "#34a853" : "#000",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {file.name}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Modified: {file.modified}
          </Typography>
        </CardContent>
      </CardActionArea>
      {onActionClick && (
        <CardActions>
          <Button
            size="small"
            color={actionColor}
            onClick={onActionClick}
            sx={{ textTransform: "capitalize", margin: "auto" }}
          >
            {actionLabel}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default FileCard;
