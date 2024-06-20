import React from "react";

const FilterSet = ({ children }) => {
  return (
    <div className="flex flex-row gap-4 p-1 px-8 overflow-x-auto items-start scrollbar-hide">
      {children}
    </div>
  );
};

export default FilterSet;
