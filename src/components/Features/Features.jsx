import React from 'react'
const Features = () => {
  return (
    <div className='w-full flex flex-col max-h-[250px]  mb-5 py-5 box-border gap-5 md:max-h-[480px] px-3 md:px-15 '>
        <div className='w-full h-[50%] gap-5  flex flex-row shrink'>
           <div className='flex flex-col w-[70%] gap-2 '>
            <p className='text-orange-400 uppercase text-[8px] md:text-xs'>Why registerkaro.in</p>
            <h1 className='text-black font-bold text-[12px] md:text-2xl'>Why Choose Register Karo</h1>
            <p className='text-black text-[8px] md:text-sm'>It is with consistent services and results that build trust with people 
            and that in turn help us to serve the business better. </p>
            </div>

          <div className=' w-[100%]  flex flex-row gap-3 justify-end px-2'>
            <div className='w-[49%] py-2 md:h-[215px] text-black bg-pink-200  rounded-2xl flex flex-col px-2 text-center justify-center gap-2 items-center'>
                    <img  className='h-4 w-4 md:h-8 md:w-8' src="./confidential.svg" alt="logo" />
                    <h1 className='font-semibold text-[9px] md:text-[15px]'>Confidential & Safe</h1>
                    <p className='texmd:t-center md:text-[14px] font-normal text-[6px]'>All Your private information is safe with us</p>
            </div>
              <div className='w-[49%] py-2   text-black bg-green-200  rounded-2xl flex px-2 flex-col text-center justify-center gap-2 items-center '>
                    <img className='h-4 w-4 md:h-8 md:w-8' src="./No_hidden.svg" alt="logo" />
                    <h1 className='font-semibold text-[9px] md:text-[15px]'>No Hidden Fee</h1>
                    <p className='md:text-[14px] text-center font-normal text-[6px]'>Everything is put before you with
                    no hidden charges or conditions</p>
              </div>    
          </div>
        </div> 
        <div className='h-[50%]  w-full flex flex-row px-2 justify-end'>
            <div className='w-[85%] md:h-[215px]  gap-3 text-black flex py-0'>
                 <div className='w-[33.33%] py-2 md:h-[215px] bg-blue-100 rounded-2xl  gap-2  px-2 justify-center items-center text-center flex flex-col '>
                    <img className='h-4 w-4 md:h-8 md:w-8 ' src="./guaranteed.svg" alt="" />
                    <h1 className='font-semibold text-[9px] md:text-[15px]'>Guaranteed Satisfactory</h1>
                    <p className='md:text-[14px] text-center font-normal text-[6px]'>We ensure that you stay 100%
                    satisfied with our offered services</p>
                 </div>
                 <div className='w-[33.33%] py-2 md:h-[215px] bg-pink-100 rounded-2xl  gap-2 px-2 justify-center items-center text-center flex flex-col '>
                    <img className='h-4 w-4 md:h-8 md:w-8 ' src="./expert.svg" alt="" />
                    <h1 className='font-semibold text-[9px] md:text-[15px]'>Expert CA/CS Assistance</h1>
                    <p className='md:text-[14px] text-center font-normal text-[6px]'>Prompt support from our in-house
                    expert professionals</p>
                 </div>
                 <div className='w-[33.33%] py-2 md:h-[215px] bg-green-100 rounded-2xl  gap-2 px-2 justify-center items-center text-center flex flex-col '>
                    <img className='h-4 w-4 md:h-8 md:w-8 ' src="./confidential.svg" alt="" />
                    <h1 className='font-semibold text-[9px] md:text-[15px]'>Confidential & Safe</h1>
                    <p className='md:text-[14px] text-center font-normal text-[6px]'>All your private information is safe
                    with us</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Features
