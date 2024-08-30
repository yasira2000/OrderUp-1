import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import logo from "../../assets/Icons/Temp-Logo-Order-Up.png";
import { MainButton } from "../components/MainButton"; // Ensure the path to MainButton is correct

const mockCheckPhoneNumber = async (phone) => {
  // Simulating a backend API call to check if the phone number exists
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = {
        1234567890: "John Doe", // Mock data: phone number and username
        "0987654321": "Jane Smith",
        "0711926461": "Ginushmal",
      };
      resolve(users[phone] || null); // Resolve with username or null if not found
    }, 1000); // Simulated API call delay
  });
};

const Login = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(""); // State for handling errors
  const [message, setMessage] = useState(""); // State for handling welcome messages
  const [showPopup, setShowPopup] = useState(false); // State to handle the popup display

  const navigate = useNavigate(); // Initialize navigate for redirection

  // Regex for validating phone numbers (example: matches 10-digit numbers)
  const phoneRegex = /^[0-9]{10}$/;

  // Function to validate phone number
  const isPhoneValid = (phone) => phoneRegex.test(phone);

  const onLogin = async (event) => {
    event.preventDefault();

    if (!isPhoneValid(phone)) {
      setError("Please enter a valid 10-digit phone number."); // Set error if phone is invalid
      setMessage(""); // Clear any existing messages
      return;
    }

    setError(""); // Clear any existing error

    // Call the mock API to check the phone number
    const userName = await mockCheckPhoneNumber(phone);
    if (userName) {
      setMessage(`Welcome back, ${userName}!`);
      setShowPopup(true); // Show the welcome popup

      // Redirect to the home page after 2 seconds
      setTimeout(() => {
        setShowPopup(false); // Hide the popup
        navigate("/"); // Redirect to the home page
      }, 2000);
    } else {
      setError("Phone number not found. Please try again.");
    }
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
        <p className="font-inter mt-2 font-light text-darkGray">Log In</p>

        <form className="mt-5 flex-col w-full" onSubmit={onLogin}>
          <p className="text-small-icon-sub-heading font-light text-darkGray">
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
            <MainButton text="Log In" onClick={onLogin} />
          </div>
        </form>
      </div>

      {/* Welcome Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-customButtonActiveText text-lg">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
