import React from "react";

export default function TextInput({
  value,
  onChange,
  placeholder = "",
  border = true,
  className = "",
  inputClassName = "",
  rows = 3,
  numericOnly = false,
}) {
  // Function to handle input change and restrict to numbers if numericOnly is true
  const handleChange = (e) => {
    let inputValue = e.target.value;
    if (numericOnly) {
      inputValue = inputValue.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    }
    onChange({ ...e, target: { ...e.target, value: inputValue } });
  };

  return (
    <div className={`relative ${className}`}>
      <textarea
        placeholder={placeholder}
        className={`w-full py-3 pl-4 pr-4 text-gray-500 rounded-3xl outline-none bg-gray-50 focus:bg-white text-icon-sub-heading min ${inputClassName} ${
          border ? "border border-fadedGray" : ""
        }`}
        value={value || ""} // Ensure value is a string
        onChange={handleChange} // Use handleChange function
        rows={rows}
        style={{ minHeight: `${rows * 1.5}rem` }}
      />
    </div>
  );
}
