import { useState } from "react";

const useFileManager = (initialFiles) => {
  const [currentPath, setCurrentPath] = useState([]); // Tracks the current path
  const [currentFiles, setCurrentFiles] = useState(initialFiles); // Tracks the files in the current folder
  const [isFolderEmpty, setIsFolderEmpty] = useState(false); // Indicates if the current folder is empty

  // Open the file with the appropriate application based on the file type
  const openFile = (file) => {
    const fileExtension = file.name.split(".").pop().toLowerCase();

    // Handle file types
    switch (fileExtension) {
      case "pdf":
        window.open(file.url, "_blank"); // Open PDF in browser
        break;
      case "pptx":
      case "ppt":
      case "docx":
      case "doc":
      case "xlsx":
      case "xls":
        window.location.href = file.url; // Let the browser handle office files
        break;
      default:
        window.open(file.url, "_blank"); // Open other files in the browser
        break;
    }
  };

  // Navigate into a folder
  const openFolder = (folder) => {
    setCurrentPath([...currentPath, folder.name]); // Update the path
    if (folder.contents.length === 0) {
      setIsFolderEmpty(true); // Mark folder as empty
    } else {
      setIsFolderEmpty(false);
      setCurrentFiles(folder.contents); // Update current files
    }
  };

  // Navigate back using breadcrumbs
  const navigateBack = (index) => {
    const newPath = currentPath.slice(0, index + 1);
    setCurrentPath(newPath);

    // Traverse back to the folder
    let files = initialFiles;
    for (const folderName of newPath) {
      const folder = files.find((f) => f.name === folderName && f.type === "folder");
      if (folder) files = folder.contents;
    }
    setCurrentFiles(files);
    setIsFolderEmpty(false); // Reset folder empty status
  };

  // Update the current files (e.g., add, delete, or rename files)
  const setFiles = (updateFunction) => {
    const updatedFiles = updateFunction(currentFiles); // Apply the update
    setCurrentFiles(updatedFiles); // Update the state
  };

  return {
    currentPath,
    currentFiles,
    isFolderEmpty,
    openFolder,
    navigateBack,
    openFile,
    setFiles, // Expose setFiles to allow external updates
  };
};

export default useFileManager;
