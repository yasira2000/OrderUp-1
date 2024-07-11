import React, { useState } from "react";
import ButtonPushDown from "./ButtonPushDown";

const ButtonPushDownGroup = ({ items, onItemSelect, currentSelectedItem }) => {
  const [selectedItem, setSelectedItem] = useState(currentSelectedItem);

  const onInGrpItemSelect = (item) => {
    const newSelectedItem = selectedItem === item ? null : item;
    setSelectedItem(newSelectedItem);
    onItemSelect(newSelectedItem);
  };

  return (
    <div className="flex flex-row w-full py-5 px-7 justify-between">
      {items.map((item, index) => (
        <ButtonPushDown
          key={index}
          buttonDisplayName={item}
          buttonValue={item}
          onPushdownButtonChange={onInGrpItemSelect}
          buttonState={selectedItem === item}
        />
      ))}
    </div>
  );
};

export default ButtonPushDownGroup;
