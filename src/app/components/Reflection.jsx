'use client';

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const Reflection = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [clickedBoxes, setClickedBoxes] = useState([false, false, false, false]);
  const [isConcludingPostUnlocked, setIsConcludingPostUnlocked] = useState(false);

  // Modal state for reflections and concluding post
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConcludingModalOpen, setIsConcludingModalOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

  // Data for each reflection box
  const reflections = [
    {
      heading: 'Prior to University',
      description: 'Revisiting My USP Admission Interview',
      content: (
        <>
          <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My USP Admission Interview: <span className="font-bold text-[#5651e5]">Reflecting</span> on a Deeper Understanding of the Philosophy of Mathematics</h2>
          <p>I'm often told that I'm a rational person.</p>
          <Image src="/assets/Logo.png" alt="Logo" width={200} height={100} />
          <p>As a maths major, I thought this was natural...</p>
        </>
      ),
      link: "./admission",
    },
    {
      heading: 'Year 1',
      description: 'Revisiting My Essay on Inequality',
      content: (
        <>
          <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My Essay on Inequality: <span className="font-bold text-[#5651e5]">Reflecting</span> on What Inequality Looks Like</h2>
          <p>Reflection on my first year...</p>
          <Image src="/assets/Logo.png" alt="Logo" width={200} height={100} />
        </>
      ),
      link: "https://example.com/usp-admissions",
    },
    {
      heading: 'Year 2',
      description: 'Revisiting My Journey through Heartbreak',
      content: (
        <>
          <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My Journey through Heartbreak: <span className="font-bold text-[#5651e5]">Reflecting</span> on My Reluctance to Exhibit Vulnerability</h2>
          <p>Overcoming challenges in Year 2...</p>
        </>
      ),
      link: "./heartbreak",
    },
    {
      heading: 'Year 3',
      description: 'Revisiting My Student Exchange Programme (SEP)',
      content: (
        <>
          <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My Student Exchange Programme (SEP): <span className="font-bold text-[#5651e5]">Reflecting</span> on Academic Rigour across Different Countries</h2>
          <p>My student exchange experience...</p>
        </>
      ),
      link: "./sep",
    },
  ];

  // Load state from local storage on mount
  useEffect(() => {
    const savedClickedBoxes = JSON.parse(localStorage.getItem('clickedBoxes'));
    const savedConcludingPostUnlocked = JSON.parse(localStorage.getItem('isConcludingPostUnlocked'));

    if (savedClickedBoxes) setClickedBoxes(savedClickedBoxes);
    if (savedConcludingPostUnlocked) setIsConcludingPostUnlocked(savedConcludingPostUnlocked);

    setTimeout(() => {
      setFadeIn(true);
    }, 50);
  }, []);

  // Save state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('clickedBoxes', JSON.stringify(clickedBoxes));
    localStorage.setItem('isConcludingPostUnlocked', JSON.stringify(isConcludingPostUnlocked));
  }, [clickedBoxes, isConcludingPostUnlocked]);

  const handleBoxClick = (index) => {
    const updatedBoxes = [...clickedBoxes];
    updatedBoxes[index] = true;
    setClickedBoxes(updatedBoxes);

    if (updatedBoxes.every((box) => box)) {
      setIsConcludingPostUnlocked(true);
    }

    setSelectedBox(index);
    setIsModalOpen(true);
  };

  const handleConcludingPostClick = () => {
    if (isConcludingPostUnlocked) {
      setIsConcludingModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeConcludingModal = () => {
    setIsConcludingModalOpen(false);
  };

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center pt-20'>
      <div className='max-w-[1240px] w-full p-8 mx-auto flex justify-center items-center'>
        <div className={fadeIn ? 'fade-in' : 'opacity-0'}>
          <h3 className='uppercase text-lg tracking-widest text-[#5651e5]'>
            Reflections
          </h3>
        </div>
      </div>

      {/* Reflection Rectangles */}
      <div className={`w-full p-2 flex items-center py-4 ${fadeIn ? 'fade-in' : 'opacity-0'}`}>
        <div className='max-w-[1240px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-32 gap-y-8'>
          {reflections.map((reflection, index) => (
            <div
              key={index}
              className={`col-span-1 rounded-xl shadow-lg p-8 cursor-pointer text-center transition-all duration-300 hover:scale-105 ${
                clickedBoxes[index] ? 'bg-gray-400' : 'bg-gray-200'
              }`}
              onClick={() => handleBoxClick(index)}
            >
              <p className='text-[#5651e5] font-bold mb-2 text-base'>{reflection.heading}</p>
              <p className='text-gray-700 text-sm'>{reflection.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Concluding Post Section */}
      <div className={`w-full p-8 flex flex-col items-center transition-opacity duration-500 ${fadeIn ? 'fade-in' : 'opacity-0'}`}>
        <div
          className={`w-[250px] rounded-xl shadow-lg p-8 text-center transition-all duration-500 ${
            isConcludingPostUnlocked ? 'bg-[#5651e5] text-white hover:scale-105 cursor-pointer' : 'bg-gray-400'
          }`}
          onClick={handleConcludingPostClick}
        >
          <p>{isConcludingPostUnlocked ? 'Concluding Post Unlocked!' : 'Concluding Post (Locked)'}</p>
        </div>
      </div>

      {/* Modal for Reflections */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Reflection Content"
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: {
            top: '100px',
            bottom: '40px',
            left: '10%',
            right: '10%',
            padding: '30px',
            borderRadius: '12px',
            background: '#ecf0f3',
          },
        }}
      >
        <div className='flex justify-end'>
          <AiOutlineClose onClick={closeModal} className='text-gray-500 text-xl cursor-pointer' />
        </div>
        {selectedBox !== null && (
          <>
            {reflections[selectedBox].content}
            <div className='flex justify-center mt-12'>
              <Link
                href={reflections[selectedBox].link}
                target="_blank"
                rel="noopener noreferrer"
                className=' bg-[#5651e5] text-white py-2 px-4 rounded-lg hover:bg-[#4340d2] transition-all duration-300'>
                Read Full Essay
              </Link>
            </div>
          </>
        )}
      </Modal>

      {/* Modal for Concluding Post */}
      <Modal
        isOpen={isConcludingModalOpen}
        onRequestClose={closeConcludingModal}
        contentLabel="Concluding Post"
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: {
            top: '100px',
            bottom: '40px',
            left: '10%',
            right: '10%',
            padding: '30px',
            borderRadius: '12px',
            background: '#ecf0f3',
          },
        }}
      >
        <div className='flex justify-end'>
          <AiOutlineClose onClick={closeConcludingModal} className='text-gray-500 text-xl cursor-pointer' />
        </div>
        <div className='modal-content p-4'>
          <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My <span className="font-bold text-[#5651e5]">Reflections</span>: My Inclination Towards Dissatisfied Memories</h2>
          <p>This is the content of the concluding post...</p>
        </div>
        <div className='flex justify-center mt-8'>
              <Link
                href= "https://example.com/usp-admissions"
                target="_blank"
                rel="noopener noreferrer"
                className='mt-4 bg-[#5651e5] text-white py-2 px-4 rounded-lg hover:bg-[#4340d2] transition-all duration-300'>
                Read Full Essay
              </Link>
        </div>
        
      </Modal>
    </div>
  );
};

export default Reflection;
