import React from "react";

const InputField = ({ text }) => {
  return (
    <div className="w-full h-8 flex self-start">
      <input
        className="font-extralight text-[12px] w-full h-full rounded-full self-start border-[#ADADAD] border border-opacity-50 px-6 py-4 text-sm"
              placeholder={text}
              
      />
    </div>
  );
};

export default InputField;
