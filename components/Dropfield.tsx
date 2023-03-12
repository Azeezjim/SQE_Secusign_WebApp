import React from "react";

const DocumentInputField = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="relative w-full">
        <input
          className="w-full border rounded-md py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          name="document"
          accept=".doc,.docx,.pdf"
          required
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="h-6 w-6 text-gray-100"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5 4a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1zm4-2a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1zm5 5a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DocumentInputField;
