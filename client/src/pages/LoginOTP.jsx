import React from "react";

import logo from "../../assets/Icons/Logo-Order-Up.png";

import InputField from "../components/InputField";

const LoginOTP = () => {
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
        <p className="font-inter mt-2 font-light">Sign up</p>
              <div className="flex justify-start mt-5">  
                  <p className="text-[10px] text-[#848484] text-opacity-80 font-inter font-light">Enter the OTP sent to your email or phone number to verify your account</p>
                  
              </div>
              <hr className="w-full h-1 mt-4 mb-4" />
        <div className="flex-col w-full">
          <p className="text-[10px] font-w font-light">OTP</p>
          <InputField text="Enter the OTP" />
          
        </div>
        <hr className="w-full h-1 mt-5 mb-4" />
        <div className="flex flex-col w-full items-center">
          <button className="bg-[#F09C67] w-full h-8 rounded-full font-extralight text-white text-opacity-80 text-sm font-inter">
            Sign up
          </button>
          <p className="flex mt-6 text-[10px] text-[#F09C67] font-inter font-extralight self-center text-opacity-80">
            Only View the Menu
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginOTP;
