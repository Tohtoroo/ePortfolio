'use client'

import React, {useState} from 'react';
import Image from "next/image";
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

const Heartbreak = () => {

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
    <div className="p-6 max-w-4xl mx-auto text-gray-700 flex flex-col pt-40">
      {/* Introduction */}
      <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My Journey through Heartbreak: <span className="font-bold text-[#5651e5]">Reflecting</span> on My Reluctance to Exhibit Vulnerability</h2>
      <p>I'm often told that I'm a rational person.</p>

      {/* Images with Caption */}
      <div className="text-center mt-6">
        <div className = " m-auto md:grid grid-cols-3">
        <div className = "col-span-1" style={styleImage} onClick={() => openModal("/assets/USR/Rationality_Fig1a.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig1a.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>

<div className = "col-span-1" style={styleImage} onClick={() => openModal("/assets/USR/Rationality_Fig1b.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig1b.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
</div>

<div className = "col-span-1" style={styleImage} onClick={() => openModal("/assets/USR/Rationality_Fig1c.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig1c.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
        </div>
        <em>Figure 1. Personal texts from my friends on Telegram, describing me as rational throughout my time at university.</em>
      </div>

      {/* Body Text */}
      <p className="mt-6">
        I've always believed what my friends said to be true as well &#8211; I tend to rationalise situations and make logical decisions as they happen. As a maths major, I thought this was natural, since we are taught to think systematically and rationally.
      </p>

      <p className = "mt-6">
        According to Oxford Languages, rationality is 
      </p>
      {/* Quote Section */}
      <blockquote className="mt-6 border-l-4 border-gray-400 pl-4">
        “The quality of being based on or in accordance with <b>reason</b> or <b>logic</b>.”
      </blockquote>

      <p className = "mt-6">
      Mathematics epitomises this definition; every conclusion follows from established axioms and every theorem is built on a chain of logical reasoning, a truth built upon a foundation of accepted truths. I have been taught this line of logical reasoning from the very first course I had to take as part of my core curriculum &#8211; MA1100: Basic Discrete Mathematics.
      </p>

      <p className = "mt-6">
      In this class, I formally learnt what exactly is a mathematical proof, a foundation for all future maths courses.
      </p>

      {/* Additional Images and Captions */}
      <div className="text-center mt-6">
      <div style={styleImage} onClick={() => openModal("/assets/USR/Rationality_Fig2.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig2.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
</div>
        <em>Figure 2. Slides from MA1100: Basic Discrete Mathematics explaining mathematical proof-making back in Year 1 Semester 1.</em>
      </div>

      <p className="mt-6">
      We see how in step 3, we are expected to apply rules of deductions to get new logical statements until we reach a desired conclusion. Revisiting my previous assignments, I saw signs of logical deduction denoted by the ⇒ or the ∴ symbol, which means implies and therefore respectively.
      </p>

      {/* Additional Images and Captions */}
      <div className="text-center mt-6">
        <div className = "m-auto md:grid grid-cols-4">
        <div style={styleImage} className = 'col-span-1' onClick={() => openModal("/assets/USR/Rationality_Fig3a.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig3a.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
</div>

<div style={styleImage} className = 'col-span-1' onClick={() => openModal("/assets/USR/Rationality_Fig3b.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig3b.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
</div>


<div style={styleImage} className = 'col-span-1' onClick={() => openModal("/assets/USR/Rationality_Fig3c.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig3c.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
</div>

<div style={styleImage} className ='col-span-1' onClick={() => openModal("/assets/USR/Rationality_Fig3d.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig3d.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
</div>
</div>    
        <em>Figure 3. My own assignment answers from MA2104: Multivariable Calculus, MA2101: Linear Algebra II, MA2202: Algebra I and MA3211: Complex Analysis I respectively. Marked in red are the signs of logical deductions used in my answer.</em>
      </div>

      {/* Additional Images and Captions */}
      <div className="text-center mt-6">
      <div style={styleImage} onClick={() => openModal("/assets/USR/Rationality_Fig4.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig4.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
        <em>Figure 4. Module description on NUSMods of MA1100: Basic Discrete Mathematics, the module I took during my first semester of university. Marked in red is the portion which shows that I was taught the method to construct mathematical proofs based on logical reasoning.</em>
      </div>

      {/* Additional Images and Captions */}
      <div className="text-center mt-6">
      <div className = "m-auto md:grid grid-cols-4">
      <div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig5a.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig5a.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
<div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig5b.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig5b.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
<div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig5c.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig5c.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
<div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig5d.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig5d.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
</div>
        <em>Figure 5. Module descriptions on NUSMods of the modules whose assignments I showed in Figure 3. Marked in blue are the portions where we had to use logical deductions in order to construct the needed theorems for the course. The lack of red markings signify that we were never again taught the ways of logical reasoning in these modules.</em>
      </div>

      <p className = "mt-6">
      Upon reflection, I realised that I was <b>never</b> again taught the ways of logical thinking that were foregrounded in MA1100 as evidenced by the course descriptions in Figure 5 compared with Figure 4. Nowhere does the module descriptions in Figure 5 explicitly state the need for logical deduction, despite needing the foregrounded concepts to prove the theorems marked by the blue brackets. Referencing Figure 3, it can be seen that I was expected to apply such reasoning from hereon for <b>all</b> my coursework. There is an implicit expectation placed upon me by the curriculum to internalise that way of thinking introduced in our foundational course, and to <b>constantly</b> apply them for every future problem. By being a maths major, I was not just taught to think rationally, I was taught to think rationally as though it was <i>second nature</i>.
      </p>

      {/* Additional Images and Captions */}
      <div className="text-center mt-6">
        <div className = "md: grid grid-cols-2 m-auto ">


<div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig6a.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig6a.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="250"
  />
</div>

<div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig6b.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig6b.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="250"
  />
        </div>
        </div>
        <em>Figure 6. My own texts to my friends on Telegram describing myself as rational throughout my time at university. </em>
      </div>

      <p className = "mt-6">
      Stating that I “objectively” think that “I'm pretty rational”, and emphasising that “I'm very rational [please]” like I did in Figure 6 felt justified. Dwelling on the texts now, I find that they read as though I was asserting &#8211; to myself and to others &#8211; that I was a rational thinker. The “do” in “I <b>do</b> think” only serves to highlight my need to underscore my own rationality towards others. Perhaps, I may have also internalised the implicit expectations placed upon me by the curriculum to think rationally, explaining the need for me to emphasise my own rationality outwardly. What started as an external expectation from my major gradually became a self-imposed one. When combined with my friends' messages from Figure 1 where they describe me as rational, it creates this echo chamber that gradually ties my sense of identity outside of academia to being a rational thinker. The more I expressed and embodied this rational persona beyond academics, the more I felt the need to live up to it. 
      </p>

      <p className = "mt-6">
      This self-imposed expectation became particularly evident in year two when I experienced my first heartbreak, revealing my need to appear rational during emotionally challenging moments.
      </p>

      {/* Additional Images and Captions */}
      <div className="text-center mt-6">

      <div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig7.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig7.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="300"
    height="250"
  />
        </div>

        <em>Figure 7. A text to my friend right after my ex and I broke up, dating 30th January 2023. </em>
      </div>

      <p className = "mt-6">
      The above texts happened a couple of hours after the relationship ended. The way I answered my friend when she asked “what's the plan from here” surmised my thought at the time:
      </p>

      {/* Text and Image Example */}
      <blockquote className="mt-6 border-l-4 border-gray-400 pl-4">
        “Life goes on I guess”.
      </blockquote>

      <p className = "mt-6">
        What may have seemed like a cursory reply reflected how I was rationalising the breakup &#8211; treating it as just an event, something to move past without dwelling on it. The rational side of me knew that I shouldn't spend time moping since I had many other commitments, and that was how I presented myself to others at the time.
      </p>

      <p className = "mt-6">
        2 weeks later, I was talking to the same friend in Figure 7.
      </p>

      <div className="text-center mt-6">
      <div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig8.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig8.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="600"
    height="600"
  />
        </div>
        <em>Figure 8. Texts between my friend and I detailing the aftermath of the breakup 2 weeks after it occurred on 18th February 2023. On the right are annotations done in the present day, mapping out my thought process at the time of sending those text messages. P1-4) are the predicates given the information I knew at that time in the past. P2) in particular was not evidenced by the texts, but was a context that I felt was necessary to include.</em>
      </div>

      <p className = "mt-6">
      As seen above, she asked if I still had any hope of getting back together with my ex-partner. I knew, logically, that I shouldn't be holding onto any hope, and with that thought in mind, I replied: 
      </p>

      <blockquote className="mt-6 border-l-4 border-gray-400 pl-4">
        “[I] don’t hold out hope for [getting back together] at all liao”.
      </blockquote>

      <p className = "mt-6">
      Liao is a Singlish term which can be understood as the word already. From the mapping of my thought process in Figure 6, it can be seen my thoughts were &#8211; at least on a logical front &#8211; of the opinion that I should no longer hold out any hope for my ex-partner and I to amend our relationship. The statement seems to assert that I had already moved on; now that my then partner had given the needed closure, I shouldn't and therefore, don't long for him any longer. His sudden message holds no significance in light of the closure.
      </p>

      <p className="mt-6">
      Despite the strong front I embody outwardly, in the background, these were the messages I was sending to myself.
      </p>

      <div className="text-center mt-6">
        <div className = "grid-cols-4 md: grid m-auto">
          <div style = {styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig9a.jpg")}>
        <Image
    src="/assets/USR/Rationality_Fig9a.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
<div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig9b.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig9b.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
<div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig9c.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig9c.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
<div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig9d.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig9d.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
  </div>
        </div>
        <em>Figure 9. Messages sent to myself when I was crying over the breakup, the latest dating 27th February 2023.</em>
      </div>

      <p className = "mt-6">
      Looking at the latest date, 27th February 2023, about 1.5 weeks after the texts from Figure 8, is a video I sent to myself, breaking down, less than a month after the breakup. None of these videos or signs of vulnerability were ever shown to others as a way to maintain my self-imposed expectation to outwardly appear rational. In the second picture, there was even a sense of urgency in my tone speaking to myself:
      </p>

      <blockquote className="mt-6 border-l-4 border-gray-400 pl-4">
        “I need to stop breaking down”.
      </blockquote>

      <p className = "mt-6">
      The word “need” unveiling the sheer weight I put on stopping what I thought was irrational behaviour. These private moments of irrational vulnerability stood diametrically opposite to the image I felt the need to uphold. I felt that clinging onto rationality was my one way to cope, to at least meet the self-imposed and externally reinforced expectations placed upon myself, despite the failure of my relationship. In my mind, by failing to appear rational, it felt like I was failing my own sense of identity.
      </p>

      {/* Additional Images and Captions */}
      <div className="text-center mt-6">

      <div style={styleImage} className = "col-span-1" onClick={() => openModal("/assets/USR/Rationality_Fig10.jpg")}>
  <Image
    src="/assets/USR/Rationality_Fig10.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
        </div>
        <em>Figure 10. A message sent to myself, dating 1st March 2023.</em>
      </div>

      {/* Conclusion */}
      <p className="mt-6">
      A “fight” was how I described my inner turmoil at that point in time between my “logical side” and my “feelings side”. Perhaps, it may have been more accurate to say that I was fighting between what I expect of myself &#8211; rational, composed, and logical &#8211; versus who I really am: someone illogical, and flawed in so many ways. As I write this post, I am struggling to find a fitting end; it has been a difficult post to write, unravelling parts of myself that I've kept hidden for so long. It feels uncomfortable, and even a bit unsettling, to lay bare the messy parts of my thoughts during such emotionally tiresome periods, especially as someone who expects of myself to appear outwardly grounded in rationality. However, it also feels oddly cathartic to have reflected on what I have kept in Pandora's box. Maybe this post is the first step I am taking towards finding a better balance between my outward expectations of myself, and my inner emotions. And hopefully in doing so, I can better manage in showing my vulnerabilities in front of others without feeling as though I am losing my sense of self in the future.
      </p>

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
          <div className="flex items-center justify-center" style = {styleImage} >
            <Image
              src={selectedImage}
              alt="Selected Image"
              priority
              style={{objectFit:"scale-down"}}
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

export default Heartbreak;
