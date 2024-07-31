import React from "react";
import { useState } from "react";

import main_course from "../../assets/Images/main-course.png";
import { foodItemStat } from "../constants";
import FoodItemStat from "../components/FoodItemStat";
import { MainButton } from "../components/MainButton";

const FoodItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col w-full min-h-screen pb-8">
      <div className="flex w-full">
        <img src={main_course} alt="main course" className="w-full" />
      </div>
      <div className="flex flex-col bg-white pr-6 pl-6 pt-6 w-full">
        <h1 className="text-2xl font-inter">Idli</h1>
        <p className="text-[#B2B2B2] text-opacity-60 font-inter">900.00 Rs</p>
        <p className="text-xs mt-3 font-light font-inter">
          Idli is a popular South Indian breakfast dish made from fermented rice
          and black lentils.
        </p>
        <FoodItemStat
          title="Ingredients"
          value="Rice, Urad Dal(black gram lentils), Fenugreek Seeds, Salt, Water."
        />
        <div className={`${isOpen ? "" : "hidden"}`}>
          {foodItemStat.map((stat, index) => {
            return <FoodItemStat title={stat.title} value={stat.value} />;
          })}
        </div>
        <div className="flex w-full pb-4 mt-2 justify-center">
          <img
            onClick={() => setIsOpen(false)}
            className={`${isOpen ? "" : "hidden"} mt-4`}
            src="../../assets/Icons/up-arrow.svg"
            alt="Up Arrow"
          />
          <img
            onClick={() => setIsOpen(true)}
            className={`${isOpen && "hidden"} mt-4`}
            src="../../assets/Icons/down-arrow.svg"
            alt="Up Arrow"
          />
        </div>
      </div>

      {/* Selection part */}
      <div className="flex flex-col w-full mt-2 pr-6 pl-6 pt-6 bg-white">
        <div className="flex flex-col w-full">
          <h1 className="font-inter text-2xl text-black text-opacity-70">
            Add on Type 01
          </h1>
          <div className="flex flex-row pt-2 pb-2 w-full justify-between">
            <div className="flex flex-col">
              <p className="text-black text-sm text-opacity-70 font-light">
                Add on select multiple 01
              </p>
              <p className="text-fadedGray text-[10px]">+ 100.00 Rs</p>
            </div>
            <input
              className="justify-self-end w-5 accent-customButtonSelected focus:accent-white"
              type="checkbox"
              value=""
            />
          </div>
          <div className="flex flex-row pt-2 pb-2 w-full justify-between">
            <div className="flex flex-col">
              <p className="text-black text-sm text-opacity-70 font-light">
                Add on select multiple 02
              </p>

              <p className="text-fadedGray text-[10px]">+ 100.00 Rs</p>
            </div>
            <input
              className="justify-self-end w-5 accent-customButtonSelected focus:accent-white"
              type="checkbox"
              value=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="font-inter text-2xl text-black text-opacity-70">
            Add on Type 02
          </h1>
          <div className="flex flex-row pt-2 pb-2 w-full justify-between">
            <div>
              <p className="text-black text-sm text-opacity-70 font-light">
                Add on select single 01
              </p>
              <p className="text-fadedGray text-[10px]">+ 100.00 Rs</p>
            </div>
            <input className="justify-self-end w-5" type="radio" value="" />
          </div>
          <div className="flex flex-row pt-2 pb-2 w-full justify-between">
            <div className="flex flex-col">
              <p className="text-black text-sm text-opacity-70 font-light">
                Add on select single 02
              </p>
              <p className="text-fadedGray text-[10px]">+ 100.00 Rs</p>
            </div>
            <input
              className="justify-self-end w-5 border-red-400"
              type="radio"
              value=""
            />
          </div>
        </div>
      </div>

      {/* Note section */}
      <div className="flex flex-col w-full mt-4 pl-6 pr-6 pb-6">
        <h2>Add a note</h2>
        <div className="flex flex-col w-full mt-4">
          <input
            className="flex font-extralight text-[12px] w-full min-h-32 rounded-3xl border-[#ADADAD] border border-opacity-50 px-6 "
            placeholder="Write if there is any specific instruction"
          />
        </div>
        <div className="flex flex-row w-full pt-4 pb-4 justify-between">
          <p className="">Total Price</p>
          <p>1560.00 Rs</p>
              </div>
              <MainButton text="Add to My Orders" onClick={() => {}}/>
      </div>
    </div>
  );
};

export default FoodItem;
