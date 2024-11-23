import React from "react";
import { Breadcrumbs, Link } from "@mui/material";

const BreadcrumbsNav = ({ currentPath, navigateBack }) => {
  return (
    <Breadcrumbs sx={{ marginBottom: 2 }}>
      <Link
        underline="hover"
        color="inherit"
        onClick={() => navigateBack(-1)} // Root level navigation
        sx={{ cursor: "pointer" }}
      >
        Home
      </Link>
      {currentPath.map((folderName, index) => (
        <Link
          key={index}
          underline="hover"
          color="inherit"
          onClick={() => navigateBack(index)}
          sx={{ cursor: "pointer" }}
        >
          {folderName}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
