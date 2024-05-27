import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";


export default function Skill() {

    return (
        <section id="skills">
            <div className='md:px-[100px] px-[30px] mt-20  relative'>
                <div className='mainGradient absolute right-40 top-48 '></div>


                <h2 className='  text-3xl tracking-[15px] flex  items-center' data-aos="zoom-in" data-aos-duration="2000"><span className=' text-purple-500'>SkillSet </span> <FiArrowDownRight /> </h2>
                <div className='grid md:grid-cols-2 gap-2 py-20'>


                    <div className='lg:py-20 flex flex-wrap justify-center items-center lg:gap-10 sm:gap-5 gap-4 '>

                        <div className=' p-6 rounded-lg shadow-md shadow-white' data-aos="zoom-out" data-aos-duration="2000" >
                            <div className=' bg-[#A25FA6] w-24 h-24 rounded-full flex justify-center items-center'>
                                <img src="skill_images/html.png" alt="html" className='w-12' />
                            </div>
                            <h2 className='text-center mt-3 font-bold'>HTML</h2>
                        </div>

                        <div className=' p-6 rounded-lg shadow-md shadow-white' data-aos="zoom-out" data-aos-duration="2000" >
                            <div className='bg-[#A25FA6] w-24 h-24 rounded-full flex justify-center items-center'>
                                <img src="skill_images/css.png" alt="css" className='w-12' />
                            </div>
                            <h2 className='text-center mt-3 font-bold'>CSS</h2>
                        </div>

                        <div className=' p-6 rounded-lg shadow-md shadow-white' data-aos="zoom-out" data-aos-duration="2000" >

                            <div className='bg-[#A25FA6] w-24 h-24 rounded-full flex justify-center items-center'>
                                <img src="skill_images/js.png" alt="js" className='w-12' />
                            </div>
                            <h2 className='text-center mt-3 font-bold'>JAVASCRIPT</h2>
                        </div>
                        <div className=' p-6 rounded-lg shadow-md shadow-white' data-aos="zoom-out" data-aos-duration="2000" >

                            <div className='bg-[#A25FA6] w-24 h-24 rounded-full flex justify-center items-center'>
                                <img src="skill_images/jquery.png" alt="js" className='w-12' />
                            </div>
                            <h2 className='text-center mt-3 font-bold'>jQuery</h2>
                        </div>

                        <div className=' p-6 rounded-lg shadow-md shadow-white' data-aos="zoom-out" data-aos-duration="2000" >
                            <div className='bg-[#A25FA6] w-24 h-24 rounded-full flex justify-center items-center'>
                                <img src="skill_images/react.png" alt="react" className='w-12' />
                            </div>
                            <h2 className='text-center mt-3 font-bold'>REACT JS</h2>
                        </div>

                        <div className=' p-6 rounded-lg shadow-md shadow-white' data-aos="zoom-out" data-aos-duration="2000" >
                            <div className='bg-[#A25FA6] w-24 h-24 rounded-full flex justify-center items-center'>
                                <img src="skill_images/tailwind.png" alt="tailwind" className='w-12' />
                            </div>
                            <h2 className='text-center mt-3 font-bold'>TAILWIND</h2>
                        </div>
                        <div className=' p-6 rounded-lg shadow-md shadow-white' data-aos="zoom-out" data-aos-duration="2000" >
                            <div className='bg-[#A25FA6] w-24 h-24 rounded-full flex justify-center items-center'>
                                <img src="skill_images/bootstrap.png" alt="tailwind" className='w-12' />
                            </div>
                            <h2 className='text-center mt-3 font-bold'>BOOTSTRAP</h2>
                        </div>
                        <div className=' p-6 rounded-lg shadow-md shadow-white' data-aos="zoom-out" data-aos-duration="2000" >
                            <div className='bg-[#A25FA6] w-24 h-24 rounded-full flex justify-center items-center'>
                                <img src="skill_images/redux.png" alt="tailwind" className='w-12' />
                            </div>
                            <h2 className='text-center mt-3 font-bold'>REDUX JS</h2>
                        </div>


                    </div>
                    <div className=' flex justify-center items-center mt-5 md:mt-0 '>
                        <img src="skill_images/SkillBanner.png" alt="skillBanner" className='w-9/12 skillImage' />
                    </div>
                </div>
            </div>
            <div className='mainGradient absolute left-0  '></div>

        </section>
    )
}
