import React, { useState } from "react";
import ButtonSelectionDot from "./ButtonSelectionDot";

const ButtonSelectionDotGrp = ({
  items,
  onItemSelect,
  currentSelectedItem,
}) => {
  const [selectedItem, setSelectedItem] = useState(currentSelectedItem);

  const onInGrpItemSelect = (item) => {
    const newSelectedItem = selectedItem === item ? null : item;
    setSelectedItem(newSelectedItem);
    onItemSelect(newSelectedItem);
  };

  return (
    <div className="flex flex-col w-full py-5 px-7 justify-between">
      {items.map((item, index) => (
        <ButtonSelectionDot
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

export default ButtonSelectionDotGrp;
