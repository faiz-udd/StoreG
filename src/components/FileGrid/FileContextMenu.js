import React, { useRef, useEffect } from "react";

function FileContextMenu({ position, onClose, onAction }) {
  const menuRef = useRef(null);

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="absolute bg-white shadow-lg rounded-md py-2 w-40 z-50"
      style={{ top: position.y, left: position.x }}
    >
      <ul className="text-sm text-gray-700">
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onAction("rename")}
        >
          Rename
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onAction("delete")}
        >
          Delete
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onAction("download")}
        >
          Download
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onAction("share")}
        >
          Share
        </li>
      </ul>
    </div>
  );
}

export default FileContextMenu;
