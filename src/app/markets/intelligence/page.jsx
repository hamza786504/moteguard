"use client";
import ContactForm from '@/components/ContactForm';
import Partners from '@/components/Partners';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';

const filters = [
    {
        name: "Health & Civil",
        heading: "Health & Civil Solutions",
        paragraph:
            "We provide innovative healthcare and civil solutions, enhancing public well-being through technology and expert support.",
        gradient: "from-[#3b414d] to-[#335f80]",
    },
    {
        name: "National Security",
        heading: "National Security Solutions",
        paragraph:
            "Empowering national defense with cutting-edge intelligence, surveillance, and reconnaissance systems.",
        gradient: "from-[#335f80] to-[#6c87a5]",
    },
    {
        name: "Commercial & International",
        heading: "Commercial & International Programs",
        paragraph:
            "Delivering commercial space, telecom, and defense innovations globally with high-impact collaborations.",
        gradient: "from-[#6c87a5] to-emerald-500",
    },
    {
        name: "Digital Modernization",
        heading: "Digital Modernization",
        paragraph:
            "Transforming legacy systems into smart digital ecosystems with AI, cloud, and cybersecurity.",
        gradient: "from-emerald-500 to-sky-600",
    },
    {
        name: "Defense Systems",
        heading: "Defense Systems",
        paragraph:
            "The Defense Systems Sector develops and produces advanced space, aerial, surface, and sub-surface manned and un-manned defense systems.",
        gradient: "from-sky-600 to-violet-800",
    },
];

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


function Intelligence() {
    const [active, setActive] = useState("Health & Civil");
    const selected = filters.find((f) => f.name === active);

    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='mb-5 text-white'>Home / Markets</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Intelligence
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            Rapidly transforming vast and varied data into actionable intelligence
                        </p>
                    </div>
                </div>
            </section>


            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-2xl" data-wow-delay="0s">

                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
                   Our intelligence capabilities provide seamless transition from strategic to tactical levels, integrating novel methods into current operations and leveraging big data architectures and analytics that allow users to provide critical decision support at revolutionary speed.
                </p>
                <br />
                 <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.4s">
                   With expertise in cloud-enabled automation and augmentation and a team adept at harnessing machine learning, we&apos;re applying powerful analytic tools for superior performance and protection despite a staggering breadth of data.
                </p>
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.6s">
                   We&apos;re helping global agencies and organizations prepare for success in an increasingly complex and dynamic world with modern, scalable solutions that rapidly integrate algorithms and leverage strategic, long-term forecasting using open-source indicators and data-mining to identify potential future instability. Our tiered, tailored approaches and solutions alert, enable, and forecast with actionable intelligence provided at real-world operations tempos.
                </p>
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.8s">
                   We&apos;re focused on ensuring our intelligence customers have the right tools, technologies, and tactics to keep pace with an ever-evolving threat landscape and succeed in their mission to protect people and critical assets around the world.
                </p>
                
            </section>


            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                            How AI is Enhancing Satellite Imagery Analysis
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
                                src="/images/power-delivery.jpg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

              <div
                className={`min-h-screen md:max-h-[500px] transition-all duration-700 bg-gradient-to-b ${selected.gradient} text-white flex items-center`}
            >
                <div className="max-w-6xl mx-auto px-4">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 justify-start md:justify-center mb-16 md:mb-32">
                        {filters.map((filter) => (
                            <button
                                key={filter.name}
                                onClick={() => setActive(filter.name)}
                                className={`text-base md:text-lg font-medium transition duration-300 relative group`}
                            >
                                <span
                                    className={`${active === filter.name ? "underline" : "no-underline"
                                        }`}
                                >
                                    {filter.name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold animate-slideInLeft">
                                {selected.heading}
                            </h2>
                            <p className="text-lg leading-relaxed animate-slideInLeft delay-100">
                                {selected.paragraph}
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold animate-fadeInUp hover:scale-105 transition-transform">
                                Learn More <FiArrowRight size={20} />
                            </button>
                        </div>
                        <div className="flex justify-center md:justify-end animate-slideInRight">
                            <Image
                                src="/images/section-bg.jpg"
                                alt="section-img"
                                width={600}
                                height={600}
                                className="object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>


 <section className="relative py-16 md:py-32 bg-gradient-to-r from-[#6c87a5] to-[#a8a7a9] overflow-hidden">
                {/* Top-right background image */}
                <div
                    className="absolute top-0 right-0 bg-no-repeat bg-left bg-cover h-96 w-[600px] z-0"
                    style={{ backgroundImage: "url(/images/polygon-10percent.svg)" }}
                ></div>


                {/* Main Content */}
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="wow animate__animated animate__fadeInUp text-white text-2xl mb-10 leading-normal md:text-5xl">
                        Intelligence Development Operations Lab
                    </h2>
                    <p className='!z-10 my-3 text-white font-normal md:text-lg text-base wow animate__animated animate__fadeInUp italic' data-wow-delay="0.6s">
                        Our DevOps Lab is an advanced, unclassified, state-of-the-art center dedicated to software and hardware development and engineering. The Lab was purpose built to serve the missions of our Intelligence Community customers and industry partners and provides full stack, embedded and mobile development, automated and penetration testing, on-prem and cloud deployments, reverse engineering, vulnerability analysis, and cutting-edge cyber research.
                    </p>
                    <Link href={"/"} className="animate__animated animate__fadeInLeft wow rounded-3xl mt-5 bg-[#6c87a5] p-3 px-6 hover:bg-[#335f80] inline-flex items-center justify-center space-x-3 text-white" data-wow-delay="0.6s"><span>LEARN MORE ABOUT LAB</span> <BsArrowRight size={18} /></Link>
                </div>
            </section>


            <section
                className="relative bg-center my-0 py-32 px-2 bg-cover"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/section-bg.jpg')"
                }}
            >
                {/* <div className='absolute inset-0 bg-black/20 h-full w-full'></div> */}
                <div className="p-10 max-w-4xl rounded-xl text-start mx-auto px-4 md:px-5">
                    <h3 className="text-start animate__animated animate__fadeInUp wow text-white text-3xl md:text-5xl leading-tight" data-wow-delay="0s">
                        GEOAxIS secures intelligence & efficiency for the NGA
                    </h3>
                    <p className="text-base md:text-lg my-5 text-white text-start">
                        Providing end-to-end engineering, design, development, and sustainment support.
                    </p>
                    <div className="flex items-center justify-start space-x-1 sm:space-x-3 mt-7">
                        <button
                            className="px-3 md:px-6 py-2 border-2 border-[#335f80] font-medium rounded-md text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap text-sm md:text-base animate__animated animate__fadeInUp wow flex items-center justify-center space-x-2" data-wow-delay="0.6s"
                        >
                            <span>NGA partners with Leidos to manage the GEOAxIS program</span> <BsArrowRight size={22} />
                        </button>
                    </div>
                </div>
            </section>


             <section className="relative py-16 md:py-32 bg-gradient-to-r from-[#6c87a5] to-[#a8a7a9] overflow-hidden">
                {/* Top-right background image */}
                <div
                    className="absolute top-0 right-0 bg-no-repeat bg-left bg-cover h-96 w-[600px] z-0"
                    style={{ backgroundImage: "url(/images/polygon-10percent.svg)" }}
                ></div>


                {/* Main Content */}
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h2 className="wow animate__animated animate__fadeInUp text-white text-2xl mb-10 leading-normal md:text-5xl">
                        Countering future threats with advanced solutions
                    </h2>
                    <p className='!z-10 my-3 text-white font-normal md:text-lg text-base wow animate__animated animate__fadeInUp italic' data-wow-delay="0.6s">
                        Adversaries are using cyberattacks to target critical infrastructure and other integral systems. To counter these contemporary threats, the IC is implementing and leveraging solutions including advanced cybersecurity, artificial intelligence, machine learning, Zero Trust architecture, and cutting-edge Intelligence, Surveillance, and Reconnaissance tactics.
                    </p>
                    <Link href={"/"} className="animate__animated animate__fadeInLeft wow rounded-3xl mt-10 bg-[#6c87a5] p-3 px-6 hover:bg-[#335f80] inline-flex items-center justify-center space-x-3 text-white" data-wow-delay="0.6s"><span>READ THE SERIES</span> <BsArrowRight size={18} /></Link>
                </div>
            </section>  

            <Partners />

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
                            <span className='text-nowrap'>Discover More Related Content</span> <FiArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>



            {/* Contact */}
            <ContactForm />
        </>
    )
}

export default Intelligence
