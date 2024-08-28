import React from "react";

const FoodItemStat = ({ title, value }) => {
  return (
    <>
      <h2 className="mt-3 text-bold-icon-sub-heading font-bold-icon-sub-heading">
        {title}
      </h2>
      <p className="text-small-icon-sub-heading text-darkGray  mt-2">{value}</p>
    </>
  );
};

export default FoodItemStat;
