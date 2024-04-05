import React from 'react'
import { TiArrowForwardOutline } from "react-icons/ti";


const ProjectCard = (project) => {

    const { title, description, img, gitHubLink, siteLink } = project;
    return (


        <div class="lg:w-[25%] sm:w-[40%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="flip-up" data-aos-duration="2000">
            <a href="#">
                <img class="rounded-t-lg" src={img} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <div className='flex gap-3'>
                    <a href={gitHubLink} target='_blank' class="inline-flex items-center justify-center px-3 py-2  gap-2 text-sm font-medium text-center bg-white text-purple-500  hover:bg-purple-700 hover:text-white   ">
                        <p>Code</p>
                        <TiArrowForwardOutline className='text-xl' />
                    </a>
                    <a href={siteLink} target='_blank' class="inline-flex items-center justify-center px-3 py-2  gap-2 text-sm font-medium text-center text-white bg-purple-500  hover:bg-purple-700  ">
                        <p>Site</p>
                        <TiArrowForwardOutline className='text-xl' />
                    </a>
                </div>
            </div>
        </div>


    )
}

export default ProjectCard
