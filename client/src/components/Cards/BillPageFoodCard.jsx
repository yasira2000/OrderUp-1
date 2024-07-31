import React from "react";
import AddOrRemove from "../InputComps/AddOrRemove";

const BillPageFoodCard = ({ name, userName, price, imageSrc, count }) => {
  return (
    <div className="relative w-full h-[70px] bg-white rounded-[25px] p-2.5 flex">
      <img
        className="w-20 h-13 rounded-full object-cover object-center"
        alt="Group"
        src={imageSrc}
      />
      <div className="ml-3 flex flex-col justify-between">
        <div className="text-black font-medium text-sm">{name}</div>
        <div className="text-darkGray text-xs">{userName}</div>
        <div className="text-darkGray text-xs">{count}</div>
      </div>
      <div className="ml-auto flex items-center pr-3">
        <div className="text-black font-bold text-sm">{price}</div>
      </div>
    </div>
  );
};

export default BillPageFoodCard;
