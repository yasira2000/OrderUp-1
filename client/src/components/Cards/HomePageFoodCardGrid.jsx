import React from "react";
import HomePageFoodCard from "./HomePageFoodCard"; // Adjust the import path accordingly

const HomePageFoodCardGrid = ({ heading, foodItemList }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-result-heading px-8 pb-4 pt-2">{heading}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 p-6 max-w-screen-lg mx-auto">
        {foodItemList.map((foodItem, index) => (
          <div key={index} className="w-full">
            <HomePageFoodCard
              name={foodItem.name}
              foodItemId={foodItem.id}
              price={foodItem.price}
              rating={foodItem.rating}
              image={foodItem.image}
              prepTime={foodItem.prepTime}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageFoodCardGrid;
