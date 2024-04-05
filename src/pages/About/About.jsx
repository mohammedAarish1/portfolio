import React, { useEffect, useRef } from 'react'
// react icons
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";
// button component
import Button from '../../components/Buttons/Button';
// for auto typing
import Typed from 'typed.js';
import { Link } from 'react-scroll';



export default function About() {


    const autoTypedElement = useRef(null)

    useEffect(() => {
        const typed = new Typed(autoTypedElement.current, {
            strings: ["the creative mind behind seamless digital experiences. As a developer and designer, I blend tech and design to craft captivating visuals and user-friendly interfaces. With a passion for innovation, I'm dedicated to bringing your ideas to life in the digital world. Let's create something amazing together. With a fresh perspective and a hunger for innovation, I'm dedicated to crafting captivating digital experiences that leave a lasting impression."],
            typeSpeed: 10,
            loop: false,
            showCursor: true,
            cursorChar: '.',
            autoInsertCss: true,
        })

        return () => {
            typed.destroy();
        };

    }, [])

    return (
        <section id="about">
            <div className='md:px-[100px] px-[30px]  relative '>
                <h2 className='  text-3xl tracking-[15px] flex  items-center' data-aos="zoom-in" data-aos-duration="2000"><span className=' text-purple-500'>About </span> <FiArrowDownRight /> </h2>

                <div className='grid sm:grid-cols-2 gap-5 py-20'>

                    <div className='flex justify-center items-center' data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="profile.png" alt="img" className='w-3/5' />
                    </div>

                    <div className='mainGradient absolute bottom-0 '></div>


                    <div>

                        <p className=''> Hey it's <span className='text-purple-400'>Mohammed Aarish</span>, <span ref={autoTypedElement}></span></p>
                        <hr className='w-9/12 mt-6' />

                        <div className='mt-6 flex flex-col gap-4'>
                            <div className='flex gap-2 items-center'>
                                <FaLocationDot />
                                <p>Mohammed Aarish, Noida</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaPhoneVolume />
                                <p>+91-7011558806</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdEmail />
                                <p>iammdaarish@gmail.com</p>
                            </div>

                        </div>
                        <div className='mt-4'>
                            <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>

                                <Button title="Hire me!" />
                            </Link>
                        </div>
                        {/* <button className='lg:px-12 px-5 py-2 mt-6 rounded shadow-md shadow-purple font-bold border bg-white text-purple-600'>Hire me!</button> */}
                    </div>

                </div>
            </div>
        </section>
    )
}
