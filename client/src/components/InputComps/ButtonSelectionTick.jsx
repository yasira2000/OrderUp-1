import React from "react";
import "../../styles/CustomStylePresets.css";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";

function ButtonSelectionTick({
  buttonDisplayName,
  buttonValue,
  onPushdownButtonChange,
  buttonState,
}) {
  const handleClick = () => {
    onPushdownButtonChange(buttonValue);
  };

  return (
    <div>
      <div className="w-full flex flex-row items-center justify-between">
        <h4 className="flex-shrink-0 text-icon-sub-heading">
          {buttonDisplayName}
        </h4>
        <button
          className={`flex-shrink-0 ${
            buttonState ? "text-customButtonSelected" : "text-fadedGray"
          }`}
          onClick={handleClick}
        >
          {buttonState ? (
            <IoIosCheckbox size={24} />
          ) : (
            <IoIosCheckboxOutline size={24} />
          )}
        </button>
      </div>
      <hr className=" border-t border-lightGrayLines mx-1 my-2" />
    </div>
  );
}

export default ButtonSelectionTick;
