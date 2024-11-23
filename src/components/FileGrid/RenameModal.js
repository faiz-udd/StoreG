import React, { useState } from "react";

function RenameModal({ file, onClose, onRename }) {
  const [newName, setNewName] = useState(file?.name || "");

  const handleRename = () => {
    if (newName.trim() === "") return;
    onRename(file.id, newName);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        {/* Header */}
        <h2 className="text-lg font-bold mb-4">Rename File</h2>

        {/* Input */}
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />

        {/* Footer */}
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-200 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleRename}
          >
            Rename
          </button>
        </div>
      </div>
    </div>
  );
}

export default RenameModal;
