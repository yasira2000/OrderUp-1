import React, { useState, useEffect } from "react";
import "../styles/CustomStylePresets.css"; // Adjust the path as necessary

const SnappingSlider = ({ values, onItemSelect, currentSelectedItem }) => {
  const [index, setIndex] = useState(() => {
    // Check if currentSelectedItem is null or undefined
    if (currentSelectedItem !== null && currentSelectedItem !== undefined) {
      return values.indexOf(currentSelectedItem);
    } else {
      return values.length - 2; // Default value when currentSelectedItem is null
    }
  });

  useEffect(() => {
    // Check if onItemSelect is a function before calling it
    if (typeof onItemSelect === "function") {
      onItemSelect(values[index]);
    }
  }, [index, values, onItemSelect]); // Include onItemSelect in the dependency array

  const handleChange = (e) => {
    const newIndex = parseInt(e.target.value, 10);
    setIndex(newIndex);
    onItemSelect(values[newIndex]);
  };

  const trackStyle = {
    background: `linear-gradient(
      to right,
      #ccc 0%,
      #ccc ${(index / (values.length - 1)) * 100}%,
      #f09c67 ${(index / (values.length - 1)) * 100}%,
      #f09c67 100%
    )`,
    height: "2px", // Track height
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between w-4/5 mt-2">
        {values.map((value, i) => (
          <span
            key={i}
            className={`text-small-icon-sub-heading ${
              i === index ? "text-customButtonActiveText font-bold" : ""
            }`}
            style={{ textAlign: "center" }}
          >
            {value}
          </span>
        ))}
      </div>
      <input
        type="range"
        min={0}
        max={values.length - 1}
        step={1}
        value={index}
        onChange={handleChange}
        className="slider appearance-none w-4/5 rounded-lg cursor-pointer m-4"
        style={trackStyle}
      />
    </div>
  );
};

export default SnappingSlider;
