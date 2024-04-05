import React from 'react'
import { GiNinjaStar } from "react-icons/gi";


export default function TapeDesignItem() {
    return (
        <div className=' flex justify-center items-center sm:gap-8 gap-2    relative'>
            <p className='text-sm'>Discover</p>
            <GiNinjaStar className='text-[#A25FA6]' />
            <p className='text-sm'>Design</p>
            <GiNinjaStar className='text-[#A25FA6]' />
            <p className='text-sm'>Develop</p>
            <GiNinjaStar className='text-[#A25FA6] sm:block hidden' />
        </div>
    )
}
