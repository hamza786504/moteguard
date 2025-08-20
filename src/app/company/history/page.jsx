"use client";
import ContactForm from '@/components/ContactForm';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const faqs = [
    {
        question: "1980 - 1999",
        answer:
            "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
    },
    {
        question: "2000 - 2009",
        answer:
            "To update billing information, go to your account settings, find the billing section, update your payment method or address, and save the changes.",
    },
    {
        question: "2010 - 2024",
        answer:
            "To contact support, visit the 'Help' or 'Contact Us' section on the website, then choose live chat, email, or phone as your preferred method.",
    },
];

function History() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Company</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            History
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            A Kaleidoscope of Innovation: Celebrating 50 years of Leidos
                        </p>
                    </div>
                </div>
            </section>


            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                            50 Years of Leidos
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
                                <span>DOWNLOAD THE BOOK</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.8s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/history-1.jpg"
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
                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInLeft" data-wow-delay="0.8s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/history-1.jpg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                            50 Years of Leidos
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
                                <span>DOWNLOAD THE BOOK</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>



                </div>
            </section>

            <section className="mb-32 overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                            50 Years of Leidos
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
                                <span>DOWNLOAD THE BOOK</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.8s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/history-1.jpg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>


            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-manrope text-center font-bold text-[#335f80] leading-[3.25rem]">
                        History of Ethics at Leidos
                    </h2>
                </div>

                <div className="accordion-group">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`animate__animated animate__fadeInLeft wow accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${openIndex === index ? "bg-[#cbced0] border-[#6c87a5]" : ""
                                }`}
                            data-wow-delay={`${index * 0.2}s`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`group inline-flex items-center justify-between text-left text-lg font-normal leading-8 w-full transition duration-500 ${openIndex === index
                                    ? "font-medium text-[#6c87a5]"
                                    : "text-gray-900 hover:text-[#6c87a5]"
                                    }`}
                            >
                                <h5 className='text-2xl md:text-3xl'>{faq.question}</h5>
                                {openIndex === index ? (
                                    // Minus icon
                                    <svg
                                        className="w-6 h-6 text-[#6c87a5] transition duration-500"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 12H18"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                ) : (
                                    // Plus icon
                                    <svg
                                        className="w-6 h-6 text-gray-900 transition duration-500 group-hover:text-[#6c87a5]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 12H18M12 18V6"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="accordion-content w-full overflow-hidden pr-4 mt-2">
                                    <p className="text-base text-gray-900 font-normal leading-6">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <section className="max-w-6xl mx-auto px-2">
                <h4 className="text-3xl md:text-5xl text-center font-bold text-[#6c87a5] mt-32 mb-10 animate__animated animate__fadeInLeft wow" data-wow-delay="0s">
                    Our history through the decades
                </h4>
                <p className='text-sm text-center md:text-base mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.2s">Over the past half-century, Leidos has worked in some of the most advanced areas of science and technology to deliver critical solutions to our customers' most demanding challenges. To learn more about some of our most important achievements, scroll through this interactive timeline of the last 50 years. For a more complete history of Leidos, we invite you to download and read our new eBook.</p>
            </section>


            <ContactForm />



            <section className="relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] py-16 px-6 md:px-10 overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="relative md:absolute md:inset-0 md:[clip-path:polygon(77%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft">
                    <div className="w-full max-w-xl mx-auto md:pe-16 md:mx-0 md:ml-16 md:my-auto h-full flex items-center justify-center">
                        <h2 className="wow text-center mx-auto md:text-start animate__animated animate__fadeInRight text-4xl lg:text-5xl font-light text-white leading-snug">
                            Our values are embodied by our employees
                        </h2>
                    </div>
                </div>

                {/* Right side content */}
                <div className="p-6 md:p-20 relative z-20 md:ml-[50%] max-w-3xl mx-auto mt-10 md:mt-0">
                    <p className="wow animate__animated animate__pulse text-lg md:text-xl text-white font-light leading-relaxed text-center md:text-start">
                        Our values are demonstrated by our
                        <strong className='font-bold'> 47,000 employees</strong> each and every
                        day they are helping our customers
                        execute on important missions on
                        the front lines of the world&apos;s most
                        complex markets.
                    </p>
                </div>
            </section>
        </>
    )
}

export default History
