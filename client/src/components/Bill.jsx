import React, { useState, useMemo } from "react";
import OrderPagesFooter from "./OrderPagesFooter";
import SortAndResetFilterSet from "./FilterComponents/FullFilterSets/SortAndResetFilterSet";
import BillPageFoodCard from "./Cards/BillPageFoodCard";

const Bill = ({ foodItemList, onPay }) => {
  // State to keep track of counts for each food item by ID
  const initialCounts = foodItemList.reduce((acc, item) => {
    acc[item.id] = item.numberOfItems;
    return acc;
  }, {});
  const [counts, setCounts] = useState(initialCounts);
  const [sortOn, setSortOn] = useState({});

  const filterUpdate = (filters) => {
    setSortOn(filters);
  };

  const resetFilters = () => {
    setSortOn({});
  };

  // Sorting functions
  const sortByName = (a, b) => a.name.localeCompare(b.name);
  const sortByCategory = (a, b) => a.category.localeCompare(b.category);
  const sortByUserName = (a, b) => a.userName.localeCompare(b.userName);

  const sortByPrepTime = (a, b) => {
    const timeToSeconds = (time) => {
      const [hours, minutes, seconds] = time.split(":").map(Number);
      return hours * 3600 + minutes * 60 + seconds;
    };
    return timeToSeconds(a.prepTime) - timeToSeconds(b.prepTime);
  };

  const sortByPrice = (a, b) => parseFloat(a.price) - parseFloat(b.price);

  const getSortedList = () => {
    switch (sortOn.sort) {
      case "Name":
        return [...foodItemList].sort(sortByName);
      case "Category":
        return [...foodItemList].sort(sortByCategory);
      case "Prep-Time":
        return [...foodItemList].sort(sortByPrepTime);
      case "Price":
        return [...foodItemList].sort(sortByPrice);
      case "User Name":
        return [...foodItemList].sort(sortByUserName);
      default:
        return foodItemList;
    }
  };

  const sortedFoodItemList = useMemo(getSortedList, [
    foodItemList,
    sortOn.sort,
  ]);

  const handleCountChange = (id, newCount) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: newCount,
    }));
    console.log("Updated count of food item with id", id, "to", newCount);

    // try {
    // Update the cart in the database

    // } catch (error) {
    //   console.error("Failed to update cart:", error);
    // }
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return Object.keys(counts).reduce((total, id) => {
      const item = foodItemList.find((item) => item.id === parseInt(id));
      const count = counts[id];
      const price = parseFloat(item.price);
      return total + count * price;
    }, 0);
  }, [counts, foodItemList]);

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const onPayBtnPress = () => {
    //if there are pending orders setIsPopUpVisible(true);
    // else
    onPay();
  };

  const onPayPopUpClose = () => {
    setIsPopUpVisible(false);
  };

  const onPayPopUpConfirm = () => {
    onPay();
    setIsPopUpVisible(false);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-result-heading px-8 py-2 flex-shrink-0">
          Total Bill
        </h2>
        <SortAndResetFilterSet
          resetFilters={resetFilters}
          onFilterUpdate={filterUpdate}
          sortFilter={sortOn}
          sortItemList={["Name", "Category", "Prep-Time", "Price", "User Name"]}
        />
      </div>
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex-grow pb-52">
          {sortedFoodItemList.map((foodItem) => (
            <div key={foodItem.id} className="flex-none p-2 px-5">
              <BillPageFoodCard
                key={foodItem.id}
                name={foodItem.name}
                userName={foodItem.userName}
                imageSrc={foodItem.imageSrc}
                price={foodItem.price + " Rs"}
                count={counts[foodItem.id]}
                onCountChange={(newCount) =>
                  handleCountChange(foodItem.id, newCount)
                }
              />
            </div>
          ))}
        </div>

        <OrderPagesFooter
          valName="Total"
          val={`${totalPrice.toFixed(2)} Rs`}
          buttonName="Pay"
          onButtonPress={onPayBtnPress}
        />
      </div>
      {/* <SimpleTwoOptionPopUp
        isVisible={isPopUpVisible}
        onClose={onPayPopUpClose}
        onConfirm={onPayPopUpConfirm}
        title="Payment Confirmation"
        message="Are you sure you want to pay?"
        confirmText="Wait for Them"
        cancelText="Cancel"
      /> */}
    </div>
  );
};

export default Bill;
