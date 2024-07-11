import React from "react";
import "../../styles/CustomStylePresets.css";

function ButtonPushDown({
  buttonDisplayName,
  buttonValue,
  onPushdownButtonChange,
  buttonState,
}) {
  const handleClick = () => {
    onPushdownButtonChange(buttonValue);
  };

  return (
    <button
      className={` px- ${
        buttonState
          ? "filterButton-pressed shadow-lg"
          : "filterButton-default bg-primeColor shadow-lg"
      }`}
      onClick={handleClick}
    >
      <div className="px-2 text-small-icon-sub-heading">
        {buttonDisplayName}
      </div>
    </button>
  );
}

export default ButtonPushDown;
