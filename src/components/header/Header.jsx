import React from 'react'
import { IoIosMail } from "react-icons/io";
import Line from './Line';
import { IoCall } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandPicsart } from "react-icons/tb";

function Header() {
  return (
    <div className='bg-blue-900 text-white flex justify-end w-full h-auto sm:flex-row  items-center p-2 sm:p-0 '>
        <div className='container  w-full  max-h-[28px] flex items-center gap-2 md:gap-5 justify-end pr-5  '>
        <a className='flex justify-around  text-center items-center align-top gap-1 lg:text-xl md:text-sm text-[10px] ' href="#"> <IoIosMail className='p-0 mt-1 ' /> www.google.com</a>
        <Line/>
        <div className='flex items-center lg:text-xl md:text-xs text-[10px] gap-1'>
        <IoCall className='p-0 m-0 rotate-260' /> +123456789
        </div>
        <Line/>
        <div className='flex items-center gap-3 lg:text-xl md:text-sm text-[10px] '>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><TbBrandPicsart /></a>
        </div>
        </div>

    </div>
  )
}
export default Header
