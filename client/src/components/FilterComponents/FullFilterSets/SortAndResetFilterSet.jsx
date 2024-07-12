import { useState, useEffect } from "react";
import FilterButtonPushDown from "../FilterButtonPushDown";
import FilterButtonPopUp from "../FilterButtonPopUp";
import FilterPopUpMenue from "../FilterPopUpMenue";

import ButtonSelectionDotGrp from "../../InputComps/ButtonSelectionDotGrp";

export default function SortAndResetFilterSet({
  resetFilters,
  onFilterUpdate,
  appliedFilters,
}) {
  const [filters, setFilters] = useState(appliedFilters);
  const [isPopUpVisible, setIsPopUpVisible] = useState({});

  const handleSingleValPopupFilters = ({ filterName, value }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
    setIsPopUpVisible((prevVisible) => ({
      ...prevVisible,
      [filterName]: false,
    }));
  };

  const enableFilterPopup = ({ filterName }) => {
    setIsPopUpVisible((prevVisible) => ({
      ...prevVisible,
      [filterName]: true,
    }));
  };

  useEffect(() => {
    // Only update the parent if filters have changed
    if (JSON.stringify(filters) !== JSON.stringify(appliedFilters)) {
      onFilterUpdate(filters);
    }
  }, [filters]);

  useEffect(() => {
    // Only update internal state if appliedFilters prop changes
    if (JSON.stringify(filters) !== JSON.stringify(appliedFilters)) {
      setFilters(appliedFilters);
    }
  }, [appliedFilters]);

  return (
    <div>
      <div className="flex flex-row px-8 py-2 flex-shrink-0">
        <div className="px-1">
          <FilterButtonPushDown
            filterDisplayName="Reset"
            filterName={null}
            onPushdownFilterChange={resetFilters}
          />
        </div>
        <div className="px-1">
          <FilterButtonPopUp
            filterDisplayName="Sort"
            filterName="sort"
            onFilterValueChange={enableFilterPopup}
            filterValue={filters.sort}
          />
        </div>
      </div>

      <FilterPopUpMenue
        filterDisplayName="Sort"
        filterName="sort"
        isVisible={isPopUpVisible.sort}
        selectedItem={filters.sort}
        onSubmit={handleSingleValPopupFilters}
        submitButtonText="Apply"
        cancleButtonText="Reset"
      >
        <ButtonSelectionDotGrp
          items={["Name", "Category", "Prep-Time", "Price"]}
        />
      </FilterPopUpMenue>
    </div>
  );
}
