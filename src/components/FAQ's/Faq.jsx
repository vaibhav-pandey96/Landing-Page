import React from "react";
import Questions from "./Questions";
import { FaArrowRightLong } from "react-icons/fa6";

const Faq = () => {
  return (
    <div className="w-full max-h-[650px] flex justify-center items-center flex-col ">
      <div className="my-5 ">
        <h3 className="text-orange-400 text-center">FAQ</h3>
        <h1 className="text-amber-800 font-bold text-center">
          Frequently Asked Questions
        </h1>
      </div>
      <div className=" max-h-[550px] w-[90%] mb-5">
        <Questions
        para ="Can I recover deleted files from desktop with this Software?"/>
        <Questions
        para ="Can I recover deleted files from desktop with this Software?"/>
        <Questions
        para ="Can I recover deleted files from desktop with this Software?"/>
        <Questions
        para ="Can I recover deleted files from desktop with this Software?"/>
        <Questions
        para ="Can I recover deleted files from desktop with this Software?"
        />
        
      </div>
      <button className="text-white flex justify-center items-center mb-5 gap-4 bg-blue-700 w-35 text-sm border rounded p-1">Show More <FaArrowRightLong className="mt-1" /></button>
    </div>
  );
};

export default Faq;
