import React, { useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AddNewMenu from "./components/AddNewMenu";
import AppRoutes from "./routes/Routes";
import { Box } from "@mui/material";
import initialFiles from "./data/files";
import initialTrash from "./data/TrashData";
import './App.css';

const App = () => {
  const [files, setFiles] = useState(initialFiles);
  const [trash, setTrash] = useState(initialTrash);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Handle file upload
  const handleUploadFile = (file) => {
    const newFile = {
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    };
    setFiles((prevFiles) => [...prevFiles, newFile]);
  };

  // Handle file deletion
  const handleDeleteFile = (fileId) => {
    const fileToDelete = files.find((file) => file.id === fileId);
    if (fileToDelete) {
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
      setTrash((prevTrash) => [
        ...prevTrash,
        { ...fileToDelete, deletedAt: new Date() },
      ]);
    }
  };

  // Handle file restoration from trash
  const handleRestoreFile = (fileId) => {
    const fileToRestore = trash.find((file) => file.id === fileId);
    if (fileToRestore) {
      setTrash((prevTrash) => prevTrash.filter((file) => file.id !== fileId));
      setFiles((prevFiles) => [...prevFiles, fileToRestore]);
    }
  };

  // Handle permanent file deletion from trash
  const handleDeletePermanently = (fileId) => {
    setTrash((prevTrash) => prevTrash.filter((file) => file.id !== fileId));
  };

  // Handle emptying the trash
  const handleEmptyTrash = () => {
    setTrash([]);
  };

  // Toggle sidebar visibility
  const handleToggleSidebar = () => setSidebarVisible(!isSidebarVisible);
  const handleCloseSidebar = () => setSidebarVisible(false);

  // Get the current route
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <>
      {/* Render Navbar and Sidebar only on HomePage */}
      {isHomePage && (
        <>
          <Navbar onToggleSidebar={handleToggleSidebar} />
          <Sidebar isVisible={isSidebarVisible} onClose={handleCloseSidebar} />
        </>
      )}

      <Box display="flex" minHeight="100vh" flexDirection="column">
        <Box flexGrow={1}>
          <AppRoutes
            files={files}
            trash={trash}
            onDeleteFile={handleDeleteFile}
            onRestoreFile={handleRestoreFile}
            onDeletePermanently={handleDeletePermanently}
            onEmptyTrash={handleEmptyTrash}
          />
        </Box>

        {/* Render Footer only on LandingPage */}
        {location.pathname === "/" && <Footer />}
      </Box>

      {/* File upload menu always available */}
      <AddNewMenu onUploadFile={handleUploadFile} />
    </>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
