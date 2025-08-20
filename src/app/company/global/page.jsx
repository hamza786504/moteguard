
"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
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


function Global() {
    const [active, setActive] = useState("Defense Systems");
    const selected = filters.find((f) => f.name === active);
    return (
        <>
             <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Company</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Global
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            With more than 400 locations in 30 countries, we continue to strengthen our international relationships.
                        </p>
                    </div>
                </div>
            </section>



            <div
                className={`my-32 overflow-x-hidden min-h-screen md:max-h-[500px] transition-all duration-700 bg-gradient-to-b ${selected.gradient} text-white flex items-center`}
            >
                <div className="max-w-6xl mx-auto px-4">
                    {/* Filters */}
                    <div className="overflow-x-hidden flex flex-wrap gap-3 justify-start md:justify-center mb-16 md:mb-32">
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
                    <div className="overflow-x-hidden grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div className="overflow-x-hidden space-y-6">
                            <h2 className="text-4xl font-bold animate__animated animate__fadeInLeft wow">
                                {selected.heading}
                            </h2>
                            <p className="text-lg leading-relaxed animate__animated animate__fadeInLeft wow delay-100">
                                {selected.paragraph}
                            </p>
                            <button className="animate__animated animate__fadeInLeft wow bg-white text-black px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold">
                                Learn More <FiArrowRight size={20} />
                            </button>
                        </div>
                        <div className="overflow-x-hidden flex justify-center md:justify-end animate-slideInRight">
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


            <section>
                <div className='max-w-6xl mx-auto rounded-xl mt-5 py-3 md:p-10 pb-0'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Partner with Leidos Card */}
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="p-4 md:p-8">
                                <h2 className="wow animate__animated animate__fadeInLeft wow text-4xl font-extralight text-black mb-4">
                                    Capabilities
                                </h2>
                                <span className="wow animate__animated animate__fadeInLeft wow inline-block h-2 w-18 bg-[#6c87a5] content-none"></span>
                                <p className="wow animate__animated animate__fadeInLeft wow text-lg text-gray-600 my-10" data-wow-delay="0.3s">
                                    Our technical core capabilities underpin the work we do for our customers every day.
                                </p>
                                <Link href={"/insights"} className="wow animate__animated animate__fadeInLeft wow inline-flex !mx-auto cursor-pointer capitalize bg-[#6c87a5] p-3 mt-0 text-sm md:text-base font-bold text-white rounded-lg px-5 border-none mb-10 hover:bg-[#335f80] hover:text-white items-center justify-center space-x-3" data-wow-delay="0.6s">
                                    <span className='text-nowrap'>View Our Capabilities</span> <FiArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* Job Search Card */}
                        <div className="px-3 relative flex items-center justify-center mt-0 md:mt-10 transition-all duration-300">
                            <div className="h-[300px] lg:h-[400px] w-full bg-[#6c87a5] rotate-z-180" style={{ clipPath: 'polygon(100% 0%,100% 30%,0% 100%,0% 100%,0 0)' }}></div>

                            {/* Using fill layout */}
                            <div className="absolute translate-y-1/2 left-1/2 bottom-1/2 -translate-x-1/2 w-10/12 aspect-auto wow animate__animated animate__fadeInRight" style={{ height: '300px' }}>
                                <Image
                                    src="/images/insights/insight1.jpg"
                                    alt="logo"
                                    fill
                                    className="object-contain"  // or object-cover depending on your needs
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Global
