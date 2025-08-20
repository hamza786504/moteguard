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

const values = [
    {
        title: "Cyber AI",
        description:
            "Automating the discovery of vulnerabilities and development of novel defenses",
        icon: "/images/brain.jpg",
    },
    {
        title: "Quantum Technologies",
        description:
            "Transforming secure communications and data protection with quantum-augmented solutions",
        icon: "/images/quantum-technologies.jpg",
    },
    {
        title: "OT Cyber Resilience",
        description:
            "Using Trusted Mission AI to secure critical systems, including SCADA/ICS environments",
        icon: "/images/settings.jpg",
    }
];


function Cyber() {
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
                            Cybersecurity
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            Smarter Full-Spectrum Cyber
                        </p>
                    </div>
                </div>
            </section>



            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-2xl" data-wow-delay="0s">

                <h2 className="animate__animated animate__fadeInLeft wow text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start" data-wow-delay="0.4s">
                    Evolving Threats Require Smarter Full-Spectrum Cyber
                </h2>
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
                    Leidos' capabilities are constantly evolving to counter the cyber threats of tomorrow. Our tools and technologies, encompassing AI and Zero Trust principles, enhance national security and help our customers meet mission objectives by delivering resilient outcomes that stop the adversary. We build smarter full-spectrum cyber solutions for our customers that support the development of new cyber defenses, sharpening of tools for warfighters, the research and development of innovative technologies, and cultivation of the next-generation of cyber talent.
                </p>
                <span className="text-2xl font-bold mt-10 text-start text-[#6c87a5]">
                    Our Approach
                </span>
                <hr className='mt-5 mb-10' />
                <div className="flex flex-wrap space-x-2 flex-row">
                    <a href='#file-a-report' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">File a report</a>
                    <a href='#ethics-program-structure' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Ethics Program Structure</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">History of Ethics</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Code of Conduct</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Compliance</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Anti-Corruption</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Human Trafficking</a>
                </div>
            </section>


            <section className="py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl capitalize mb-8">Latest Cyber News</h2>
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
                            <span className='text-nowrap'>Load More</span> <FiArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>




            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-2xl" data-wow-delay="0s">

                <h2 className="animate__animated animate__fadeInLeft wow text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start" data-wow-delay="0.4s">
                    Cybersecurity for the warfighter
                </h2>
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
                    Cyber warfighters must operate with superior combined offensive and defensive capabilities, driven by timely, relevant, and accurate intelligence.
                </p>
                <Link href="/" className="rounded-full mt-10 bg-[#6c87a5] p-3 px-5 hover:bg-[#335f80] text-white">Download the fact sheet</Link>
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


            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-2xl" data-wow-delay="0s">
                <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
                    Scaling Cyber Warfare: Insights on the Future of Defense and Offense
                </h2>
                <iframe className='animate__animated animate__fadeInRight wow' data-wow-delay="0.6s" style={{ width: "100%", aspectRatio: "16/9" }} src="https://www.youtube.com/embed/XaUBZ8EAmLU" title="Leidos - Transforming the Airport Security Experience" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className="animate__animated animate__fadeInLeft wow italic text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
                    As an innovation company rapidly addressing the world&apos;s most vexing challenges, our technical core capabilities define the areas in which technical excellence is critical, not only for our business, but in the work we do daily. We create smarter technology solutions for customers in heavily regulated industries achieve the important missions on the frontlines of their industry.
                </p>
            </section>

            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-2xl" data-wow-delay="0s">
                <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
                    Cyber Defense
                </h2>

                <p className="animate__animated animate__fadeInLeft wow italic text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
                    With our AI-driven cyber defense solutions, we move beyond mere response; we anticipate, adapt, and act preemptively. These solutions embody the essence of advanced intelligence, transforming traditional cyber defense into a proactive, resilient, and adaptive strategy.
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
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/gov.jpg')"
                }}
            >
                <div className="p-10 max-w-4xl rounded-xl text-start mx-auto px-4 md:px-5">
                    <h3 className="animate__animated animate__fadeInUp wow text-white text-center text-3xl md:text-5xl leading-tight" data-wow-delay="0s">
                        Exploring cyber defense in a digital age
                    </h3>
                    <p className="mt-7 md:max-w-8/12 text-white text-center mx-auto text-sm md:text-base font-normal animate__animated animate__fadeInUp wow" data-wow-delay="0.5s">Discover how AI is transforming cybersecurity with Meghan Good, senior vice president of technology integration, and Bobby Scharmann, vice president of the Leidos Cyber Accelerator. This conversation highlights the intersection of AI, software, and cybersecurity, showcasing how these elements combine to tackle evolving threats with precision and resilience. Gain valuable insights into the transformative impact of these technologies on securing the future of digital operations.</p>
                </div>
            </section>



            <TextOverColor
                heading="AI has upended cybersecurity. Only AI can fight back."
                paragraph="Artificial intelligence tools are completely changing how adversaries plan and perpetrate cyber attacks, and U.S. companies and government agencies are prime targets for these new assaults. AI-powered cyber threats is the top concern for senior risk executives and managers, according to a survey by Gartner, a top research and consulting firm. To defend against these emerging threats, we must turn to AI-enabled cyber defenses. Meghan Good, senior vice president of technology integration, explains."
                btns={[{ href: "/", text: "Learn More" }]}
            />


            <section className="w-full py-16 px-2 md:px-10 bg-gradient-to-r from-blue-100 to-green-100 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-light text-black text-start ">Cyber Innovation</h2>
                    <p className="mt-6 mb-10 md:max-w-7/12 text-black">Leidos&apos; Cyber Accelerator holds nearly two dozen patents, with steady investment in novel technologies and approaches in the areas of Cyber AI, Quantum, and more.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                className="animate__animated animate__fadeInUp wow bg-gradient-to-r text-center text-black bg-white rounded-md p-6 shadow-md transition hover:shadow-lg py-10"
                                data-wow-delay={0.3 * idx + "s"}
                            >
                                <div className="relative mx-auto mb-4 h-23 w-23"> {/* Container with defined dimensions */}
                                    <Image
                                        src={value.icon}
                                        alt={`${value.title} icon`}
                                        fill
                                        className="object-contain" // Ensures icon fits within container
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#335f80] mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-[#335f80]">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
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
                                src="/images/coveraged.jpg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>
            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/cyber.jpg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>



                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                            Cyber Careers
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Leidos confronts the cyber talent shortage by focusing on professional development and emphasizing skills over degrees in hiring.
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


            {/* Contact */}
            <ContactForm />
        </>
    )
}

export default Cyber
