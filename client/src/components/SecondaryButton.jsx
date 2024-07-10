import React from "react";

export const SecondaryButton = ({ text, onClick }) => {
  return (
    <div className="flex justify-center w-full py-1.5">
      <button
        className="bg-primeColor text-customButtonActiveText text-icon-sub-heading shadow-xl rounded-full w-4/5 h-10 flex items-center justify-center py-2"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
