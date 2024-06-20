import React from "react";
import "../styles/CustomStylePresets.css";

function FilterButtonPushDown({
  filterDisplayName,
  filterName,
  onPushdownFilterChange,
  filterValue,
}) {
  const handleClick = () => {
    onPushdownFilterChange({
      filterName: filterName,
    });
  };

  return (
    <button
      className={` ${filterValue ? "button-pressed" : "button-default"}`}
      onClick={handleClick}
    >
      <div className="px-2">{filterDisplayName}</div>
    </button>
  );
}

export default FilterButtonPushDown;
