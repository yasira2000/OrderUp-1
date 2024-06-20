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
      className={`${filterValue ? "button-pressed" : "button-default"}`}
      onClick={handleClick}
    >
      <div className="px-2">{filterDisplayName}</div>
    </button>
  );
}
