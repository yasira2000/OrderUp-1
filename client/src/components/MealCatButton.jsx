import React from "react";
import "../styles/CustomStylePresets.css";

export default function MealCatButton({
  category,
  isSelected,
  onBtnClick,
  width,
}) {
  return (
    <button
      key={category.id}
      className={`flex flex-col items-center mx-2 focus:outline-none p-2 ${
        isSelected ? "button-pressed shadow-md rounded-3xl " : ""
      }`}
      style={{ width: width }}
      onClick={() => onBtnClick(category.title)}
    >
      <img
        alt={category.title}
        src={category.imgSrc}
        className="max-w-full h-auto"
        style={{
          width: "48px",
          height: "48px",
          transform: isSelected
            ? "rotate(-5deg) scale(0.9)"
            : "rotate(0deg) scale(0.8)",
          transition: "transform 0.3s ease-in-out",
        }}
      />
      <div
        className={`text-center mt-1 text-xs ${
          isSelected
            ? "text-customButtonSelectedText font-medium"
            : "text-black"
        }`}
      >
        {category.title}
      </div>
    </button>
  );
}
