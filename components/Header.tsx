import Image from 'next/image'
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
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
   
    }

    window.addEventListener('resize',handleResize)

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  }, [])
  
  
  
  

  return (
    <div className={scrollY > 50 && windowWidth < 768 ?  navbarStyle + navbarBgGradient : navbarStyle + navbarBgTransparent}>
        <div className={ menuOpen ? 'hidden' : 'relative w-[15rem] h-[3rem] '}><Image src={logo} layout="fill" objectFit="contain"/></div>
        <div className='hidden md:flex space-x-10 montserrat'>
            <div>KonoHats</div>
            
         
            <div>KonoReview</div>
            <div>Guide</div>
            <div>Donate</div>

        </div>
        
        {/* mobile */}
        <div className='block md:hidden'>
          <RiMenu5Fill className={menuOpen ? ' hidden' : 'text-2xl'} onClick={()=>setMenuOpen(true)}/>
          
          
          
          <div className={menuOpen ? menuStyle + menuOpenStyle : menuStyle + menuCloseStyle }>

            <div className='flex'>
              <div>Home</div>
              <RiCloseFill className='text-2xl absolute right-5' onClick={()=>setMenuOpen(false)}/>
            </div>
            <div>About</div>
            <div>Merch</div>
            <div>KonoReview</div>
            <div>Guide</div>
            <div>Donate</div>

          </div>
          
          
        </div>
    </div>
  )
}

export default Header