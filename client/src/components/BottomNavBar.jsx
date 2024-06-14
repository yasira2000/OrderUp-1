import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { PiCallBellLight } from "react-icons/pi";
import { PiNoteLight } from "react-icons/pi";

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 shadow-2xl border-t border-gray-200 flex justify-around items-center h-16 w-3/5 min-w-[300px] gap-x-0.5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `p-2 flex-1 flex flex-col items-center justify-center text-xs rounded-tl-3xl h-15 ${
            isActive
              ? "text-customButtonSelectedText bg-customButtonSelected h-16"
              : "text-black bg-white"
          }`
        }
      >
        <FiHome className="size-10" style={{ strokeWidth: 1 }} />
      </NavLink>
      <NavLink
        to="/notify"
        className={({ isActive }) =>
          `p-2 flex-1 flex flex-col items-center justify-center text-xs h-15 ${
            isActive
              ? "text-customButtonSelectedText bg-customButtonSelected h-16"
              : "text-black bg-white"
          }`
        }
      >
        <PiCallBellLight className="size-10" style={{ strokeWidth: 1 }} />
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) =>
          `p-2 flex-1 flex flex-col items-center justify-center text-xs rounded-tr-3xl h-15 border-b  ${
            isActive
              ? "text-customButtonSelectedText bg-customButtonSelected h-16"
              : "text-black bg-white"
          }`
        }
      >
        <PiNoteLight className="size-10" style={{ strokeWidth: 1 }} />
      </NavLink>
    </nav>
  );
};

export default BottomNavBar;
