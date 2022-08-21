import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/logo.png'
import {FaBook, FaDiscord } from 'react-icons/fa'
import {SiNotion} from 'react-icons/si'
import {IoStorefrontSharp} from 'react-icons/io5'
import {motion} from 'framer-motion'

function Footer() {

  const variants = {
    hidden : {
      opacity: 0,
      y: 100
    },
    show : {
      opacity: 1,
      y: 0
    }
   

  }

  return (
    <motion.div initial="hidden" whileInView="show" variants={variants} transition={{duration:1}} viewport={{ once: true}} className='justify-center items-center flex flex-col p-5 mt-40'>
      <div className='relative w-[300px] h-[46px]'>
        <Image src={logo} layout='fill' objectFit='contain' />
      </div>
     <div className='flex space-x-4 mt-8'>
      <a className='block ' href="https://discord.io/Konohaven" target="_blank" rel='noreferrer'><FaDiscord className='text-3xl self-center'/></a>
      <div className='bg-[rgb(179,190,228)] h-[15px] w-[1px] self-center'></div>
      <a className='flex items-center ' href="https://konohaven.notion.site/konohaven/Konohaven-Info-Guide-ac0dad93abac4953950ff6b9c38d3871" target="_blank" rel='noreferrer'><FaBook className='text-xl self-center'/></a>
      <div className='bg-[rgb(179,190,228)] h-[15px] w-[1px] self-center'></div>
      <a className='flex items-center ' href="https://konoreview.vercel.app" target="_blank" rel='noreferrer' ><IoStorefrontSharp className='text-2xl self-center'/></a>
      </div>
     <div className='mt-10 text-xs uppercase montserrat'>&copy; KonohavenSmp 2022</div>
    </motion.div>
  )
}

export default Footer