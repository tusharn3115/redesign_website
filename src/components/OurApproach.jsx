import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import OurApproachImg from '../../public/OurApproach.jpg'

const OurApproach = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-3xl text-[#212121]'>
      <h1 className='!font-["Neue_Montreal"] text-6xl'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds, sell products, explain complex ideas</span>, and <span className='underline'>hire great people</span>.</h1>

      <div className='w-full border-t-[2px] border-[#B3CC5E] mt-20 flex justify-between'>
        <div className='mt-7 w-1/2'>
          <h1 className='text-6xl'>Our approach:</h1>
          <button className='pl-6 pr-2 py-2 rounded-full bg-[#000000] text-white flex items-center justify-between gap-10 mt-5 text-md uppercase !font-["Neue_Montreal"] cursor-pointer'>read more <span className='text-[#000000] w-10 h-10 bg-[#FFFFFF] rounded-full flex items-center justify-center'><MdArrowOutward className='text-xl' /></span></button>
        </div>
        <div className='mt-7 w-1/2'>
          <img src={OurApproachImg} alt="OurApproachImg" className='rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default OurApproach