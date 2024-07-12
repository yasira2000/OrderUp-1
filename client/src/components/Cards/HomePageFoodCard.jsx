import React from "react";

const HomePageFoodCard = ({
  name,
  price,
  rating,
  image,
  prepTime,
  height,
  width,
}) => {
  return (
    <div className={`relative w-[${width}px] h-[${height}px]`}>
      <div className="w-full h-full bg-white rounded-[25px] overflow-hidden">
        <img
          className="w-full h-[60%] object-cover rounded-t-[25px]"
          alt="Food"
          src={image}
        />
        <div className="p-2 pb-5 flex flex-col justify-between">
          <div className="text-icon-sub-heading line-clamp-2 pb-1">{name}</div>
          <div className="flex  justify-between text-small-icon-sub-heading ">
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
