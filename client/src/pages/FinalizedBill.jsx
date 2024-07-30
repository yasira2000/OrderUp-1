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
import TableOrders from "../components/TableOrders";
import BillPageFoodCard from "../components/Cards/BillPageFoodCard";
import Bill from "../components/Bill";

export default function Orders() {
  const [secNavPage, setSecNavPage] = useState("myOrders");

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

  const onAddToTable = () => {
    console.log("Added to table");
  };

  const onPlaceOrder = () => {
    console.log("Order Placed");
  };

  const foodItemList = [
    {
      id: 1,
      name: "Pizza Margherita",
      category: "Main Course",
      prepTime: "00:30:00",
      price: 10.0,
      imageSrc: foodImage1,
      userName: "JohnDoe",
      numberOfItems: 2,
    },
    {
      id: 2,
      name: "Chicken Alfredo Pasta",
      category: "Main Course",
      prepTime: "00:45:00",
      price: 20.0,
      imageSrc: foodImage2,
      userName: "JaneSmith",
      numberOfItems: 1,
    },
    {
      id: 3,
      name: "Caesar Salad",
      category: "Salad",
      prepTime: "00:15:00",
      price: 15.0,
      imageSrc: foodImage3,
      userName: "MikeBrown",
      numberOfItems: 3,
    },
    {
      id: 4,
      name: "Chocolate Cake",
      category: "Dessert",
      prepTime: "01:00:00",
      price: 25.0,
      imageSrc: foodImage4,
      userName: "EmilyClark",
      numberOfItems: 1,
    },
    {
      id: 5,
      name: "Sushi Platter",
      category: "Main Course",
      prepTime: "01:30:00",
      price: 30.0,
      imageSrc: foodImage1,
      userName: "ChrisDavis",
      numberOfItems: 2,
    },
    {
      id: 6,
      name: "Pizza Margherita",
      category: "Main Course",
      prepTime: "00:30:00",
      price: 10.0,
      imageSrc: foodImage1,
      userName: "SarahWilson",
      numberOfItems: 1,
    },
    {
      id: 7,
      name: "Chicken Alfredo Pasta",
      category: "Main Course",
      prepTime: "00:45:00",
      price: 20.0,
      imageSrc: foodImage2,
      userName: "DavidTaylor",
      numberOfItems: 4,
    },
    {
      id: 8,
      name: "Caesar Salad",
      category: "Salad",
      prepTime: "00:15:00",
      price: 15.0,
      imageSrc: foodImage3,
      userName: "LauraMartinez",
      numberOfItems: 2,
    },
    {
      id: 9,
      name: "Chocolate Cake",
      category: "Dessert",
      prepTime: "01:00:00",
      price: 25.0,
      imageSrc: foodImage4,
      userName: "JamesAnderson",
      numberOfItems: 1,
    },
    {
      id: 10,
      name: "Sushi Platter",
      category: "Main Course",
      prepTime: "01:30:00",
      price: 30.0,
      imageSrc: foodImage1,
      userName: "OliviaLee",
      numberOfItems: 3,
    },
    {
      id: 11,
      name: "Pizza Margherita",
      category: "Main Course",
      prepTime: "00:30:00",
      price: 10.0,
      imageSrc: foodImage1,
      userName: "AnnaWalker",
      numberOfItems: 5,
    },
    {
      id: 12,
      name: "Chicken Alfredo Pasta",
      category: "Main Course",
      prepTime: "00:45:00",
      price: 20.0,
      imageSrc: foodImage2,
      userName: "BrianHall",
      numberOfItems: 2,
    },
    {
      id: 13,
      name: "Caesar Salad",
      category: "Salad",
      prepTime: "00:15:00",
      price: 15.0,
      imageSrc: foodImage3,
      userName: "ClaireScott",
      numberOfItems: 1,
    },
    {
      id: 14,
      name: "Chocolate Cake",
      category: "Dessert",
      prepTime: "01:00:00",
      price: 25.0,
      imageSrc: foodImage4,
      userName: "DianaHarris",
      numberOfItems: 4,
    },
    {
      id: 15,
      name: "Sushi Platter",
      category: "Main Course",
      prepTime: "01:30:00",
      price: 30.0,
      imageSrc: foodImage1,
      userName: "EvanMartin",
      numberOfItems: 1,
    },
    {
      id: 16,
      name: "Pizza Margherita",
      category: "Main Course",
      prepTime: "00:30:00",
      price: 10.0,
      imageSrc: foodImage1,
      userName: "JohnDoe",
      numberOfItems: 3,
    },
    {
      id: 17,
      name: "Chicken Alfredo Pasta",
      category: "Main Course",
      prepTime: "00:45:00",
      price: 20.0,
      imageSrc: foodImage2,
      userName: "JohnDoe",
      numberOfItems: 2,
    },
    {
      id: 18,
      name: "Caesar Salad",
      category: "Salad",
      prepTime: "00:15:00",
      price: 15.0,
      imageSrc: foodImage3,
      userName: "JohnDoe",
      numberOfItems: 1,
    },
    {
      id: 19,
      name: "Chocolate Cake",
      category: "Dessert",
      prepTime: "01:00:00",
      price: 25.0,
      imageSrc: foodImage4,
      userName: "IanWright",
      numberOfItems: 2,
    },
    {
      id: 20,
      name: "Sushi Platter",
      category: "Main Course",
      prepTime: "01:30:00",
      price: 30.0,
      imageSrc: foodImage1,
      userName: "JohnDoe",
      numberOfItems: 4,
    },
  ];

  // Filtered list for JohnDoe
  const johnDoeOrders = foodItemList.filter(
    (item) => item.userName === "JohnDoe"
  );

  return (
    <div>
      <Header />
      <OrdersSecNavBar onSelect={handleSecNavPage} selected={secNavPage} />

      {secNavPage === "myOrders" && (
        <MyOrders
          foodItemList={johnDoeOrders}
          sortOn={sortOn.sort}
          onAddToTable={onAddToTable}
        />
      )}

      {secNavPage === "tableOrders" && (
        <TableOrders
          foodItemList={foodItemList}
          sortOn={sortOn.sort}
          onPlaceOrder={onPlaceOrder}
        />
      )}

      {secNavPage === "bill" && (
        <Bill
          foodItemList={foodItemList}
          sortOn={sortOn.sort}
          onPlaceOrder={onPlaceOrder}
        />
      )}

      <CustomerNavBar />
    </div>
  );
}
