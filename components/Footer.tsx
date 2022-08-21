import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/logo.png'
import {FaBook, FaDiscord } from 'react-icons/fa'
import {SiNotion} from 'react-icons/si'
import {IoStorefrontSharp} from 'react-icons/io5'

function Footer() {
  return (
    <div className='justify-center items-center flex flex-col p-5 mt-40'>
      <div className='relative w-[300px] h-[46px]'>
        <Image src={logo} layout='fill' objectFit='contain' />
      </div>
     <div className='flex space-x-4 mt-8'>
      <FaDiscord className='text-3xl self-center'/>
      <div className='bg-[rgb(179,190,228)] h-[15px] w-[1px] self-center'></div>
      <FaBook className='text-xl self-center'/>
      <div className='bg-[rgb(179,190,228)] h-[15px] w-[1px] self-center'></div>
      <IoStorefrontSharp className='text-2xl self-center'/>
      </div>
     <div className='mt-10 text-xs uppercase montserrat'>&copy; KonohavenSmp 2022</div>
    </div>
  )
}

export default Footer