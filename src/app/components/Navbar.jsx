'use client'

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from "react-icons/ai";
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
    <>
        <div style ={{backgroundColor: '#ecf0f3'}}
         className = 'w-full h-20 shadow-xl z-[100] fixed'>
            <div className = 'flex justify-between items-center h-full w-full px-2 2xl:px-16'>
                {/*lazy loading of images*/}
                <Image 
                src = "/assets/Logo.png" 
                priority
                alt = '/' 
                width = '90' 
                height = '50'/>
                <div>
                    <ul className = 'hidden md:flex'>
                        <Link href = './'> 
                            <li className = 'ml-10 text-sm uppercase hover:border-b'>
                                Home
                            </li> 
                        </Link>
                        <Link href = './about'> 
                            <li className = 'ml-10 text-sm uppercase hover:border-b'>
                                About
                            </li> 
                        </Link>
                        <Link href = './reflections'>
                            <li className = 'ml-10 text-sm uppercase hover:border-b'>
                                Reflections
                            </li>
                        </Link>
                    </ul>
                    <div onClick = {handleNav} className = 'md:hidden cursor-pointer'>
                        <AiOutlineMenu size = {25} />
                    </div>
                </div>
            </div>

            <div className = {nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className = {nav ? 
                'fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500' : 
                'fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500'}>
                <div>
                    <div className = 'flex w-full items-center justify-between'>
                    <Image 
                    src = "/assets/Logo.png" 
                    alt = '/' 
                    priority
                    width = '87' 
                    height = '35'/>
                    <div onClick = {handleNav} className = 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose/>
                    </div>
                    </div>
                    <div className = 'border-b border-gray-400 my-4'>
                        <p className = 'w-[85%] md:w-[90%] py-4'>
                            Welcome to my e-Portfolio website!
                        </p>
                    </div>
                </div>

                <div className = 'py-4 flex flex-col'>
                    <ul className = 'uppercase'>
                        <Link href = './'>
                        <li className = 'py-4 text-sm'>Home</li>
                        </Link>
                        <Link href = './about'>
                        <li className = 'py-4 text-sm'>About</li>
                        </Link>
                        <Link href = './reflections'>
                        <li className = 'py-4 text-sm'>Reflections</li>
                        </Link>
                    </ul>
                    <div className = 'pt-40'>
                        <p className = 'uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                        <div className = 'flex items-center justify-between my-4 sm:w-[80%]'>
                            <div className = 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn/>
                            </div>
                            <div className = 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub/>
                            </div>
                            <div className = 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>
                            <div className = 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill/>
                            </div> 
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