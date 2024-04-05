import React from 'react'
import './TapeDesign.css'
import TapeDesignItem from './TapeDesignItem';
export default function TapeDesign() {
    return (

        <div className=' sm:my-56 my-20 relative'>

            {/* for small screen */}
            <div className='sm:hidden block '>
                <div className='bg-white w-full absolute rotate-6 overflow-hidden'>
                    <div className='flex animate text-black gap-2 '>

                        <TapeDesignItem />
                        <TapeDesignItem />
                        <TapeDesignItem />
                        <TapeDesignItem />
                    </div>
                </div>
                <div className='bg-white w-full  -rotate-6 overflow-hidden'>
                    <div className='flex animate  text-black gap-2 '>

                        <TapeDesignItem />
                        <TapeDesignItem />
                        <TapeDesignItem />
                        <TapeDesignItem />
                    </div>
                </div>
            </div>

            {/* for large screen */}
            <div className=' hidden w-full sm:flex  absolute rotate-6 overflow-hidden'>
                <div className=' bg-white flex justify-center gap-8 animate  text-black py-4 border-y-2  border-[#A25FA6]   w-full'>
                    <TapeDesignItem />
                    <TapeDesignItem />
                    <TapeDesignItem />
                </div>

                <div className=' bg-white flex justify-center gap-8 animate  text-black py-4 pl-8 border-y-2  border-[#A25FA6]   w-full'>
                    <TapeDesignItem />
                    <TapeDesignItem />
                    <TapeDesignItem />
                </div>
                <div className=' bg-white flex justify-center gap-8 animate  text-black py-4 pl-8 border-y-2  border-[#A25FA6]   w-full'>
                    <TapeDesignItem />
                    <TapeDesignItem />
                    <TapeDesignItem />
                </div>
                <div className=' bg-white flex justify-center gap-8 animate  text-black py-4 pl-8 border-y-2  border-[#A25FA6]   w-full'>
                    <TapeDesignItem />
                    <TapeDesignItem />
                    <TapeDesignItem />
                </div>
            </div>

            <div className='mainGradient absolute -top-20 left-[35%] '></div>

            <div className='hidden sm:flex overflow-hidden -rotate-6 w-full' >
                <div className=' bg-white flex justify-center gap-8 animate  text-black py-4 border-y-2  border-[#A25FA6]   w-full'>
                    <TapeDesignItem />
                    <TapeDesignItem />
                    <TapeDesignItem />
                </div>

                <div className=' bg-white flex justify-center gap-8 animate text-black py-4 pl-8 border-y-2  border-[#A25FA6]   w-full'>
                    <TapeDesignItem />
                    <TapeDesignItem />
                    <TapeDesignItem />
                </div>
                <div className=' bg-white flex justify-center gap-8 animate text-black py-4 pl-8 border-y-2  border-[#A25FA6]   w-full'>
                    <TapeDesignItem />
                    <TapeDesignItem />
                    <TapeDesignItem />
                </div>
                <div className=' bg-white flex justify-center gap-8 animate text-black py-4 pl-8 border-y-2  border-[#A25FA6]   w-full'>
                    <TapeDesignItem />
                    <TapeDesignItem />
                    <TapeDesignItem />
                </div>
            </div>

        </div >
    )
}
