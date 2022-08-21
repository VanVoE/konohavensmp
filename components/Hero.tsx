import { motion } from 'framer-motion'
import Image from 'next/image'

import hero from '../public/assets/hero.png'


function Hero() {

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
    <motion.div initial="hidden" whileInView="show" variants={variants} transition={{duration:1}} viewport={{ once: true}} className='flex flex-col items-center mt-40 md:mt-20 max-w-screen-lg mx-auto'>
        <h1 className='font-bold text-xl montserrat p-5 sub-title text-center'>Number #1 Chillest Gaming Community</h1> 
        <h1 className='font-bold text-6xl md:text-8xl title text-center text-white leading-tight'><span className='text-gradient-1'>Be a part</span> <br /> <span className='text-gradient-2'>of the</span> <br /> <span className='text-gradient-3'>Family!</span> </h1>
        
        <div className='flex flex-col w-full p-5 mt-0 md:mt-16'>
          <div className='w-full h-40 md:h-96 relative '>
           
            <Image src={hero} layout="fill"  objectFit='contain'/>
           
          </div>
         
          <div className='text-left md:text-center mt-10'>
            <p className='text-lg'>
                Konohaven is a close-knit community that seeks to provide a HermitCraft-like and vanilla Minecraft experience (no fly, commands, etc.) 
                with the exception of certain quality of life upgrades. Our server focuses on a mature and laid-back experience. So grab a drink, join the family, and let's Minecraft together!
            </p>
          </div>

        </div>
        

        
    </motion.div>
  )
}

export default Hero