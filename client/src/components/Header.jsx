import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import TempLogo from "../Images/Temp-Logo-Order-Up.png"; // Adjust path as necessary

export default function Header() {
  return (
    <Navbar className="border-b flex flex-col gap-3 p-4 sm:p-6 bg-customBackground">
      <div className="flex items-center justify-between w-full ">
        <Link to="/">
          <img className="h-auto max-w-40" src={TempLogo} alt="Temp Logo" />
        </Link>
        <div className="flex space-x-4">
          <div className="bg-white rounded-3xl p-1 w-12 h-11 flex items-center justify-center">
            <Link to="/notifications">
              <AiOutlineBell size={32} />
            </Link>
          </div>
          <div className="bg-white rounded-3xl p-1 w-12 h-11 flex items-center justify-center">
            <Link to="/profile">
              <GoPerson size={32} />
            </Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
