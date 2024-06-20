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
    maxPrice: { value: null, tabOpen: false },
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

  const handleSingleValPopupFilters = ({ filterName, value }) => {
    console.log(`${filterName} clicked noti from home: ${value}`);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: {
        ...prevFilters[filterName],
        value: value,
      },
    }));
  };

  const enableFilterPopup = ({ filterName }) => {
    console.log(`${filterName} clicked noti from home`);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: {
        ...prevFilters[filterName],
        tabOpen: true,
      },
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
        <FilterButtonPopUp
          filterDisplayName="Price"
          filterName={"maxPrice"}
          onFilterValueChange={enableFilterPopup}
          filterValue={filters.maxPrice.value}
        />
      </FilterSet>

      <FilterPopUpMenue
        filterDisplayName="Price"
        filterName={"maxPrice"}
        isVisible={filters.maxPrice.tabOpen}
        items={["$10", "$20", "$30", "$40", "$50"]} // Example price ranges
        selectedItem={filters.maxPrice.value}
        // onReset={resetFilters}
        onSubmit={handleSingleValPopupFilters}
      />

      <div>
        <div className="border rounded-lg p-4 shadow-md m-2 bg-white">
          <h3 className="text-lg font-semibold">dfdassdf</h3>
          <p className="text-gray-500">sdfsadfs</p>
          <p className="text-gray-700">{true ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-900">$345</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md m-2 bg-white">
          <h3 className="text-lg font-semibold">dfdassdf</h3>
          <p className="text-gray-500">sdfsadfs</p>
          <p className="text-gray-700">{true ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-900">$345</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md m-2 bg-white">
          <h3 className="text-lg font-semibold">dfdassdf</h3>
          <p className="text-gray-500">sdfsadfs</p>
          <p className="text-gray-700">{true ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-900">$345</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md m-2 bg-white">
          <h3 className="text-lg font-semibold">dfdassdf</h3>
          <p className="text-gray-500">sdfsadfs</p>
          <p className="text-gray-700">{true ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-900">$345</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md m-2 bg-white">
          <h3 className="text-lg font-semibold">dfdassdf</h3>
          <p className="text-gray-500">sdfsadfs</p>
          <p className="text-gray-700">{true ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-900">$345</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md m-2 bg-white">
          <h3 className="text-lg font-semibold">dfdassdf</h3>
          <p className="text-gray-500">sdfsadfs</p>
          <p className="text-gray-700">{true ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-900">$345</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md m-2 bg-white">
          <h3 className="text-lg font-semibold">dfdassdf</h3>
          <p className="text-gray-500">sdfsadfs</p>
          <p className="text-gray-700">{true ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-900">$345</p>
        </div>
      </div>
    </div>
  );
}
