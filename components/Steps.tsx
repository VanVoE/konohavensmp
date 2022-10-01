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
            <p><span className='text-sky-400 font-bold'>Be polite and respectful to others.</span> Friendly jokes are welcome, but make good judgements as to what lines you should not cross.</p>
            <p><span className='text-sky-400 font-bold'>Do not grief, steal, or PvP without consent.</span> Taking or breaking other player’s stuff is not okay. Using private farms without permission is considered stealing. </p>
            <p><span className='text-sky-400 font-bold'>Do not cheat.</span> Hack client, xray, or any other unauthorized use of exploit or mods that give an unfair advantage will result in a ban. </p>
            <p><span className='text-sky-400 font-bold'>Give other players space when building nearby.</span> If you are not sure they are comfortable with having your base nearby, ask the owner to see if they are okay with it.</p>
            <p><span className='text-sky-400 font-bold'>Be considerate and limit the use of farms or machines that may lag the server during busy times.</span> Staff may intervene to maintain suitable gameplay experience for others.</p>
            <p><span className='text-sky-400 font-bold'>Avoid bringing up political or controversial topics. </span> This is not a place to express your opinion or views. We want to keep this a laid-back and casual gaming environment. </p>
            <p><span className='text-sky-400 font-bold'>Do not cause drama or spam in chat. </span> Personal issues and unwanted topics are best dealt through private DMs. If you have an issue with another player, contact staff.</p>
            <p><span className='text-sky-400 font-bold'>We are a mature community.</span> Use common sense and do things the right way as to not skirt the rules. Staff reserves the right to remove you if deemed unfit for the community.</p>
            <p><span className='text-sky-400 font-bold'>Note:</span> If you have read through all the rules and requirements above, be sure to mention on the last question of your application that you have read the rules.</p>
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
            feel free to post in our <span className='text-sky-400 font-bold'>#questions</span> channel.
          
          </p>
          <p className='mt-5'>
          <span className='text-sky-400 font-bold'>Note:</span> Must be 18+ to apply. However, we do make exceptions below 18. Please contact Titan if you are below the age requirement for an interview.
          
          </p>
            
        </div>
        </motion.div>
        
    </div>
  )
}

export default Steps