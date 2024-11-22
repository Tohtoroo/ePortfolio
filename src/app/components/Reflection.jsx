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
          <p> The question of whether Mathematics is invented or discovered is one that has been debated for centuries. Back in 2019, I was asked this exact question for my University Scholars Programme (USP) admission interview. I was taken aback, and had to quickly scramble up an answer. My initial response &#8211; asserting that Mathematics was "derived" &#8211; was an instinctual stance that I did not successfully substantiate and articulate properly, leading to feelings of <i>dissatisfaction</i>.</p>
          <p className = 'mt-6'> Now, with years of academic experience behind me, I see my answer back in 2019 in a new light. Mathematics, as I have come to understand it, operates at the intersection between invention and discovery &#8211; ironically circling back to my initial answer. Concepts like the answer to the Monty Hall problem or the golden ratio reveal <i>truths</i> about our reality that seem to exist independently of us, yet these truths are accessible only through the language of Mathematics &#8211; a tool which was a human invention. Inspired by courses like NST2005: Doors of Perception and MA2116: Probability, I can now see and better articulate that Mathematics is not just a tool (invention) for describing the world, but as a <i>door</i> which we perceive the <i>universals</i> of our reality. If we were to consider such universals as a part of Mathematics, then we would therefore consider Mathematics as an intersection between discovery and invention. This reflection revisits my initial answer, attempting to unpack its implications, and to provide a more substantial argument towards my current point of view to the philosophical question on the nature of Mathematics.</p>
        </>
      ),
      link: "./admission",
    },
    {
      heading: 'Year 1',
      description: 'Revisiting My Essay on Inequality',
      content: (
        <>
          <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My Essay on Inequality: <span className="font-bold text-[#5651e5]">Reflecting</span> on My Experiences with Inequality</h2>
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
          <p>I've always been seen as a rational person &#8211; someone who makes decisions based on logic and reason. This perception wasn't just external; as a Mathematics major, I thought it made sense to lean into this identity since logical reasoning was at the core of everything I was learning. Over time, being rational became a big part of how I saw myself, shaped by the external feedback from friends, as well as my own self-imposed expectations built through academic work. However, when thinking back to an emotionally trying moment in life, I thought back to the weeks that followed after a break up in year 2. That moment in time was one which brought about a lot of <i>dissatisfaction</i> in the way I was handling myself, in the ways that I was closing myself off. </p>
          <p className = "mt-6"> When I look back at that specific moment and the weeks that followed, I can see how much I tried to rationalise my emotions just to hold on to that image of being rational. On the surface, I seemed calm and in control, but in private, I was struggling in ways I didn't let anyone see. Finding a balance between logic and emotion hasn't been easy, but reflecting on it now has been surprisingly freeing. Writing this helped me see that showing vulnerability doesn't mean I'm abandoning my rationality &#8211; it just means I'm being honest with myself and others, especially in times where I genuinely require the support. This reflection serves as my first step towards letting both parts of who I am coexist and to slowly find a balance, so I can show up in a way that feels more true to self.</p>
        </>
      ),
      link: "./heartbreak",
    },
    {
      heading: 'Year 3',
      description: 'Revisiting Our Student Exchange Programmes (SEP)',
      content: (
        <>
          <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> Our Student Exchange Programmes (SEP): <span className="font-bold text-[#5651e5]">Reflecting</span> on Academic Rigour across Different Countries</h2>
          <p>In this post, I am joined by my friends since my Year 1 of University, Shona and Viola, to reflect on our experiences with academic rigour during our exchange programmes and how they compare to our time in NUS in the form of a podcast!</p>
          <p className = "mt-6">For me, rigour in Mathematics has always meant starting with a solid foundation of axioms/theorems and carefully building up through logical steps to reach a new conclusion. However, during my exchange at the University of North Carolina, Chapel Hill (UNC-CH), I found that the approach to some of the Mathematics courses there very different. Instead of focusing on proofs and deeper conceptual understanding, the emphasis was placed on applying fomulas to solve problems, an experience which I found to be <i>dissatisfactory</i>. My experience along with the experiences of my fellow friends, made me realise how much I value NUS's approach to rigour in my Mathematics education, where I am rigorously taught proofs and to truly understand them.</p>
          <p className = "mt-6">However, as we talked, it became clear that rigour isn't about always going deeper or being more complex &#8211; it is about balance. I reflected on my experiences back in NUS, where some professors are so focused on rigour, that they skipped over the intuitive steps that may help students grasp the material better. Our talk reminded me that sometimes less rigourous explanations can actually make the more rigourous proofs click. What particularly surprised me during the discussion was how similar this idea of <i>building</i> is to what Viola and Shona described in Literature. Whether it is constructing a proof in Mathematics, or analysing a text in Literature, both require a structured process that connects smaller ideas to larger ones.</p>
          <p className = "mt-6">By the end of our podcast, we came to agree that rigour is not fixed &#8211; it is something dynamic, shaped by how well the teaching methods align with students' needs. It is not about being more or less deep, but about finding that sweet spot where learning is meaningful.</p>
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
        <div className='max-w-[1240px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8 lg:gap-x-24 gap-y-8'>
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
            isConcludingPostUnlocked ? 'bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white hover:scale-105 cursor-pointer' : 'bg-gray-400'
          }`}
          onClick={handleConcludingPostClick}
        >
          {isConcludingPostUnlocked ? (<>
            <p className="font-bold mb-2 text-base">Concluding Post</p>
            <p className="text-sm">Revisiting My Reflections</p>
          </>): (<>
            <p className="font-bold mb-2 text-base">Concluding Post</p>
            <p className="text-sm">(Locked)</p>
          </>)}
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
            <div className='flex justify-center mt-8'>
              <Link
                href={reflections[selectedBox].link}
                target="_blank"
                rel="noopener noreferrer"
                className='shadow-xl shadow-gray-400 uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white py-2 px-4 rounded-xl hover:bg-[#4340d2] transition-all duration-300'>
                {selectedBox === 3 ? 'See Podcast Video' : 'Read Full Post'}
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
          <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My <span className="font-bold text-[#5651e5]">Reflections</span>: My Inclination Towards <span className="font-bold text-[#5651e5]">Dissatisfied</span> Experiences</h2>
          <p>This is the content of the concluding post...</p>
        </div>
        <div className='flex justify-center mt-8'>
              <Link
                href= "https://example.com/usp-admissions"
                target="_blank"
                rel="noopener noreferrer"
                className='shadow-xl shadow-gray-400 uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white py-2 px-4 rounded-xl hover:bg-[#4340d2] transition-all duration-300'>
                Read Full Post
              </Link>
        </div>
        
      </Modal>
    </div>
  );
};

export default Reflection;
