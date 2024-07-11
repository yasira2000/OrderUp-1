import React from "react";
import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import TempLogo from "../../assets/Icons/Logo-Order-Up.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full bg-customBackground border-b z-10 sticky top-0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <img className="h-auto max-w-40" src={TempLogo} alt="Temp Logo" />
        </Link>
        <div className="flex space-x-4">
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              `rounded-full p-2 transition duration-200 ${
                isActive
                  ? "bg-customButtonSelected text-customButtonSelectedText"
                  : "bg-white hover:bg-gray-200 text-black"
              }`
            }
          >
            <AiOutlineBell className="size-8" />
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `rounded-full p-2 transition duration-200 ${
                isActive
                  ? "bg-customButtonSelected text-customButtonSelectedText"
                  : "bg-white hover:bg-gray-200 text-black"
              }`
            }
          >
            <GoPerson className="size-8" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
