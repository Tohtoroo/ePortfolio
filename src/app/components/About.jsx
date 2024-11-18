'use client';

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Trigger fade-in effect on component mount
  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 50);
  }, []);

  return (
    <div id='about' className='w-full min-h-screen flex flex-col items-center pt-20'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        {/* About me text */}
        <div className={`col-span-2 ${fadeIn ? 'fade-in' : 'opacity-0'}`}>
          <div className='col-span-2'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>About Me</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>To be added.</p>
          </div>
        </div>

        {/* Image with Lightbox */}
        <div
          className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 cursor-pointer'
          onClick={openModal}
        >
          <Image
            src="/assets/Personal.JPG"
            alt="Personal Image"
            priority
            width={300}
            height={300}
            className='rounded-xl'
          />
        </div>
      </div>

      {/* Modal for Lightbox */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Image Lightbox"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: {
            top: '100px', // Adjust padding to avoid navbar overlap
            bottom: '40px',
            left: '10%',
            right: '10%',
            padding: '20px',
            borderRadius: '12px',
            background: '#ecf0f3',
          },
        }}
      >
        {/* White Circular Close Button */}
        <div className='flex justify-end'>
          <div 
            onClick={closeModal} 
            className='w-10 h-10 bg-[#ecf0f3] rounded-full flex items-center justify-center shadow-lg shadow-gray-400 cursor-pointer'
          >
            <AiOutlineClose className='text-gray-500 text-xl' />
          </div>
        </div>
        
        {/* Expanded Image Content */}
        <div className='flex items-center justify-center'>
          <Image
            src="/assets/Personal.JPG"
            alt="Expanded Personal Image"
            priority
            width={500}
            height={500}
            className='rounded-xl object-contain'
          />
        </div>
      </Modal>
    </div>
  );
};

export default About;
