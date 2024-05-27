import React, { useState } from 'react'
import { FiArrowDownRight } from "react-icons/fi";

import ProjectJS from '../../components/Projects/ProjectJS';
import ProjectReact from '../../components/Projects/ProjectReact';

export default function Projects() {

    const [projects, setProjects] = useState(true);



    return (
        <section id="projects">
            <div className=' my-20  relative'>
                <h2 className='  text-3xl tracking-[15px] flex md:px-[100px] px-[30px] items-center' data-aos="zoom-in" data-aos-duration="2000"><span className=' text-purple-500'>Projects </span> <FiArrowDownRight /> </h2>
                <div className=' flex justify-center gap-5 my-5 py-4 '>
                    <button className='lg:px-12 md:px-5 px-2 py-2 rounded shadow-md shadow-slate-50 border bg-transparent  hover:bg-white hover:text-purple-600 hover:scale-75 ' onClick={() => setProjects(true)} data-aos="fade-right" data-aos-duration="2000" >JS Projects</button>

                    <button className=' lg:px-12 md:px-5 px-2 py-2 rounded shadow-md shadow-slate-50 border bg-transparent hover:bg-white hover:text-purple-600 hover:scale-75' onClick={() => setProjects(false)} data-aos="fade-left" data-aos-duration="2000" >React Projects</button>

                </div>
                <div className='  flex flex-wrap md:px-20 px-10 gap-5 justify-center '>
                    {projects ? <ProjectJS /> : <ProjectReact />}
                </div>

                {/* <div className='grid md:grid-cols-3 gap-10 py-16 lg:px-40 '>


                    <div className='bg-white rounded-sm'>
                        <img src="projects-images/img1.jpg" alt="project1" className='w-100' />
                        <div className='mt-5 text-center flex flex-col gap-3 md:p-5 p-3'>
                            <h2 className='text-black font-bold'>Title</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, inventore.</p>
                            <div>
                                Links
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-sm'>
                        <img src="projects-images/img1.jpg" alt="project1" className='w-100' />
                        <div className=' text-center flex flex-col gap-3 md:p-5'>
                            <h2 className='text-black font-bold'>Title</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, inventore.</p>
                            <p>
                                Links
                            </p>
                        </div>
                    </div>
                    <div className='bg-white rounded-sm'>
                        <img src="projects-images/img1.jpg" alt="project1" className='w-100' />
                        <div className='mt-5 text-center flex flex-col gap-3 md:p-5'>
                            <h2 className='text-black font-bold'>Title</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, inventore.</p>
                            <p>
                                Links
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
