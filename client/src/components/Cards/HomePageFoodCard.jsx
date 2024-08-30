import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HomePageFoodCard = ({
  name,
  foodItemId,
  price,
  rating,
  image,
  prepTime,
  height,
  width,
}) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleClick = () => {
    if (!foodItemId) {
      console.warn("Food item ID is undefined. Cannot navigate.", name);
      return;
    }

    console.log("Clicked on food item with ID:", foodItemId);

    navigate(`/food-item?food_item_id=${foodItemId}`);
  };

  return (
    <div
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
      onClick={handleClick} // Add the onClick event handler
    >
      <div className="w-full h-full bg-white rounded-[25px] overflow-hidden">
        <img
          className="w-full h-[60%] object-cover rounded-t-[25px]"
          alt="Food"
          src={image}
        />
        <div className="p-2 pb-5 flex flex-col justify-between">
          <div className="text-icon-sub-heading line-clamp-2 pb-1">{name}</div>
          <div className="flex justify-between text-small-icon-sub-heading">
            <span>{prepTime}</span>
            <span>{rating}</span>
          </div>
          <div className="text-bold-icon-sub-heading font-bold-icon-sub-heading mt-1">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFoodCard;
