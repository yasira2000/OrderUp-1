import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MealCategories from "../components/MealCatagories";
import FilterSet from "../components/FilterSet";
import FilterButtonPushDown from "../components/FilterButtonPushDown";
import FilterButtonPopUp from "../components/FilterButtonPopUp";
import FilterPopUpMenue from "../components/FilterPopUpMenue";

export default function Home() {
  const mealTypes = [
    "Side Dishes",
    "Drinks",
    "Desserts",
    "Main Courses",
    "Starter",
  ];

  const getDefaultFilters = () => ({
    category: null,
    inStock: false,
    minPrice: "",
    maxPrice: "",
    // Add more filters as needed
  });

  // Use the function to initialize the state
  const [filters, setFilters] = useState(getDefaultFilters);

  // Define a reset function that uses the same function to reset the state
  const resetFilters = () => {
    setFilters(getDefaultFilters());
  };

  const handleSingleValFilters = ({ filterName, value }) => {
    console.log(`${filterName} clicked noti from home: ${value}`);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleToggleFilters = ({ filterName }) => {
    console.log(
      `${filterName} toggled noti from home: ${!filters[filterName]}`
    );
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <div>
      <SearchBar />
      <MealCategories
        iconTitles={mealTypes}
        onCategoryClick={handleSingleValFilters}
        selectedCat={filters.category}
      />
      <FilterSet>
        <FilterButtonPushDown
          filterDisplayName="In Stock"
          filterName={"inStock"}
          onPushdownFilterChange={handleToggleFilters}
          filterValue={filters.inStock}
        />
        <FilterButtonPopUp>
          <FilterPopUpMenue />
        </FilterButtonPopUp>
      </FilterSet>
    </div>
  );
}
