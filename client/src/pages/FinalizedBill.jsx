import React, { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import foodImage1 from "../../assets/Images/food01.jpg";
import foodImage2 from "../../assets/Images/food02.jpg";
import foodImage3 from "../../assets/Images/food03.jpg";
import foodImage4 from "../../assets/Images/food04.jpg";
import BillPageFoodCard from "../components/Cards/BillPageFoodCard";
import OrderPagesFooter from "../components/OrderPagesFooter";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MainButton } from "../components/MainButton";
import TextInput from "../components/InputComps/TextInput";

export default function FinalizedBill() {
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

  // State to keep track of counts for each food item by ID
  const initialCounts = foodItemList.reduce((acc, item) => {
    acc[item.id] = item.numberOfItems;
    return acc;
  }, {});
  const [counts, setCounts] = useState(initialCounts);

  // Calculate total price
  const totalPrice = useMemo(() => {
    return Object.keys(counts).reduce((total, id) => {
      const item = foodItemList.find((item) => item.id === parseInt(id));
      const count = counts[id];
      const price = parseFloat(item.price);
      return total + count * price;
    }, 0);
  }, [counts, foodItemList]);

  const [tip, setTip] = useState(0);
  const [subTotal, setSubTotal] = useState(totalPrice);

  useEffect(() => {
    setSubTotal(totalPrice + tip);
  }, [tip, totalPrice]);

  const onTipChange = (e) => {
    setTip(parseFloat(e.target.value));
  };

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

  const onPay = () => {
    console.log("Payment Successful " + subTotal + " Rs");
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/orders?secNavPage=bill");
  };
  return (
    <div>
      <Header />
      <div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center pl-4">
            <button onClick={handleBackClick} className="focus:outline-none">
              <IoChevronBack className="size-6" />
            </button>
            <h2 className="text-result-heading px-8 py-2 flex-shrink-0">
              Total Bill
            </h2>
          </div>
        </div>

        <div className="flex flex-col w-full min-h-screen">
          <div className="flex-grow pb-64">
            {foodItemList.map((foodItem) => (
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

          <div className="fixed bottom-0 left-0 w-full pb-5 bg-white shadow-upward">
            <div className="relative w-full h-full p-2.5">
              <div className=" w-full flex justify-between items-center p-2.5">
                <div className="font-icon-sub-headings font-icon-sub-heading text-black text-lg tracking-wide leading-tight">
                  Total
                </div>
                <div className="font-icon-sub-headings font-icon-sub-heading text-black text-lg tracking-wide leading-tight">
                  {`${totalPrice.toFixed(2)} Rs`}
                </div>
              </div>
              <div className=" w-full flex justify-between items-center p-2.5">
                <div className="font-icon-sub-headings font-icon-sub-heading text-black text-lg tracking-wide leading-tight">
                  Tip
                </div>
                <div className="font-icon-sub-headings font-icon-sub-heading text-black text-lg tracking-wide leading-tight">
                  <TextInput
                    value={tip}
                    rows={1}
                    onChange={onTipChange}
                    numericOnly={true}
                    placeholder="0.00"
                    className="w-24"
                  />
                </div>
              </div>
              <div className=" w-full flex justify-between items-center p-2.5">
                <div className="font-icon-sub-headings font-icon-sub-heading text-black text-lg tracking-wide leading-tight">
                  Sub Total
                </div>
                <div className="font-icon-sub-headings font-icon-sub-heading text-black text-lg tracking-wide leading-tight">
                  {`${subTotal.toFixed(2)} Rs`}
                </div>
              </div>
              <MainButton className="" text="Pay" onClick={onPayBtnPress} />
            </div>
          </div>
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
    </div>
  );
}
