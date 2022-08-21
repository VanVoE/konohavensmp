import React from 'react'

const Banner = () => {
  return (
    <div className='w-[100%]  bg-[rgba(0,0,0,.2)] mt-40 pt-28 pb-28'>
      <div className='montserrat text-lg text-white text-center uppercase mb-10'>Useful Information</div>
        <div className='flex flex-col md:flex-row h-full items-center justify-center md:space-x-10 space-y-10 md:space-y-0'>
        <button className='montserrat text-gray-800  bg-blue-400 p-4 rounded-lg shadow-xl shadow-cyan-500/30 border-gradient-1'>Datapacks & Mods</button>
        <button className='montserrat  border border-red-400 p-4 rounded-lg shadow-xl shadow-red-500/30'>Current Minecraft Shops</button>
        </div>
    </div>
  )
}

export default Banner