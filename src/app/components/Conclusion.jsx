'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

const Conclusion = () => {
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
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
      <span className="font-bold text-[#5651e5]">Revisiting</span> My <span className="font-bold text-[#5651e5]">Reflections</span>: My Inclination Toward Dissatisfactory Experiences
      </h1>

      {/* Introduction */}
      <p>
        In the beginning of planning this e-Portfolio for the reflection course <a href = "https://nusmods.com/courses/NHS4001A/critical-reflection" target = '_blank' rel = "noopener noreferrer" class = 'more-link'>NHS4001: Critical Reflection</a> taught by Professor Lo Mun Hou, my
        initial organising principle &#8211; a thread of commonality tying my
        individual reflections together &#8211; was the fact that each reflection
        centred on a significant event that took place at different stages in
        my university journey.
      </p>


      {/* Figure 1 */}
      <div className="text-center mt-6">
        <div
          style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
          onClick={() => openModal('/assets/USR/Conclusion_Fig1.png')}
        >
          <Image
            src="/assets/USR/Conclusion_Fig1.png"
            style={{ objectFit: 'scale-down' }}
            priority
            alt="Excerpt of e-Portfolio plan"
            width={500}
            height={500}
          />
        </div>
        <em>
          Figure 1. Excerpt of my e-Portfolio plan where we can see how I had
          planned to use the idea that each reflection centred on “big events,”
          and that they are in “different periods of time” as my thread of
          commonality. This plan was done on the 30th October 2024.
        </em>
      </div>

      <p className="mt-6">
      Although the broad commonality was there, it felt like there was something deeper, something that remained undiscovered until it surfaced during the consultation over the plans for this e-Portfolio with Professor Lo. It was during this discussion that I realised that I had a natural gravitation towards reflecting on memories that were dissatisfactory. For instance:
      </p>

      <ul className="list-disc ml-6 mt-6">
        <li className = "mb-2">
          In the case of my USP admission interview, I was dissatisfied with my
          unsubstantiated answer back then.
        </li>
        <li className = "mb-2">
          With my essay on inequality, I was dissatisfied with how I addressed
          the central question.
        </li>
        <li className = "mb-2">
          Regarding my heartbreak, I was dissatisfied with how I handled myself
          post-breakup.
        </li>
        <li>
          For my student exchange programme (SEP), I was dissatisfied with how
          rigour was handled in the course I took at my exchange university.
        </li>
      </ul>

      <p className="mt-6">
      The reason for this gravitation was not clear to me until the final lesson of NHS4001, where we were tasked to read Mark Freeman's <i>Too Late: The Temporality of Memory and the Challenge of Moral Life</i>. In this article, a particular word stood out to me &#8211; <i>redemption</i>.
      </p>

      {/* Figure 2 */}
      <div className="text-center mt-6">
        <div
          style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
          onClick={() => openModal('/assets/USR/Conclusion_Fig2.jpg')}
        >
          <Image
            src="/assets/USR/Conclusion_Fig2.jpg"
            style={{ objectFit: 'scale-down' }}
            priority
            alt="Excerpt from Mark Freeman's article"
            width={500}
            height={500}
          />
        </div>
        <em>
          Figure 2. Excerpt from Mark Freeman's article. Highlights were made
          for the purposes of this reflection, and points out the statement that
          particularly stood out to me.
        </em>
      </div>

      <p className="mt-6">
      In Mark Freeman's article, he forwards the view that memory often forces us to confront moments in the past where we lacked knowledge. He posits that reflecting on the past makes us aware of how limited our understanding was at those moments, which often elicits a sense of guilt for not recognising the insights at that point in time in the past. However, he also emphasises that this process of recognition provides an opportunity for redemption. By seeing the past in a new light, we are given a chance to adopt a better perspective moving forward &#8211; one that “surpasses one's previous view of things”.
      </p>

      <p className="mt-6">
        While I would not personally say that I experienced feelings of
        “culpability” over reflecting on my past experiences, I did resonate
        with Freeman's view on the redemptive quality in confronting the past.
        In each of my individual reflections, I gained a new perspective that I
        would not have considered without the knowledge or experience I have
        currently. For instance:
      </p>

      <ul className="list-disc ml-6 mt-6">
        <li className = "mb-2">
          Reflecting on my USP admission interview question, I now know that I
          have come to a deeper understanding and can better defend and
          substantiate my opinion on the nature of mathematics.
        </li>
        <li className = "mb-2">
          Reflecting on my past essay about social equality, I now recognise the
          subtler impacts of inequality in my life, allowing me to provide a
          more supported perspective on why ordinary Singaporeans should care
          about social equality.
        </li>
        <li className = "mb-2">
          Reflecting on my emotional struggles following a breakup, I came to
          terms with the tension between my expectations to be a rational person
          and the need to embrace vulnerabilities in front of others.
        </li>
        <li>
          Reflecting on my exchange experience deepened my understanding of what
          “rigour” in Mathematics truly means.
        </li>
      </ul>

      <p className="mt-6">
        I gravitate towards dissatisfactory experiences as I am provided the
        opportunity to reframe them, to <i>redeem</i> them into more constructive and
        empowering lessons that better prepare me for the future.
      </p>

      <p className = "mt-6">
      As I approach the conclusion of this reflective journey, I find it fitting to address one more area of <i>dissatisfaction</i>. In the final lesson of NHS4001, Professor Lo covered terms from Donald Schön's <i>The Reflective Practitioner</i> &#8211; <i>reflection-on-action</i> and <i>reflection-in-action</i>. 
      </p>

            {/* Figure 3 */}
            <div className="text-center mt-6">
        <div
          style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
          onClick={() => openModal('/assets/USR/Conclusion_Fig3.png')}
        >
          <Image
            src="/assets/USR/Conclusion_Fig3.png"
            style={{ objectFit: 'scale-down' }}
            priority
            alt="Excerpt from Mark Freeman's article"
            width={400}
            height={400}
          />
        </div>
        <em>Figure 3. Slide from the final lesson of NHS4001 that introduces us to the concepts of Schön's reflection-on-action and reflection-in-action.</em>
        </div>

        <p className = 'mt-6'>
        All my previous reflections clearly fall under reflections-on-action, as they were focused on experiences that I already had in the past. Given my secondary intention of re-situating and forming intentional reflections on a significant event over every year of my university journey, it only feels appropriate to visit and reflect on a dissatisfaction I am presently facing in year 4 of university: my approach to career search. This final reflection marks an attempt at <i>reflection-in-action</i>, addressing this challenge as it unfolds in real time.
        </p>

        <p className ='mt-6'>
        During the first lesson of this reflection course, we were asked about our future plans career-wise. My answer then was not any different now &#8211; I am still grappling with many uncertainties regarding my future, especially in a primary major as broad and generalised as mine. Because of these uncertainties, I have often delayed taking proactive steps, such as seeking career advisory services, applying for jobs, or exploring fields where I could upskill. Unsure of where to start or what direction to take, I chose to avoid the problem altogether, allowing hesitation to keep me stagnant. Even in the few instances I did apply for jobs (largely due to peer pressure), I found myself doing so half-heartedly.
        </p>

        <p className = 'mt-6'>
        Something clearly had to change, and as I reflected, I realised that I needed to stop hesitating and simply take action. While the <a href = "./about" target = '_blank' rel = "noopener noreferrer" class = 'more-link'><i>About</i></a> page on this e-Portfolio website states that I created this platform to simulate my journey of reflection, this purpose was actually secondary. The primary motivation behind building this website was to learn and upskill myself &#8211; a deliberate attempt to confront my tendency to avoid challenges and problems head on. It was my first time creating a website, and it was a genuinely enjoyable experience, despite knowing how unnecessary it was for the purposes of this e-Portfolio assignment. I even went beyond what was necessary for the purposes of the assignment and tested the website on mobile aspect ratios to ensure it translates well. Although I am still unsure whether I will pursue web development as a career, I now recognise this skill as a potential avenue worth exploring &#8211; an opportunity I would have never considered had I not taken the initiative to try. Beyond creating this website, carrying the momentum and motivation from upskilling myself, I finally found the impetus to tap into available resources, such as the career advisory service offered to students.
        </p>

            {/* Figure 4 */}
            <div className="text-center mt-6">
        <div
          style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
          onClick={() => openModal('/assets/USR/Conclusion_Fig4.png')}
        >
          <Image
            src="/assets/USR/Conclusion_Fig4.png"
            style={{ objectFit: 'scale-down' }}
            priority
            alt="Excerpt from Mark Freeman's article"
            width={500}
            height={500}
          />
        </div>
        <em>Figure 4. Email from the career advisory team regarding the job search conference I signed up for, providing an introduction to job searching strategies. This email dates 11th November 2024.</em>
        </div>

        <p className = 'mt-6'>
        Although I still do not think that I am fully ready to start confidently applying for job positions, reflecting on this experience highlights my key takeaway: the importance in building momentum. By simply starting and confronting my dissatisfaction head on, whether it is learning a new coding language, or signing up for career advisory services, I started building the confidence and momentum that reduced the overwhelming cloud of uncertainty. Instead of just hoping that clarity will fall into my lap one day, I am learning to create it through proactivity. In doing so, I hope to be further empowered by this reflection-in-action, and take further meaningful steps forward in time as I transition into my future career.
        </p>


      {/* Modal */}
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
          <div className="flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Selected Image"
              priority
              style={{ objectFit: 'scale-down' }}
              width={800}
              height={800}
              className="rounded-xl"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Conclusion;
