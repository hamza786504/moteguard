"use client";
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
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        partnerCategory: "",
        company: "",
        message: "",
        optIn: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.country) newErrors.country = "Country/Region is required";
        if (!formData.partnerCategory)
            newErrors.partnerCategory = "Partner Category is required";
        if (!formData.company) newErrors.company = "Company is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
        }
    };
    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from-red-600 to-red-900 overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-pink-500/20 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
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


            <section className="overflow-x-hidden bg-gradient-to-r from-purple-100 via-pink-100 to-purple-50 py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-red-800 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
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
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border-red-600 text-red-800 font-semibold rounded-full hover:bg-red-800 hover:text-white transition-colors duration-300"
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


            <section className="overflow-x-hidden bg-gradient-to-r from-purple-100 via-pink-100 to-purple-50 py-0">
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
                        <h2 className="text-3xl md:text-5xl font-bold text-red-800 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
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
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border-red-600 text-red-800 font-semibold rounded-full hover:bg-red-800 hover:text-white transition-colors duration-300"
                            >
                                <span>DOWNLOAD THE BOOK</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>



                </div>
            </section>

            <section className="mb-32 overflow-x-hidden bg-gradient-to-r from-purple-100 via-pink-100 to-purple-50 py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-red-800 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
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
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border-red-600 text-red-800 font-semibold rounded-full hover:bg-red-800 hover:text-white transition-colors duration-300"
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
                    <h2 className="text-2xl md:text-4xl font-manrope text-center font-bold text-red-900 leading-[3.25rem]">
                        History of Ethics at Leidos
                    </h2>
                </div>

                <div className="accordion-group">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`animate__animated animate__fadeInLeft wow accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${openIndex === index ? "bg-red-50 border-red-800" : ""
                                }`}
                            data-wow-delay={`${index * 0.2}s`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`group inline-flex items-center justify-between text-left text-lg font-normal leading-8 w-full transition duration-500 ${openIndex === index
                                    ? "font-medium text-red-800"
                                    : "text-gray-900 hover:text-red-800"
                                    }`}
                            >
                                <h5 className='text-2xl md:text-3xl'>{faq.question}</h5>
                                {openIndex === index ? (
                                    // Minus icon
                                    <svg
                                        className="w-6 h-6 text-red-800 transition duration-500"
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
                                        className="w-6 h-6 text-gray-900 transition duration-500 group-hover:text-red-800"
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
                <h4 className="text-3xl md:text-5xl text-center font-bold text-red-800 mt-32 mb-10 animate__animated animate__fadeInLeft wow" data-wow-delay="0s">
                    Our history through the decades
                </h4>
                <p className='text-sm text-center md:text-base mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.2s">Over the past half-century, Leidos has worked in some of the most advanced areas of science and technology to deliver critical solutions to our customers' most demanding challenges. To learn more about some of our most important achievements, scroll through this interactive timeline of the last 50 years. For a more complete history of Leidos, we invite you to download and read our new eBook.</p>
            </section>



            <div className="max-w-6xl mx-auto">
                <div className="min-h-screen flex items-center justify-center md:px-4 py-10">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-lg p-4 md:p-6 w-full max-w-4xl"
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* First Name */}
                            <div>
                                <label className="block text-red-800 font-medium mb-1">
                                    First Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.firstName ? "border-red-500" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-red-800`}
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                                )}
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-red-800 font-medium mb-1">
                                    Last Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.lastName ? "border-red-500" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-red-800`}
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-red-800 font-medium mb-1">
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-red-800`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                )}
                            </div>

                            {/* Country/Region */}
                            <div>
                                <label className="block text-red-800 font-medium mb-1">
                                    Country/Region<span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.country ? "border-red-500" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-red-800`}
                                >
                                    <option value="">Please Select</option>
                                    <option value="USA">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="CA">Canada</option>
                                </select>
                                {errors.country && (
                                    <p className="text-red-500 text-sm">{errors.country}</p>
                                )}
                            </div>

                            {/* Company */}
                            <div>
                                <label className="block text-red-800 font-medium mb-1">
                                    Company<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.company ? "border-red-500" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-red-800`}
                                />
                                {errors.company && (
                                    <p className="text-red-500 text-sm">{errors.company}</p>
                                )}
                            </div>

                            {/* Partner Category */}
                            <div>
                                <label className="block text-red-800 font-medium mb-1">
                                    Partner Category<span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="partnerCategory"
                                    value={formData.partnerCategory}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.partnerCategory ? "border-red-500" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-red-800`}
                                >
                                    <option value="">Please Select</option>
                                    <option value="Tech">Technology Partner</option>
                                    <option value="Consulting">Consulting Partner</option>
                                    <option value="Supplier">Supplier Partner</option>
                                </select>
                                {errors.partnerCategory && (
                                    <p className="text-red-500 text-sm">{errors.partnerCategory}</p>
                                )}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mt-4">
                            <label className="block text-red-800 font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Please include additional details for our team to review."
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-800"
                            ></textarea>
                        </div>

                        {/* Opt-in */}
                        <div className="mt-4 flex items-center">
                            <input
                                type="checkbox"
                                name="optIn"
                                checked={formData.optIn}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <span className="text-red-800 text-sm">
                                Opt-in to email updates from Leidos. You can update your preferences at any time.
                            </span>
                        </div>

                        {/* Submit */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded-md font-semibold"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>



            <section className="relative w-full bg-gradient-to-r from-red-600 to-red-900 py-16 px-6 md:px-10 overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="relative md:absolute md:inset-0 md:[clip-path:polygon(77%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-pink-500/20 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft">
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
