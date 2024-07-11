import { useState, useEffect } from "react";
import FilterSet from "../FilterSet";
import FilterButtonPushDown from "../FilterButtonPushDown";
import FilterButtonPopUp from "../FilterButtonPopUp";
import FilterPopUpMenue from "../FilterPopUpMenue";

import ButtonPushDownGroup from "../../InputComps/ButtonPushDownGroup";
import ButtonSelectionDotGrp from "../../InputComps/ButtonSelectionDotGrp";
import SnappingSlider from "../../InputComps/SnappingSlider";
import ButtonSelectionTickGrp from "../../InputComps/ButtonSelectionTickGrp";

export default function FullFilterSetMainCourse({
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
        <FilterButtonPopUp
          filterDisplayName="Types"
          filterName="types"
          onFilterValueChange={enableFilterPopup}
          filterValue={filters.types}
        />
        <FilterButtonPopUp
          filterDisplayName="Dietary"
          filterName="dietary"
          onFilterValueChange={enableFilterPopup}
          filterValue={filters.dietary}
        />
        <FilterButtonPopUp
          filterDisplayName="Cuisine"
          filterName="cuisine"
          onFilterValueChange={enableFilterPopup}
          filterValue={filters.cuisine}
        />

        <FilterButtonPopUp
          filterDisplayName="Portion"
          filterName="portion"
          onFilterValueChange={enableFilterPopup}
          filterValue={filters.portion}
        />
      </FilterSet>

      <FilterPopUpMenue
        filterDisplayName="Types"
        filterName="types"
        isVisible={isPopUpVisible.types}
        selectedItem={filters.types}
        onSubmit={handleSingleValPopupFilters}
        submitButtonText="Apply"
        cancleButtonText="Reset"
      >
        <ButtonSelectionTickGrp
          items={[
            "Rice and Curry",
            "Fried Rice",
            "Submarine",
            "Pizza",
            "Pasta",
            "Noodles",
          ]}
        />
      </FilterPopUpMenue>

      <FilterPopUpMenue
        filterDisplayName="Dietary"
        filterName="dietary"
        isVisible={isPopUpVisible.dietary}
        selectedItem={filters.dietary}
        onSubmit={handleSingleValPopupFilters}
        submitButtonText="Apply"
        cancleButtonText="Reset"
      >
        <ButtonSelectionTickGrp
          items={[
            "Vegetarian",
            "Vegan",
            "Gluten-Free",
            "Dairy-Free",
            "Nut-Free",
            "Halal",
          ]}
        />
      </FilterPopUpMenue>
      <FilterPopUpMenue
        filterDisplayName="Cuisine"
        filterName="cuisine"
        isVisible={isPopUpVisible.cuisine}
        selectedItem={filters.cuisine}
        onSubmit={handleSingleValPopupFilters}
        submitButtonText="Apply"
        cancleButtonText="Reset"
      >
        <ButtonSelectionTickGrp
          items={[
            "Italian",
            "Chinese",
            "Mexican",
            "Indian",
            "Japanese",
            "Sri Lankan",
          ]}
        />
      </FilterPopUpMenue>

      <FilterPopUpMenue
        filterDisplayName="Portion"
        filterName="portion"
        isVisible={isPopUpVisible.portion}
        selectedItem={filters.portion}
        onSubmit={handleSingleValPopupFilters}
        submitButtonText="Apply"
        cancleButtonText="Reset"
      >
        <ButtonSelectionDotGrp
          items={["Single", "Couples Pac", "3 person", "Savan"]}
        />
      </FilterPopUpMenue>
    </div>
  );
}
