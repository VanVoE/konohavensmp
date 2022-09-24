import React from 'react'
import { FaClipboard, FaDiscord } from 'react-icons/fa'
import {RiNumber1, RiNumber2, RiNumber3} from 'react-icons/ri'
import {GoPrimitiveDot} from 'react-icons/go'
import {motion} from 'framer-motion'

function Steps() {
  const variants = {
    hidden : {
      opacity: 0,
      y: -100,
     
    },
    show : {
      opacity: 1,
      y: 0,
     
    },
    hiddenLeft:{
      opacity: 0,
      x: -100,
    },
    showLeft:{
      opacity: 1,
      x: 0,
    },
    hiddenRight:{
      opacity: 0,
      x: 100,
    },
    showRight:{
      opacity: 1,
      x: 0,
    },
    hiddenBottom:{
      opacity: 0,
      y: 100,
    },
    showBottom:{
      opacity: 1,
      y: 0,
    }

  }

  return (
    <div className='flex flex-col items-center justify-center mt-20 p-5 max-w-screen-lg mx-auto'>
        <motion.div initial="hidden" whileInView="show" variants={variants} transition={{duration:1}} viewport={{ once: true, amount:.3}} className="flex flex-col items-center">
        <h1 className='montserrat text-lg text-white uppercase'>How To Join The Family</h1>

        <div className='line-pointer h-40  mt-10'></div>
        <div className='rounded-full gradient-1 p-4'><RiNumber1 className='text-sky-800 text-xl'/></div>
        <div className='text-gradient montserrat text-2xl mt-10'>Read Our Rules</div>
        </motion.div>
        <motion.div initial="hiddenLeft" whileInView="showLeft" variants={variants} transition={{duration:1}} viewport={{ once: true, amount:.3}} className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
            <p><span className='text-sky-400 font-bold'>Be respectful.</span> Don't be annoying, toxic, or cause unnecessary drama. Friendly jokes or banter are welcome, but make good judgement as to what lines you shouldn’t cross.</p>
            <p><span className='text-sky-400 font-bold'>Don’t steal, grief, or PvP without consent.</span> Using private farms without permission is considered stealing.</p>
            <p><span className='text-sky-400 font-bold'>Don’t cheat.</span> Hack clients, x-ray, automining, or unauthorized use of exploit or mods that give an unfair advantage are unacceptable and will result in a ban. </p>
            <p><span className='text-sky-400 font-bold'>Be considerate.</span> When building a base that is close to another player's build or land. If unsure, ask to see if they are okay with it. It is recommended you check through Discord, Dynmap, or in-game to see if the land was claimed already.</p>
            <p><span className='text-sky-400 font-bold'>If claiming a large amount of land, doing a large project, or anything that may lag the server please ask a staff member before doing so.</span> Please note that staff may kick AFK players at a farm and disable it if the server experiences significant lag. </p>
            <p><span className='text-sky-400 font-bold'>Spawn area is managed by Spawn Committee with their own rules and restrictions.</span> If you plan to build or modify the spawn area, please ask for approval. </p>
            <p><span className='text-sky-400 font-bold'>Avoid bringing up discussion regarding political or controversial topics. </span> This is a laid-back causual gaming environment and we want to keep it that way.</p>
            <p><span className='text-sky-400 font-bold'>Konohaven is a mature community.</span> At discretion staff may remove you if deemed unfit for the community. This includes circumventing the rules for its purpose.</p>
        </motion.div>

        <motion.div initial="hiddenRight" whileInView="showRight" variants={variants} transition={{duration:1}} viewport={{ once: true, amount:.5}} className="flex flex-col items-center">
        <div className='line-pointer2 h-40  mt-10'></div>
        <div className='rounded-full gradient-2 p-4'><RiNumber2 className='text-sky-800 text-xl'/></div>
        <div className='text-gradient montserrat text-2xl mt-10'>Join Our Discord</div>
        <h1 className='text-white text-3xl md:text-5xl montserrat text-center'>Discord is Required</h1>
        <button className='mt-10'><a href="https://discord.gg/Fbxzcs9HrW" rel="noreferrer" target="_blank"> <FaDiscord className='text-8xl text-white animate-bounce'/></a></button>
        </motion.div>
        
        <motion.div initial="hiddenBottom" whileInView="showBottom" variants={variants} transition={{duration:1}} viewport={{ once: true, amount:.5}} className="flex flex-col items-center">
        <div className='line-pointer3 h-40  mt-10'></div>
        <div className='rounded-full gradient-3 p-4'><RiNumber3 className='text-sky-800 text-xl'/></div>
        <div className='text-gradient montserrat text-2xl mt-10 text-center'>Fill Out A Whitelist Application</div>
        <h1 className='text-white text-3xl md:text-5xl montserrat text-center'>Serious Applications Only</h1>

         <div className='mt-10'>
          <p>
            Failing this process eliminates you from joining our community indefinitely. 
            So please take your time with your application. If you have any questions, 
            feel free to post in our <span className='text-sky-400 font-bold'>#questions</span> channel. Steps on how to create a whitelist application is in our 
            <span className='text-sky-400 font-bold'> #how-to-whitelist</span> channel.
          
          </p>
            
            
        </div>
        </motion.div>
        
    </div>
  )
}

export default Steps