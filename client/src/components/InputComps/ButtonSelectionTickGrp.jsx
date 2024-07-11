import React, { useState } from "react";
import ButtonSelectionTick from "./ButtonSelectionTick";

const ButtonSelectionTickGrp = ({
  items,
  onItemSelect,
  currentSelectedItem,
}) => {
  const [selectedItemsList, setSelectedItemsList] = useState(
    currentSelectedItem || []
  );

  const onInGrpItemSelect = (item) => {
    // Check if the item is already in the selectedItemsList
    const itemIndex = selectedItemsList.indexOf(item);

    let newList = [...selectedItemsList]; // Use let to allow reassignment

    if (itemIndex === -1) {
      // Item is not in the list, so add it
      newList = [...selectedItemsList, item];
    } else {
      // Item is already in the list, so remove it
      newList = selectedItemsList.filter(
        (selectedItem, index) => index !== itemIndex
      );
    }

    // Update selectedItemsList state
    setSelectedItemsList(newList);

    // Notify parent component with the updated list
    onItemSelect(newList);
  };

  return (
    <div className="flex flex-col w-full py-5 px-7 justify-between">
      {items.map((item, index) => (
        <ButtonSelectionTick
          key={index}
          buttonDisplayName={item}
          buttonValue={item}
          onPushdownButtonChange={onInGrpItemSelect}
          buttonState={selectedItemsList.indexOf(item) !== -1}
        />
      ))}
    </div>
  );
};

export default ButtonSelectionTickGrp;
