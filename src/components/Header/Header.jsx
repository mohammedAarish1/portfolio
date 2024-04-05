import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

export default function Header() {

  const [showMobMenu, setShowMobMenu] = useState(false)
  const [scroll, setScroll] = useState(null)

  window.addEventListener("scroll", function (e) {
    if (window.scrollY >= 0) {

      setScroll(true)
    } else {
      setScroll(false)
    }
  })



  return (
    <header className={`flex h-[80px]  sticky right-0 left-0 top-0  z-30 ${scroll ? 'backdrop-blur-lg' : null}  `} data-aos="fade-down" data-aos-duration="2000" >
      <div className='flex justify-between items-center w-full  md:px-[100px] px-[30px]'>
        <Link className='cursor-pointer' to="home" smooth={true} offset={-80} duration={500}>
          <img src="logo.png" alt="logo" className="w-16" />
        </Link>
        <ul className=' lg:gap-8 sm:gap-2 gap-0  hidden sm:flex'>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500} className='lg:px-6 px-2 py-2  cursor-pointer'>HOME</Link>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500} className='lg:px-6 px-2 py-2  cursor-pointer '>ABOUT</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className='lg:px-6 px-2 py-2  cursor-pointer '>SKILLSET</Link>
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500} className='lg:px-6 px-2 py-2  cursor-pointer '>PROJECTS</Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500} className='lg:px-6 px-2 py-2  cursor-pointer '>CONTACT</Link>
        </ul>
        <ThemeBtn />
        <div className="text-xl relative cursor-pointer sm:hidden">

          <div>

            <HiMenuAlt3 onClick={() => setShowMobMenu(!showMobMenu)} />
          </div>
          <ul className={` flex flex-col  gap-7 absolute -right-8 top-12 px-5 py-5 bg-[--primary-color] ${showMobMenu ? 'flex' : 'hidden'}`}>

            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500} className='px-20 py-2 shadow-white shadow-md cursor-pointer' onClick={() => setShowMobMenu(false)} >Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500} className='px-4 py-2 shadow-white shadow-md cursor-pointer ' onClick={() => setShowMobMenu(false)} >About</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className='px-4 py-2 shadow-white shadow-md cursor-pointer ' onClick={() => setShowMobMenu(false)} >Skillset</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500} className='px-4 py-2 shadow-white shadow-md cursor-pointer ' onClick={() => setShowMobMenu(false)} >Projects</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500} className='px-4 py-2 shadow-white shadow-md cursor-pointer ' onClick={() => setShowMobMenu(false)} >Contact</Link>
          </ul>
        </div>
      </div>
    </header>
  )
}
