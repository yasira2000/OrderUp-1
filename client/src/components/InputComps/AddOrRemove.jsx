import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { MdOutlineDeleteForever } from "react-icons/md";

export const AddOrRemove = ({ initialCount = 0, onCountChange }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const decrement = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className="flex items-center w-[60px] h-[24px] bg-lightGrayLines rounded-xl overflow-hidden">
      <button
        className="flex-1 bg-lightGrayLines flex items-center justify-center"
        onClick={decrement}
      >
        {count !== 1 ? <CgMathMinus /> : <MdOutlineDeleteForever />}
      </button>
      <div className="flex-1 flex items-center justify-center bg-lightGrayLines text-prime-font-color font-small-icon-sub-headings border-x border-white">
        {count}
      </div>
      <button
        className="flex-1 bg-light-gray-lines flex items-center justify-center"
        onClick={increment}
      >
        <CgMathPlus />
      </button>
    </div>
  );
};

AddOrRemove.propTypes = {
  initialCount: PropTypes.number,
  onCountChange: PropTypes.func.isRequired,
};

export default AddOrRemove;
