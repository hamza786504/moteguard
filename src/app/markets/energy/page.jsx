"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import ContactForm from '@/components/ContactForm';


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

function Energy() {
    const [active, setActive] = useState("Health & Civil");
    const selected = filters.find((f) => f.name === active);


    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Markets</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Energy & Industry
                        </h2>
                    </div>
                </div>
            </section>


            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-xl" data-wow-delay="0s">
                <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
                    Trusted expertise for energy programs and projects
                </h2>
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
                    Utilities, energy efficiency administrators, the Department of Energy, energy investors and developers, the National Nuclear Security Administration, and manufacturers all serve a critical role in the energy landscape. Whether your mission involves power grid hardening or nuclear site cleanup, Leidos is uniquely equipped to support your important work as the world&apos;s reliance on energy continues to increase.
                </p>
            </section>

            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                            Power Delivery
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Now available for download,{" "}
                            <em className="italic font-semibold">A Kaleidoscope of Innovation: The Story of Leidos</em>{" "}
                            is an enhanced eBook optimized for iBooks.
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
                        {filters.map((filter, id) => (
                            <button
                                key={filter.name}
                                onClick={() => setActive(filter.name)}
                                className={`animate__animated animate__fadeInUp wow text-base md:text-lg font-medium transition duration-300 relative group`}
                                data-wow-delay={`${id} * 0.2`}
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
                            <h2 className="text-4xl font-bold animate__animated animate__fadeInLeft wow" data-wow-delay="0s">
                                {selected.heading}
                            </h2>
                            <p className="text-lg leading-relaxed animate__animated animate__fadeInLeft wow" data-wow-delay="0.3s">
                                {selected.paragraph}
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold animate-fadeInUp hover:scale-105 transition-transform animate__animated animate__fadeInLeft wow" data-wow-delay="0.6s">
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
                    <h3 className="animate__animated animate__fadeInUp wow text-white text-center text-3xl md:text-5xl leading-tight" data-wow-delay="0s">
                        The specialized plane that advances aerial ISR
                    </h3>
                    <p className="mt-7 md:max-w-8/12 text-white text-center mx-auto text-sm md:text-base font-normal animate__animated animate__fadeInUp wow" data-wow-delay="0.5s">What started as a technology demonstrator for the Army is now a fully integrated aircraft operating in-theater and surpassing performance metrics. The Leidos Special Mission Aircraft (LSMA) team leads the way in integrating and operating commercial derivative aircraft for evolving high-accuracy ISR missions.</p>
                    <div className="flex items-center justify-center space-x-1 sm:space-x-3 mt-7">
                        <button
                            className="px-3 md:px-6 py-2 border-2 border-[#335f80] font-medium rounded-md text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap uppercase text-sm md:text-lg animate__animated animate__fadeInUp wow" data-wow-delay="0.6s"
                        >
                            Learn About LSMA
                        </button>
                    </div>
                </div>
            </section>



            <div
                className={`min-h-screen md:max-h-[500px] transition-all duration-700 bg-gradient-to-b ${selected.gradient} text-white flex items-center`}
            >
                <div className="max-w-6xl mx-auto px-4">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 justify-start md:justify-center mb-16 md:mb-32">
                        {filters.map((filter, id) => (
                            <button
                                key={filter.name}
                                onClick={() => setActive(filter.name)}
                                className={`animate__animated animate__fadeInUp wow text-base md:text-lg font-medium transition duration-300 relative group`}
                                data-wow-delay={`${id} * 0.2`}
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
                            <h2 className="text-4xl font-bold animate__animated animate__fadeInLeft wow" data-wow-delay="0s">
                                {selected.heading}
                            </h2>
                            <p className="text-lg leading-relaxed animate__animated animate__fadeInLeft wow" data-wow-delay="0.3s">
                                {selected.paragraph}
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold animate-fadeInUp hover:scale-105 transition-transform animate__animated animate__fadeInLeft wow" data-wow-delay="0.6s">
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


            <section className="py-16 bg-gradient-to-r from-green-100 to-[#cbced0] px-3">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                    {/* Card */}
                    <div className="rounded-lg group py-10 bg-white hover:bg-[#6c87a5] p-5 md:p-10 wow animate__animated animate__fadeInUp" data-wow-delay="0s">
                        <h4 className="text-2xl md:text-3xl font-bold text-[#6c87a5] text-center mx-auto group-hover:text-white">
                            Utilities
                        </h4>
                        <p className="text-center text-base md:text-lg my-4 text-gray-900 group-hover:text-white">
                            Utilities are under pressure to respond to changing regulations, energy demand, severe weather, improve operational efficiency, and integrate renewable energy into the mix of power generation. We help utilities evolve in the dynamic power marketplace.
                        </p>
                        <Link href="/" className="flex items-center justify-center space-x-2 text-[#6c87a5] group-hover:text-white">
                            <span>View Our Services</span> <FaArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Card */}
                    <div className="rounded-lg group py-10 bg-white hover:bg-[#6c87a5] p-5 md:p-10 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                        <h4 className="text-2xl md:text-3xl font-bold text-[#6c87a5] text-center mx-auto group-hover:text-white">
                            Investors & Developers
                        </h4>
                        <p className="text-center text-base md:text-lg my-4 text-gray-900 group-hover:text-white">
                            Leidos serves the full range of sponsors, lenders, investors, and owners doing business in the energy industry, from private equity with diverse portfolios to institutional investors charged with preserving and growing capital and many more.
                        </p>
                        <Link href="/" className="flex items-center justify-center space-x-2 text-[#6c87a5] group-hover:text-white">
                            <span>More On Investors & Developers</span> <FaArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Card */}
                    <div className="rounded-lg group py-10 bg-white hover:bg-[#6c87a5] p-5 md:p-10 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                        <h4 className="text-2xl md:text-3xl font-bold text-[#6c87a5] text-center mx-auto group-hover:text-white">
                            Commercial & Industrial
                        </h4>
                        <p className="text-center text-base md:text-lg my-4 text-gray-900 group-hover:text-white">
                            From industrial manufacturers to commercial businesses to public entities, we help customers build programs that deliver energy and costs savings. Our experts design, implement, and manage an effective energy program that's right for your organization.
                        </p>
                        <Link href="/" className="flex items-center justify-center space-x-2 text-[#6c87a5] group-hover:text-white">
                            <span>View Our Services</span> <FaArrowRight size={14} />
                        </Link>
                    </div>

                </div>
            </section>


            <div
                className={`min-h-screen md:max-h-[500px] transition-all duration-700 bg-gradient-to-b ${selected.gradient} text-white flex items-center`}
            >
                <div className="max-w-6xl mx-auto px-4">
                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 justify-start md:justify-center mb-16 md:mb-32">
                        {filters.map((filter, id) => (
                            <button
                                key={filter.name}
                                onClick={() => setActive(filter.name)}
                                className={`animate__animated animate__fadeInUp wow text-base md:text-lg font-medium transition duration-300 relative group`}
                                data-wow-delay={`${id} * 0.2`}
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
                            <h2 className="text-4xl font-bold animate__animated animate__fadeInLeft wow" data-wow-delay="0s">
                                {selected.heading}
                            </h2>
                            <p className="text-lg leading-relaxed animate__animated animate__fadeInLeft wow" data-wow-delay="0.3s">
                                {selected.paragraph}
                            </p>
                            <button className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold animate-fadeInUp hover:scale-105 transition-transform animate__animated animate__fadeInLeft wow" data-wow-delay="0.6s">
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


            <section className="overflow-x-hidden py-16 px-3 md:px-0">
                <div className="me-0 ms-auto pb-10 md:pb-0 max-w-5xl shadow-sm shadow-[#cbced0] bg-gradient-to-r to-[#a8a7a9] from-white/0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className='flex flex-col justify-center p-10'>
                            <h4 data-wow-delay="0s" className='animate__animated animate__fadeInLeft wow text-2xl md:text-4xl text-[#6c87a5] mb-5'>Success Stories</h4>
                            <p data-wow-delay="0.3s" className="animate__animated animate__fadeInLeft wow text-start text-gray-900 text-base md:text-lg">Trusted expertise for government programs and commercial energy projects</p>
                        </div>
                        <div className="relative h-[200px] md:h-[300px] wow animate__animated animate__fadeInRight">
                            <Image
                                src="/images/insights/insight1.jpg"
                                alt="logo"
                                fill
                                className="object-contain md:object-cover"
                                priority // Add this for important images
                            />
                        </div>

                    </div>
                </div>

            </section>


            {/* Contact */}
            <ContactForm />
        </>
    )
}

export default Energy;
