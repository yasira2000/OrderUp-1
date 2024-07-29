import React, { useMemo } from "react";
import OrderPageFoodCard from "./Cards/OrderPageFoodCard";

const MyOrders = ({ foodItemList, sortOn }) => {
  // Sorting functions
  const sortByName = (a, b) => a.name.localeCompare(b.name);
  const sortByCategory = (a, b) => a.category.localeCompare(b.category);

  const sortByPrepTime = (a, b) => {
    const timeToSeconds = (time) => {
      const [hours, minutes, seconds] = time.split(":").map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    };
    return timeToSeconds(a.prepTime) - timeToSeconds(b.prepTime);
  };

  const sortByPrice = (a, b) => a.price - b.price;

  const getSortedList = () => {
    switch (sortOn) {
      case "Name":
        return [...foodItemList].sort(sortByName);
      case "Category":
        return [...foodItemList].sort(sortByCategory);
      case "Prep-Time":
        return [...foodItemList].sort(sortByPrepTime);
      case "Price":
        return [...foodItemList].sort(sortByPrice);
      default:
        return foodItemList;
    }
  };

  const sortedFoodItemList = useMemo(getSortedList, [foodItemList, sortOn]);

  return (
    <div className="flex flex-col w-full">
      {sortedFoodItemList.map((foodItem, index) => (
        <div key={index} className="flex-none p-2 px-5">
          <OrderPageFoodCard
            key={index}
            {...foodItem}
            price={foodItem.price + " Rs"}
          />
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
