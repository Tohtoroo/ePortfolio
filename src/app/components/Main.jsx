'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Main = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Trigger fade-in effect on component mount
  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 50);
  }, []);

  // Function to handle fade-out on button click
  const handleFadeOut = () => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeIn(false);
    }, 50); // Adjust duration to match the CSS transition
  };

  return (
    <div id='main' className='w-full h-screen text-center pt-20'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center'>
        {/* Content Section */}
        <div className={`${fadeIn && !fadeOut ? 'fade-in' : 'fade-out'} transition-opacity duration-500`}>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Welcome to my e-Portfolio
          </p>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#5651e5]'>Aeron's</span> Path of Self-reflection
          </h1>
          <h3 className='py-2 text-gray-700 max-w-[90%] m-auto'>
            Told from the perspective of a Mathematics Major with a Second Major in Computer Science.
          </h3>
          <p className='py-2 text-gray-600 max-w-[70%] m-auto'>
            As a current Year 4 student in the National University of Singapore (NUS), I created this website as a place to collect my reflection on events from the start of my university journey, till now.  
          </p>

        {/* Button to Trigger Fade-Out */}
        <Link href="./start" onClick={handleFadeOut}>
        <button
          className='mt-5 bg-[#5651e5] text-white py-2 px-4 rounded-lg hover:bg-[#4340d2] transition-all duration-300'
        >
          Next
        </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Main;