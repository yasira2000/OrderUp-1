import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import CustomerNavBar from "../components/CustomerNavBar";
import OrdersSecNavBar from "../components/OrdersSecNavBar";
import foodImage1 from "../../assets/Images/food01.jpg";
import foodImage2 from "../../assets/Images/food02.jpg";
import foodImage3 from "../../assets/Images/food03.jpg";
import foodImage4 from "../../assets/Images/food04.jpg";
import MyOrders from "../components/MyOrders";
import TableOrders from "../components/TableOrders";
import Bill from "../components/Bill";

// Mock API function to simulate fetching data from a backend
const mockFetchMyOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // Sample data for MyOrders
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
          userName: "JohnDoe",
          numberOfItems: 1,
        },
        // Add more items as needed
      ]);
    }, 1000);
  });
};

const mockFetchTableOrders = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // Sample data for TableOrders
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
        // Add more items as needed
      ]);
    }, 1000);
  });
};

const mockFetchBill = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // Sample data for Bill
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
        // Add more items as needed
      ]);
    }, 1000);
  });
};

export default function Orders() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPage = searchParams.get("secNavPage") || "myOrders";
  const [secNavPage, setSecNavPage] = useState(initialPage);
  const [myOrdersList, setMyOrdersList] = useState([]);
  const [tableOrdersList, setTableOrdersList] = useState([]);
  const [billList, setBillList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (secNavPage === "myOrders") {
        const fetchedOrders = await mockFetchMyOrders();
        setMyOrdersList(fetchedOrders);
      } else if (secNavPage === "tableOrders") {
        const fetchedTableOrders = await mockFetchTableOrders();
        setTableOrdersList(fetchedTableOrders);
      } else if (secNavPage === "bill") {
        const fetchedBill = await mockFetchBill();
        setBillList(fetchedBill);
      }
      setLoading(false);
    };

    fetchData();
  }, [secNavPage]);

  useEffect(() => {
    if (searchParams.get("secNavPage")) {
      setSecNavPage(searchParams.get("secNavPage"));
    }
  }, [location]);

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

  const navigate = useNavigate();
  const onPay = () => {
    console.log("go to Payment page");
    navigate("/finalize-payment");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <OrdersSecNavBar onSelect={handleSecNavPage} selected={secNavPage} />

      {secNavPage === "myOrders" && (
        <MyOrders
          foodItemList={myOrdersList}
          sortOn={sortOn.sort}
          onAddToTable={onAddToTable}
        />
      )}

      {secNavPage === "tableOrders" && (
        <TableOrders
          foodItemList={tableOrdersList}
          sortOn={sortOn.sort}
          onPlaceOrder={onPlaceOrder}
        />
      )}

      {secNavPage === "bill" && (
        <Bill foodItemList={billList} sortOn={sortOn.sort} onPay={onPay} />
      )}

      <CustomerNavBar />
    </div>
  );
}
