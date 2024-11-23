import React, { useState } from "react";

function UploadButton({ onFileUpload }) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);

      // Simulate upload process
      setTimeout(() => {
        const mockUploadedFile = {
          id: Date.now(), // Mock unique ID
          name: file.name,
          type: file.type.split("/")[0], // Extract file type (e.g., "image", "video")
          size: `${(file.size / 1024).toFixed(2)} KB`, // Convert size to KB
          modified: new Date().toLocaleDateString(),
        };
        onFileUpload(mockUploadedFile);
        setIsUploading(false);
      }, 1000);
    }
  };

  return (
    <div>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
        {isUploading ? "Uploading..." : "Upload"}
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          disabled={isUploading}
        />
      </label>
    </div>
  );
}

export default UploadButton;
