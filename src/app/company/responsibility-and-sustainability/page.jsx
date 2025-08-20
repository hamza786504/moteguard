"use client";
import Link from 'next/link'
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import TextOverColor from '@/components/TextOverColor';

const filters = [
    {
        name: "Health & Civil",
        heading: "Health & Civil Solutions",
        paragraph:
            "We provide innovative healthcare and civil solutions, enhancing public well-being through technology and expert support.",
    },
    {
        name: "National Security",
        heading: "National Security Solutions",
        paragraph:
            "Empowering national defense with cutting-edge intelligence, surveillance, and reconnaissance systems.",
    },
    {
        name: "Commercial & International",
        heading: "Commercial & International Programs",
        paragraph:
            "Delivering commercial space, telecom, and defense innovations globally with high-impact collaborations.",
    },
    {
        name: "Digital Modernization",
        heading: "Digital Modernization",
        paragraph:
            "Transforming legacy systems into smart digital ecosystems with AI, cloud, and cybersecurity.",
    },
    {
        name: "Defense Systems",
        heading: "Defense Systems",
        paragraph:
            "The Defense Systems Sector develops and produces advanced space, aerial, surface, and sub-surface manned and un-manned defense systems.",
    },
];


function ResponsibilityAndSustainability() {
    const [active, setActive] = useState("Health & Civil");
    const selected = filters.find((f) => f.name === active);
    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Company</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-4xl md:text-5xl text-white leading-snug">
                            Responsibility & Sustainability
                        </h2>
                    </div>
                </div>
            </section>



            <section className="overflow-x-hidden flex flex-col md:flex-row items-center md:items-center from-[#cbced0] to-[#cbced0] bg-gradient-to-l">
                {/* Right Side: Text Content */}
                <div className="px-4 md:px-16 py-12 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-3xl font-extrabold lg:text-5xl text-[#6c87a5] leading-tight mb-6">
                        Responsibility & Sustainability
                    </h2>
                    <p className="my-3 text-base lg:text-lg">
                        We value our inspired, passionate and united employees. Not only do they further the Leidos mission to provide innovative solutions, they are equally active in their communities, are ethically-minded, and make a positive difference in the world.
                    </p>
                    <button className="mb-10 md:mb-0 mx-auto md:ms-0 md:me-auto animate__animated animate__fadeInRight wow cursor-pointer capitalize bg-[#6c87a5] hover:bg-[#335f80] p-2 mt-8 text-sm lg:text-lg font-bold text-white rounded-3xl border px-4 md:px-8 py-3 md:text-sm flex items-center justify-start space-x-2 md:space-x-3" data-wow-delay="0.3s">
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


            <section className='max-w-lg mx-auto py-16 space-y-5 px-3'>
                <p className="animate__animated animate__fadeInUp wow font-normal text-base md:text-lg text-center md:text-start " data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia necessitatibus animi praesentium laudantium harum neque modi quaerat provident accusantium?</p>
                <p className="animate__animated animate__fadeInUp wow font-normal text-base md:text-lg text-center md:text-start " data-wow-delay="0.4s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia necessitatibus animi praesentium laudantium harum neque modi quaerat provident accusantium?</p>
                <p className="animate__animated animate__fadeInUp wow font-normal text-base md:text-lg text-center md:text-start " data-wow-delay="0.6s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia necessitatibus animi praesentium laudantium harum neque modi quaerat provident accusantium?</p>
            </section>



            <div
                className={`md:py-5 transition-all duration-700 text-black flex items-center`}
            >
                <div className="max-w-6xl text-center mx-auto px-4">
                    {/* Filters */}
                    <div className="inline-flex !mx-auto md:p-2 rounded-xl flex-wrap gap-1 md:gap-2 justify-start md:justify-center mb-5 md:mb-10">
                        {filters.map((filter) => (
                            <button
                                key={filter.name}
                                onClick={() => setActive(filter.name)}
                                className={`text-xs sm:text-sm md:text-base p-2 ${active === filter.name ? "bg-[#6c87a5] text-white" : "text-[#6c87a5] bg-transparent"}  rounded-lg md:text-lg font-medium transition duration-300 relative group`}
                            >
                                {filter.name}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn">
                        <div className="space-y-6 text-start">
                            <h2 className=" animate__animated wow animate__slideInLeft text-3xl md:text-4xl font-bold" data-wow-delay="0.2s">
                                {selected.heading}
                            </h2>
                            <p className=" animate__animated wow animate__slideInLeft text-base md:text-lg leading-relaxed" data-wow-delay="0.4s">
                                {selected.paragraph}
                            </p>
                            <button className=" animate__animated wow animate__slideInLeft bg-[#6c87a5] text-white px-4 md:px-6 py-2 md:py-3 rounded-full inline-flex items-center gap-2 font-semibold hover:bg-[#335f80] transition-transform" data-wow-delay="0.6s">
                                Learn More <FiArrowRight size={20} />
                            </button>
                        </div>
                        <div className="bg-[#6c87a5] p-2 md:p-4 lg:p-10 rounded-2xl w-full aspect-square md:h-[400px] flex justify-center md:justify-end">
                            <Image
                                src="/images/section-bg.jpg"
                                alt="section-img"
                                width={600}
                                height={600}
                                className=" animate__animated wow animate__slideInRight object-cover rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <section className='mx-auto max-w-6xl py-8 md:py-16 px-3'>
                <h3 className='text-2xl md:text-5xl text-[#6c87a5] text-center mb-8 font-extrabold md:mb-16 wow animate__animated animate__flipInX'>Additional Reporting Resources</h3>
                <ul className='list-disc flex flex-col space-y-2 md:space-y-5 px-4 md:ps-10'>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="0.2s">Code of Conduct</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="0.4s">Responsible Purchasing Statement</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="0.6s">Supplier Code of Conduct</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="0.8s">Leidos UK Sustainability Statement</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="1s">Global Headquarters LEED® Gold Certificate</Link>
                    </li>
                </ul>
            </section>


            <section className='mx-auto max-w-6xl py-8 md:py-16 px-3'>
                <h3 className='wow animate__animated animate__flipInX text-2xl md:text-5xl text-[#6c87a5] text-center mb-8 font-extrabold md:mb-16'>
                    Additional Reporting Resources
                </h3>
                <ul className='text-start list-disc flex flex-col space-y-2 md:space-y-5 px-6 rtl' dir="rtl">
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="0.2s">Code of Conduct</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="0.4s">Responsible Purchasing Statement</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="0.6s">Supplier Code of Conduct</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="0.8s">Leidos UK Sustainability Statement</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="1s">Global Headquarters LEED® Gold Certificate</Link>
                    </li>
                </ul>
            </section>



      
             <TextOverColor
                heading="Forward-Looking Statements"
                paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo asperiores numquam earum blanditiis voluptatem molestias optio quos, distinctio ipsa facere non accusantium mollitia quam qui esse"
            />


            <section className='mx-auto max-w-6xl py-8 md:py-16 px-3'>
                <h3 className='text-2xl md:text-5xl text-[#6c87a5] text-center mb-8 font-extrabold md:mb-16 wow animate__animated animate__flipInX'>Additional Reporting Resources</h3>
                <ul className='list-disc flex flex-col space-y-2 md:space-y-5 ps-4'>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="0.2s">Code of Conduct</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="0.4s">Responsible Purchasing Statement</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="0.6s">Supplier Code of Conduct</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="0.8s">Leidos UK Sustainability Statement</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInRight' data-wow-delay="1s">Global Headquarters LEED® Gold Certificate</Link>
                    </li>
                </ul>
            </section>


            <section className='mx-auto max-w-6xl py-8 md:py-16 px-3'>
                <h3 className='text-2xl md:text-5xl wow animate__animated animate__flipInX text-[#6c87a5] text-center mb-8 font-extrabold md:mb-16'>
                    Additional Reporting Resources
                </h3>
                <ul className='text-start list-disc flex flex-col space-y-2 md:space-y-5 px-4 rtl' dir="rtl">
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="0.2s">Code of Conduct</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="0.4s">Responsible Purchasing Statement</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="0.6s">Supplier Code of Conduct</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="0.8s">Leidos UK Sustainability Statement</Link>
                    </li>
                    <li className='hover:underline text-base md:text-2xl hover:text-[#6c87a5]'>
                        <Link href={"/"} className='wow animate__animated animate__fadeInLeft' data-wow-delay="1s">Global Headquarters LEED® Gold Certificate</Link>
                    </li>
                </ul>
            </section>




        </>
    )
}

export default ResponsibilityAndSustainability
