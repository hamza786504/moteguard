"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
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


function CareersAustralia() {
    const [active, setActive] = useState("Health & Civil");
    const selected = filters.find((f) => f.name === active);

    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-2/3 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            CAREERS AT LEIDOS AUSTRALIA
                        </h2>
                        <div className="max-w-[400px] mt-7 w-full relative bg-white inline-block">
                            <input type="text" name="search" id="search" placeholder='Enter Keywords, Job ID, or Title' className='p-3 bg-transparent border-none w-full' />
                            <BsSearch size={22} className='absolute top-1/2 right-5 -translate-y-1/2 text-[#6c87a5]' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl capitalize mb-8">Featured Careers</h2>
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

            


            <section className="relative py-16 md:py-32 bg-gradient-to-r from-[#6c87a5] to-[#a8a7a9] overflow-hidden">
                {/* Top-right background image */}
                <div
                    className="absolute top-0 right-0 bg-no-repeat bg-left bg-cover h-96 w-[600px] z-0"
                    style={{ backgroundImage: `url(/images/polygon-10percent.svg)` }}
                ></div>
                {/* Bottom-left circle */}
                <div className="absolute bottom-0 -left-[250px] bg-[#cbced0]0 shadow-2xl rounded-full h-42 md:h-[500px] w-42 md:w-[500px] z-0 animate_animated animate-fadeInRight wow"></div>

                {/* Main Content */}
                <div className="relative z-10 max-w-2xl mx-auto px-4">
                    <h2 className="wow animate__animated animate__fadeInUp text-white text-2xl mb-10 leading-tight md:text-5xl">
                        Leidos Australia Careers
                    </h2>
                    <p className='!z-10 mb-3 text-white font-normal md:text-lg text-base wow animate__animated animate__fadeInUp' data-wow-delay="0.2s">
                        Everything we do is built on our commitment to do the right thing for our customers, our employees, and our communities. We are working to solve the world&apos;s toughest challenges in government, intelligence, defence, aviation, border protection and health markets. Our Australian business of around 2000 employees is backed by the global Leidos team and network of partners to deliver solutions that save lives and help secure Australia.
                    </p>
                    <h2 className="wow animate__animated animate__fadeInUp mt-7 text-white text-2xl mb-5 leading-tight md:text-5xl">
                        Our work really matters
                    </h2>
                    <ul className='text-white text-base md:text-lg list-disc space-y-4'>
                        <li>It keeps people safe. Like supplying geospatial and imagery systems to safeguard our military troops in hostile territories and conducting airborne search and rescue operations over land and sea.</li>
                        <li>It helps sustain a healthier future. Like hosting the BOM’s historical, current and predictive data so climate scientists, farmers and Australians can make better informed decisions.</li>
                        <li>It creates efficiencies. Like managing the ATO’s vast IT system to support 12 million Australian taxpayers and small businesses.</li>
                    </ul>
                    <h2 className="wow animate__animated animate__fadeInUp mt-7 text-white text-2xl mb-10 leading-tight md:text-5xl">
                        Our roles are diverse and interesting
                    </h2>

                    <p className='!z-10 mb-3 text-white font-normal md:text-lg text-base wow animate__animated animate__fadeInUp' data-wow-delay="0.2s">
                        There are seven different areas of our business, each playing a valued role in bringing science, engineering, and technology together to produce practical solutions for our customers&apos; most complex problems.
                    </p>
                    <h2 className="wow animate__animated animate__fadeInUp mt-7 text-white text-2xl mb-10 leading-tight md:text-5xl">
                        Our people are seriously smart
                    </h2>

                    <p className='!z-10 mb-3 text-white font-normal md:text-lg text-base wow animate__animated animate__fadeInUp' data-wow-delay="0.2s">
                        We are forward-thinkers, who enjoy a challenge. Our leaders empower you to do your best work. You&apos;ll feel inspired by what you can achieve and are supported by an inclusive and flexible culture that genuinely cares for your wellbeing.
                    </p>
                </div>
            </section>




                      <section className="py-10 max-w-4xl mx-auto bg-white">
                <div className="flex gap-4 flex-col md:flex-row flex-wrap md:flex-nowrap">
                    <p className='w-full md:w-2/3 text-base md:text-lg'>Hello and thank you for visiting Leidos careers! My name is Chris Scalia and I manage recruiting efforts for Leidos. Our Talent Acquisition team is dedicated to ensuring your job search at Leidos is both a productive and a positive experience. Building your search profile can be helpful so that you are notified when openings come available. Our platform provides the ability for you to see your status through the hiring process by logging in with your existing profile. Lastly, many of our opportunities are chat enabled where you can immediately request to connect with a live recruiter. Thanks again for your interest in Leidos and feel free to let me know how we are doing at <a href="/" className='text-[#6c87a5] underline'>chris.a.scalia@leidos.com.</a>
                    </p>
                    <div className="w-full md:w-1/3">
                        <div className="relative w-full h-[300px]">
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



            <section className="px-3 py-16 mx-auto max-w-4xl">
                <h2 className="animate__animated animate__fadeInLeft wow text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start" data-wow-delay="0s">
                    Fraud and Scam Awareness
                </h2>
                <p className="mb-7 animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
                    Beware of fake employment opportunities using Leidos&apos; name. Leidos will never ask you to provide payment-related information during any part of the employment application process (i.e., ask you for money), nor will Leidos ever advance money as part of the hiring process (i.e., send you a check or money order before doing any work). Further, Leidos will only communicate with you through emails that are generated by the Leidos.com automated system never from free commercial services (e.g., Gmail, Yahoo, Hotmail) or via WhatsApp, Telegram, etc. If you received an email purporting to be from Leidos that asks for payment-related information or any other personal information (e.g., about you or your previous employer), and you are concerned about its legitimacy, please make us aware immediately by emailing us at <span className='text-[#6c87a5] underline'>Leidos Careers Fraud.</span>
                </p>
            </section>

        </>
    )
}

export default CareersAustralia;
