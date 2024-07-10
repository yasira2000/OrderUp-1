// NavBarButton.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const NavBarButton = ({ to, icon: Icon, position }) => {
  // Determine the correct rounding class based on the position
  const roundingClass = {
    left: "rounded-tl-3xl",
    right: "rounded-tr-3xl",
    middle: "", // No rounding for middle buttons
  }[position];

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `p-2 flex-1 flex flex-col items-center justify-center sha text-xs ${roundingClass} ${
          isActive
            ? "text-customButtonSelectedText bg-customButtonSelected"
            : "text-black bg-white"
        }`
      }
      style={({ isActive }) => ({
        width: "48px",
        height: isActive ? "64px" : "60px",
        transition: "height 0.2s ease-in-out",
        boxShadow:
          "0 -4px 9px -1px rgba(0, 0, 0, 0.1), 0 -2px 10px -1px rgba(0, 0, 0, 0.06)", // Custom shadow casting upwards
      })}
    >
      <Icon className="size-10" style={{ strokeWidth: 1 }} />
    </NavLink>
  );
};

export default NavBarButton;
