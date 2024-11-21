'use client'

import React, {useState} from 'react';
import Image from "next/image";
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

const Admission = () => {

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
      <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My USP Admission Interview: <span className="font-bold text-[#5651e5]">Reflecting</span> on a Deeper Understanding of the Philosophy of Mathematics</h2>

      <p>For my University Scholars Programme (USP) admission interview back in 2019, I answered the following question:</p>

      {/* Blockquote Section */}
      <blockquote className="mt-6 border-l-4 border-gray-400 pl-4">
        “Is Mathematics <b>invented</b> or <b>discovered</b>?”
      </blockquote>

      {/* Figure 1 */}
      <div className="text-center mt-6">
        <div style = {styleImage} onClick={() => openModal("/assets/USR/Admission_Fig1.jpg")}>
        <Image
        src = "/assets/USR/Admission_Fig1.jpg"
        style={{objectFit:"scale-down"}}
        priority
        alt = "/"
        width= "250"
        height= "250"
      />
      </div>
        <em>Figure 1. A text in WhatsApp (yes, it was that long ago) after the interview where I mentioned my answer, dating 26th January 2019.</em>
      </div>

      <p className="mt-6">
      As can seen above, I answered that Mathematics was “derived”, giving a broad statement claiming “how nature itself has [M]athematics” and supposes the “golden ratio” is evidence. For context, the golden ratio is an irrational number of this form:
      </p>

      {/* Figure 2 */}
      <div className="text-center mt-6">
      <div style={styleImage} onClick={() => openModal("/assets/USR/Admission_Fig2a.png")}>
  <Image
    src="/assets/USR/Admission_Fig2a.png"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="400"
  />
</div>
        <div style={styleImage} onClick={() => openModal("/assets/USR/Admission_Fig2b.jpg")}>
    <Image
    src="/assets/USR/Admission_Fig2b.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="400"
    height="250"
  />
</div>
        <em>Figure 2. The golden ratio in its algebraic and decimal form and the golden spiral which is defined using the golden ratio. The pictures were taken from Wikipedia, and Sketchplanations respectively.</em>
      </div>

      <p className="mt-6">
      The golden spiral which is defined using the golden ratio is often seen in the arrangement of petals in certain flowers, in seashells, or even in our very own human ears, where this pattern naturally emerges. I thought that such patterns were interlinked with the <i>essence</i> of Mathematics, whatever that essence may be; the fact that these natural patterns could be described with such an elegant closed formula must mean that “nature itself has Mathematics”. 
      </p>

      <p className="mt-6">
      Yet, as I reflect on my answer now, it feels lacking. While nature does exhibit patterns that can be described mathematically, does that truly mean that Mathematics itself is inherent in nature? Is Mathematics something we humans <i>discovered</i>? Clearly, my confidence in my answer back then was low, as seen by my avoidance of the word discovered. By claiming that Mathematics was “derived”, I was distancing it from the idea that it is an inherent aspect of reality. Instead, I downplayed it, implying that Mathematics is just an <i>extension</i> of something inherent in reality. The disgruntled manner I was texting in Figure 1 &#8211; “damn stupid”, “help my soul” and “I wanna die” &#8211; only serves to further highlight my own self-deprecating views towards the answer I gave. Deep down, I was unconvinced. Therefore, this reflection will revisit the question with the knowledge I've gained from my years of coursework, allowing me to unpack my previous response and offer a more informed and current opinion.
      </p>

      <p className="mt-6">
      To begin, I want to give a framework as to how I currently view Mathematics. One key influence on my understanding of Mathematics as a concept is curiously attributable to NST2005: Doors of Perception: Biology, Technology and Culture (Doors), despite the course on a surface level seeming far removed from Mathematics. In Doors, Professor Don Favareau discusses the inner workings of the way we humans perceive through the lenses of our biology, technology, culture, and their intersections. Each of these disciplines shape our perception in different ways, and are our doors to understanding the world. 
      </p>

      {/* Figure 3 */}
      <div className="text-center mt-6">
      <div style={styleImage} onClick={() => openModal("/assets/USR/Admission_Fig3.png")}>
  <Image
    src="/assets/USR/Admission_Fig3.png"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
</div>
        <em>Figure 3. The final slide Professor Don showed us for the course NST2005: Doors of Perception, a course that I took in year 3 semester 2.</em>
      </div>

      <p className="mt-6">
      However, Professor Don stressed on our final lesson together that the list of disciplines itself is non-exhaustive — new doors can be “open[ed]”, introducing more ways to inform us of our reality. The course made me wonder: could Mathematics be reframed as a <i>door</i>, offering a deeper understanding of the world around us? 
      </p>

      <p className="mt-6">
      Back then, my mind wandered to MA2116: Probability. Doors reminded me of how Professor Joseph Blitzstein noted during a lecture that probability “can be deeply counterintuitive”. Just as perception occurs automatically, and swiftly, so too does intuition. An example shown during the course of this counterintuitive nature that I personally got tricked by was the Monty Hall Problem.
      </p>

      {/* Monty Hall Problem Explanation */}
      <h3 className="font-bold text-xl mt-6 text-[#5651e5]">The Monty Hall Problem</h3>

      <p className="mt-6">
        The problem itself is simple: imagine a game show with three doors, 2 containing goats and 1 containing a car.
      </p>
      <ol className="list-decimal list-inside mt-6">
        <li>The contestant picks one door.</li>
        <li>Monty opens another door, revealing a goat.</li>
        <li>The contestant is given an opportunity to switch to the remaining unopened door.</li>
        <li>Should the contestant switch?</li>
      </ol>

      <p className="mt-6">
      My intuitive answer at the time was that it should not matter, since the probability would just be 50/50 for each door to contain the car. However, the probability would instead double if you were to switch. The evidence can be seen here:
      </p>

      {/* Figure 4 */}
      <div className="text-center mt-6">
      <div style={styleImage} onClick={() => openModal("/assets/USR/Admission_Fig4.png")}>
      <Image
    src="/assets/USR/Admission_Fig4.png"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
  </div>
        <em>Figure 4. A slide depicting the answer to the Monty Hall problem solved using the Tree Approach in MA2116: Probability which I took in year 1 semester 2.</em>
      </div>

      <p className="mt-6">
      To further illustrate why it is wrong to not switch, imagine if instead there were 100 doors, only 1 containing a car. The process remains the same, except Monty opens 98 of the doors all containing goats. Should you switch? Clearly, the contestant should switch doors.
      </p>

      <p className="mt-6">
      Without an understanding of probability, our inherent intuition fails to point us to the right decision to gain the most. In this sense, probability could be seen as a door to a better understanding of our reality. Looking at this problem now, I can see how my perception has shifted &#8211; <b>my current understanding of Mathematics allows me to choose in line with reality, something my previous perception of reality without the language of Mathematics was not able to achieve</b>.
      </p>

      <p className = "mt-6">
      Viewing Mathematics as a door through which we perceive reality leads me to reconsider the broader question: <i>is mathematics invented or discovered</i>?
      </p>

      {/* Figure 5 */}
      <div className="text-center mt-6">
      <div style={styleImage} onClick={() => openModal("/assets/USR/Admission_Fig5.jpg")}>
      <Image
    src="/assets/USR/Admission_Fig5.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
  </div>
        <em>Figure 5. An excerpt of a reading in I of the Vortex by Rodolfo Llinás, which was assigned to us during the Biology section in Doors. Highlighted in yellow are the sentences I deemed was important back then to answer the questions posed in Figure 6 below.</em>
      </div>

      {/* Figure 6 */}
      <div className="text-center mt-6">
      <div style={styleImage} onClick={() => openModal("/assets/USR/Admission_Fig6.jpg")}>
      <Image
    src="/assets/USR/Admission_Fig6.jpg"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
  </div>
        <em>Figure 6. My answers to the questions posed in Professor Don's reading guide for the reading in Figure 5 back when I was taking the course. Due to my poor handwriting, I will transcribe what I wrote for point 3 in particular: “Things that do not change across life like light”.</em>
      </div>

      <p className="mt-6">
      In Doors, I learnt about the concept of “universals” from the book <i>I of the Vortex</i> by Rodolfo Llinás. According to Llinás, “universals” are “properties arising from the external world that are invariant across all of life”. The doors we use to perceive the world are an attempt at translating the invariants of the external world into something useful for our survival.
      </p>

      {/* Figure 7 */}
      <div className="text-center mt-6">
      <div style={styleImage} onClick={() => openModal("/assets/USR/Admission_Fig7.png")}>
  <Image
    src="/assets/USR/Admission_Fig7.png"
    style={{objectFit:"scale-down"}}
    priority
    alt="/"
    width="500"
    height="500"
  />
</div>
        <em>Figure 7. Slides from Doors. Images on the left are the way we would see the flowers, while the flowers on the right are the way insects would see the flowers since they can see ultraviolet light.</em>
      </div>

      <p className="mt-6">
      In the example above, I learned that while a flower may appear monotone to us humans, an insect can perceive a variety of other colours due to its ability to see ultraviolet light. The lesson highlights how perspective and context shape perception, as different beings can perceive the same object in fundamentally different ways. However, there is something inherent in those objects we perceive &#8211; light. The wavelength of light rays bouncing off objects is universal, regardless of whether we are biologically able to perceive it, as seen in my answer in Figure 6.
      </p>

      <p className = "mt-6">
      Similarly, Mathematics reveal something inherent about reality that exists whether or not we are equipped to perceive them. Even if we are unaware of the concept of probability, the correct decision in the Monty Hall Problem still exists in an abstract form, independent of our understanding of Mathematics. Mathematics as a language system was <b>invented</b> to allow us to perceive those fundamental abstract truths hidden in reality beyond our perception at one point in history. 
      </p>

      <p className = "mt-6">
      Therein lies why I feel that my original answer is lacking. I personally lacked the understanding of what exactly is meant by saying Mathematics was “derived”. It is difficult to argue that Mathematics as a system was not an invention, yet the contention between invention and discovery lies in whether these <i>universals</i> we perceive using these mathematical inventions, are a part of Mathematics itself. It is not that the golden ratio was ascribed upon nature, and therefore “nature itself has Mathematics”; it is instead that nature has these fundamental universal properties, which can be described with the <b>invention</b> of the golden ratio. The acceptance of whether these fundamental universal properties are a part of Mathematics, is thus the crux of whether one believes Mathematics to be a discovery. 
      </p>

      <p className = "mt-6">
      Ironically, my answer back then was pretty accurate to my opinion currently, despite my lack of knowledge at that point in time. By saying Mathematics is “derived”, gives the sense of duality of both discovery and invention. The invention of the language system of Mathematics really is an extension of something inherent in reality. And if one were to believe that these inherent universals in reality is a part of Mathematics, then it is thus both an invention and a discovery.
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
          <div className="flex items-center justify-center" style ={styleImage}>
            <Image
              src={selectedImage}
              alt="Selected Image"
              style={{objectFit:"scale-down"}}
              priority
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

export default Admission;
