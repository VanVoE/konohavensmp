import React from 'react'
import {motion} from 'framer-motion'

const Banner = () => {

  const variants = {
    hidden : {
      opacity: 0,
      y: -100
    },
    show : {
      opacity: 1,
      y: 0
    },
    hiddenLeft : {
      opacity: 0,
      x: -100
    },
    showLeft : {
      opacity: 1,
      x: 0
    },
    hiddenRight : {
      opacity: 0,
      x: 100
    },
    showRight : {
      opacity: 1,
      x: 0
    },

  }

  return (
    <div className='w-[100%]  bg-[rgba(0,0,0,.2)] mt-40 pt-28 pb-28'>
      <motion.div initial="hidden" whileInView="show" variants={variants} transition={{duration:1}} viewport={{ once: true, amount:.5}} className='montserrat text-lg text-white text-center uppercase mb-10'>Useful Information</motion.div>
        <div className='flex flex-col md:flex-row h-full items-center justify-center md:space-x-10 space-y-10 md:space-y-0'>
        <motion.div className='mb-5 md:mb-0' initial="hiddenLeft" whileInView="showLeft" variants={variants} transition={{duration:2}} viewport={{ once: true, amount:.5}} ><a href='https://konohaven.notion.site/Konohaven-Info-Guide-ac0dad93abac4953950ff6b9c38d3871' rel='noreferrer' target="_blank" 
        className='montserrat text-gray-800  bg-blue-400 hover:bg-transparent border border-blue-400 hover:text-white p-4 rounded-lg shadow-xl shadow-cyan-500/30 border-gradient-1'>
          Datapacks & Mods
        </a></motion.div>
        <motion.div initial="hiddenRight" whileInView="showRight" variants={variants} transition={{duration:3}} viewport={{ once: true, amount:.5}}>
          <a href="https://konoreview.vercel.app" target="_blank" rel='noreferrer' className='montserrat  border border-red-400 hover:bg-red-400 hover:text-gray-800 p-4 rounded-lg shadow-xl shadow-red-500/30'>Current Minecraft Shops</a>
          </motion.div>
        </div>
    </div>
  )
}

export default Banner