import React from "react";
import SearchBar from "../components/SearchBar";
import { MealCategories } from "../components/MealCatagories";

export default function Home() {
  const mealTypes = [
    "Side Dishes",
    "Drinks",
    "Desserts",
    "Main Courses",
    "Appetizers",
  ];

  return (
    <div>
      <SearchBar />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
      <MealCategories iconTitles={mealTypes} />
    </div>
  );
}
