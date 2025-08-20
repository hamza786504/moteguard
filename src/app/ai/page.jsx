import ContactForm from '@/components/ContactForm';
import Partners from '@/components/Partners';
import TextOverColor from '@/components/TextOverColor';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';

const insights = [
    {
        title: "Article",
        description:
            "Leidos reports strong Q2, raises full-year guidance",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
    },
    {
        title: "News",
        description:
            "Leidos posts strong second quarter fiscal year 2025 results",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
    },
    {
        title: "News",
        description:
            "Leidos Australia to provide managed ICT services to Geoscience Australia",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
    },
    {
        title: "White Paper",
        description:
            "Maximising the benefit of Information Sharing across AUKUS",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
    }
];


function Capabilities() {

    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Trusted Mission AI
                        </h2>
                    </div>
                </div>
            </section>


            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-2xl" data-wow-delay="0s">
                <iframe className='animate__animated animate__fadeInRight wow' data-wow-delay="0.6s" style={{ width: "100%", aspectRatio: "16/9" }} src="https://www.youtube.com/embed/XaUBZ8EAmLU" title="Leidos - Transforming the Airport Security Experience" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
                    Trusted Mission AI is our new approach to integrating AI into our customers' mission-critical applications based on more than two decades of experience. Watch the video above to hear Leidos Chief AI Officer Ron Keesing explain Trusted Mission AI.
                </p>
                <h2 className="animate__animated animate__fadeInLeft wow text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start" data-wow-delay="0.4s">
                    Discover how Trusted Mission AI enables diverse missions
                </h2>
            </section>

            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                            Leidos and the University of Edinburgh partner to drive AI and data science innovation
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Leidos announced a partnership with the University of Edinburgh in the United Kingdom to advance AI and data science solutions. The partnership will leverage the university&apos;s Bayes Centre, an innovation hub for data science and AI, to address critical challenges in areas such as environmental, civil, healthcare, and national security.
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border[#335f80] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>LEARN MORE</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/AI DRIVE.jpg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>



            <section className="py-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                    Framework for AI Resilience and Security
                </h2>
                <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                    Our Framework for AI Resilience and Security (FAIRS) addresses AI vulnerabilities and leans forward in compliance/regulations that are on the horizon by increasing trust in technologies and encouraging responsibility across our stakeholders.
                </p>
                <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                    <Link
                        href="#"
                        className="space-x-3 inline-flex items-center px-6 py-3 border-2 border[#335f80] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                    >
                        <span>LEARN MORE</span> <BsArrowRight size={22} />
                    </Link>
                </div>
            </section>


            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/fadral.webp"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>


                    <div className="py-20 px-5 md:py-20 md:px-12 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                            How Leidos drives productivity with Moveworks at federal scale with generative AI
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Leidos and Moveworks, a leading generative AI assistant platform, partner to transform IT support services and enhance the employee experience for government customers.
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border[#335f80] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>LEARN MORE ABOUT THIS COLLABORATION</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>


                </div>
            </section>




            <TextOverColor
                heading="AI-Driven Software Development for Critical Government Missions"
                paragraph="Leidos and Sourcegraph deliver AI-powered software development solutions for critical government missions, including support for customers operating in classified environments."
                btns={[{ href: "/", text: "READ THE CASE STUDY" }]}
            />

            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-xl" data-wow-delay="0s">
                <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
                    AI&apos;s role in strengthening Zero Trust architecture
                </h2>
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
                    Katea Murray, vice president and chief technology officer of mission solutions at Leidos, recently shared insights on how AI can enhance Zero Trust strategies without compromising security during a panel at the 2024 Billington Cybersecurity Summit.
                </p>
                <Link href={"/"} className='!z-10 text-white p-4 px-7 inline-block mt-10 bg-[#6c87a5] hover:bg-[#335f80] md:text-base text-sm wow animate__animated animate__fadeInUp font-bold rounded-full' data-wow-delay="0.4s">
                    READ THE ARTICLE
                </Link>
            </section>



            <TextOverColor
                heading="GenAI brings soldiers answers they need in critical moments"
                paragraph="With more than two decades of experience in AI, Leidos is now leveraging emerging GenAI technologies to turn established Army Doctrine documents into GenAI-powered tools."
                btns={[{ href: "/", text: "READ THE ARTICLE" }]}
            />



            <section className="overflow-x-hidden py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="bg-gradient-to-b from-green-100 via-[#e6e5e7] to-blue-50 p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                            Your most important work is ahead
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat excepturi dolorem ullam odio quaerat? Repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic ipsa autem, neque consectetur nam tempore officia ullam laudantium odio doloremque, dicta omnis? Nihil excepturi eius fuga quam explicabo odit maxime!
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border[#335f80] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>Learn About Power Delivery</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.8s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/ai-work.jpg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>



            <section className="py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl capitalize mb-8">Related Insights</h2>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {insights.slice(0, 4).map((insight, index) => (
                            <div
                                key={index}
                                className={`wow animate__animated animate__fadeInUp bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col`}
                                data-wow-delay={index * 0.4 + "s"}
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={insight.image}
                                        alt={insight.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-5 flex items-start flex-col flex-grow">
                                    <h3 className="text-xl font-semibold mb-2 text-[#6c87a5]">
                                        {insight.title}
                                    </h3>
                                    <p className="text-gray-700 text-base flex-grow">
                                        {insight.description}
                                    </p>
                                    <Link
                                        href={insight.buttonLink}
                                        className="mt-4 !inline-block px-5 py-2 rounded-md text-base font-semibold text-white transition hover:bg-[#335f80] bg-[#6c87a5]"
                                    >
                                        {insight.buttonText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="1.3s">
                        <Link href={"/insights"} className="inline-flex !mx-auto cursor-pointer capitalize bg-[#6c87a5] p-3 mt-8 text-sm md:text-base font-bold text-white rounded-lg px-5 border-none hover:bg-[#335f80] hover:text-white items-center justify-center space-x-3">
                            <span className='text-nowrap'>View More Insights</span> <FiArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <Partners />

            {/* Contact */}
            <ContactForm />
        </>
    )
}

export default Capabilities
