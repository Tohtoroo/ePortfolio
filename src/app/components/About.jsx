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
    <div id='about' className='w-full min-h-screen flex flex-col items-center px-4 py-32'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        {/* About me text */}
        <div className={`col-span-2 ${fadeIn ? 'fade-in' : 'opacity-0'}`}>
          <>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>About Me</p>
            <h2 className='mt-4'>Hello, I'm <span className='text-[#5651e5]'>Aeron</span>!</h2>
            <p className='mt-4 text-gray-700'>
              I am a Mathematics (MA) student with a second major in Computer Science (CS) from the National University of Singapore (NUS), set to graduate in May of 2025.
            </p>
            <h3 className = 'mt-4'>What is this e-Portfolio?</h3>
            <p className ='mt-4 text-gray-700'> 
              It is an e-Portfolio mainly crafted for myself, to be a collection of individual reflections over major events at different years of my time in University, and one event prior to University (but rest assured, this event definitely impacted my University journey greatly).
            </p>
            <p className = 'mt-4 text-gray-700'>
              At first, the great central theme is <span className='text-[#5651e5] font-bold'>revisiting</span> and <span className='text-[#5651e5] font-bold'>reflecting</span> the different moments of my past which has greatly shaped my perspective as a young adult soon to graduate. Upon further reflection however, I realised that there were particular memories that I gravitate towards revisiting. This epiphany of my meta-reflection is written in my concluding post.
            </p>
            <p className = 'mt-4 text-gray-700'>
              Although this e-Portfolio is mainly crafted for myself, I do hope for the people who take the time to read through even one of my posts to have gained a new perspective. Whether it is a small insight on academic rigour, the importance of self reflection, finding a <i>door</i> which has shaped your perspective of reality, or simply a having a relatable moment, my hope is that my honest reflections resonate with you all.
            </p>
            <p className='mt-4 text-gray-700'>
               Beyond that, I also see this as a way to document my growth &#8211; a snapshot of who I am at this pivotal stage of life before transitioning into an eventual career path. By reflecting on these formative experiences, I myself have gained many new perspective along the way, and would continue to do so in the future. Thank you all for joining me on this reflective exploration.
            </p>

            <h3 className = 'mt-4'>Why make your own website?</h3>
            <p className='mt-4 text-gray-700'>Well... aesthetics aside, I wanted a way to bring my audience on a similar route as me to lead to the concluding post. I've always liked that sort of <i>eureka</i> way of writing where the revelations are not handed upfront but unfold gradually, allowing the full image to emerge piece-by-piece. It is like putting together a puzzle without the guiding image on the box &#8211; you're building as you go, discovering the final picture only at the end. This approach felt true to how I experienced my own reflections, and I hoped to replicate that sense of discovery for my readers through this created website.</p>

          </>
        </div>

        {/* Image with Lightbox */}
        <div
  className='sticky top-[calc(50%+80px)] transform -translate-y-1/2 w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 cursor-pointer'
  onClick={openModal}
>
  <Image
    src="/assets/Personal.JPG"
    alt="Personal Image"
    priority
    style={{ objectFit: 'scale-down' }}
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
