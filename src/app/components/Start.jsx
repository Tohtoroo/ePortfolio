'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Start = () => {
  const [fadeInHeader, setFadeInHeader] = useState(false);
  const [fadeInContent, setFadeInContent] = useState(false);
  const [fadeInButton, setFadeInButton] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // State to track box clicks and concluding post unlock status
  const [clickedBoxes, setClickedBoxes] = useState([false, false, false, false]);
  const [isConcludingPostUnlocked, setIsConcludingPostUnlocked] = useState(false);

  const router = useRouter();

  const content = [
    {
      header: "Hello!",
      text: (
        <>
          In my Year 4 Semester 1 of university from <span className="font-bold text-[#5651e5]">August 2024</span> to <span className="font-bold text-[#5651e5]">November 2024</span>, I took a reflection course as part of the University Scholars Programme's (USP) curriculum.
        </>
      ),
    },
    {
      header: <>What is <span className="font-bold text-[#5651e5]">Reflection</span>?</>,
      text: (
        <>
          During this course, I learnt to take the act of reflecting to be <i>intentional</i> and not serendipitous. The act of reflecting goes beyond mere recollection of events; it is <span className="font-bold text-[#5651e5]">critically analysing</span> and <span className="font-bold text-[#5651e5]">making meaning</span> to gain deeper insights. This means openness, honesty, and a willingness to question my own assumptions upon <span className="font-bold text-[#5651e5]">revisiting</span> past experiences.
        </>
      ),
    },
    {
    header: <>Focusing on <span className="font-bold text-[#5651e5]">Intentionality</span>.</>,
    text: (
      <>
        Focusing on the <i>intentional</i> aspect of reflection, I would like to <span className="font-bold text-[#5651e5]">revisit</span> and <span className="font-bold text-[#5651e5]">reflect</span> on my own lived experiences that occurred throughout my university journey, focusing on one <span className="font-bold text-[#5651e5]">memorable</span> event at each of these time periods:
      </>
    ),
      showBoxes: true,
      boxesClickable: false,
    },
    {
    header: <>Why are they <span className="font-bold text-[#5651e5]">Memorable</span>?</>,
    text: (
      <>
        Well, the reason as to why will be revealed in the <span className="font-bold text-[#5651e5]">concluding post</span>! I want to take all those reading this e-Portfolio along with me on the journey I personally went through as I reflected on why I particularly honed in on these lived experiences. 
      </>
      ),
    },
    {
        header: <><span className="font-bold text-[#5651e5]">Concluding</span> Post </>,
        text: (
          <>
            To access the concluding post, you'll have to click on each of the box containing the reflections <span className="font-bold text-[#5651e5]">at least once</span>, and it'll <span className="font-bold text-[#5651e5]">unlock</span> the final concluding post at the bottom. There is no order as to which reflection needs to be opened/read first. <br/> As an example before we go into the actual page containing my reflections, try it out below!
          </>
          ),
          showUnlockablePost: true,
          boxesClickable: true,
    }
  ];


  useEffect(() => {
    setFadeInHeader(true);
    const contentDelay = setTimeout(() => {
      setFadeInContent(true);
    }, 500);

    const buttonDelay = setTimeout(() => {
      setFadeInButton(true);
    }, 1000);

    return () => {
      clearTimeout(contentDelay);
      clearTimeout(buttonDelay);
    };
  }, [currentStep]);

  const handleNext = () => {
    setFadeInButton(false);
    setFadeInContent(false);
    setFadeInHeader(false);

    setTimeout(() => {
      if (currentStep === content.length - 1) {
        router.push('/reflections');
      } else {
        setCurrentStep((prev) => prev + 1);
        setFadeInHeader(true);
        setTimeout(() => setFadeInContent(true), 500);
        setTimeout(() => setFadeInButton(true), 1000);
      }
    }, 500);
  };

  // Handle box clicks only if they are clickable
  const handleBoxClick = (index) => {
    if (!content[currentStep].boxesClickable) return;

    const updatedBoxes = [...clickedBoxes];
    updatedBoxes[index] = true;
    setClickedBoxes(updatedBoxes);

    if (updatedBoxes.every((box) => box)) {
      setIsConcludingPostUnlocked(true);
    }
  };

  return (
    <div id='main' className='w-full min-h-screen flex flex-col md:justify-center md:items-center text-center pt-40 md:pt-20'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center'>
        {/* Header Section */}
        <div className={`${fadeInHeader ? 'fade-in' : 'fade-out'} transition-opacity duration-500`}>
          <h1 className='py-4 text-gray-700'>{content[currentStep].header}</h1>
        </div>

        {/* Content Section */}
        <div className={`${fadeInContent ? 'fade-in' : 'fade-out'} transition-opacity duration-700`}>
          <p className='py-2 text-gray-600 m-auto w-3/4'>{content[currentStep].text}</p>

          {/* Boxes Section */}
          {content[currentStep]?.showBoxes && (
            <div className='w-full p-8 flex justify-center items-center'>
              <div className='max-w-[1240px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {['Prior to University', 'Year 1', 'Year 2', 'Year 3'].map((label, index) => (
                  <div
                    key={index}
                    className='rounded-xl shadow-lg p-8 bg-gray-200'
                  >
                    <p className='text-gray-700'>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Concluding Post Section */}
          {content[currentStep]?.showUnlockablePost && (
            <div className='w-full p-8 flex flex-col items-center'>
              <div className='max-w-[1240px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
                {['Prior to University', 'Year 1', 'Year 2', 'Year 3'].map((label, index) => (
                  <div
                    key={index}
                    onClick={() => handleBoxClick(index)}
                    className={`rounded-xl shadow-lg p-8 cursor-pointer transition-all duration-300 ${
                      clickedBoxes[index] ? 'bg-gray-400' : 'bg-gray-200 hover:scale-105'
                    }`}
                  >
                    <p className='text-gray-700'>{label}</p>
                  </div>
                ))}
              </div>

              {/* Centered Concluding Post Box */}
              <div
                className={`w-[250px] rounded-xl shadow-lg p-8 text-center transition-all duration-500 ${
                  isConcludingPostUnlocked ? 'bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white' : 'bg-gray-400'
                }`}
              >
                <p>{isConcludingPostUnlocked ? 'Concluding Post Unlocked!' : 'Concluding Post (Locked)'}</p>
              </div>
            </div>
          )}
        </div>

        {/* Button Section */}
        <button
          onClick={handleNext}
          className={`mt-4 mb-8 bg-[#5651e5] text-white py-2 px-6 rounded-lg hover:bg-[#4340d2] transition-all duration-300 ${
            fadeInButton ? 'fade-in' : 'fade-out'
          }`}
        >
        {currentStep === content.length - 1 
        ? 'Reflections' 
        : currentStep === 0 
        ? 'Reflection?' 
        : currentStep === 1 
        ? 'Go on...' 
        : currentStep === 2
        ? 'What makes these experiences memorable?'
        : 'Concluding post?'}
        </button>
      </div>
    </div>
  );
};

export default Start;
