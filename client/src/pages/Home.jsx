import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MealCategories from "../components/MealCatagories";
import FilterSet from "../components/FilterSet";
import FilterButtonPushDown from "../components/FilterButtonPushDown";
import FilterButtonPopUp from "../components/FilterButtonPopUp";
import FilterPopUpMenue from "../components/FilterPopUpMenue";
import ButtonPushDownGroup from "../components/ButtonPushDownGroup";
import ButtonSelectionDotGrp from "../components/ButtonSelectionDotGrp";
import { Rating } from "flowbite-react";
import SnappingSlider from "../components/SnappingSlider";

export default function Home() {
  const mealTypes = [
    "Side Dishes",
    "Drinks",
    "Desserts",
    "Main Courses",
    "Starter",
  ];

  const getDefaultFilters = () => ({
    search: null,
    category: null,
    sort: null,
    inStock: false,
    maxPrice: null,
    time: null,
    rating: null,
    // Add more filters as needed
  });

  const [filters, setFilters] = useState(getDefaultFilters);
  const [isPopUpVisible, setIsPopUpVisible] = useState({
    sort: false,
    maxPrice: false,
  });
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [isCatagorySelected, setIsCatagorySelected] = useState(false);

  const resetFilters = () => {
    setFilters(getDefaultFilters());
  };

  const handleSingleValFilters = ({ filterName, value }) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

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
    // Check if any filter in filters state has a non-null or true value
    const hasActiveFilters = Object.values(filters).some(
      (value) => value !== null && value !== false
    );

    // Check specifically if the category field is null or not
    const isCategoryNotNull = filters.category !== null;

    console.log("filters", filters);
    hasActiveFilters
      ? setIsFilterVisible(true)
      : setTimeout(() => setIsFilterVisible(false), 500);
  }, [filters]);

  return (
    <div>
      <SearchBar
        key={filters.search} // Add this line
        onSubmit={handleSingleValFilters}
        newSearchValue={filters.search ?? ""}
      />
      <MealCategories
        iconTitles={mealTypes}
        onCategoryClick={handleSingleValFilters}
        selectedCat={filters.category}
      />
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

      <div
        className={`transition-all duration-500 overflow-hidden ${
          Object.values(filters).some(
            (value) => value !== null && value !== false
          )
            ? "max-h-40"
            : "max-h-0"
        }`}
      >
        {filters.category === "Side Dishes" && (
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
            <div className="flex flex-row px-5 py-2 flex-shrink-0">
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
          </div>
        )}
      </div>

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
        {/* <ButtonPushDownGroup items={["3+", "3.5+", "4+", "4.5+", "5"]} /> */}
        <SnappingSlider values={[3, 3.5, 4, 4.5, 5]} />
      </FilterPopUpMenue>

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
