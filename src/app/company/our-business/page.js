"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CountUp from 'react-countup';
import { FiArrowRight, FiUser } from 'react-icons/fi'
import { BsArrowRight, BsAwardFill, BsBank2, BsBriefcaseFill, BsCreditCard2BackFill } from "react-icons/bs";


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

const stats = [
    { number: 250, suffix: 'K+', label: 'Secure Storage' },
    { number: 38, suffix: '+', label: 'Secure Storage' },
    { number: 1670, label: 'Secure Storage' },
    { number: 94, suffix: '%', label: 'Secure Storage' },
];

const features = [
    {
        title: "Quality & Satisfaction",
        icon: "✅", // You can replace with actual SVG/icon
        description:
            "In interdum fringilla sem primis nunc hendrerit semper sodales blandit justo letius.",
    },
    {
        title: "Security & Reliability",
        icon: "🛡️",
        description:
            "In interdum fringilla sem primis nunc hendrerit semper sodales blandit justo letius.",
    },
    {
        title: "Flexibility & Advice",
        icon: "⚙️",
        description:
            "In interdum fringilla sem primis nunc hendrerit semper sodales blandit justo letius.",
    },
    {
        title: "Cutting-edge Solution",
        icon: "💡",
        description:
            "In interdum fringilla sem primis nunc hendrerit semper sodales blandit justo letius.",
    },
];


function OurBusiness() {
    const [active, setActive] = useState("Health & Civil");
    const selected = filters.find((f) => f.name === active);
    return (
        <>
            <section className="relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="h-[200px] md:h-[300px] flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft">
                    <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Company</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Our Business
                        </h2>
                    </div>
                </div>
            </section>

            <section className="relative max-w-6xl pt-16 mx-auto px-4" style={{ backgroundImage: 'url(https://shtheme.com/demosd/insuren/wp-content/uploads/2022/11/abs-bg3.png)' }}>
                <div className="absolute content-none h-64 w-64 bottom-[5%] right-[10%] bg-contain animate-[spinInfinit_12s_linear_infinite" style={{ backgroundImage: 'url(/images/1.png)' }}>
                </div>
                <div className="flex flex-wrap items-start -mx-4">
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="relative translate-x-[10px] lg:translate-x-0 max-w-[500px] mx-auto">
                            <Image
                                src="/images/insights/insight1.jpg"
                                alt="About small image"
                                width={400}
                                height={300}
                                className="w-10/12 h-auto transform transition-transform duration-300 hover:rotate-2"
                            />
                            <div className='absolute -bottom-1/2 right-0'>
                                <Image
                                    src="/images/insights/insight1.jpg"
                                    alt="About large image"
                                    width={300}
                                    height={300}
                                    className="-scale-[85%] -me-5 rotate-z-180 w-full h-auto"
                                />
                                <div className="-scale-75 rotate-z-180 absolute rounded-full w-32 lg:w-40 h-32 lg:h-40 items-center justify-center flex flex-col -bottom-[50px] border-2 border-[#335f80] -left-[90px] md:-left-[140px] translate-x-1/2 bg-white p-4 shadow-lg space-y-1 lg:space-y-3">
                                    <h4 className="text-3xl sm:text-4xl lg:text-5xl -mt-3 font-extrabold">12+</h4>
                                    <p className="text-xs text-center">We have more than years of experience</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-36 w-full lg:w-1/2 px-4 lg:mt-0">
                        <h5 className="relative flex space-x-5 text-[#6c87a5] mb-4">
                            <FiUser size={22} />
                            <span>About Our Company</span>
                        </h5>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            We Provide Best Insurance Policy for Any Purpose
                        </h2>
                        <p className="mb-8 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipiscing, elit libero facilisis donec laoreet ridiculus convallis ultrices sociis fermentum orci nasceture
                        </p>
                        <div className="flex flex-wrap -mx-4 mb-6">
                            <div className="w-full md:w-1/2 px-4 mb-6">
                                <div className="flex items-start mb-4">
                                    <div className="mr-4 text-[#335f80] text-xl mt-2">
                                        <BsAwardFill size={30} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">Business Service</h4>
                                        <p className="text-gray-600 text-sm">Quickly productivate just in time strategic theme.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-6">
                                <div className="flex items-start mb-4">
                                    <div className="mr-4 text-[#335f80] text-xl mt-2">
                                        <BsBank2 size={30} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">Marketing Plan</h4>
                                        <p className="text-gray-600 text-sm">Quickly productivate just in time strategic theme.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-6">
                                <div className="flex items-start mb-4">
                                    <div className="mr-4 text-[#335f80] text-xl mt-1">
                                        <BsBriefcaseFill size={30} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">Team Management</h4>
                                        <p className="text-gray-600 text-sm">Quickly productivate just in time strategic theme.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4 mb-6">
                                <div className="flex items-start mb-4">
                                    <div className="mr-4 text-[#335f80] text-xl mt-1">
                                        <BsCreditCard2BackFill size={30} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">Award Won</h4>
                                        <p className="text-gray-600 text-sm">Quickly productivate just in time strategic theme.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center space-x-4  mt-10">
                            <Link
                                href="?page_id=119"
                                className="bg-[#6c87a5] hover:bg-[#335f80] text-white px-6 py-3 rounded-md font-medium mb-4 md:mb-0 md:mr-8 hover:bg-primary-dark transition-colors"
                            >
                                Read More
                            </Link>
                            <div className="-mt-5 md:mt-0 w-32">
                                <Image
                                    src="https://shtheme.com/demosd/insuren/wp-content/uploads/2022/11/signature.png"
                                    alt="Signature"
                                    width={150}
                                    height={60}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative my-16 py-32 px-2 bg-cover bg-fixed' style={{ backgroundImage: "url(/images/bg-attachment.jpg)" }}>
                {/* <div className='absolute inset-0 bg-black/20 h-full w-full'></div> */}
                <div className="p-10 max-w-xl rounded-xl text-start bg-white mx-auto px-4 md:px-5">
                    <h3 className=" text-black text-center text-2xl md:text-4xl">
                        Lorem ipsum dolor sit
                    </h3>
                    <p className='text-black text-center my-4 text-base md:text-lg'>Lorem ipsum dolor, sit amet consectetur</p>
                    <p className="text-black text-center text-xs md:text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe nam ratione rem non eligendi a in cupiditate, fugit suscipit?</p>
                    <div className="flex items-center justify-center space-x-1 sm:space-x-3 mt-7">
                        <button
                            className="px-3 md:px-6 py-2 border-2 border-[#335f80] font-medium rounded-md text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap uppercase text-sm md:text-lg"
                        >
                            contact us
                        </button>
                        <button className="animate__animated animate__fadeInRight animate__delay-2s cursor-pointer capitalize bg-white p-2 text-sm md:text-lg font-bold text-[#6c87a5] rounded-lg px-3 md:px-6 py-2 border-[#6c87a5] border-2 hover:bg-[#6c87a5] hover:text-white flex items-center justify-start space-x-3">
                            <span className='text-nowrap uppercase'>Get A quote</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-12 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-[#6c87a5] text-2xl font-bold">⧫⧫</span>
                            <span className="uppercase text-gray-600 tracking-widest font-semibold text-sm">
                                Why Choose Us
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Client Satisfaction Is Our Primary Focus
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl">
                            Montes morbi scelerisque ac laoreet accumsan metus proin ut
                            himenaeos porta ex. Nostra fames praesent sem metus himenaeos.
                            Finibus iaculis rutrum semper nec consequat tristique id. Risus sit
                            cras a faucibus tempor luctus.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`wow py-5 animate__animated animate__fadeInUp`}
                                data-wow-delay={`${index * 0.2}s`}
                            >
                                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-[#6c87a5] text-6xl mb-8">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="overflow-x-hidden relative bg-[#6c87a5] text-white py-12">
                <div className="z-[100] absolute top-0 left-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 h-full w-[450px]"></div>
                <div className="z-0 max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">

                    {/* Left Side */}
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0 wow animate__animated animate__fadeInLeft">
                        <h2 className="!z-[10] text-center lg:text-start text-3xl md:text-4xl font-bold leading-tight">
                            Our Companies By <br className='hidden lg:block' /> Number
                        </h2>
                    </div>

                    {/* Right Side Stats */}
                    <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="wow animate__animated animate__fadeInUp"
                                data-wow-delay={`${index * 0.2}s`}
                            >
                                <h3 className="text-3xl md:text-4xl font-extrabold">
                                    <CountUp
                                        end={item.number}
                                        duration={2}
                                        separator=","
                                        suffix={item.suffix || ''}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </h3>
                                <p className="mt-2 text-sm md:text-base">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className='max-w-6xl mx-auto rounded-xl mt-5 py-3 md:p-10 pb-0'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Partner with Leidos Card */}
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="p-4 md:p-8">
                                <h2 className="wow animate__animated animate__fadeInLeft text-4xl font-extrabold text-black mb-4">
                                    Partner with Leidos
                                </h2>
                                <span className="wow animate__animated animate__fadeInLeft inline-block h-2 w-18 bg-[#6c87a5] content-none"></span>
                                <p className="wow animate__animated animate__fadeInLeft text-lg text-gray-600 my-10" data-wow-delay="0.3s">
                                    As one of the leading systems integrators in science, technology, and engineering,
                                    the solutions that transform and enable the missions of our customers rely heavily
                                    on the strength of our partners.
                                </p>
                                <Link href={"/insights"} className="wow animate__animated animate__fadeInLeft inline-flex !mx-auto cursor-pointer capitalize bg-[#6c87a5] p-3 mt-0 text-sm md:text-base font-bold text-white rounded-lg px-5 border-none mb-10 hover:bg-[#335f80] hover:text-white items-center justify-center space-x-3" data-wow-delay="0.6s">
                                    <span className='text-nowrap'>Learn about our solution</span> <FiArrowRight size={18} />
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

            <section className='overflow-x-hidden relative'>
                <div className='max-w-6xl mx-auto rounded-xl mt-5 p-3 md:p-10 pb-0'>
                    <div className="flex flex-wrap flex-col items-center md:flex-row gap-0">
                        <div className="w-full md:w-1/2 overflow-hidden transition-all duration-300">
                            <div className="p-0 py-5 md:p-8 md:pb-0">
                                <h2 className="wow animate__animated animate__fadeInLeft text-4xl font-extrabold text-black mb-4">
                                    Partner with Leidos
                                </h2>
                                <span className="wow animate__animated animate__fadeInLeft inline-block h-2 w-18 bg-[#6c87a5] content-none"></span>
                                <p className="wow animate__animated animate__fadeInLeft text-lg text-gray-600 my-10" data-wow-delay="0.3s">
                                    As one of the leading systems integrators in science, technology, and engineering,
                                    the solutions that transform and enable the missions of our customers rely heavily
                                    on the strength of our partners.
                                </p>
                                <Link href={"/insights"} className="wow animate__animated animate__fadeInLeft inline-flex !mx-auto cursor-pointer capitalize bg-[#6c87a5] p-3 mt-0 text-sm md:text-base font-bold text-white rounded-lg px-5 border-none mb-10 md:mb-0 hover:bg-[#335f80] hover:text-white items-center justify-center space-x-3" data-wow-delay="0.6s">
                                    <span className='text-nowrap'>Learn about our solution</span> <FiArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative flex items-start flex-col space-y-5 justify-center mt-0 md:mt-10 transition-all duration-300">
                            <div className="bg-[#e6e5e7] p-5 border-l-4 w-full border-[#3b414d]">
                                <h4 className="text-xl md:text-2xl">Lorem ipsum dolor</h4>
                                <p className="text-sm md:text-base text-start mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, culpa!</p>
                            </div>
                            <div className="bg-[#cbced0] p-5 border-l-4 w-full border-[#a8a7a9]">
                                <h4 className="text-xl md:text-2xl">Lorem ipsum dolor</h4>
                                <p className="text-sm md:text-base text-start mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, culpa!</p>
                            </div>
                            <div className="bg-yellow-100 p-5 border-l-4 w-full border-yellow-400">
                                <h4 className="text-xl md:text-2xl">Lorem ipsum dolor</h4>
                                <p className="text-sm md:text-base text-start mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, culpa!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-x-hidden mt-20 flex flex-col md:flex-row items-center md:items-center bg-white">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 -mt-5 md:mt-0">
                    <Image
                        src="/images/img-bell-on-stairs.avif"
                        alt=""
                        width={150}
                        height={60}
                        className="w-full h-auto"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="px-4 md:px-16 py-12 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-medium text-teal-800 leading-tight mb-6">
                        Leading 47,000 forward-thinking employees towards shared success
                    </h2>
                    <button className="bg-[#6c87a5] hover:bg-[#335f80] text-white font-semibold py-3 px-6 rounded-full transition duration-300">
                        MEET THE EXECUTIVE TEAM
                    </button>
                </div>
            </section>

            <section className="overflow-x-hidden flex flex-col md:flex-row items-center md:items-center from-[#cbced0] to-[#cbced0] bg-gradient-to-l">
                {/* Right Side: Text Content */}
                <div className="px-4 md:px-16 py-12 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-extrabold lg:text-5xl text-[#6c87a5] leading-tight mb-6">
                        Responsibility & Sustainability
                    </h2>
                    <p className="my-3 text-sm lg:text-lg">
                        We value our inspired, passionate and united employees. Not only do they further the Leidos mission to provide innovative solutions, they are equally active in their communities, are ethically-minded, and make a positive difference in the world.
                    </p>
                    <button className="mx-auto md:ms-0 md:me-auto animate__animated animate__fadeInRight wow cursor-pointer capitalize bg-[#6c87a5] hover:bg-[#335f80] p-2 mt-8 text-sm lg:text-lg font-bold text-white rounded-3xl border px-4 md:px-8 py-3 md:text-sm flex items-center justify-start space-x-2 md:space-x-3" data-wow-delay="0.3s">
                        <span>MEET THE EXECUTIVE TEAM</span> <BsArrowRight />
                    </button>
                </div>
                <div className="w-full md:w-1/2 h-full md:mb-0 -mt-5 md:mt-0">
                    <Image
                        src="/images/features.jpg"
                        alt=""
                        width={150}
                        height={60}
                        className="object-cover w-full h-full"
                    />
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
                    <h3 className=" text-white text-start text-2xl md:text-5xl">
                        Lorem ipsum dolor sit
                    </h3>
                    <p className="mt-7 md:max-w-8/12 text-white text-start text-sm md:text-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe nam ratione rem non eligendi a in cupiditate, fugit suscipit?</p>
                    <div className="flex items-center justify-start space-x-1 sm:space-x-3 mt-7">
                        <button
                            className="px-3 md:px-6 py-2 border-2 border-[#335f80] font-medium rounded-md text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap uppercase text-sm md:text-lg"
                        >
                            contact us
                        </button>
                        <button className="animate__animated animate__fadeInRight animate__delay-2s cursor-pointer capitalize bg-white p-2 text-sm md:text-lg font-bold text-[#6c87a5] rounded-lg px-3 md:px-6 py-2 border-[#6c87a5] border-2 hover:bg-[#6c87a5] hover:text-white flex items-center justify-start space-x-3">
                            <span className='text-nowrap uppercase'>Get A quote</span>
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
        </>
    )
}

export default OurBusiness
