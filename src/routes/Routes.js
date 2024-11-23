import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"; // Home page component
import TrashPage from "../pages/TrashPage"; // Trash page component
import SettingsPage from "../pages/SettingsPage"; // Settings page component
import HelpPage from "../pages/HelpPage"; // Help page component
import LandingPage from "../pages/LandingPage/LandingPage"; // Landing page component
import SignUpPage from "../pages/SignUpPage"; // Sign-up page component
import LoginPage from "../pages/LoginPage"; // Login page component
import AddNewMenu from "../components/AddNewMenu"; // Floating action button component

const AppRoutes = ({
  files,
  trash,
  onDeleteFile,
  onRestoreFile,
  onDeletePermanently,
  onEmptyTrash,
  onAddFile,
  onAddFolder,
}) => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Sign-Up Page */}
      <Route path="/signup" element={<SignUpPage />} />

      {/* Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Home Page with AddNewMenu */}
      <Route
          path="/home"
          element={
            <HomePage
              files={files}
              onDeleteFile={onDeleteFile}
              onRestoreFile={onRestoreFile}
            />
          }
        />

      {/* Trash Page */}
      <Route
        path="/trash"
        element={
          <TrashPage
            trash={trash}
            onRestoreFile={onRestoreFile}
            onDeletePermanently={onDeletePermanently}
            onEmptyTrash={onEmptyTrash}
          />
        }
      />

      {/* Settings Page */}
      <Route path="/settings" element={<SettingsPage />} />

      {/* Help Page */}
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
};

export default AppRoutes;
