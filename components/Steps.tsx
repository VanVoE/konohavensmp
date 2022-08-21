import React from 'react'
import { FaClipboard, FaDiscord } from 'react-icons/fa'
import {RiNumber1, RiNumber2, RiNumber3} from 'react-icons/ri'
import {GoPrimitiveDot} from 'react-icons/go'

function Steps() {
  const saveToClipboard = () => {
    let whitelistApp = `1. What is your MC username?\n\n2. What is your age?\n\n3. Tell us about yourself.\n\n4. What can you bring to our community?\n\n5. How often do you plan to play on the server?\n\n6. What do you plan to accomplish by joining our server?\n\n7. How did you find us? If a member who brought you here, let us know.`
    
    navigator.clipboard.writeText(whitelistApp)
  }

  return (
    <div className='flex flex-col items-center justify-center mt-20 p-5 max-w-screen-lg mx-auto'>
        <h1 className='montserrat text-lg text-white uppercase'>How To Join The Family</h1>

        <div className='line-pointer h-40  mt-10'></div>
        <div className='rounded-full gradient-1 p-4'><RiNumber1 className='text-sky-800 text-xl'/></div>
        <div className='text-gradient montserrat text-2xl mt-10'>Read Our Rules</div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
            <p><span className='text-sky-400 font-bold'>Be respectful.</span> Don't be annoying, toxic, or cause unnecessary drama. Friendly jokes or banter are welcome, but make good judgement as to what lines you shouldn’t cross.</p>
            <p><span className='text-sky-400 font-bold'>Don’t steal, grief, or PvP without consent.</span> Using private farms without permission is considered stealing.</p>
            <p><span className='text-sky-400 font-bold'>Don’t cheat.</span> Hack clients, x-ray, automining, or unauthorized use of exploit or mods that give an unfair advantage are unacceptable and will result in a ban. </p>
            <p><span className='text-sky-400 font-bold'>Be considerate.</span> When building a base that is close to another player's build or land. If unsure, ask to see if they are okay with it. It is recommended you check through Discord, Dynmap, or in-game to see if the land was claimed already.</p>
            <p><span className='text-sky-400 font-bold'>If claiming a large amount of land, doing a large project, or anything that may lag the server please ask a staff member before doing so.</span> Please note that staff may kick AFK players at a farm and disable it if the server experiences significant lag. </p>
            <p><span className='text-sky-400 font-bold'>Spawn area is managed by Spawn Committee with their own rules and restrictions.</span> If you plan to build or modify the spawn area, please ask for approval. </p>
            <p><span className='text-sky-400 font-bold'>Avoid bringing up discussion regarding political or controversial topics. </span> This is a laid-back causual gaming environment and we want to keep it that way.</p>
            <p><span className='text-sky-400 font-bold'>Konohaven is a mature community.</span> At discretion staff may remove you if deemed unfit for the community. This includes circumventing the rules for its purpose.</p>
        </div>

        <div className='line-pointer2 h-40  mt-10'></div>
        <div className='rounded-full gradient-2 p-4'><RiNumber2 className='text-sky-800 text-xl'/></div>
        <div className='text-gradient montserrat text-2xl mt-10'>Join Our Discord</div>
        <h1 className='text-white text-3xl md:text-5xl montserrat text-center'>Discord is Required</h1>
        <button className='mt-10'><FaDiscord className='text-8xl text-white animate-bounce'/></button>
        
        
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
            {/* <div className='mt-10'>
              
                <p >
                  In order to be accepted to our community you will need to answer the following questions below. 
                  You may answer as much in detail as you want as long as it is reasonable or necessary. Take this application 
                  seriously as it may affect the outcome of your application. 
                </p>            
                
            </div> */}
            {/* <div className='mt-10'><p >
                  To submit an application, copy the whitelist questions along with your answers and post it in the <span className='text-sky-400 font-bold'>#whitelist-application</span> channel once.
                </p>
               <p className='mt-8'>
                 <span className='text-sky-400 font-bold'>Note:</span> If you were invited by a member of this server, please note in the last question so we can expedite your application.
                </p></div> */}

            {/* <div className='mt-10 shadow-lg'>
              <div className='flex items-center justify-between  rounded-tl-lg rounded-tr-lg p-4  bg-[#282b30]'>
                <div className='flex'>
                  <GoPrimitiveDot className='text-red-500 text-lg'/>
                  <GoPrimitiveDot className='text-yellow-400 text-lg'/>
                  <GoPrimitiveDot className='text-green-400 text-lg'/>
                </div>
                <FaClipboard className='cursor-pointer' onClick={saveToClipboard}/>
              </div>
              <div className='p-4 rounded-bl-lg rounded-br-lg bg-[#424549] text-white'>
              <ul>
                <li className='font-bold mb-4'>1. What is your MC username?</li>
                 
                <li className='font-bold mb-4'>2. What is your age?</li>
                 
                <li className='font-bold mb-4'>3. Tell us about yourself.</li>
                 
                <li className='font-bold mb-4'>4. What can you bring to our community?</li>
                  
                <li className='font-bold mb-4'>5. How often do you plan to play on the server?</li>
                 
                <li className='font-bold mb-4'>6. What do you plan to accomplish by joining our server?</li>
                 
                <li className='font-bold mb-4'>7. How did you find us? If a member who brought you here, let us know.</li>
                 
              </ul>
              </div>
            </div> */}
            
        </div>
        
    </div>
  )
}

export default Steps