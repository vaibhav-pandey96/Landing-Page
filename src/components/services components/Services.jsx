import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col max-h-[1000px] justify-center items-center md:pt-5  w-full ">
      <div className="flex flex-col lg:w-[700px] items-center">
        <p className="font-semibold uppercase text-xs md:text-sm lg:text-lg text-orange-400">
          Welcome to RegisterKaro.in
        </p>
        <p className="text-black text-sm lg:text-4xl font-semibold md:text-3xl mt-2 md:font-bold ">
          Explore Our Services
        </p>
      </div>
      <div className="flex lg:gap-15 gap-1 text-xs mt-3 w-full justify-center  md:px-20 md:mt-10  ">
        <div className="flex gap-3 flex-col items-center px-1 w-[180px] md:w-[300px] lg:w-[600px] lg:h-[350px]">
          <img
            className="h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14 "
            src="./vector1.svg"
            alt="Companies Formation"
          />
          <p className="text-black font-bold text-[10px] lg:text-2xl md:text-xl text-center ">
            Company Formation
          </p>
          <p className="text-black text-center text-[8px] md:text-sm lg:text-2xl ">
            Build web-based solutions that enhance customer experience.
          </p>
          <div>
            <a href="#">
              <p className="text-blue-900 lg:text-lg">Learn more</p>
            </a>
          </div>
        </div>
        {/* one section */}
        <div className="flex  gap-3 flex-col items-center px-1 lg:w-[600px] lg:h-[350px] sm:w-[180px] md:w-[300px] ">
          <img
            className="h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14 "
            src="./vector2.svg"
            alt="Companies Formation"
          />
          <p className="text-black font-bold  text-[10px] text-center md:text-xl lg:text-2xl">
            Company Secretarial Services
          </p>
          <p className="text-black  text-center text-[8px] lg:text-2xl md:text-sm">
            Make data-driven decisions and utilize technology to reach business
            goals.
          </p>
          <div>
            <a href="#">
              <p className="text-blue-900 lg:text-lg">Learn more</p>
            </a>
          </div>
        </div>
        {/* one section */}
        <div className="flex lg:w-[600px] lg:h-[350px] gap-3 flex-col items-center px-1 sm:w-[180px] md:w-[300px]">
          <img
            className="h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14"
            src="./vector3.svg"
            alt="Companies Formation"
          />
          <p className="text-black font-bold text-[10px] md:text-xl text-center lg:text-2xl">
            Virtual Office Address
          </p>
          <p className="text-black text-center text-[8px] lg:text-2xl md:text-sm">
            Foster Customer relationships by effectively serving your market.
          </p>
          <div>
            <a href="#">
              <p className="text-blue-900 lg:text-lg">Learn more</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-1 lg:gap-15 mt-5 w-full justify-center md:px-20 md:mt-10 text-xs">
        <div className="flex lg:w-[600px] lg:h-[350px] gap-3 flex-col items-center px-1 sm:w-[180px] md:w-[300px]sm:w-[180px] md:w-[300px] ">
          <img
            className="h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14"
            src="./vector4.svg"
            alt="Companies Formation"
          />
          <p className="text-black font-bold text-[10px] md:text-xl text-center lg:text-2xl">
            Annual Compliance Services
          </p>
          <p className="text-black text-center text-[8px] lg:text-2xl md:text-sm ">
            Turn your ideas into modern products with our design expertsPayroll
            Services.
          </p>
          <div>
            <a href="#">
              <p className="text-blue-900 lg:text-lg">Learn more</p>
            </a>
          </div>
        </div>

        {/* somethings */}

        <div className="flex gap-3 flex-col  lg:w-[650px] lg:h-[250px] items-center px-1 sm:min-w-[180px]  sm:w-[180px] md:w-[300px] ">
          <img
            className="h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14"
            src="./vector5.svg"
            alt="Companies Formation"
          />
          <p className="text-black font-bold  text-[10px] text-center md:text-xl lg:text-2xl">
            Payroll Services
          </p>
          <p className="text-black  text-center text-[8px] lg:text-2xl md:text-sm">
            Expand your business across the globe with minimal effort.
          </p>
          <div>
            <a href="#">
              <p className="text-blue-900 lg:text-lg">Learn more</p>
            </a>
          </div>
        </div>

        {/* somefefe */}

        <div className="flex lg:w-[600px]  lg:h-[250px] gap-3 flex-col items-center px-1 sm:w-[180px] md:w-[300px]">
          <img
            className="h-6 w-6 md:h-10 md:w-10 lg:h-14 lg:w-14"
            src="./vector6.svg"
            alt="Companies Formation"
          />
          <p className="text-black font-bold text-[10px] md:text-xl text-center lg:text-2xl">
            Bookkeeping Services
          </p>
          <p className="text-black text-center text-[8px] lg:text-2xl md:text-sm">
            Steering user behaviour with creative design, data insights &
            technology.
          </p>
          <div>
            <a href="#">
              <p className="text-blue-900 lg:text-lg">Learn more</p>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-3 ">
        <button className="bg-blue-900 text-white text-xs p-2.5 rounded ">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default Services;
