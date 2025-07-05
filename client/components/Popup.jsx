import React from "react";

const Popup = ({ noteContent, setNoteContent, onCreate, onClose }) => {
  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-300 text-black px-4 py-3 sm:px-8 sm:py-6 rounded-lg shadow-lg z-50">
      <div className=" flex flex-col items-center justify-center">
        <h1 className="mb-3 sm:mb-5 text-lg sm:text-xl font-semibold text-center">
          Create New Note
        </h1>
        <div className="flex flex-col items-center">
          <textarea
            className="border border-gray-400 rounded-lg mb-3 p-2 resize-none outline-none"
            name="content"
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Write your note here..."
          />
          <div className="flex items-center gap-7">
            <button
              onClick={onCreate}
              type="submit"
              className="bg-blue-600 px-2 py-1 rounded-lg mt-2 text-white cursor-pointer hover:bg-blue-800"
            >
              Create Note
            </button>
            <button
              onClick={onClose}
              type="submit"
              className="bg-blue-600 px-3 py-1 rounded-lg mt-2 text-white cursor-pointer hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
