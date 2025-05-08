import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Previous slide"
      className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-2 rounded-full z-10"
    >
      <FaArrowLeft />
    </button>
  );
};

export default CustomLeftArrow;
