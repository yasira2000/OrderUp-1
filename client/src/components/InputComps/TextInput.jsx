import React from "react";

export default function TextInput({
  value,
  onChange,
  placeholder = "",
  border = true,
  className = "",
  inputClassName = "",
  rows = 3, // Add a rows prop with a default value
}) {
  return (
    <div className={`relative ${className}`}>
      <textarea
        placeholder={placeholder}
        className={`w-full py-3 pl-4 pr-4 text-gray-500 rounded-3xl outline-none bg-gray-50 focus:bg-white text-icon-sub-heading min ${inputClassName} ${
          border ? "border border-fadedGray" : ""
        }`}
        value={value}
        onChange={onChange} // Update state on input change
        rows={rows} // Set the number of rows for the textarea
        style={{ minHeight: `${rows * 1.5}rem` }} // Adjust the minHeight based on the rows
      />
    </div>
  );
}
