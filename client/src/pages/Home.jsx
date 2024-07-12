import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MealCategories from "../components/MealCatagories";
import FullFilterSetCommon from "../components/FilterComponents/FullFilterSets/FullFilterSetCommon";
import SortAndResetFilterSet from "../components/FilterComponents/FullFilterSets/SortAndResetFilterSet";
import FullFilterSetMainCourse from "../components/FilterComponents/FullFilterSets/FullFilterSetMainCourse";
import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";
import NavBarButton from "../components/NavbarButton";
import { FiHome } from "react-icons/fi";
import { PiCallBellLight } from "react-icons/pi";
import { PiNoteLight } from "react-icons/pi";
import HomePageFoodCard from "../components/Cards/HomePageFoodCard";
import foodImage1 from "../../assets/Images/food01.jpg";
import foodImage2 from "../../assets/Images/food02.jpg";
import foodImage3 from "../../assets/Images/food03.jpg";
import foodImage4 from "../../assets/Images/food04.jpg";

import HorizontalScrollableList from "../components/Cards/HorrizontalFoodCardScroller";
import HomePageFoodCardGrid from "../components/Cards/HomePageFoodCardGrid";

export default function Home() {
  const mealTypes = [
    "Side Dishes",
    "Drinks",
    "Desserts",
    "Main Courses",
    "Starter",
  ];

  const foodItemList = [
    {
      name: "Pizza Margherita",
      price: "$10",
      rating: "4.5",
      image: foodImage1, // Assuming foodImage is imported or defined elsewhere
      prepTime: "30 mins",
    },
    {
      name: "Chicken Alfredo Pasta",
      price: "$20",
      rating: "4.0",
      image: foodImage2,
      prepTime: "45 mins",
    },
    {
      name: "Caesar Salad",
      price: "$15",
      rating: "4.2",
      image: foodImage3,
      prepTime: "15 mins",
    },
    {
      name: "Chocolate Cake",
      price: "$25",
      rating: "4.8",
      image: foodImage4,
      prepTime: "1 hr",
    },
    {
      name: "Sushi Platter",
      price: "$30",
      rating: "4.6",
      image: foodImage1,
      prepTime: "1 hr 30 mins",
    },
  ];

  const [commonFilters, setCommonFilters] = useState({});
  const [catFilters, setCatfilters] = useState({});
  const [fullFilters, setFullFilters] = useState({});
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    console.log("commonFilters", commonFilters);
    console.log("catFilters", catFilters);

    setFullFilters({ ...commonFilters, ...catFilters });
  }, [commonFilters, catFilters]);

  useEffect(() => {
    // Log fullFilters state to verify the updated state
    console.log("fullFilters", fullFilters);
  }, [fullFilters]); // Log whenever fullFilters changes

  const resetFilters = () => {
    setCommonFilters({});
    setCatfilters({});
    setFullFilters({});
  };

  const removeNullFields = (obj) => {
    const cleanedObj = {};
    for (const key in obj) {
      if (
        obj[key] !== null &&
        !(Array.isArray(obj[key]) && obj[key].length === 0)
      ) {
        cleanedObj[key] = obj[key];
      }
    }
    return cleanedObj;
  };

  const filterUpdate = (newFilters) => {
    // Combine previous filters with new filters
    const updatedFilters = {
      ...commonFilters,
      ...newFilters,
    };

    // Remove null fields from updated filters
    const filteredFilters = removeNullFields(updatedFilters);

    // Set the cleaned and updated filters into the filter state
    setCommonFilters(filteredFilters);
  };

  useEffect(() => {
    // Check if any filter in filters state has a non-null or true value
    const hasActiveFilters = Object.values(commonFilters).some(
      (value) => value !== null && value !== false
    );

    // // Check specifically if the category field is not null and exists
    // const isCategoryNotNull = filters.category && filters.category !== null;

    hasActiveFilters
      ? setIsFilterVisible(true)
      : setTimeout(() => setIsFilterVisible(false), 500);

    // isCategoryNotNull
    //   ? setIsCatagorySelected(true)
    //   : setTimeout(() => setIsCatagorySelected(false), 500);
  }, [commonFilters]);

  const [catSelDelayed, setCatSelDelayed] = useState({});
  const [catSel, setCatSel] = useState(false);
  const catatgoryUpdate = (categoryFilter) => {
    if (
      categoryFilter.category !== null &&
      categoryFilter.category !== undefined
    ) {
      setCatfilters({});
      filterUpdate(categoryFilter);
      setCatSelDelayed(categoryFilter);
      setCatSel(true);
    } else {
      setCatfilters({});
      filterUpdate(categoryFilter);
      setCatSel(false);
      setTimeout(() => {
        setCatSelDelayed(categoryFilter);
      }, 500);
    }
  };

  const catWiseFilterUpdate = (newFilters) => {
    // Combine previous filters with new filters
    const updatedFilters = {
      ...catFilters,
      ...newFilters,
    };

    // Remove null fields from updated filters
    const filteredFilters = removeNullFields(updatedFilters);

    // Set the cleaned and updated filters into the filter state
    setCatfilters(filteredFilters);
  };

  return (
    <div>
      <Header />
      <div className="pb-20">
        <div className="sticky top-16 z-50 pt-4 bg-customBackground">
          <SearchBar
            key={commonFilters.search} // Add this line
            onSubmit={filterUpdate}
            newSearchValue={commonFilters.search ?? ""}
            className="w-full pb-5 pt-2 px-7"
          />
        </div>
        <MealCategories
          iconTitles={mealTypes}
          onCategoryClick={catatgoryUpdate}
          selectedCat={commonFilters.category}
        />

        <FullFilterSetCommon
          onFilterUpdate={filterUpdate}
          appliedFilters={commonFilters}
        />

        <div
          className={`transition-all duration-500 overflow-hidden ${
            catSel ? "max-h-40" : "max-h-0"
          }`}
        >
          {catSelDelayed.category === "Main Courses" && (
            <FullFilterSetMainCourse
              onFilterUpdate={catWiseFilterUpdate}
              appliedFilters={catFilters}
            />
          )}

          {catSelDelayed.category === "Starter" && (
            <FullFilterSetMainCourse
              onFilterUpdate={catWiseFilterUpdate}
              appliedFilters={catFilters}
            />
          )}

          {catSelDelayed.category === "Desserts" && (
            <FullFilterSetMainCourse
              onFilterUpdate={catWiseFilterUpdate}
              appliedFilters={catFilters}
            />
          )}

          {catSelDelayed.category === "Side Dishes" && (
            <FullFilterSetMainCourse
              onFilterUpdate={catWiseFilterUpdate}
              appliedFilters={catFilters}
            />
          )}

          {catSelDelayed.category === "Drinks" && (
            <FullFilterSetMainCourse
              onFilterUpdate={catWiseFilterUpdate}
              appliedFilters={catFilters}
            />
          )}
        </div>

        <div
          className={`transition-all duration-500 overflow-hidden ${
            Object.values(commonFilters).some(
              (value) => value !== null && value !== false
            )
              ? "max-h-40"
              : "max-h-0"
          }`}
        >
          {isFilterVisible && (
            <div className=" flex flex-row justify-between items-center">
              <h2 className="text-icon-sub-heading px-8 py-2 flex-shrink-0">
                {
                  Object.values(commonFilters).filter(
                    (value) => value !== null && value !== false
                  ).length
                }{" "}
                Results
              </h2>
              <SortAndResetFilterSet
                resetFilters={resetFilters}
                onFilterUpdate={filterUpdate}
                appliedFilters={commonFilters}
              />
            </div>
          )}
        </div>

        {!catSel && (
          <div>
            <HorizontalScrollableList
              heading={"Starter"}
              foodItemList={foodItemList}
            />
            <HorizontalScrollableList
              heading={"Main Courses"}
              foodItemList={foodItemList}
            />
            <HorizontalScrollableList
              heading={"Dessert"}
              foodItemList={foodItemList}
            />
            <HorizontalScrollableList
              heading={"Drinks"}
              foodItemList={foodItemList}
            />
            <HorizontalScrollableList
              heading={"Side Dishes"}
              foodItemList={foodItemList}
            />
          </div>
        )}
        {catSel && (
          <div>
            <HomePageFoodCardGrid
              heading={catSelDelayed.category}
              foodItemList={foodItemList}
            />
          </div>
        )}
      </div>
      <BottomNavBar>
        <NavBarButton to="/" icon={FiHome} position="left" />
        <NavBarButton to="/alerts" icon={PiCallBellLight} position="middle" />
        <NavBarButton to="/notes" icon={PiNoteLight} position="right" />
      </BottomNavBar>
    </div>
  );
}
