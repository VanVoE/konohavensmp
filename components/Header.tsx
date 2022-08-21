import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiCloseFill, RiMenu5Fill } from 'react-icons/ri'
import logo from '../public/assets/logo.png'
function Header() {

  const [menuOpen, setMenuOpen] = useState(false)
  const menuStyle = "flex flex-col fixed left-0 right-0 p-5 pt-8 space-y-4 bg-[rgba(0,0,0,.9)] shadow-lg text-center items-center rounded-bl-[1.5rem] rounded-br-[1.5rem] z-50"
  const menuOpenStyle = " top-0 transition-all duration-300"
  const menuCloseStyle = " -top-[300px] transition-all duration-300"
  const navbarStyle = 'flex fixed left-0 right-0 top-0 md:relative max-w-screen-lg mx-auto items-center justify-between p-5 poppins font-bold z-50'
  const navbarBgTransparent = ' bg-transparent'
  const navbarBgGradient = ' gradient'
  const [scrollY, setScrollY] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  
  useEffect(() => {
    
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

   
   
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => {

      if(window.innerWidth > 768){
        setMenuOpen(false)
      }
      
      setWindowWidth(window.innerWidth)
   
    }

    window.addEventListener('resize',handleResize)

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  }, [])
  
  
  
  

  return (
    <div className={scrollY > 50 && windowWidth < 768 ?  navbarStyle + navbarBgGradient : navbarStyle + navbarBgTransparent}>
        <Link href="/"><div className={ menuOpen ? 'hidden' : 'relative w-[15rem] h-[3rem] cursor-pointer'}><Image src={logo} layout="fill" objectFit="contain"/></div></Link>
        <div className='hidden md:flex space-x-10 montserrat'>
            
            
            
            <div><a className='hover:text-white' href="https://konoreview.vercel.app" rel='noreferrer' target="_blank">KonoReview</a></div>
            <div><a className='hover:text-white' href="https://konohaven.notion.site/konohaven/Konohaven-Info-Guide-ac0dad93abac4953950ff6b9c38d3871" rel='noreferrer' target="_blank">Guide</a></div>
            <div className='hover:text-white'>Merch</div>
            <div className='hover:text-white'>Donate</div>
            

        </div>
        
        {/* mobile */}
        <div className='block md:hidden'>
          <RiMenu5Fill className={menuOpen ? ' hidden' : 'text-2xl'} onClick={()=>setMenuOpen(true)}/>
          
          
          
          <div className={menuOpen ? menuStyle + menuOpenStyle : menuStyle + menuCloseStyle }>

           
            <RiCloseFill className='text-2xl absolute right-5' onClick={()=>setMenuOpen(false)}/>
            
            
            <div><a href="https://konoreview.vercel.app" className='hover:text-white' rel='noreferrer' target="_blank">KonoReview</a></div>
            <div><a href="https://konohaven.notion.site/konohaven/Konohaven-Info-Guide-ac0dad93abac4953950ff6b9c38d3871" className='hover:text-white' rel='noreferrer' target="_blank">Guide</a></div>
            <div className='hover:text-white'>Merch</div>
            <div className='hover:text-white'>Donate</div>

          </div>
          
          
        </div>
    </div>
  )
}

export default Header