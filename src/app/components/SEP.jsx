'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

const SEP = () => {

  const styleImage = {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-700 flex flex-col pt-40 mb-20">
      {/* Introduction */}
      <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> Our Student Exchange Programmes (SEP): <span className="font-bold text-[#5651e5]">Reflecting</span> on Academic Rigour across Different Countries</h2>
      <p>This podcast was produced in collaboration with Viola and Shona.</p>

      {/* Embedded YouTube Video */}
      <div className="flex justify-center mt-6">
        <iframe
          title="Youtube video player"
          src="https://www.youtube.com/embed/w8kznN3JHiU"
          style={{ width: '100%', height: '300px', maxWidth: '600px' }}
          allowFullScreen
        />
      </div>

      <p className="mt-6">
        Here is the list of artefacts used in the podcast, labeled chronologically as they appear in the Youtube video to facilitate easy following.
      </p>

      {/* Figures and Captions */}
      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_Fig1_1.jpg")}>
          <Image
            src="/assets/USR/SEP_Fig1_1.jpg"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig 1.1"
            width="500"
            height="500"
          />
        </div>

        <em>
          Figure 1. Excerpt from Barbara R. Blackburn's book titled <i>Rigor Is NOT a Four-Letter Word</i>. The selected screenshot showcases Blackburn's three-fold definition of rigour in the context of an educational environment.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigS1_2.png")}>
          <Image
            src="/assets/USR/SEP_FigS1_2.png"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig S1.2"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure S1. Screenshot of Shona's original compiled thoughts on the difference in rigour observed when taking English Literature courses in both University of North Carolina, Chapel Hill (<a href="https://www.unc.edu/" target='_blank' rel="noopener noreferrer" class='more-link'>UNC-CH</a>) and National University of Singapore (NUS). Written annotations coloured in blue and orange were made for the purpose of initial discussion during the podcast. This composite artifact comprised of three separate screenshots from Shona's class notes, which were typed out at the time of attending the class. On the left hand side: screenshot from <a href="https://www.coursicle.com/unc/courses/ENGL/219/" target='_blank' rel="noopener noreferrer" class='more-link'>ENGL 219: The American Novel</a> first class notes (top) and screenshot of notes taken during April classes (bottom). On the right side hand: screenshot from <a href="https://nusmods.com/courses/EN2201/backgrounds-to-western-literature-and-culture" target='_blank' rel="noopener noreferrer" class='more-link'>EN2201: Backgrounds to Western Literature and Culture</a> first class notes.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigV1_3.jpg")}>
          <Image
            src="/assets/USR/SEP_FigV1_3.jpg"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig V1.3"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure V1. Screenshot of Viola's compilation of pros and cons comparing academic rigour in NUS and <a href="https://english.rikkyo.ac.jp/index.html" target='_blank' rel="noopener noreferrer" class='more-link'>Rikkyo University</a>. The screenshot compares the course contents page between <a href="https://ry.rikkyo.ac.jp/syllabus/pdf/2023/gaku_bun_e.pdf#page=549" target='_blank' rel="noopener noreferrer" class='more-link'>EAL3811: English Seminar 13</a> and <a href="https://nusmods.com/courses/EN4222HM/topics-in-the-eighteenth-century" target='_blank' rel="noopener noreferrer" class='more-link'>EN4222: The Eighteenth Century</a>, with annotations on the side analyzing the professor's motivations on deciding the topic and texts, dated 18th September 2024.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigA1_4.PNG")}>
          <Image
            src="/assets/USR/SEP_FigA1_4.PNG"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig A1.4"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure A1. Notes Aeron wrote for a UNC course <a href="https://www.coursicle.com/unc/courses/MATH/524/" target='_blank' rel="noopener noreferrer" class='more-link'>MATH524: Elementary Differential Equations</a> that he took in Year 3 Semester 1 where he annotated on the side of two equations “what is the conceptual understanding of this”. The parts in brown are Aeron's current day annotations.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigA2_5.PNG")}>
          <Image
            src="/assets/USR/SEP_FigA2_5.PNG"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig A2.5"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure A2. Aeron's homework also from UNC's MATH524 where you can see from the yellow highlighted words “solve”, or “sketch”, or to “determine the solution”, it was never really questions to conceptually proof a following conjecture. The parts in brown are his current day annotations.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigA3_6.PNG")}>
          <Image
            src="/assets/USR/SEP_FigA3_6.PNG"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig A3.6"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure A3. Preparation work that Aeron had done for MATH524's finals, where he had marked out back then in Year 3 Semester 1 some equations in red and encased most of them in red boxes to signify the importance of them. There was never really a full rigorous, conceptual proof building up to these equations, and were more presented as they just worked. Since most of the questions in tests or homework only relied on applications of such equations, there never was a need to understand how these equations came to be. The parts in brown are his current day annotations.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigA4_7.PNG")}>
          <Image
            src="/assets/USR/SEP_FigA4_7.PNG"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig A4.7"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure A4. Screenshot of a conversation Aeron had with a friend after our student exchange programmes where he had asked her whether she liked her exchange school's education better, or NUS's education better. She specifically pointed out that “NUS got more rigour”, which he has highlighted. Aeron replied that “I prefer NUS”, which although he did not further elaborate on that response. The reason as to why at that point in time was due to how he preferred NUS's rigour more. The parts in brown are his current day annotations.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigA5_8.PNG")}>
          <Image
            src="/assets/USR/SEP_FigA5_8.PNG"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig A5.8"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure A5. Tutorial 1 from an NUS course <a href="https://nusmods.com/courses/MA2101/linear-algebra-ii" target='_blank' rel="noopener noreferrer" class='more-link'>MA2101: Linear Algebra II</a> that Aeron took in Year 2 Semester 2, where he highlighted in red words like “prove”, or “show”, which point towards questions which require conceptual understanding of the theorems we had learnt in that same course and apply them in order to solve for other propositions. We can see that there is a vast increase in amount of conceptual based questions than application based questions.
        </em>
      </div>

      <div className="text-center mt-6">

        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigA6_9.PNG")}>
          <Image
            src="/assets/USR/SEP_FigA6_9.PNG"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig A6.9"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure A6. Half of the cheatsheet Aeron had made for MA2101's final exam, where he highlighted in red the theorems that were rigorously proven in class and may be used for conceptual based proving questions in the finals. We can already see that just based off the amount of content written, that he had to know a lot more for this NUS course as compared to the UNC course, and that this was only HALF of the entire cheatsheet.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigV2_10.jpg")}>
          <Image
            src="/assets/USR/SEP_FigV2_10.jpg"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig V2.10"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure V2. Screenshot of an excerpt from Viola's <a href="https://nusmods.com/courses/EN2202/critical-reading" target='_blank' rel="noopener noreferrer" class='more-link'>EN2202: Critical Reading</a> exam script, where she showed how she derived a close reading of a poem, dated 14th April 2022.
        </em>
      </div>

      <div className="text-center mt-6">

        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigV3_11.jpg")}>
          <Image
            src="/assets/USR/SEP_FigV3_11.jpg"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig V3.11"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure V3. Screenshot showing an excerpt from a 7 page document the professor from Viola's EN2022 course provided, detailing writing tips for class assignments, dated 12th March 2022.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigV4_12.jpg")}>
          <Image
            src="/assets/USR/SEP_FigV4_12.jpg"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig V4.12"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure V4. Screenshot of a telegram conversation Viola had with a friend regarding the secondary readings provided for EN4222, which was placed next to the course syllabus for that week. In the conversation, she complained about how only half of the secondary readings provided were relevant to analyzing that week's primary text, dated 2 October 2024.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigS2_13.png")}>
          <Image
            src="/assets/USR/SEP_FigS2_13.png"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig S2.13"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure S2. Screenshot of Shona's revised compiled thoughts on rigour in NUS. With reference to the same NUS module EN2201, annotations in pink were made following the new understanding of rigour that was discussed as a group during the podcast. The artifact is comprised of 3 screenshot segments and has been split into 3 zoomed-in parts for better visibility and ease of in-depth clarification during the podcast (further elaboration below).
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigS2a_14.png")}>
          <Image
            src="/assets/USR/SEP_FigS2a_14.png"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig S2a.14"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure S2a. Screenshot of Shona's class notes for EN2201. She re-annotates the same excerpt featured in Artifact S1, except with a more critical view about the narrow focus on “Hebraism vs Hellenism” and questions the overall value of the previous interpretation of rigour.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigS2b_15.png")}>
          <Image
            src="/assets/USR/SEP_FigS2b_15.png"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig S2b.15"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure S2b. Screenshot of Shona's class notes for EN2201. She now annotates other segments of her notes, highlighting the confusion and lack of understanding that arose from the Professor's approach to explaining secondary reading themes relating to the thematic focus on Hellenism.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigS2c_16.png")}>
          <Image
            src="/assets/USR/SEP_FigS2c_16.png"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig S2c.16"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure S2c. Screenshot of Shona's EN2201 class worksheet. She points out the blank slate status of worksheet and comments on how the Professor's rigorous structure and intention may not have been very effective or beneficial after all. Under this light, the rigid implementation seems to be more of a negative than a positive.
        </em>
      </div>

      <div className="text-center mt-6">
        <div style={styleImage} onClick={() => openModal("/assets/USR/SEP_FigA7_17.PNG")}>
          <Image
            src="/assets/USR/SEP_FigA7_17.PNG"
            style={{ objectFit: "scale-down" }}
            priority
            alt="SEP Fig A7.17"
            width="500"
            height="500"
          />
        </div>
        <em>
          Figure A7. A screengrab of notes that were used to teach in the NUS course <a href="https://nusmods.com/courses/MA4255/numerical-methods-in-differential-equations" target='_blank' rel="noopener noreferrer" class='more-link'>MA4255: Numerical Methods in Differential Equations</a> taken by Aeron. Although the course itself was very rigorous in their way or proof-making, it was not particularly clear or helpful with the explanations to reach said rigour in their proof of the theorems. Without some less rigorous way of teaching to help assist in the understanding of the heavy mathematical notations used, it gets quite easily lost during the teachings that it may instead hinder the learning experience instead.
        </em>
      </div>


      {/* Modal Component */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Image Lightbox"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: {
            top: '100px',
            bottom: '40px',
            left: '10%',
            right: '10%',
            padding: '20px',
            borderRadius: '12px',
            background: '#ecf0f3',
          },
        }}
      >
        <div className="flex justify-end">
          <div
            onClick={closeModal}
            className="w-10 h-10 bg-[#ecf0f3] rounded-full flex items-center justify-center shadow-lg shadow-gray-400 cursor-pointer"
          >
            <AiOutlineClose className="text-gray-500 text-xl" />
          </div>
        </div>
        {selectedImage && (
          <div className="flex items-center justify-center" style={styleImage} >
            <Image
              src={selectedImage}
              alt="Selected Image"
              priority
              style={{ objectFit: "scale-down" }}
              width={800}
              height={800}
              className="rounded-xl object-contain"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SEP;
