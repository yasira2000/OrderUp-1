import React from "react";

const FoodItemStat = ({title, value}) => {
  return (
    <>
      <h2 className="mt-3 text-sm font-[400] font-inter">{title}</h2>
      <p className="text-xs text-black text-opacity-80 font-extralight font-inter mt-2">
        {value}
      </p>
    </>
  );
};

export default FoodItemStat;
