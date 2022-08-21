import Image from 'next/image'
import React from 'react'
import mobs from '../public/assets/mobs.png'
import {FaDiscord, FaHashtag } from 'react-icons/fa'
import konoDiscordLogo from '../public/assets/kono-discord-logo.png'
import { FiChevronDown } from 'react-icons/fi'
import { GoCommentDiscussion } from 'react-icons/go'
import { BsFillPeopleFill, BsQuestionCircleFill } from 'react-icons/bs'

const Staff = () => {
  return (
    <div className='mt-32 p-5 max-w-screen-lg mx-auto'>
        <div className='relative w-8/12 h-20 md:h-40 ml-auto mr-auto -mb-1'><Image src={mobs} objectFit="contain" layout='fill'/></div>

        <div className='bg-[#282b30] flex flex-col  rounded-tr-lg rounded-tl-lg pt-3 overflow-hidden '>
            <div className=' text-xs title ml-3'>Discord</div>
            <div className='flex w-full mt-2 h-[100%]'>
                <div className='flex flex-col pl-3'>
                    <div><div className='bg-[#424549] rounded-full p-3'><FaDiscord className='text-2xl'/></div></div>
                    <div className='bg-[#424549] h-[2px] w-[60%] mt-2 mb-2 ml-auto mr-auto'/>
                    
                    <div className='relative'>
                        <div className='w-2 bg-white h-[48px] absolute -left-4 bottom-0 rounded-tr-lg rounded-br-lg'></div>
                        
                        <div className='rounded-full w-[100%] relative h-[48px] overflow-hidden'><Image src={konoDiscordLogo} layout="fill" objectFit='contain'/></div>
                    </div>
                    
                   
                    
                </div>

                {/* Content */}
                <div className='bg-[#424549] w-[100%] rounded-tl-lg ml-2'>
                    {/* Discord Header */}
                    <div className='flex border-b-[2px] border-[#36393e]'>
                        <div className='basis-3/12 title text-xs bg-[#36393e] rounded-tl-lg pl-3 pt-3 pb-2 flex items-center justify-between'>Konohaven Community <FiChevronDown className='text-lg mr-2'/></div>
                        <div className='basis-9/12 title text-sm pl-3 pt-3 pr-3 pb-2 flex justify-between'>
                            <div className='flex items-center'><FaHashtag className='mr-2'/> our-staff</div>
                            <div className='hidden md:flex space-x-4'>
                                <GoCommentDiscussion className='text-lg'/>
                                <BsFillPeopleFill className='text-lg'/>
                                <BsQuestionCircleFill className='text-lg'/>
                            </div>
                        </div>
                    </div>

                    {/* Discord Body */}
                    <div className='flex h-full'>
                        {/* Channels */}
                        <div className='hidden md:block md:basis-3/12 bg-[#36393e] pl-2 pt-2'>
                            <div className='flex items-center title text-xs'><FaHashtag className='mr-2'/> Info</div>
                        </div>

                        {/* Chat */}
                        <div className='hidden md:block md:basis-6/12 pt-2 pl-2'>

                            <div className='text-xs flex items-top mt-2 mb-2'>
                                <div>
                                    <div className='bg-red-600 rounded-full p-3 mr-3'>
                                        <FaDiscord className='text-lg text-white'/>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='montserrat'>Titan</div> 
                                    <div className='text-sm poppins font-semi-bold text-white'>Say hello to our lovely leaders!!!</div>
                                </div>
                            </div>

                            <div className='text-xs flex items-top mt-4 mb-2'>
                                <div>
                                    <div className='bg-orange-500 rounded-full p-3 mr-3'>
                                        <FaDiscord className='text-lg text-white'/>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='montserrat'>Happy</div> 
                                    <div className='text-sm poppins font-semi-bold text-white'>Any questions feel free to ask a staff member.</div>
                                </div>
                            </div>

                            <div className='text-xs flex items-top mt-4 mb-2'>
                                <div>
                                    <div className='bg-blue-500 rounded-full p-3 mr-3'>
                                        <FaDiscord className='text-lg text-white'/>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='montserrat'>Water</div> 
                                    <div className='text-sm poppins font-semi-bold text-white'>If you would like to build a store at spawn, feel free to ask me for help.</div>
                                </div>
                            </div>

                            <div className='text-xs flex items-top mt-4 mb-2'>
                                <div>
                                    <div className='bg-pink-300 rounded-full p-3 mr-3'>
                                        <FaDiscord className='text-lg text-white'/>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='montserrat'>Ena</div> 
                                    <div className='text-sm poppins font-semi-bold text-white'>Do you like events? If so, don't forget to join us when the server hold them!</div>
                                </div>
                            </div>
                        </div>

                        {/* Staff Members */}
                        <div className='basis-full md:basis-3/12 pt-2 pl-3 pb-2 bg-[#36393e] flex flex-col'>
                            <h1 className='title text-xs'>Owner - 2</h1>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-red-600 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Titan</div>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-orange-500 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Happy</div>
                            <h1 className='title text-xs mt-4'>Admin - 1</h1>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-purple-600 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Vendetta</div>
                            <h1 className='title text-xs mt-4'>Spawn Manager - 1</h1>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-blue-500 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Water</div>
                            <h1 className='title text-xs mt-4'>Mods - 7</h1>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-green-400 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Bry</div>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-blue-500 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Bugs</div>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-purple-400 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Cosmic</div>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-pink-300 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Ena</div>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-yellow-500 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Fenry (SunSun)</div>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-green-700 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Poison</div>
                            <div className='text-xs montserrat flex items-center mt-2 mb-2'><div><div className='bg-yellow-400 rounded-full p-2 mr-2'><FaDiscord className='text-sm text-white'/></div></div>Riavis</div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Staff