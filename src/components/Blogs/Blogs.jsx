import React from "react";
import Card from "./Card";

const Blogs = () => {
  return (
    <div className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-orange-500 mb-2">Explore Our Blogs</p>
        <p className="text-3xl md:text-4xl font-bold text-black">
          Accelerate Digital Transformation
        </p>
      </div>
      <div className="w-[100%] lg:py-5 md:py-5 gap-5 flex flex-col">
        <div className="flex flex-row gap-1 justify-between items-center md:px-5 lg:px-15 w-full">
          <Card
            image="./img1.svg"
            name="Vaibhav Pandey"
            date="12th Oct 2021"
            title="Small business and Startup"
            description="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
            badges={["Tax & Audit ", "Management"]}
            titleClass="text-black text-[9.7px]  "
            badgeClass="text-red-700 text-[6px] md:text-[10px] lg:text-sm"
          />

          {/* Card 2 */}

          <Card
            image="./img2.svg"
            name="Mahesh Kumar"
            date="26th Oct 2022"
            title="Scale up Company Offer"
            description="Mental models are simple expressions of complex processes or relationships."
            badges={["Tax", "Research", "Compleince"]}
            titleClass="text-black text-[9.7px] "
            badgeClass="text-purple-700 text-[6px] md:text-[10px] lg:text-sm"
          />

          {/* Card 3 */}

          <Card
            image="./img1.svg"
            name="Vaibhav Pandey"
            date="12th Oct 2021"
            title="Growing business Package"
            description="Introduction to Wireframing and its Principles. Learn from the best in the industry."
            badges={["Audit ", "Money Back"]}
            titleClass="text-black text-[9.7px] "
            badgeClass="text-orange-700 text-[6px] md:text-[10px] lg:text-sm"
          />
        </div>
        <div className="flex flex-row justify-between items-center lg:px-15 md:px-5 w-full">
          <Card
            image="./img1.svg"
            name="Vaibhav Pandey"
            date="12th Oct 2021"
            title="Small business and Startup"
            description="Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"
            badges={["Tax & Audit ", "Management"]}
            titleClass="text-black text-[9.7px]  "
            badgeClass="text-red-700 text-[6px] md:text-[10px] lg:text-sm"
          />

          {/* Card 5 */}

          <Card
            image="./img2.svg"
            name="Mahesh Kumar"
            date="26th Oct 2022"
            title="Scale up Company Offer"
            description="Mental models are simple expressions of complex processes or relationships."
            badges={["Tax", "Research", "Compleince"]}
            titleClass="text-black text-[9.7px] "
            badgeClass="text-purple-700 text-[6px] md:text-[10px] lg:text-sm"
          />

          {/* Card 6 */}

          <Card
            image="./img1.svg"
            name="Vaibhav Pandey"
            date="12th Oct 2021"
            title="Growing business Package"
            description="Introduction to Wireframing and its Principles. Learn from the best in the industry."
            badges={["Audit ", "Money Back"]}
            titleClass="text-black text-[9.7px] "
            badgeClass="text-orange-700  text-[6px] md:text-[10px] lg:text-sm"
          />
        
        </div>
      </div>
      <div className="flex justify-center mt-3 pb-3 items-center">
        <button 
          className="text-white w-25  text-[10px] md:text-sm md:w-36 bg-blue-900 border-1 p-1 rounded"
          type="button"
        >
          Show More Blogs
        </button>
      </div>
    </div>
  );
};

export default Blogs;
