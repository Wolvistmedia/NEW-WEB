'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='w-[90%] sm:w-[90%] md:w-[98%] fixed top-5 flex justify-center z-50 px-3'>
            <div className="flex items-center justify-between w-full md:w-[85%] gap-6 px-2 py-2">

                
                <Link href={'/'} className='text-white gap-3 flex items-center uppercase'>
                    <Image
                        src={'/logo1.png'}
                        width={50}
                        height={50}
                        alt='logo image'
                        className='w-15 h-12 md:w-14 md:h-14 lg:w-15 lg:h-15'
                    />
                    <span className='text-md md:text-base'>Strikava</span>
                </Link>

                
                <div className='text-white gap-4 lg:gap-8 items-center leading-1 cursor-pointer hidden md:flex text-[11px] lg:text-sm whitespace-nowrap'>
                    <span className='hover:text-gray-300 transition '>HOME</span>
                    <span className='hover:text-gray-300 transition'>ABOUT US</span>
                    <span className='hover:text-gray-300 transition '>TRAINING PROGRAMS</span>
                    <span className='hover:text-gray-300 transition sm:hidden md:inline'>CORPORATE TRAINING</span>
                    <span className='hover:text-gray-300 transition'>SUCCESS</span>
                    <span className='hover:text-gray-300 transition'>CONTACT</span>
                </div>

              
                <button
                    className="text-white text-[11px] lg:text-sm border border-white rounded-lg hidden md:flex
                    hover:bg-white hover:text-black px-4 py-2 transition duration-300 whitespace-nowrap cursor-pointer shrink-0"
                    >
                    BOOK CONSULTATION
                </button>

                
                <div className="md:hidden cursor-pointer text-white text-xl" onClick={() => setOpen(true)}>
                    ☰
                </div>
            </div>

            
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            
            <div
                className={`fixed top-0 right-0 h-full w-[70%] max-w-75 bg-black shadow-lg z-50 
                transform transition-transform duration-300 
                ${open ? "translate-x-0" : "translate-x-full"} `}
            >
                <div className="p-5 flex flex-col gap-5 justify-center items-center  ">

                    <span className=" flex self-end cursor-pointer text-xl  text-white "
                        onClick={() => setOpen(false)}>
                        ✕
                    </span>



                    {['HOME', 'ABOUT US', 'TRAINING PROGRAMS', 'CORPORATE TRAINING', 'SUCCESS', 'CONTACT'].map((link) => (
                        <span
                            key={link}
                            onClick={() => setOpen(false)}
                            className='text-white  text-sm font-medium tracking-wide cursor-pointer  transition  pb-3'>
                            {link}
                        </span>
                    ))}


                    <button className=" text-white text-[11px] lg:text-sm border border-white rounded-lg  
                    hover:bg-white hover:text-black transition duration-300 whitespace-nowrap cursor-pointer shrink-0 px-4 py-2 "
                      >
                        BOOK CONSULTATION
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar