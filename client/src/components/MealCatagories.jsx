import React from "react";
import SideDishesIcon from "../../assets/Icons/side_dish.png";
import DrinksIcon from "../../assets/Icons/drinks.png";
import DessertsIcon from "../../assets/Icons/desert.png";
import MainCoursesIcon from "../../assets/Icons/main_meal.png";
import AppetizersIcon from "../../assets/Icons/apetizer.png";
import MealCatButton from "./MealCatButton";

const categories = [
  { id: 1, title: "Starter", imgSrc: AppetizersIcon },
  { id: 2, title: "Main Courses", imgSrc: MainCoursesIcon },
  { id: 3, title: "Desserts", imgSrc: DessertsIcon },
  { id: 4, title: "Drinks", imgSrc: DrinksIcon },
  { id: 5, title: "Side Dishes", imgSrc: SideDishesIcon },
];

const MealCategories = ({ iconTitles, onCategoryClick, selectedCat }) => {
  // Filter categories based on the passed icon titles
  const filteredCategories = categories.filter((category) =>
    iconTitles.includes(category.title)
  );

  const handleCategoryClick = (categoryTitle) => {
    if (selectedCat === categoryTitle) {
      onCategoryClick({ category: null });
      return;
    } else {
      onCategoryClick({ category: categoryTitle });
    }
  };

  return (
    <div className="flex justify-center w-full py-1 px-4">
      {filteredCategories.map((category) => (
        <MealCatButton
          key={category.id}
          category={category}
          isSelected={selectedCat === category.title}
          onBtnClick={handleCategoryClick}
          width={`${100 / filteredCategories.length}%`}
        />
      ))}
    </div>
  );
};

export default MealCategories;
