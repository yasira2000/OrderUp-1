import React from "react";

export const MainButton = ({ text, onClick }) => {
  return (
    <div className="flex justify-center w-full py-1.5">
      <button
        className="bg-customButtonSelected text-icon-sub-heading text-white shadow-xl rounded-full w-4/5 h-10 flex items-center justify-center py-2"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
