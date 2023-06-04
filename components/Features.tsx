import React from 'react'
import {GiPointyHat, GiTreasureMap} from 'react-icons/gi'
import {MdEmojiEvents, MdReviews} from 'react-icons/md'
import {GiRolledCloth, GiGamepad, GiMinerals} from 'react-icons/gi'
import {FaMicrophoneAlt} from 'react-icons/fa'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Features = () => {

  const variants = {
    hidden : {
      opacity: 0,
      y: -100
    },
    show : {
      opacity: 1,
      y: 0
    }
   

  }

  return (
    <motion.div initial="hidden" whileInView="show" variants={variants} transition={{duration:1}} viewport={{ once: true, amount:.5}} className='mt-40 max-w-screen-lg mx-auto'>
        <div className='montserrat text-lg text-white text-center uppercase'>Features on the server</div>
        <div className='grid grid-cols-1 md:grid-cols-4 mt-20 w-full p-4 gap-x-4 gap-y-4'>
            <div className='flex items-center bg-[rgba(0,0,0,.2)] py-2 px-4 montserrat rounded-md'> <GiPointyHat className='text-white text-lg mr-4'/> Custom Hats </div>
            
            <div className='flex items-center bg-[rgba(0,0,0,.2)] py-2 px-4 montserrat rounded-md'> <MdEmojiEvents className='text-white text-lg mr-4'/> Events </div>
            <div className='flex items-center bg-[rgba(0,0,0,.2)] py-2 px-4 montserrat rounded-md'> <MdReviews className='text-white text-lg mr-4'/> Shop Reviews </div>
            <div className='flex items-center bg-[rgba(0,0,0,.2)] py-2 px-4 montserrat rounded-md'> <GiRolledCloth className='text-white text-lg mr-4'/> Fabric </div>
            <div className='flex items-center bg-[rgba(0,0,0,.2)] py-2 px-4 montserrat rounded-md'> <GiGamepad className='text-white text-2xl mr-4'/> Version 1.20 </div>
            <div className='flex items-center bg-[rgba(0,0,0,.2)] py-2 px-4 montserrat rounded-md'> <GiMinerals className='text-white text-2xl mr-4'/> Lithium </div>
            <div className='flex items-center bg-[rgba(0,0,0,.2)] py-2 px-4 montserrat rounded-md'> <FaMicrophoneAlt className='text-white text-lg mr-4'/> Simple Voice Chat </div>
            <div className='flex items-center bg-[rgba(0,0,0,.2)] py-2 px-4 montserrat rounded-md'> <BsFillMoonStarsFill className='text-white text-lg mr-4'/> Starlight </div>
        </div>
    </motion.div>
  )
}

export default Features