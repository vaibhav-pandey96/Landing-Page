import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        return  <button
        onClick={onClick}
        className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-2 rounded-full z-10"
      >
        <FaArrowRight />
      </button>
    };

export default CustomRightArrow
