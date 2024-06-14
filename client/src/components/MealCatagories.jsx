import React from "react";
import SideDishesIcon from "../Images/Icons/side_dish.png";
import DrinksIcon from "../Images/Icons/drinks.png";
import DessertsIcon from "../Images/Icons/desert.png";
import MainCoursesIcon from "../Images/Icons/main_meal.png";
import AppetizersIcon from "../Images/Icons/apetizer.png";

const categories = [
  { id: 5, title: "Appetizers", imgSrc: AppetizersIcon },
  { id: 4, title: "Main Courses", imgSrc: MainCoursesIcon },
  { id: 3, title: "Desserts", imgSrc: DessertsIcon },
  { id: 2, title: "Drinks", imgSrc: DrinksIcon },
  { id: 1, title: "Side Dishes", imgSrc: SideDishesIcon },
];

export const MealCategories = ({ iconTitles }) => {
  // Filter categories based on the passed icon titles
  const filteredCategories = categories.filter((category) =>
    iconTitles.includes(category.title)
  );

  return (
    <div className="flex justify-center w-full py-4 px-4">
      {filteredCategories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center mx-2"
          style={{ width: `${100 / filteredCategories.length}%` }}
        >
          <img
            alt={category.title}
            src={category.imgSrc}
            className="max-w-full h-auto"
            style={{ maxHeight: "40px" }} // Adjust maxHeight as needed
          />
          <div className="text-center mt-1 text-xs text-black">
            {category.title}
          </div>
        </div>
      ))}
    </div>
  );
};
