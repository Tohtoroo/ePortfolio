'use client'

import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const Inequality = () => {

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
        <div className="p-6 max-w-4xl mx-auto mb-20 text-gray-700 flex flex-col pt-40">
            {/* Introduction */}
            <h2 className='font-bold mb-6'><span className="font-bold text-[#5651e5]">Revisiting</span> My Essay on Social Equality: <span className="font-bold text-[#5651e5]">Reflecting</span> on My Experiences with Inequality</h2>
            <p>
                Back in Year 1 Semester 2, I wrote a reflective report for the final assignment in the course <a href="https://nusmods.com/courses/NHS2051/democracy-and-inequality" target='_blank' rel="noopener noreferrer" class='more-link'>USE2325: Democracy and Inequality</a> taught by Dr Joel Chow. This assignment was an opportunity to write about my own personal experiences with social equality through an introspective lens.
            </p>

            {/* Figure 1 */}
            <div className="text-center mt-6">
                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }} onClick={() => openModal("/assets/USR/Inequality_Fig1.png")}>
                    <Image
                        src="/assets/USR/Inequality_Fig1.png"
                        style={{ objectFit: "scale-down" }}
                        priority
                        alt="Assignment Details"
                        width={500}
                        height={500}
                    />
                </div>
                <em>Figure 1. Assignment details for the reflective report in USE2325, back in Year 1 Semester 2.</em>
            </div>

            <p className="mt-6">
                As seen from the above assignment details, the reflective report required us to draw from personal experiences, such as “growing up in Singapore” and our “conversations with others”, in order to answer the central question:
            </p>

            {/* Central Question */}
            <blockquote className="mt-6 border-l-4 border-gray-400 pl-4">
                “Should ordinary Singaporeans be concerned with social equality?”
            </blockquote>

            <p className="mt-6">
                While the topic itself was thought-provoking and filled with room for deep introspection, the paper I wrote left me with a lingering sense of <i>dissatisfaction</i>.
            </p>

            {/* Figure 2 */}
            <div className="text-center mt-6">
                <div className=" m-auto md:grid grid-cols-3">
                    <div className="col-span-1" style={styleImage} onClick={() => openModal("/assets/USR/Inequality_Fig2a.jpg")}>
                        <Image
                            src="/assets/USR/Inequality_Fig2a.jpg"
                            style={{ objectFit: "scale-down" }}
                            priority
                            alt="/"
                            width="300"
                            height="300"
                        />
                    </div>

                    <div className="col-span-1" style={styleImage} onClick={() => openModal("/assets/USR/Inequality_Fig2b.jpg")}>
                        <Image
                            src="/assets/USR/Inequality_Fig2b.jpg"
                            style={{ objectFit: "scale-down" }}
                            priority
                            alt="/"
                            width="300"
                            height="300"
                        />
                    </div>

                    <div className="col-span-1" style={styleImage} onClick={() => openModal("/assets/USR/Inequality_Fig2c.jpg")}>
                        <Image
                            src="/assets/USR/Inequality_Fig2c.jpg"
                            style={{ objectFit: "scale-down" }}
                            priority
                            alt="/"
                            width="300"
                            height="300"
                        />
                    </div>
                </div>
                <em>Figure 2. My texts to a friend on Telegram expressing my desire to rewrite the essay, dated 29th May 2022.</em>
            </div>

            <p className="mt-6">
                My overall feelings were clear:
            </p>
            <blockquote className="mt-6 border-l-4 border-gray-400 pl-4">
                “I'm just seeing the ways I could've wr[itten] so much better.”
            </blockquote>

            <p className="mt-6">
                The “<b>so</b>” emphasising the frustration I felt. It felt as though there were just more experiences I could have added and expounded upon, but could not due to time constraints back then. Despite my texts about my desire to rewrite the essay, I never did, as other commitments pushed this goal to the back-burner. For reference, below is the original reflective report:
            </p>

            {/* Figure 3 */}
            <div className="text-center mt-6">
                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                    <iframe
                        src="/assets/USR/Inequality_Fig3.pdf"
                        width="60%"
                        height="600px"
                        title="PDF Viewer"
                    />
                </div>
                <em>Figure 3. My reflective report written back in Year 1 Semester 2 for Democracy and Inequality.</em>
            </div>

            <p className="mt-6">
                Reading it now, I particularly dislike my final conclusion:
            </p>

            {/* Figure 4 */}
            <div className="text-center mt-6">
                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }} onClick={() => openModal("/assets/USR/Inequality_Fig4.jpg")}>
                    <Image
                        src="/assets/USR/Inequality_Fig4.jpg"
                        style={{ objectFit: "scale-down" }}
                        priority
                        alt="Conclusion"
                        width={500}
                        height={500}
                    />
                </div>
                <em>Figure 4. The conclusion of the reflective report with annotations and highlights showing my current thoughts as a Year 4 student.</em>
            </div>

            <p className="mt-6">
                I must have projected my own negative feelings when addressing the central question; I took such a strong stand that ordinary Singaporeans should “of course” be concerned about social equality. However, I lacked a well-developed argument to justify <i>why</i> they should care, especially when ordinary citizens have limited authority to drive societal change. My stance, though passionate, in reference to the entire essay, felt ungrounded and weak in reasoning. While my own personal experiences in the essay remain true, revisiting it provides an avenue to incorporate new personal experiences and insights I've gained since then to better address the central question.
            </p>

            <p className="mt-6">
                To begin this process of revisiting and expanding my previous essay, I build on the idea presented by my past self in Figure 2 by segmenting my personal experiences more effectively. I will draw from a framework provided from <a href="https://nusmods.com/courses/CLC1101/engaging-and-building-communities" target='_blank' rel="noopener noreferrer" class='more-link'>CLC1101: Engaging and Building Communities</a>, a course I took in Year 3 Semester 2.
            </p>

            {/* Figure 5 */}
            <div className="text-center mt-6">
                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }} onClick={() => openModal("/assets/USR/Inequality_Fig5.jpg")}>
                    <Image
                        src="/assets/USR/Inequality_Fig5.jpg"
                        style={{ objectFit: "scale-down" }}
                        priority
                        alt="Conclusion"
                        width={500}
                        height={500}
                    />
                </div>
                <em>Figure 5. Slides from CLC1101 depicting an overview of the Community Capital Framework, a community development framework that looks at a community's available resources as capitals.</em>
            </div>

            <p className="mt-6">
                Although the framework itself was meant to analyse community level resources to assist in community development, I found that two capitals within this framework resonated with my own experiences with inequality on an individual level that provided insights that were lacking or not present in the original essay, specifically I am talking about the Financial Capital and the Social Capital.
            </p>

            <p className="mt-6">
                Starting with the more tangible of the two, financial capital refers generally to one's access to funds and wealth. It is very clear-cut how having differences in financial constraints would lead to differences in opportunities available, such as the ability to afford private tuition classes, extracurricular programmes, or even ease of transportation. These differences in opportunities create gaps, which eventually widen, as the advantages available to others often lead to new opportunities that remain inaccessible to those that are less affluent, thus creating a snowball effect. Rather than reiterate and belabour the points already discussed in my original essay talking about my childhood experience of witnessing peers who had the financial capabilities to access those enrichment classes, I will instead provide a personal anecdote that, upon reflection, highlights an impact of inequality stemming from differences in financial capital &#8211; one that is absent in my original essay.
            </p>

            <p className="mt-6">
                Though less affluent, I am by no means impoverished. By receiving the NUS financial aid over the past four years (which I am deeply appreciative for), my family and I were able to scrounge up enough resources for my overseas Student Exchange Programme (SEP) to a university in America for my Year 3 Semester 1 in NUS. It was my first time ever flying out of Asia (due to never vacationing as finances were tight), and suffice it to say, it was a magical experience to have seen a part of the wider world as a usually locally confined individual. However, such an experience came at a price, literally. Due to the huge financial burden of going on an SEP, I felt an impetus to rush my education &#8211; I was originally planning to graduate 1 semester early, the exact semester I am in writing this post.
            </p>

            {/* Figure 6 */}
            <div className="text-center mt-6">
                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }} onClick={() => openModal("/assets/USR/Inequality_Fig6.jpg")}>
                    <Image
                        src="/assets/USR/Inequality_Fig6.jpg"
                        style={{ objectFit: "scale-down" }}
                        priority
                        alt="Conclusion"
                        width={300}
                        height={500}
                    />
                </div>
                <em>Figure 6. Texts to my friend on Telegram talking about how I was planning to graduate one semester ahead, dating 22nd July 2024.</em>
            </div>

            <p className="mt-6">
                The reasons were generally financial and not out of self-want, exacerbated by the financial black hole left by the SEP, as well as the lessening of financial aid given by NUS due to my brother beginning work as seen in Figure 6. The only reason why I changed my decision was due to the fortuitous scholarship which I received back in 2nd August 2024.
            </p>

            <p className="mt-6">
                Upon reflection on my experience with the consequences of going on a SEP, I have come to realise that for those who are less affluent, opportunities are not necessarily absent &#8211; they often exist, especially in a meritocratic nation like Singapore. However, the disparity lies in the <i>sacrifices</i> required to pursue those opportunities. Furthermore, since the pursued opportunities are often framed as personal wants rather than necessities, the sacrifices required are seen as a natural cost of indulgence rather than a symptom of broader social inequality. Personally, I had never thought about the broader implications of requiring some sort of sacrifice due to going on SEP, it only felt natural that I needed to repay for my indulgence in taking that opportunity. I am already considered privileged, given the number of fortunate encounters I have had just in this anecdote, such as the NUS's generous financial aid or the scholarship. However, the sacrifices made by those with fewer resources may often go unnoticed or are dismissed as personal choices, masking the wider societal issue of inequality.
            </p>

            <p className="mt-6">
                Beyond the new insight gained from analysing my recent anecdote about financial constraints, another relatable but less visible (and less deftly explicated in the original essay) dimension of inequality lies in disparities in social capital &#8211; the networks, relationships, and connections that can significantly influence access to opportunities. Upon revisiting my original essay, I now realise that the challenges I highlighted with my parents' lack of formal education is due to its impact on my social capital.
            </p>

            {/* Figure 7 */}
            <div className="text-center mt-6">
                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }} onClick={() => openModal("/assets/USR/Inequality_Fig7.jpg")}>
                    <Image
                        src="/assets/USR/Inequality_Fig7.jpg"
                        style={{ objectFit: "scale-down" }}
                        priority
                        alt="Conclusion"
                        width={500}
                        height={500}
                    />
                </div>
                <em>Figure 7. Excerpts from the original essay in Figure 3. Highlights have been made for the purpose of this reflection, and pinpoints where I find the concept of social capital to be particularly evident.</em>
            </div>

            <p className="mt-6">
                In my original essay, I made a weak connection between the lack of parental “guidance” throughout my educational journey due to their inability to speak English and the broader concept of meritocracy. However, I now recognise that this issue is more accurately rooted in disparities in social capital. To build on what my original essay lacks, the lack of English proficiency in an English-centric society made my parents less capable to function as an interpersonal relationship that can significantly influence access to opportunities.
            </p>

            <p className="mt-6">
                To give a personal anecdote, at one point in my university journey, I was shocked to hear of a friend who was able to ask their mother to proofread their essay. The situation felt… foreign, as it was never a possibility in my reality. Beyond just the obvious direct assistance in proofreading the essay and providing suggestions, I felt a twinge of envy, as it meant that their mother could understand what they do in their major at least to some degree. Upon reflection, I realised that throughout the past 3 years, I had never been able to have a conversation with my parents over my own university journey where it felt like they truly understood my plights, as they themselves have not experienced formal education to this level.
            </p>

            <p className="mt-6">
                Although my original essay did provide instances where connections gave very clear tangible advantages (like the case of a friend who got an internship due to familial relations), I missed the more <i>intangible</i> and subtle dimension of having interpersonal relationships who are capable of offering better emotional support. Personally, I did not have the kind of parental connection that could understand or engage with my academic journey, and that meant that they could not provide the emotional reassurance or validation that comes from shared understanding. Of course, it is not my parents' fault that they cannot relate to my own experiences in university as it was a matter of circumstance, but this situation illuminates how disparities in social capital perpetuate inequalities in more subtle ways than solely just tangible benefits.
            </p>

            <p className="mt-6">
                At this point in the post, you may find yourself asking: what is the purpose of reflecting and gaining these insights? How do they contribute to the central question: “should ordinary Singaporeans be concerned with social equality?” These insights may provide a glimpse into the subtler effects of inequality, but what can ordinary citizens, who have limited ability to drive change, truly achieve by caring?
            </p>

            <p className="mt-6">
                In my current point of view, the answer to the central question is still a firm yes. Even if ordinary Singaporeans have limited ability to drive systemic change, I would still say that it is important to be aware and concerned over the issues of inequality. From a conversation I had with friends, where we debated over Singapore's meritocratic system, we inadvertently touched on this very question.
            </p>

            {/* Figure 8 */}
            <div className="text-center mt-6">
                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }} onClick={() => openModal("/assets/USR/Inequality_Fig8.jpg")}>
                    <Image
                        src="/assets/USR/Inequality_Fig8.jpg"
                        style={{ objectFit: "scale-down" }}
                        priority
                        alt="Conclusion"
                        width={500}
                        height={500}
                    />
                </div>
                <em>Figure 8. An Instagram story posted by one of my friends after the debate over Singapore's meritocratic system, this Instagram story and the debate happened on 9th August 2024.</em>
            </div>

            <p className="mt-6">
                As can be seen in Figure 8, this friend that posted the Instagram story about the debate had uncertainty about “where [...] this goes next”, and questioned who to “focus on”. These sentiments encapsulate the collective consensus we reached: we do not have the technical knowledge or the skills to be able to drive societal change, as we are merely ordinary Singaporeans. However, our discussion did end up forwarding the view that our position as ordinary citizens can assist in fostering awareness on the subtler effects of inequality, voicing concerns, and sharing personal experiences, which can contribute to a larger collective dialogue. Although we may not be able to see immediate results or solutions within this lifetime, raising awareness can influence those who in future may emerge with solutions and be the changemakers in our society.
            </p>

            <p className="mt-6">
                Ultimately, concern for social equality in the eyes of ordinary people is not about driving change directly as an individual; it is about planting seeds for progress. Every conversation, every shared story, adds to the growing awareness of these disparities, and fosters group discussions that can enrich each individuals' experience while creating room for new insights. Without the debate illustrated in Figure 8 with my friends, I would have never gained the insights into the importance of awareness about inequality that I now have, showing the value in fostering meaningful and open collective dialogues, bridging diverse perspectives to reach a deeper understanding of the topic at hand.
            </p>

            <p className="mt-6">
                So, let this reflection over my personal experiences be my way of adding to the collective dialogue &#8211; an effort to share about the subtler effects of inequality that might otherwise remain unseen. By doing so, I hope that others can engage in similar conversations, share similar stories, and to reflect on their own experiences, to eventually be the foundation for a more equitable society in the future, no matter how long it may take.
            </p>
            {/* Modal */}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Image Lightbox"
                style={{
                    overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
                    content: {
                        top: "100px",
                        bottom: "40px",
                        left: "10%",
                        right: "10%",
                        padding: "20px",
                        borderRadius: "12px",
                        background: "#ecf0f3",
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
                            style={{ objectFit: "scale-down" }}
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

export default Inequality;
