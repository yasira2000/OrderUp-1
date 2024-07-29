import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CustomerNavBar from "../components/CustomerNavBar";

import OrdersSecNavBar from "../components/OrdersSecNavBar";
import SortAndResetFilterSet from "../components/FilterComponents/FullFilterSets/SortAndResetFilterSet";
import OrderPageFoodCard from "../components/Cards/OrderPageFoodCard";

import foodImage1 from "../../assets/Images/food01.jpg";
import foodImage2 from "../../assets/Images/food02.jpg";
import foodImage3 from "../../assets/Images/food03.jpg";
import foodImage4 from "../../assets/Images/food04.jpg";
import MyOrders from "../components/MyOrders";

export default function Orders() {
  const [secNavPage, setSecNavPage] = useState();

  const handleSecNavPage = (page) => {
    setSecNavPage(page);
    console.log(page);
  };

  const [sortOn, setSortOn] = useState({});

  const filterUpdate = (filters) => {
    setSortOn(filters);
  };

  const resetFilters = () => {
    setSortOn({});
  };

  const foodItemList = [
    {
      name: "Pizza Margherita",
      category: "Main Course",
      prepTime: "00:30:00", // Changed to hh:mm:ss format
      price: 10.0, // Changed to number
      imageSrc: foodImage1,
    },
    {
      name: "Chicken Alfredo Pasta",
      category: "Main Course",
      prepTime: "00:45:00", // Changed to hh:mm:ss format
      price: 20.0, // Changed to number
      imageSrc: foodImage2,
    },
    {
      name: "Caesar Salad",
      category: "Salad",
      prepTime: "00:15:00", // Changed to hh:mm:ss format
      price: 15.0, // Changed to number
      imageSrc: foodImage3,
    },
    {
      name: "Chocolate Cake",
      category: "Dessert",
      prepTime: "01:00:00", // Changed to hh:mm:ss format
      price: 25.0, // Changed to number
      imageSrc: foodImage4,
    },
    {
      name: "Sushi Platter",
      category: "Main Course",
      prepTime: "01:30:00", // Changed to hh:mm:ss format
      price: 30.0, // Changed to number
      imageSrc: foodImage1,
    },
    {
      name: "Pizza Margherita",
      category: "Main Course",
      prepTime: "00:30:00", // Changed to hh:mm:ss format
      price: 10.0, // Changed to number
      imageSrc: foodImage1,
    },
    {
      name: "Chicken Alfredo Pasta",
      category: "Main Course",
      prepTime: "00:45:00", // Changed to hh:mm:ss format
      price: 20.0, // Changed to number
      imageSrc: foodImage2,
    },
    {
      name: "Caesar Salad",
      category: "Salad",
      prepTime: "00:15:00", // Changed to hh:mm:ss format
      price: 15.0, // Changed to number
      imageSrc: foodImage3,
    },
    {
      name: "Chocolate Cake",
      category: "Dessert",
      prepTime: "01:00:00", // Changed to hh:mm:ss format
      price: 25.0, // Changed to number
      imageSrc: foodImage4,
    },
    {
      name: "Sushi Platter",
      category: "Main Course",
      prepTime: "01:30:00", // Changed to hh:mm:ss format
      price: 30.0, // Changed to number
      imageSrc: foodImage1,
    },
  ];

  return (
    <div>
      <Header />
      <OrdersSecNavBar onSelect={handleSecNavPage} selected={secNavPage} />
      <div className=" flex flex-row justify-between items-center">
        <h2 className="text-icon-sub-heading px-8 py-2 flex-shrink-0">
          My Orders
        </h2>
        <SortAndResetFilterSet
          resetFilters={resetFilters}
          onFilterUpdate={filterUpdate}
          sortFilter={sortOn}
        />
      </div>

      <MyOrders foodItemList={foodItemList} sortOn={sortOn.sort} />

      <CustomerNavBar />
    </div>
  );
}
