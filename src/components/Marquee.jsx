import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
  return (
    <div className='w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[22vw] leading-none tracking-tight !font-["Neue_Montreal"] font-bold uppercase'>we are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[22vw] leading-none tracking-tight !font-["Neue_Montreal"] font-bold uppercase'>we are ochi</motion.h1>
        </div>        
    </div>
  )
}

export default Marquee