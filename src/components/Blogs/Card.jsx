import React from 'react'
import { GoDotFill } from "react-icons/go";

const Card = ({image, name, date, title, titleClass, description, badges = [], badgeClass}) => {
  return (
    <div className=" max-w-[30%] rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      {/* Image container */}
      <figure className="overflow-hidden">
        <img 
          src={image}
          alt="Shoes"
          className="w-full bg-green-400"
        />
      </figure>

      {/* Content section */}
      <div className="card-body p-4 space-y-3">
        {/* Author and date row */}
        <p className="flex items-center lg:text-[15px] md:text-[12px] text-[7px] text-black text-sm  md:text-base gap-2">
          {name} 
          <GoDotFill className="w-2 h-2 text-gray-600" />
          {date}
        </p>

        {/* Title */}
        <a 
          href="#" 
          className={`font-bold transition-colors lg:text-sm hover:text-blue-600 ${titleClass}`}
        >
          {title}
        </a>

        {/* Description */}
        <p className="text-[6px] md:text-xs lg:text-[15px] text-black">{description}</p>

        {/* Badges container */}
        <div className="card-actions gap-0 min-h-10 ">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className={`px-1 py-0 md:text-sm rounded-full ${badgeClass}`}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card