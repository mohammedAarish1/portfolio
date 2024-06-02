import React, { useEffect, useRef } from 'react'
import { SiInstagram } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Typed from 'typed.js';
import Button from '../../components/Buttons/Button';
import { Link } from 'react-scroll';


export default function Home() {
  const autoTypedElement = useRef(null)

  useEffect(() => {
    const typed = new Typed(autoTypedElement.current, {
      strings: ["Frontend Developer", "Frontend Designer"],
      typeSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      smartBackspace: true,
    })

    return () => {
      typed.destroy();
    };

  }, [])

  return (
    <section id='home'>
      {/* <div className='mainGradient absolute xm:top-60 '></div> */}
      <div className='mainGradient absolute sm:top-60 sm:right-32 top-[550px] right-40 animate-pulse '></div>

      <div className='grid sm:grid-cols-2 gap-5 pt-10 pb-20 md:px-[100px] px-[30px]  relative'  >
        <div className='flex flex-col  gap-10  ' data-aos="fade-right" data-aos-duration="2000">
          <div className='flex flex-col gap-3'>
            <p className='gradientEffect'>Hey There !</p>

            <h3 ><span className='xm:text-3xl  '>I'm Mohammed Aarish</span></h3>
            <h3 ><span className='xm:text-5xl text-3xl gradientEffect' ref={autoTypedElement}></span></h3>
          </div>
          <p>Welcome to my portfolio ! I'm Mohammed Aarish, a passionate frontend developer and designer ready to bring your digital dreams to life.  </p>
          <div className='flex sm:flex-row flex-col sm:gap-2 gap-4 justify-start items-center'>
            <button className='lg:px-10  md:px-5 px-2 py-2 mr-2 shadow-md shadow-slate-50 rounded bg-white text-pink-500'>Dowload CV</button>
            {/* <button className='lg:px-12 md:px-5 px-2 py-2 rounded shadow-md shadow-slate-50 border bg-transparent text-white'>Hire me!</button> */}
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={500} >

              <Button title="Contact me !" />
            </Link>
          </div>
          <div className='flex gap-2 mt-2 justify-start items-center'>
            <a href="https://github.com/mohammedAarish1?tab=repositories" target='_blank' className='text-2xl hover:text-purple-600'><FaGithub /></a>
            <a href="https://www.instagram.com/" target='_blank' className='text-xl hover:text-purple-600' ><SiInstagram /></a>
            <a href="mailto:iammdaarish@gmail.com" target='_blank' className='text-3xl hover:text-purple-600'><HiMail /></a>
          </div>
        </div>

        <div className=' flex justify-center items-center' data-aos="fade-left" data-aos-duration="2000">
          <img src="profile4.png" alt="" className=' sm:w-9/12' />
        </div>
      </div>
    </section>
  )
}
