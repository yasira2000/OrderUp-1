import React, { useState } from "react";
import logo from "../../assets/Icons/Temp-Logo-Order-Up.png";
import { MainButton } from "../components/MainButton"; // Ensure the path to MainButton is correct

const SignUp = () => {
  // State variables for input fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(""); // State for handling errors

  // Regex for validating phone numbers (example: matches 10-digit numbers)
  const phoneRegex = /^[0-9]{10}$/;

  // Function to validate phone number
  const isPhoneValid = (phone) => phoneRegex.test(phone);

  // Form submission handler
  const onSignUp = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!isPhoneValid(phone)) {
      setError("Please enter a valid 10-digit phone number."); // Set error if phone is invalid
      return;
    }

    setError(""); // Clear any existing error
    console.log("Sign up", name, phone); // Log input values if phone is valid
  };

  return (
    <div className="flex p-4 bg-customBackground min-h-screen justify-center items-center">
      <div className="flex flex-col items-center p-8 bg-white rounded-3xl border-lightGrayLines border-1 border-opacity-10 w-72 min-w-64">
        <div className="justify-center pb-2">
          <img
            src={logo}
            alt="Order-Up Logo"
            className="object-scale-down h-6"
          />
        </div>
        <p className="font-inter mt-2 font-light text-darkGray">Sign up</p>

        <form className="mt-5 flex-col w-full" onSubmit={onSignUp}>
          <p className="text-small-icon-sub-heading font-light text-darkGray">
            Name
          </p>
          <input
            type="text"
            placeholder="Enter username"
            className={`w-full py-3 pl-4 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-gray-300 ${
              name ? "border border-fadedGray" : ""
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <p className="mt-8 text-small-icon-sub-heading font-light text-darkGray">
            Phone No
          </p>
          <input
            type="text"
            placeholder="Enter Phone no"
            className={`w-full py-3 pl-4 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-gray-300 ${
              phone ? "border border-fadedGray" : ""
            }`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Display error message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <hr className="w-full h-1 mt-4 mb-4 border-lightGrayLines" />
          <div className="flex flex-col w-full items-center">
            {/* Use MainButton component */}
            <MainButton text="Sign up" onClick={onSignUp} />
          </div>
        </form>

        <p className="flex mt-6 text-small-icon-sub-heading text-customButtonSelected font-inter font-extralight self-center text-opacity-80">
          log in if you have already signed up
        </p>
      </div>
    </div>
  );
};

export default SignUp;
