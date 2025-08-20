"use client";
import Image from 'next/image';
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


function Capabilities() {
    const [active, setActive] = useState("Health & Civil");
    const selected = filters.find((f) => f.name === active);

    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Capabilities
                        </h2>
                    </div>
                </div>
            </section>


            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-2xl" data-wow-delay="0s">
                <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
                    The core capabilities are at the heart of our enterprise
                </h2>
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
                    As an innovation company rapidly addressing the world’s most vexing challenges, our technical core capabilities define the areas in which technical excellence is critical, not only for our business, but in the work we do daily. We create smarter technology solutions for customers in heavily regulated industries achieve the important missions on the frontlines of their industry.
                </p>
            </section>


            {/* Filterable Gallary */}
            <div className={`min-h-screen md:max-h-[500px] transition-all duration-700 bg-gradient-to-b ${selected.gradient} text-white flex items-center`}>
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


            <section
                className="relative bg-center my-0 py-32 px-2 bg-cover"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/section-bg.jpg')"
                }}
            >
                {/* <div className='absolute inset-0 bg-black/20 h-full w-full'></div> */}
                <div className="p-10 max-w-4xl rounded-xl text-start mx-auto px-4 md:px-5">
                    <h3 className="text-start animate__animated animate__fadeInUp wow text-white text-3xl md:text-5xl leading-tight" data-wow-delay="0s">
                       Technology Certifications
                    </h3>
                    <p className="text-base md:text-lg my-5 text-white text-start">
                        We partner with world-class technology providers to develop innovative solutions for our customer&apos;s toughest challenges. Through annual technology certification examinations, we demonstrate our commitment to maintaining deep expertise in the leading technologies relevant to the markets and customers we serve.
                    </p>
                    <div className="flex items-center justify-start space-x-1 sm:space-x-3 mt-7">
                        <button
                            className="px-3 md:px-6 py-2 border-2 border-[#335f80] font-medium rounded-md text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap text-sm md:text-lg animate__animated animate__fadeInUp wow flex items-center justify-center space-x-2" data-wow-delay="0.6s"
                        >
                            <span>DISCOVER MORE ABOUT OUR TECHNOLOGY CERTIFICATIONS</span> <BsArrowRight size={22} />
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Capabilities
