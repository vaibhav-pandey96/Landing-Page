import React from 'react'
import { useEffect, useState } from "react";

const Videosec = () => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    setVideoSrc("https://www.youtube.com/embed/mqqft2x_Aa4");
  }, []);

  return (
    <div className='w-full h-[250px] md:h-auto bg-blue-900 flex flex-row shrink '>
      <div className='w-[50%] px-3 md:px-9 flex flex-col gap-2 md:gap-3 py-4 md:py-13 '>
        <h1 className='text-sm md:text-3xl text-white font-semibold'>Our Video Introductions</h1>
        <p className='text-[8px] md:text-xs text-gray-300'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorum nobis nam cum, ea laboriosam. </p>
        <div className='flex flex-row items-center   md:gap-5 '> 
          <img className='h-9 w-9 md:h-12 md:w-11 pt-2' src="/Display Icon.svg" alt="logo" />
          <h1 className='text-xs  md:text-xl font-semibold pl-2'>Explore Ideas Together</h1>
         
      </div>
      <p className='pl-10 md:pl-17 text-[8px] mt-[-7px] md:text-sm text-gray-300'>Engage audience segments and finally create actionable insights.
      Amplify Vertical integration.</p>

      <div className='flex flex-row gap-1 md:gap-4 items-center'> 
          <img className='h-7 w-7 md:h-11 md:w-11'  src="/Display Icon 2.svg" alt="logo" />
          <h1 className='text-xs  md:text-xl font-semibold pl-2'>Bring those ideas to life </h1>
      </div>
      <p className='pl-10 md:pl-17 mt-[-7px] text-[8px] md:text-sm text-gray-300'>Engage audience segments and finally create actionable insights.</p>

      </div>

      {/* Right side */}

      <div className='w-[50%] pt-3 md:pt-10 flex  items-center justify-center'>

      {videoSrc ? (
          <iframe
            className="w-[90%] h-[90%] items-center justify-center md:h-[90%] rounded-lg shadow-lg"
            src={videoSrc}
            title="Video Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-white">Loading video...</p>
        )}

      </div>
      
    </div>
  )
}

export default Videosec