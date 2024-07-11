import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Icons/Logo-Order-Up.png";

import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="flex p-4 bg-[#ECE6E3] min-h-screen justify-center items-center">
      <div className="flex flex-col items-center p-8 bg-white rounded-3xl border-[#DEDEDE] border-1 border-opacity-10 w-72 min-w-64">
        <div className="justify-center pb-2">
          <img
            src={logo}
            alt="Order-Up Logo"
            className="object-scale-down h-6"
          />
        </div>
        <p className="font-inter mt-2 font-light">Sign in / Sign up</p>

        <div className="mt-5 flex-col w-full">
          <p className="text-[10px] font-w font-light">Name</p>
          <InputField text="Enter username" />
          <p className="mt-8 text-[10px] font-light">Phone No / Email</p>
          <InputField text="Enter Phone no or Email" />
        </div>
        <hr className="w-full h-1 mt-4 mb-4" />
        <div className="flex flex-col w-full items-center">
          <button className="bg-[#F09C67] w-full h-8 rounded-full font-extralight text-white text-opacity-80 text-sm font-inter">
            <Link to="otp">Sign in / Sign up</Link>
          </button>
          <p className="flex mt-6 text-[10px] text-[#F09C67] font-inter font-extralight self-center text-opacity-80">
            Only View the Menu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
