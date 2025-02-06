import React from 'react'

const Cards = () => {
  return (
    <div className='w-full bg-[#F1F1F1]'>
      <div className="cards w-full px-12 py-20 flex items-center gap-5">
        <div className="bigcard w-1/2">
          <div className='h-[25vw] bg-[#004C42] rounded-lg'>
            <div className="text flex items-center justify-center">
              <h1 className='text-6xl font-semibold text-[#CEEC6A] pt-40'>ochi</h1>
            </div>
            <div className='btn px-6 pt-24'>
              <button className='text-[#CEEC6A] border border-[#CEEC6A] px-3 py-1 text-sm rounded-full'>@ 2019-2020</button>
            </div>
          </div>
        </div>

        <div className="twocards w-1/2 flex items-center gap-5">
          <div className='card1 object-cover object-center w-1/2 h-[25vw] bg-[#1F1F1F] rounded-lg'>
            <div className="text flex items-center justify-center">
              <h1 className='text-6xl font-semibold text-[#ffffff] pt-40'>Clutch</h1>
            </div>
            <div className='btn px-6 pt-24'>
              <button className="btn z-10 cursor-pointer relative border border-[#ffffff] px-3 py-1 inline-flex items-center justify-start overflow-hidden transition-all rounded-full group">

                <span className="w-0 h-0 rounded-full bg-[#ffffff] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                <span className="w-full text-white transition-colors uppercase duration-300 ease-in-out group-hover:text-black z-10">
                  rating 5.0 on clutch
                </span>
              </button>
            </div>
          </div>
          <div className='card2 w-1/2 h-[25vw] bg-[#1F1F1F] rounded-lg'>
            <div className="text flex items-center justify-center">
              <h1 className='text-6xl font-semibold text-[#ffffff] pt-40'>The Futur</h1>
            </div>
            <div className='btn px-6 pt-24'>
              <button className="btn z-10 cursor-pointer relative border border-[#ffffff] px-3 py-1 inline-flex items-center justify-start overflow-hidden transition-all rounded-full group">

                <span className="w-0 h-0 rounded-full bg-[#ffffff] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                <span className="w-full text-white transition-colors uppercase duration-300 ease-in-out group-hover:text-black z-10">
                  business bootcamp alumni
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards