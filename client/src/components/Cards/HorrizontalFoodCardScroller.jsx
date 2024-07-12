import React from "react";
import HomePageFoodCard from "./HomePageFoodCard"; // Adjust the import path accordingly

const HorizontalScrollableList = ({ heading, foodItemList }) => {
  return (
    <div>
      <h1 className="text-result-heading px-8 pb-4 pt-2">{heading}</h1>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex py-2 px-0">
          {foodItemList.map((foodItem, index) => (
            <div key={index} className="flex-none px-2">
              <HomePageFoodCard
                name={foodItem.name}
                price={foodItem.price}
                rating={foodItem.rating}
                image={foodItem.image}
                prepTime={foodItem.prepTime}
                height={260}
                width={135}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollableList;
