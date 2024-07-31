import React, { useState, useEffect } from "react";
import { MainButton } from "../MainButton"; // Ensure you have these components
import { SecondaryButton } from "../SecondaryButton"; // Ensure you have these components
import TextInput from "../InputComps/TextInput";

export default function TextSubmitrPopUp({
  isVisible,
  filterDisplayName,
  headerText,
  placeholderText,
  submitButtonText,
  cancleButtonText,
  onSubmit,
  onCancle,
}) {
  const [textInput, setTextInput] = useState(""); // State to manage input field value
  const [isRendered, setIsRendered] = useState(isVisible);

  // Handle visibility changes with animations
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

  // Function to handle input change
  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    onSubmit(textInput);
    setTextInput(""); // Clear input field after submission
  };

  // Function to handle clearing the input field
  const handleReset = () => {
    setTextInput("");
    onCancle();
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
        className={`bg-white p-4 rounded-t-3xl w-full pb-12 flex flex-col shadow-upward transition-transform duration-300 max-h-[90%] ${
          isVisible
            ? "translate-y-0 animate-slideUp"
            : "translate-y-full animate-slideDown"
        }`}
      >
        <h1 className="text-result-heading text-center">{filterDisplayName}</h1>
        <hr className="my-2 border-t-2 border-lightGrayLines" />
        <h2 className=" text-icon-sub-heading">{headerText}</h2>
        <div className="flex-1 overflow-auto">
          <TextInput
            value={textInput}
            onChange={handleChange}
            placeholder={placeholderText}
            className="m-4"
            inputClassName="text-icon-sub-heading"
            border={true}
            rows={6}
          />
        </div>

        <hr className="my-2 mb-5 border-t-2 border-lightGrayLines" />
        <div className="flex flex-col w-full">
          <MainButton text={submitButtonText} onClick={handleSubmit} />
          <SecondaryButton text={cancleButtonText} onClick={handleReset} />
        </div>
      </div>
    </div>
  );
}
