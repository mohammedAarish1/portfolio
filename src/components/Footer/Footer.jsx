import React from 'react'
import { IoMail } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import TapeDesignItem from '../TapeDesign/TapeDesignItem';
import { FaGithub } from "react-icons/fa";

export default function Footer() {

    return (
        <section id='footer'>
            <div className='md:px-[100px] px-[30px] py-5 bg-[#97A0A3] mt-10   relative text-white'>
                {/* <div className='mainGradient absolute -top-[100px] left-0'></div> */}

                {/* logo */}
                <div className=''>
                    <img src="logo.png" alt="logo" className="w-16" />
                </div>

                <div className='grid md:grid-cols-2 gap-8 mt-5'>
                    <div className=' flex  sm:justify-start justify-center'>

                        <TapeDesignItem />
                    </div>

                    {/* <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit harum eius, asperiores tempore mollitia perspiciatis cupiditate earum facilis nihil quam!</p> */}
                    <div className=' flex gap-7 mt-2 sm:justify-end justify-center items-center' >
                        <a href="mailto:iammdaarish@gmail.com" target='_blank' className='text-3xl hover:text-purple-200'><IoMail /></a>
                        <a href="https://www.instagram.com/" target='_blank' className='text-2xl hover:text-purple-200'><SiInstagram /></a>
                        <a href="https://github.com/mohammedAarish1?tab=repositories" target='_blank' className='text-2xl hover:text-purple-200'><FaGithub /></a>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <div className='h-0.5 bg-white md:w-2/6'></div>
                    <p>© 2024 <span className='text-xl gradientEffect'> Mohammed Aarish.</span> All rights reserved.</p>
                    <div className='h-0.5 bg-white md:w-2/6'></div>

                </div>
            </div>
        </section>
    )
}
