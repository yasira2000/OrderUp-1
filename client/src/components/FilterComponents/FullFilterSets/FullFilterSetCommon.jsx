import { useState, useEffect } from "react";
import FilterSet from "../FilterSet";
import FilterButtonPushDown from "../FilterButtonPushDown";
import FilterButtonPopUp from "../FilterButtonPopUp";
import FilterPopUpMenue from "../FilterPopUpMenue";

import ButtonPushDownGroup from "../../InputComps/ButtonPushDownGroup";
import ButtonSelectionDotGrp from "../../InputComps/ButtonSelectionDotGrp";
import SnappingSlider from "../../InputComps/SnappingSlider";

export default function FullFilterSetCommon({
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

  const handleToggleFilters = ({ filterName }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
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
      <FilterSet>
        <FilterButtonPushDown
          filterDisplayName="In Stock"
          filterName="inStock"
          onPushdownFilterChange={handleToggleFilters}
          filterValue={filters.inStock}
        />
        <FilterButtonPopUp
          filterDisplayName="Price"
          filterName="maxPrice"
          onFilterValueChange={enableFilterPopup}
          filterValue={filters.maxPrice}
        />
        <FilterButtonPopUp
          filterDisplayName="Time"
          filterName="time"
          onFilterValueChange={enableFilterPopup}
          filterValue={filters.time}
        />
        <FilterButtonPopUp
          filterDisplayName="Rating"
          filterName="rating"
          onFilterValueChange={enableFilterPopup}
          filterValue={filters.rating}
        />
      </FilterSet>

      <FilterPopUpMenue
        filterDisplayName="Price"
        filterName="maxPrice"
        isVisible={isPopUpVisible.maxPrice}
        selectedItem={filters.maxPrice}
        onSubmit={handleSingleValPopupFilters}
        submitButtonText="Apply"
        cancleButtonText="Reset"
      >
        <ButtonPushDownGroup items={["$", "$$", "$$$", "$$$$"]} />
      </FilterPopUpMenue>
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
      <FilterPopUpMenue
        filterDisplayName="Time"
        filterName="time"
        isVisible={isPopUpVisible.time}
        selectedItem={filters.time}
        onSubmit={handleSingleValPopupFilters}
        submitButtonText="Apply"
        cancleButtonText="Reset"
      >
        <ButtonPushDownGroup
          items={["less than 15 min", "15-30 min", "more than 30 min"]}
        />
      </FilterPopUpMenue>
      <FilterPopUpMenue
        filterDisplayName="Rating"
        filterName="rating"
        isVisible={isPopUpVisible.rating}
        selectedItem={filters.rating}
        onSubmit={handleSingleValPopupFilters}
        submitButtonText="Apply"
        cancleButtonText="Reset"
      >
        <SnappingSlider values={[3, 3.5, 4, 4.5, 5]} />
      </FilterPopUpMenue>
    </div>
  );
}
