import React from "react";
import { MainButton } from "./MainButton";

export default function OrderPagesFooter({
  valName,
  val,
  buttonName,
  onButtonPress,
}) {
  return (
    <div>
      {" "}
      <div className="fixed bottom-0 left-0 w-full h-[183px] bg-white shadow-upward">
        <div className="relative w-full h-full p-2.5">
          <div className=" w-full flex justify-between items-center p-2.5">
            <div className="font-icon-sub-headings font-icon-sub-heading text-black text-lg tracking-wide leading-tight">
              {valName}
            </div>
            <div className="font-icon-sub-headings font-icon-sub-heading text-black text-lg tracking-wide leading-tight">
              {val} Rs.
            </div>
          </div>
          <MainButton className="" text={buttonName} onClick={onButtonPress} />
        </div>
      </div>
    </div>
  );
}
