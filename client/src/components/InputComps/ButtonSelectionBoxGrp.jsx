import React, { useState, useEffect } from "react";
import ButtonSelectionBox from "./ButtonSelectionBox";
import SearchBar from "../SearchBar";

const ButtonSelectionBoxGrp = ({
  items,
  onItemSelect,
  currentSelectedItem,
}) => {
  const [selectedItemsList, setSelectedItemsList] = useState(
    currentSelectedItem || []
  );

  const onInGrpItemSelect = (item) => {
    const itemIndex = selectedItemsList.indexOf(item);
    let newList = [...selectedItemsList];

    if (itemIndex === -1) {
      newList = [...selectedItemsList, item];
    } else {
      newList = selectedItemsList.filter(
        (selectedItem, index) => index !== itemIndex
      );
    }

    setSelectedItemsList(newList);
    onItemSelect(newList);
  };

  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const searchUpdate = (newSearchValue) => {
    setSearch(newSearchValue.search);
  };

  useEffect(() => {
    const searchTerm = search.toLowerCase();
    const filteredList = searchTerm
      ? items.filter((item) => item.toLowerCase().includes(searchTerm))
      : items;
    setFilteredItems(filteredList);
  }, [items, search]);

  return (
    <div className="flex flex-col w-full py-5 px-7 justify-between">
      <SearchBar
        onSubmit={searchUpdate}
        newSearchValue={search ?? ""}
        border={true}
        className="w-full py-2 pb-1"
      />
      <div className="max-h-[40vh] overflow-y-auto">
        <div className="flex flex-row flex-wrap mt-4 space-x-2 py-4">
          {selectedItemsList.map((item, index) => (
            <div
              key={index}
              className="bg-primeColor text-customButtonSelected px-4 py-2 rounded-full mb-2 h-5 w-13 text-small-icon-sub-heading flex items-center justify-center"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="max-h-[50vh] overflow-y-auto">
          {filteredItems.map((item, index) => (
            <ButtonSelectionBox
              key={index}
              buttonDisplayName={item}
              buttonValue={item}
              onPushdownButtonChange={onInGrpItemSelect}
              buttonState={selectedItemsList.indexOf(item) !== -1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonSelectionBoxGrp;
