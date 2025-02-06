import React from 'react'

const Button = ({ title }) => {
    return (
        <button className="btn z-10 cursor-pointer relative border border-[#212121] px-3 py-1 inline-flex items-center justify-start overflow-hidden transition-all rounded-full group">

            <span className="w-0 h-0 rounded-full bg-[#212121] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            
            <span className="w-full text-black transition-colors uppercase duration-300 ease-in-out group-hover:text-white z-10">
                {title}
            </span>
        </button>
    )
}

export default Button