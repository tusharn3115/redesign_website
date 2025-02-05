import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const LandingPage = () => {
    return (
        <div className='w-full h-screen pt-1'>
            <div className='texts mt-40 px-20'>
                {["We Create", "eye-opening", "presentations"].map((heading, index) => (
                    <div key={index} className="masker">
                        <div className='flex items-center overflow-hidden'>
                            {index === 1 && (<div className='w-[8vw] h-[5.5vw] bg-red-500 mr-[1vw] rounded-md'></div>)}
                            <h1 className="text-[7vw] tracking-[-6px] uppercase leading-[6.4vw] font-semibold">{heading}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-7 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='text-md font-light tracking-tight leading-none'>
                        {item}
                    </p>
                ))}

                <div className='flex items-center gap-2'>
                    <div className='px-3 py-1 uppercase border-[1px] border-zinc-800 rounded-full'>Start the project</div>
                    <div className='p-2 border-1 border-zinc-800 rounded-full'><MdArrowOutward /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage