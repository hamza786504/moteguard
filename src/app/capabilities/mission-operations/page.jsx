"use client";
import ContactForm from '@/components/ContactForm';
import TextOverColor from '@/components/TextOverColor';
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



function MissionOperations() {
    const [active, setActive] = useState("Health & Civil");
    const selected = filters.find((f) => f.name === active);

    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Capabilities</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Mission Operations
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            Superior capabilities ensuring mission performance
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-xl" data-wow-delay="0s">

                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
                    Enabled by enhancing technology and agile, flexible, and scalable processes, we leverage our in-depth domain knowledge and mission understanding to provide efficient solutions that are secure and resilient, and support our customer's critical missions. As a recognized leader in operations and logistics on complex programs, we support civil servants, warfighters, and military service members across the globe and our researchers are making scientific discoveries from the edges of the earth to the solar system.
                </p>
                <button className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold animate-fadeInUp hover:scale-105 transition-transform">
                    VIEW OVERVIEW BROCHURE <FiArrowRight size={20} />
                </button>
            </section>





            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                            Antarctic Support Contract
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Operating the world's longest supply chain to support research done through the National Science Foundation&apos;s U.S. Antarctic Program
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border[#335f80] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>READ ABOUT HOW WE DO IT</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/ANTAR.jpeg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>


            <section className="overflow-x-hidden py-10 px-3 md:px-0">
                <div className="mx-auto md:pb-0 max-w-2xl shadow-sm shadow-[#cbced0] bg-gradient-to-r to-[#a8a7a9] from-white/0">
                    <div className='w-full flex flex-col justify-center items-center p-5 pb-0 md:p-10 md:px-14'>
                            <h4 data-wow-delay="0s" className='animate__animated animate__fadeInLeft wow text-center text-gray-900 text-base md:text-lg flex items-center justify-center'>The world&apos;s longest supply chain to Antarctica comprises</h4>
                            <span className="font-bold my-5 text-4xl text-[#6c87a5] text-center">20,000</span>
                            <p data-wow-delay="0.3s" className="animate__animated animate__fadeInLeft wow text-center text-gray-900 text-base md:text-lg flex items-center justify-center">round trip miles</p>
                            
                        </div>
                </div>

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

            <TextOverColor heading="Resilient basing" paragraph="How do you approach resilient basing in contested areas? Will Johnson, Senior Vice President and Operations Manager for Leidos Logistics and Mission Support, provides his perspective on contested logistics and more." btns={[{href : "/" , "text" : "WATCH VIDEO PLAYBACK"}]} />

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


            {/* Contact */}
            <ContactForm />
        </>
    )
}

export default MissionOperations;
