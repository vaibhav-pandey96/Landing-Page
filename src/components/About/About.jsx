import React from 'react'

const About = () => {
  return (
    <div className='bg-white pl-4 py-5 md:px-15 md:py-15 flex flex-row w-full shrink md:max-h-[550px] max-h-[200px] gap-2'>
        
        <div className='w-[70%] '>
            <div>
                <p className='uppercase text-[6px] md:text-[12px] pb-1 md:pb-3 text-orange-400'>Welcome to RegisterKaro.in</p>
            </div>
            <div className='flex flex-row gap-2 text-[10px]  md:text-2xl font-bold '>
                <span><h1 className='text-black' >About</h1></span> <span><h1 className='text-orange-500'>Register Karo</h1></span>
            </div>
            <div>
                <p className='pt-1 md:pt-3 text-[7px] md:text-sm text-black'>
                We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations. 
                <br /><br />I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
                </p>
            </div>
            <div>
                <button className='bg-blue-700 rounded p-1 text-[6px] md:mt-5 md:text-xs md:p-2'>Learn More</button>
            </div>
        </div>
        <div>
            <img className='pr-2 md:pd-0 md:m-0 h-[120px] w-[230px] md:w-150 md:h-80 border-2 border-orange-300 ' src="./About.svg" alt="" />
        </div>
        </div>
    
  )
}

export default About
