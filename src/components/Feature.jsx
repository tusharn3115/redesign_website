import React from 'react'
import { GoDotFill } from 'react-icons/go'
import Button from './Button'

const Feature = () => {
    return (
        <div className='pt-20 h-[126vh] bg-[#F1F1F1]'>
            <div className='px-12 border-b-2 border-[#D2D2D2] pb-10'>
                <h1 className='text-6xl !font-["Neue_Montreal"]'>Featured projects</h1>
            </div>

            <div className='px-12 pt-8'>
                <div className='cards w-full flex gap-4'>
                    {/* card 1 */}
                    <div className='cardcontainer relative w-1/2 h-[80vh]'>
                        <p className='uppercase !font-["Neue_Montreal"] my-5 flex items-center gap-1'><GoDotFill /> Cardboard Spaceship</p>

                        {/* headingMasker */}
                        <h1 className='absolute w-[70vw] tracking-tighter left-[48vw] top-[24vw] -translate-y-1/2 -translate-x-1/2 z-[9] text-8xl text-[#CDEA68] uppercase !font-["Consolas"] font-semibold'>
                            {"Cardboard Spaceship".split('').map((item, index) => (
                                <span key={index} className=''>{item}</span>
                            ))}
                        </h1>

                        <div className='card w-full  rounded-xl overflow-hidden'>
                            <img className='w-full  bg-cover' src="../../public/feature1.png" alt="featureImg" />
                        </div>

                        <div className='buttons py-2 flex items-center gap-2'>
                           <Button title={"BRANDED TEMPLATE"} />
                           <Button title={"SALES DECK"} />
                           <Button title={"SOCIAL MEDIA TEMPLATE"} />
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className='cardcontainer relative w-1/2 h-[80vh] '>
                        <p className='uppercase !font-["Neue_Montreal"] my-5 flex items-center gap-1'><GoDotFill /> AH2 & Matt Horn</p>


                        {/* headingMasker */}
                        <h1 className='absolute w-[70vw] tracking-tighter right-[39vw] top-[17.5vw] translate-y-1/2 translate-x-1/2 z-[9] text-8xl text-[#CDEA68] uppercase !font-["Consolas"] font-bold'>
                            {"AH2 & Matt Horn".split('').map((item, index) => (
                                <span key={index} className=''>{item}</span>
                            ))}
                        </h1>


                        <div className='card w-full rounded-xl overflow-hidden '>
                            <img className='w-full bg-cover' src="../../public/feature2.png" alt="featureImg" />
                        </div>

                        <div className='buttons py-2'>
                           <Button title={"PITCH DECK"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature