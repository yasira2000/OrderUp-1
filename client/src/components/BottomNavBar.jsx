import React from "react";

const BottomNavBar = ({ children }) => {
  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 shadow-2xl border-t border-gray-200 flex justify-around items-center h-16 w-3/5 min-w-[300px] gap-x-0.5">
      {children}
    </nav>
  );
};

export default BottomNavBar;
