import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2

            let angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
            setRotate(angle-180)
        })
    })

    return (
        <div className='w-full h-screen overflow-hidden'>
            <div className='relative w-full h-full bg-[url("../../public/eye.jpg")] bg-cover bg-center'>
                <div className='absolute flex gap-12 top-72 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex items-center justify-center w-[14vw] h-[14vw] bg-white rounded-full'>
                        <div className='relative w-2/3 h-2/3 bg-[#000000] rounded-full'>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'>
                                <div className='w-10 h-10 bg-[#ffffff] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[14vw] h-[14vw] bg-white rounded-full'>
                        <div className='relative flex items-center justify-center w-2/3 h-2/3 bg-[#000000] rounded-full'>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'>
                                <div className='w-10 h-10 bg-[#ffffff] rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes