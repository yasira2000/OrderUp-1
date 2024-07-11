import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MealCategories from "../components/MealCatagories";
import FullFilterSetCommon from "../components/FilterComponents/FullFilterSets/FullFilterSetCommon";
import SortAndResetFilterSet from "../components/FilterComponents/FullFilterSets/SortAndResetFilterSet";
import ButtonSelectionTick from "../components/InputComps/ButtonSelectionTick";
import FullFilterSetMainCourse from "../components/FilterComponents/FullFilterSets/FullFilterSetMainCourse";

export default function Home() {
  const mealTypes = [
    "Side Dishes",
    "Drinks",
    "Desserts",
    "Main Courses",
    "Starter",
  ];

  const [filters, setFilters] = useState({});
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [isCatagorySelected, setIsCatagorySelected] = useState(false);

  const resetFilters = () => {
    setFilters({});
  };

  const removeNullFields = (obj) => {
    const cleanedObj = {};
    for (const key in obj) {
      if (obj[key] !== null) {
        cleanedObj[key] = obj[key];
      }
    }
    return cleanedObj;
  };

  const filterUpdate = (newFilters) => {
    // Combine previous filters with new filters
    const updatedFilters = {
      ...filters,
      ...newFilters,
    };

    // Remove null fields from updated filters
    const filteredFilters = removeNullFields(updatedFilters);

    // Set the cleaned and updated filters into the filter state
    setFilters(filteredFilters);

    console.log("updatedFilters", filteredFilters);
  };

  useEffect(() => {
    // Check if any filter in filters state has a non-null or true value
    const hasActiveFilters = Object.values(filters).some(
      (value) => value !== null && value !== false
    );

    // // Check specifically if the category field is not null and exists
    // const isCategoryNotNull = filters.category && filters.category !== null;

    console.log("filters", filters);
    hasActiveFilters
      ? setIsFilterVisible(true)
      : setTimeout(() => setIsFilterVisible(false), 500);

    // isCategoryNotNull
    //   ? setIsCatagorySelected(true)
    //   : setTimeout(() => setIsCatagorySelected(false), 500);
  }, [filters]);

  const [catSelDelayed, setCatSelDelayed] = useState({});

  const catatgoryUpdate = (categoryFilter) => {
    if (
      categoryFilter.category !== null &&
      categoryFilter.category !== undefined
    ) {
      setIsCatagorySelected(true);
      filterUpdate(categoryFilter);
      setCatSelDelayed(categoryFilter);
    } else {
      setIsCatagorySelected(false);
      filterUpdate(categoryFilter);
      setTimeout(() => {
        setCatSelDelayed(categoryFilter);
      }, 500);
    }
  };

  return (
    <div>
      <SearchBar
        key={filters.search} // Add this line
        onSubmit={filterUpdate}
        newSearchValue={filters.search ?? ""}
      />
      <MealCategories
        iconTitles={mealTypes}
        onCategoryClick={catatgoryUpdate}
        selectedCat={filters.category}
      />

      <FullFilterSetCommon
        onFilterUpdate={filterUpdate}
        appliedFilters={filters}
      />

      <div
        className={`transition-all duration-500 overflow-hidden ${
          filters.category && filters.category !== null ? "max-h-40" : "max-h-0"
        }`}
      >
        {catSelDelayed.category === "Main Courses" && (
          <FullFilterSetMainCourse
            onFilterUpdate={filterUpdate}
            appliedFilters={filters}
          />
        )}
      </div>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          Object.values(filters).some(
            (value) => value !== null && value !== false
          )
            ? "max-h-40"
            : "max-h-0"
        }`}
      >
        {isFilterVisible && (
          <div className=" flex flex-row justify-between items-center">
            <h2 className="text-icon-sub-heading px-5 py-2 flex-shrink-0">
              {
                Object.values(filters).filter(
                  (value) => value !== null && value !== false
                ).length
              }{" "}
              Results
            </h2>
            <SortAndResetFilterSet
              resetFilters={resetFilters}
              onFilterUpdate={filterUpdate}
              appliedFilters={filters}
            />
          </div>
        )}
      </div>

      <div>
        <div className="border rounded-lg p-4 shadow-md m-2 bg-white">
          <h3 className="text-lg font-semibold">Item 1</h3>
          <p className="text-gray-500">Description 1</p>
          <p className="text-gray-700">{true ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-900">$100</p>
        </div>
        <div className="border rounded-lg p-4 shadow-md m-2 bg-white">
          <h3 className="text-lg font-semibold">Item 2</h3>
          <p className="text-gray-500">Description 2</p>
          <p className="text-gray-700">{true ? "In Stock" : "Out of Stock"}</p>
          <p className="text-gray-900">$200</p>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
}
