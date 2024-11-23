// export function getFileIcon(type) {
//   switch (type) {
//     case "doc":
//       return "/assets/icons/doc-icon.png"; // Replace with your actual icon path
//     case "image":
//       return "/assets/icons/image-icon.png";
//     case "video":
//       return "/assets/icons/video-icon.png";
//     case "ppt":
//       return "/assets/icons/ppt-icon.png";
//     default:
//       return "/assets/icons/default-icon.png";
//   }
// }



// Helper to get the appropriate icon based on the file type
import { Description, Folder, TableChart, Slideshow } from "@mui/icons-material";

// Helper function to get the appropriate icon based on the file type
const FileIcon = (type) => {
  switch (type) {
    case "document":
      return <Description sx={{ fontSize: 50, color: "#1a73e8" }} />; // Blue icon for documents
    case "folder":
      return <Folder sx={{ fontSize: 50, color: "#34a853" }} />; // Green folder icon
    case "spreadsheet":
      return <TableChart sx={{ fontSize: 50, color: "#fbbc05" }} />; // Yellow table/chart icon
    case "presentation":
      return <Slideshow sx={{ fontSize: 50, color: "#ea4335" }} />; // Red slideshow icon
    default:
      return <Description sx={{ fontSize: 50, color: "#9e9e9e" }} />; // Gray generic document icon
  }
};

export default FileIcon;
