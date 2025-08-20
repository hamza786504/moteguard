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


function Health() {
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
                            HOMELAND
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            Leverage IT to better serve your mission
                        </p>
                    </div>
                </div>
            </section>


            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-xl" data-wow-delay="0s">

                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
                    We understand the active role that IT plays in protecting the homeland, responding to threats and disasters, enforcing and administering our laws, safeguarding cyberspace, and securing our borders. That&apos;s why we integrate, apply and advance IT and supporting services to tackle the challenges we face today and establish a purposeful roadmap for the challenges still to be uncovered, tomorrow. See how we are helping the Department of Homeland Security and national agencies across the world achieve program objectives, on time and on budget.
                </p>
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
                        Supply chain management
                    </h3>
                    <p className="text-base md:text-lg my-5 text-white text-start">
                        Learn how Leidos' agile supply chain management approach ensures federal government airborne missions can meet the "anytime, anywhere" challenges of their unique missions.
                    </p>
                    <div className="flex items-center justify-start space-x-1 sm:space-x-3 mt-7">
                        <button
                            className="px-3 md:px-6 py-2 border-2 border-[#335f80] font-medium rounded-md text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap text-sm md:text-lg animate__animated animate__fadeInUp wow flex items-center justify-center space-x-2" data-wow-delay="0.6s"
                        >
                            <span>Read Article</span> <BsArrowRight size={22} />
                        </button>
                    </div>
                </div>
            </section>



            <section className="max-w-3xl mx-auto shadow-sm shadow-gray-500 py-10 my-16">
                <p className="animate__animated animate__fadeInUp wow text-base md:text-lg text-black text-center" data-wow-delay="0s">Through the CDP, Leidos has trained</p>
                <span className='animate__animated animate__fadeInUp wow text-3xl md:text-5xl text-center font-extrabold block my-5 text-[#6c87a5]' data-wow-delay="0.3s">1,000,000+</span>
                <p className="animate__animated animate__fadeInUp wow text-base md:text-lg text-black text-center" data-wow-delay="0.6s">first responders and receivers for FEMA</p>

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


            <section className="max-w-3xl mx-3 md:mx-auto shadow-sm bg-green-200 py-10 my-16">
                <p className="animate__animated animate__fadeInUp wow text-base md:text-lg text-black text-center" data-wow-delay="0s">We've supported</p>
                <span className='animate__animated animate__fadeInUp wow text-3xl md:text-5xl text-center font-extrabold block my-5 text-[#6c87a5]' data-wow-delay="0.3s">450+</span>
                <p className="animate__animated animate__fadeInUp wow text-base md:text-lg text-black text-center" data-wow-delay="0.6s">U.S. airports with transportation security equipment system integration</p>

            </section>


            <section className="overflow-x-hidden py-16 px-3 md:px-0">
                <div className="me-0 ms-auto pb-10 md:pb-0 max-w-5xl shadow-sm shadow-[#cbced0] bg-gradient-to-r to-[#a8a7a9] from-white/0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className='flex flex-col justify-center p-20 px-10'>
                            <h4 data-wow-delay="0s" className='animate__animated animate__fadeInLeft wow text-2xl md:text-4xl text-[#6c87a5] mb-10'>Leveraging our core capabilities</h4>
                            <button type="button" data-wow-delay="0.3s" className="animate__animated animate__fadeInLeft wow bg-[#6c87a5] inline-flex justify-center items-center rounded-full hover:bg-[#335f80] text-white p-3 px-2 text-sm md:text-base space-x-3"><span>LEARN ABOUT OUR CORE CAPABILITIES</span> <BsArrowRight size={18} /></button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 p-5 wow animate__animated animate__fadeInRight">
                            <span className='flex items-center justify-start text-black text-xl font-bold'>Cyber</span>
                            <span className='flex items-center justify-start text-black text-xl font-bold'>Digital Modernization</span>
                            <span className='flex items-center justify-start text-black text-xl font-bold'>Mission Operations</span>
                            <span className='flex items-center justify-start text-black text-xl font-bold'>Integrated Systems</span>
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


            <section
                className="relative bg-center my-0 py-32 px-2 bg-cover"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/help.jpg')"
                }}
            >
                {/* <div className='absolute inset-0 bg-black/20 h-full w-full'></div> */}
                <div className="p-10 max-w-4xl rounded-xl text-start mx-auto px-4 md:px-5">
                    <h3 className="text-start animate__animated animate__fadeInUp wow text-white text-3xl md:text-5xl leading-tight" data-wow-delay="0s">
                        Supporting Center for Domestic Preparedness training
                    </h3>
                    <p className="text-base md:text-lg my-5 text-white text-start">
                        Leidos supports the Federal Emergency Management Agency with all-hazards planning and response training at the Center for Domestic Preparedness in Anniston, Alabama, across 38 states, and the territory of Puerto Rico.
                    </p>
                    <div className="flex items-center justify-start space-x-1 sm:space-x-3 mt-7">
                        <button
                            className="px-3 md:px-6 py-2 border-2 border-[#335f80] font-medium rounded-md text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap text-sm md:text-lg animate__animated animate__fadeInUp wow flex items-center justify-center space-x-2" data-wow-delay="0.6s"
                        >
                            <span>Read The Case Study</span> <BsArrowRight size={22} />
                        </button>
                    </div>
                </div>
            </section>



    
              <TextOverColor
                heading="Keeping the Rose Bowl secure"
                paragraph="Discover how the Leidos team helped the Transportation Security Administration secure the 104th Rose Bowl game with walk-through metal detectors deployment, screening 93,000 in attendance."
                btns={[{href: "/" , text : "Download The Case Study"}]}
            />



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

export default Health
