import React from "react";

export default function FilterButtonPopUp({
  filterDisplayName,
  filterName,
  onFilterValueChange,
  filterValue,
}) {
  const handleClick = () => {
    onFilterValueChange({
      filterName: filterName,
    });
  };

  return (
    <button
      className={`${
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
