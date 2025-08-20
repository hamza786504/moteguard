"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
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

const faqs = [
    {
        question: "How do I find job openings?",
        answer:
            "Just enter keywords like job title, field, or location in the search box on https://careers.leidos.com. Then, filter your search results by title, location, or posting date.",
    },
    {
        question: "I entered my criteria, but get no results. How do I find jobs that meet my search criteria?",
        answer:
            "Your criteria may be too narrow; try broadening your search. For example, if you searched by a particular city, consider adding nearby cities as well.  Be sure to select all of the sites you consider a commutable distance from home.",
    },
    {
        question: "I saw a position listed previously, but now it's gone. Is the job still available?",
        answer:
            "It may not be. If a job opening has been filled, closed, or is no longer accepting applicants, you won't see it in the search results. If you want to be notified when similar positions become available, select 'Create a Job Alert' at the bottom of the search page.  We will notify you when positions become available that match your preferences.",
    },
    {
        question: "Will Leidos pay to relocate me?",
        answer:
            "For some jobs, yes.",
    },
];

const faqs2 = [
    {
        question: "How do I apply to a job opening?",
        answer:
            'When viewing a position, click "Apply Now". If you have not applied before, click "Apply" and you will be prompted to log in or create an account. Then upload your resume or connect to your LinkedIn profile; either will automatically populate most of the fields on your job submission. Just make sure to double-check your information and complete any other required fields before you hit "Submit".  If you have applied before, click "Sign In", and you be able to update your information as needed.',
    },
    {
        question: "How should I list my education on the application?",
        answer:
            "Please list your education starting with your most recently completed program of study and institution.",
    },
    {
        question: "How do I update an application I already submitted?",
        answer:
            'On the Careers site click on "Access an Existing Profile", and then choose "Sign In" to your account.',
    },
    {
        question: "Can I apply for multiple job openings at once?",
        answer:
            "No, but after you have completed one application, your information is automatically included on any subsequent applications.  This makes applying to additional positions easier to complete.",
    },
    {
        question: "I'm a Leidos employee; why can't I submit an application online?",
        answer:
            "As a current Leidos employee, you should access job listings through Prism using your Leidos user ID and password.",
    },
    {
        question: "I created a profile on the Leidos Talent Community. Does that mean I've applied?",
        answer:
            "No. The Talent Community is a different system that allows candidates to express an interest in Leidos and sign up for email alerts on the latest openings. If you want to apply, you'll need to create a candidate profile and submit an application for a specific position.",
    },
];

const faqs3 = [
    {
        question: "How can I confirm that I correctly applied for an opening?",
        answer:
            'On the Careers site click on "Access an Existing Profile", and then choose "Sign In" to your account.  You will then be able to view a list of jobs to which you have applied.',
    },
    {
        question: "What's the status of my application?",
        answer:
            'On the Careers site click on "Access an Existing Profile", and then choose "Sign In" to your account.  You\'ll be able to see your application\'s current status and whether the position you applied for is still open.',
    },
    {
        question: "When will I hear back after I've applied to a job opening?",
        answer:
            'If there is a good match between your background and the job requirements, the recruiting team will contact you directly. However, the timeframe depends on the position and the number of applicants.',
    }
];

const faqs4 = [
    {
        question: "I forgot my password. How do I get back into my profile?",
        answer:
            'Click on "Forgot your Password?" and enter your email address. You\'ll be emailed a temporary password, so you can log in and reset your password.',
    },
    {
        question: "If I forgot my password. Should I just set-up another profile?",
        answer:
            'Please, don\'t. Instead, click on "Forgot your Password?" and enter your email address. You\'ll be emailed a temporary password, so you can log in and reset your password.',
    },
    {
        question: "How do I update my existing password?",
        answer:
            'On the Careers site click on "Access an Existing Profile", and then choose "Sign In" to your account.   Click on your account icon in the top right corner, and choose "change password".  Alternately, you can choose "Forgot Password" and a password reset link will be sent to your email address.',
    }
];

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Frequently Asked Career Questions
                        </h2>
                    </div>
                </div>
            </section>


            <section className="px-3 animate__animated animate__fadeInLeft wow pb-5 pt-14 mx-auto max-w-2xl" data-wow-delay="0s">
                {/* <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
          Fraud and Scam Awareness
        </h2> */}
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
                    Leidos will never ask you to provide payment-related information at any part of the employment application process, nor will Leidos ever advance money as part of the hiring process.  And Leidos will communicate with you only through emails that are generated by Leidos.com automated system. If you receive an email purporting to be from Leidos that asks for payment-related information or any other personal information, please report the email to Chris Scalia, Leidos&apos; Senior Vice President of Talent Acquisition, at chris.a.scalia@leidos.com.
                </p>
            </section>



            <div className="py-16 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-manrope text-center font-bold text-[#335f80] leading-[3.25rem]">
                        Searching job openings and getting role-specific information
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
                                <h5 className='text-lg md:text-xl'>{faq.question}</h5>
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





            <div className="py-16 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-manrope text-center font-bold text-[#335f80] leading-[3.25rem]">
                        Applying for a position
                    </h2>
                </div>

                <div className="accordion-group">
                    {faqs2.map((faq, index) => (
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
                                <h5 className='text-lg md:text-xl'>{faq.question}</h5>
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


            <div className="py-16 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-manrope text-center font-bold text-[#335f80] leading-[3.25rem]">
                        Getting status on the hiring process
                    </h2>
                </div>

                <div className="accordion-group">
                    {faqs3.map((faq, index) => (
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
                                <h5 className='text-lg md:text-xl'>{faq.question}</h5>
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


            <div className="py-16 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-manrope text-center font-bold text-[#335f80] leading-[3.25rem]">
                        Getting status on the hiring process
                    </h2>
                </div>

                <div className="accordion-group">
                    {faqs4.map((faq, index) => (
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
                                <h5 className='text-lg md:text-xl'>{faq.question}</h5>
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
        </>
    )
}

export default Faq;
