import React from 'react'

const AppCard = ({icon, label, storeName, href }) => {
  return (
    <a href = {href}>
        <div className='w-20 h-8 lg:w-30 lg:h-12 bg-white text-black flex gap-2 pl-0.5 items-center'>
          <div className='text-green-600 lg:text-xl'>{icon}</div>
          <div className='text-black text-[9px] lg:text-sm'>{label}
            <br />
            <span className='text-black text-[9px] lg:text-sm'>{storeName}</span>
          </div>
        </div>

    </a>
  )
}

export default AppCard
