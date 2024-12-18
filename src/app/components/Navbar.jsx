'use client'

import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div style={{ backgroundColor: '#ecf0f3' }}
                className='w-full h-20 shadow-xl z-[100] fixed'>
                <div className='flex justify-between items-center h-full w-full px-2 2xl:px-16 pr-4 pl-4 md:pl-8 md:pr-8'>
                    {/*lazy loading of images*/}
                    <a href='./'>
                        <Image
                            src="/assets/Logo.png"
                            priority
                            alt='/'
                            width='60'
                            height='50' />
                    </a>
                    <div>
                        <ul className='hidden md:flex'>
                            <a href='./'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>
                                    Home
                                </li>
                            </a>
                            <a href='./about'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>
                                    About
                                </li>
                            </a>
                            <a href='./reflections'>
                                <li className='ml-10 text-sm uppercase hover:border-b'>
                                    Reflections
                                </li>
                            </a>
                        </ul>
                        <div onClick={handleNav} className='md:hidden cursor-pointer pr-2'>
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>

                <div onClick={handleNav} className={`md:hidden fixed left-0 top-0 w-full h-screen overlay z-[99] ${nav ? "bg-visible" : "bg-hidden"}`}>

                    <div className={nav ?
                        'fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500' :
                        'fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500'}
                        onClick={(e) => e.stopPropagation()}>
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <a href='./'>
                                    <Image
                                        src="/assets/Logo.png"
                                        alt='/'
                                        priority
                                        width='65'
                                        height='35' />
                                </a>
                                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className='border-b border-gray-400 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>
                                    Welcome to my e-Portfolio website!
                                </p>
                            </div>
                        </div>

                        <div className='py-4 flex flex-col cursor-default'>
                            <ul className='uppercase'>

                                <li className='py-4 text-sm'><a href='./'>Home</a></li>


                                <li className='py-4 text-sm'><a href='./about'>About</a></li>


                                <li className='py-4 text-sm'><a href='./reflections'>Reflections</a></li>

                            </ul>
                            <div className='pt-40'>
                                <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                                <div className='flex items-center my-4 sm:w-[80%] dynamic-gap'>
                                    <a href="https://www.linkedin.com/in/aerontoh/" target='_blank' rel="noopener noreferrer" class='more-link'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a href="https://github.com/Tohtoroo" target='_blank' rel="noopener noreferrer" class='more-link'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <FaGithub />
                                        </div>
                                    </a>
                                    <a href="mailto:aerontoh@u.nus.edu">
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <AiOutlineMail />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar