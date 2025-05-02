import React from 'react'
import { SiGoogleforms } from "react-icons/si";
import { MdOutlinePayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const HappyClients = () => {
  return (
    <>
    <div className='md:mt-10 w-full flex-wrap max-h-[650px] flex flex-col gap-5 items-center justify-center bg-gray-100 '>
      <div className='flex flex-col gap-5 items-center w-[70%] justify-center'>
        <p className='text-black text-sm md:text-2xl font-bold'>Our Happy Clients</p>
        <p className='text-black text-center text-[8px]'>Professionaly Cultivate one-to-one customer service with robust ideas. Dynamically innovate
            resource-leveling customer service for state of the art customer service.
        </p>
      </div>
      <div>
        <img src="./Pagination_container.svg" alt="Pagination_container" />
      </div>
    </div>

               {/* Form Section */}
      <div className='mt-1 bg-red-200 w-full text-left flex px-1 py-4 gap-1 items-center justify-center max-h-[90px]'>  
            
              <SiGoogleforms className=' size-6 text-red-600 md:h-12 md:w-12 md:p-2' />
              <p className='text-black font-semibold text-[6px] md:text-xs lg:text-sm'>Fill up Application Form</p>

              <MdOutlinePayment className=' size-6 text-green-600  md:h-12 md:w-12 md:p-2' />
              <p className='text-black font-semibold text-[6px] md:text-xs lg:text-sm'>Make Online Payments</p>
          
              <MdSupportAgent className=' size-6 text-orange-600  md:h-12 md:w-12 md:p-2'/>
              <p className='text-black font-semibold text-[6px] md:text-xs lg:text-sm' >Executive will Process Application</p>
            
              <MdOutlineMailOutline className=' size-6 text-gray-500 md:h-12 md:w-12 md:p-2' />
              <p className='text-black font-semibold text-[6px] md:text-xs lg:text-sm'>Get Confirm Mail</p>
      </div>
    </>
  )
}

export default HappyClients
