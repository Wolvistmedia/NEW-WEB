import React from 'react'
import { Chango } from "next/font/google";



const chango = Chango({
    subsets: ["latin"],
    weight: ["400"],
});
const Hero = () => {
    return (
        <div className='relative flex flex-col  items-center justify-center h-screen text-center px-1 md:px-5 gap-6  md:space-y-2 space-y-0 sm:space-y-2'>

            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <video
                    src="/bgvideo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute  w-full h-full object-cover"
                />
            </div>

            <h2 className={`${chango.className} text-white md:text-6xl sm:text-5xl text-3xl md:font-bold font-medium sm:font-bold `}>
                Corporate IT Training <br className="hidden sm:block" />For High-Performance Teams
            </h2>
            <p className="text-white md:max-w-xl sm:max-w-xl max-w-xs leading-relaxed mt-2  font-medium"
                style={{ fontFamily: 'Times New Roman' }}>
                We deliver industry-focused corporate training programs in Cybersecurity,<br />
                Cloud, DevOps, and Data Engineering to help teams upskill and perform better.
            </p>

            <div className=' flex flex-col md:flex-row gap-5  pt-5'>
                <button className='uppercase bg-blue-600 text-white px-4 py-3 hover:bg-blue-700 transition
                 rounded-lg text-sm font-bold tracking-wide cursor-pointer
                '>explore training programs</button>
                <button className='uppercase bg-blue-600 text-white px-4 py-3 hover:bg-blue-700 transition
                 rounded-lg text-sm font-bold tracking-wide cursor-pointer'
                >explore full catalog</button>
            </div>
        </div>
    )
}

export default Hero