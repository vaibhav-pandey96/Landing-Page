import React from "react";

const Items = ({ para, image, name, designation }) => {
  return (
    <div className=" bg-gray-300  px-1 pb-1  md:p-2 max-h-[250px] lg:max-w-[450px] md:max-w-[350px] md:max-h-[300px] border rounded md:gap-5 flex flex-col">
      <div className=" md:h-8 flex flex-row justify-between  items-center  md:max-w-[480px] ">
        <div className="font-extrabold text-orange-500  md:text-5xl">"</div>
        <div className="rating w-12 h-5 md:w-25">
          <div
            className="mask mask-star bg-amber-600 "
            aria-label="1 star"
          ></div>
          <div
            className="mask mask-star bg-amber-600"
            aria-label="2 star"
          ></div>
          <div
            className="mask mask-star bg-amber-600"
            aria-label="3 star"
            aria-current="true"
          ></div>
          <div
            className="mask mask-star bg-amber-600"
            aria-label="4 star"
          ></div>
          <div
            className="mask mask-star bg-amber-600"
            aria-label="5 star"
          ></div>
        </div>
      </div>
      <div>
        <p className="text-black text-[10px] md:text-sm text-left p-3">{para}</p>
      </div>
      <div className="flex flex-row w-300px gap-3">
        <img
          src={image}
          alt="Profile Pic"
          className="h-15 w-17 rounded-full"
        />
        <div className="flex flex-col justify-center items-start text-black ">
          <p className="font-semibold">{name}</p>
          <p className="text-[10px] md:text-xs">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
