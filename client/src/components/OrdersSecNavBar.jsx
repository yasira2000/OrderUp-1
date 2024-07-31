import React, { useState, useEffect } from "react";
import SecondaryNavBarButton from "./SecondaryNavBarButton";
import { GiTable } from "react-icons/gi";
import { PiUserListLight } from "react-icons/pi";
import { TbReportMoney } from "react-icons/tb";
export default function OrdersSecNavBar({ onSelect, selected }) {
  const handleSecNavSelect = (page) => {
    onSelect(page);
  };

  const [selectedBtn, setSelectedBtn] = useState(selected);

  useEffect(() => {
    setSelectedBtn(selected);
  }, [selected]);

  return (
    <div>
      {" "}
      <div className="flex flex-row gap-1 p-2 px-6">
        <SecondaryNavBarButton
          btnName={"myOrders"}
          onClick={handleSecNavSelect}
          icon={PiUserListLight}
          position="left"
          isActive={selectedBtn === "myOrders"}
        />
        <SecondaryNavBarButton
          btnName={"tableOrders"}
          onClick={handleSecNavSelect}
          icon={GiTable}
          position="middle"
          isActive={selectedBtn === "tableOrders"}
        />
        <SecondaryNavBarButton
          btnName={"bill"}
          onClick={handleSecNavSelect}
          icon={TbReportMoney}
          position="right"
          isActive={selectedBtn === "bill"}
        />
      </div>
    </div>
  );
}
