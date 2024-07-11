import React, { useState, useEffect } from "react";
import { MainButton } from "../MainButton";
import { SecondaryButton } from "../SecondaryButton";

const FilterPopUpMenu = ({
  filterDisplayName,
  filterName,
  isVisible,
  selectedItem,
  onSubmit,
  children,
  submitButtonText,
  cancleButtonText,
}) => {
  const [currentSelectedItem, setCurrentSelectedItem] = useState(selectedItem);
  const [isRendered, setIsRendered] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setTimeout(() => setIsRendered(false), 300); // Wait for animation to finish
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible]);

  useEffect(() => {
    setCurrentSelectedItem(selectedItem); // Update currentSelectedItem when selectedItem changes
  }, [selectedItem]);

  const onItemSelect = (item) => {
    setCurrentSelectedItem(item);
  };

  const handleReset = () => {
    setCurrentSelectedItem(null);
    onSubmit({
      filterName: filterName,
      value: null,
    });
  };

  const handleSubmit = () => {
    onSubmit({
      filterName: filterName,
      value: currentSelectedItem,
    });
  };

  if (!isRendered && !isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-end">
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isVisible ? "animate-fadeIn" : "animate-fadeOut"
        }`}
      />
      <div
        className={`bg-white p-4 rounded-t-3xl max-w w-full pb-12 flex flex-col shadow-upward transition-transform duration-300 max-h-[90%] ${
          isVisible
            ? "translate-y-0 animate-slideUp"
            : "translate-y-full animate-slideDown"
        }`}
      >
        <h1 className="text-result-heading text-center">{filterDisplayName}</h1>
        <hr className="my-2 border-t-2 border-lightGrayLines" />

        <div className="">
          {React.cloneElement(children, {
            currentSelectedItem: currentSelectedItem,
            onItemSelect: onItemSelect,
          })}
        </div>

        <hr className="my-2 mb-5 border-t-2 border-lightGrayLines" />
        <div className="flex flex-col w-full">
          <MainButton text={submitButtonText} onClick={handleSubmit} />
          <SecondaryButton text={cancleButtonText} onClick={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default FilterPopUpMenu;
