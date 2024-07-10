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
      className={` ${
        filterValue ? "filterButton-pressed" : "filterButton-default"
      }`}
      onClick={handleClick}
    >
      <div className="px-2 text-small-icon-sub-heading">
        {filterDisplayName}
      </div>
    </button>
  );
}

export default FilterButtonPushDown;
