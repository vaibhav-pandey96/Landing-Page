import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Questions = ({para }) => {
  return (
    <div className='w-full max-h-17 lg:px-8 px-2 py-2 lg:py-5 border lg:mb-2 flex items-center justify-between ring-black-4 shadow-md border-black rounded-md my-1 '>
      <p className='text-black text-[10.5px] lg:text-xl font-semibold'>{para}  </p>
      <button>
      <MdOutlineKeyboardArrowRight  className='text-black size-6'/></button>
    </div>
  )
}

export default Questions
