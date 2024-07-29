import React from "react";

const OrderPageFoodCard = ({ name, category, prepTime, price, imageSrc }) => {
  return (
    <div className="relative w-full h-[100px] bg-white rounded-[25px]  p-2.5 flex ">
      <img
        className="w-20 h-20 rounded-full  object-cover object-center"
        alt="Group"
        src={imageSrc}
      />
      <div className="ml-3 flex flex-col justify-between">
        <div className="text-black font-medium text-sm">{name}</div>
        <div className="text-darkGray text-xs">{category}</div>
        <div className="text-darkGray text-xs">{prepTime}</div>
        <div className="text-black font-bold text-sm">{price}</div>
      </div>
    </div>
  );
};

export default OrderPageFoodCard;
