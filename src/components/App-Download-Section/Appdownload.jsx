import React from "react";
import AppCard from "./AppCard";
import { FaGooglePlay } from "react-icons/fa";
import { GrApple } from "react-icons/gr";

const Appdownload = () => {
  return (
    <div className="w-full md:min-h-[15rem] min-h-[8rem] bg-blue-900 md:pl-6 flex gap-3  ">
      <div className="w-[50%] mt-5 ml-3 gap-4 flex flex-col">
        <div className="">
          <p className="font-bold text-xs mb-3 md:text-lg lg:text-3xl">
            Manage Your services by your Mobile Phone
          </p>
          <p className="text-[12px] lg:text-lg">
            Download our app to manage and track your services. Our app enables
            you to stay in touch with our experts and aids you in tracking your
            progress.{" "}
          </p>
        </div>
        <p className=" font-semibold lg:text-xl">Get the App</p>
        <div className="gap-5 flex mb-5">
          <AppCard
            icon={<FaGooglePlay />}
            label="Get it on"
            storeName="Google Play"
            href="https://play.google.com/store/apps/details?id=com.example"
          />
          <AppCard
            icon={<GrApple />}
            label="Get it on"
            storeName="Apple Store"
            href="https://www.apple.com/in/store"
          />
        </div>
      </div>
      <div className="w-[50%] bg-blue-900 flex gap-3 md:translate-x-15 lg:translate-x-25 overflow-hidden ">
        <img
          src="./iPhone Xs.svg"
          alt="iphonexs"
          className="max-h-[10rem] md:max-h-[14rem] lg:max-h-[18rem]  translate-y-38"
        />
        <img
          src="./iPhone Xs.svg"
          alt="iphonexs"
          className="max-h-[12rem] md:max-h-[16rem] lg:max-h-[22rem]  translate-y-20 "
        />
      </div>
    </div>
  );
};

export default Appdownload;
