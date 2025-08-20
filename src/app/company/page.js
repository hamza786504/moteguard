import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';


const values = [
    {
        title: "Integrity",
        description:
            "Is having the courage to make tough ethical decisions, taking pride in our work, being transparent with our team, and being respectful of everyone.",
        icon: "/images/ICON-Agility_0.webp",
    },
    {
        title: "Inclusion",
        description:
            "Is fostering a sense of belonging, welcoming all perspectives and contributions, and providing equal access to opportunities and resources for everyone.",
        icon: "/images/ICON-Collaboration.webp",
    },
    {
        title: "Innovation",
        description:
            "Is not limited to our engineers and scientists. It is acting as a catalyst. Being tenacious and curious to help us excel and be a part of a learning organization.",
        icon: "/images/ICON-Commitment.webp",
    },
    {
        title: "Agility",
        description:
            "Is being flexible, creative, and resilient. It is our ability to think and act small while using the size and strength of our balance sheet to our advantage.",
        icon: "/images/ICON-Inclusion.webp"
    },
    {
        title: "Collaboration",
        description:
            "Is being team-oriented and proactively engaging to meet shared objectives. It is about building relationships and staying connected with each other.",
        icon: "/images/ICON-Innovation.webp",
    },
    {
        title: "Commitment",
        description:
            "Is being accountable, taking ownership, modeling servant leadership, and operating with a sense of urgency to our customers and teams.",
        icon: "/images/ICON-Integrity.webp",
    },
];

function Company() {


    return (
        <>


            <section className="relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="h-[200px] md:h-[300px] flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft">
                    <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Company
                        </h2>
                    </div>
                </div>
            </section>





            <section className="w-full py-16 px-2 md:px-10 text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-light text-black text-center mb-10">Values</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                className="animate__animated animate__fadeInUp wow bg-gradient-to-r border-[#a8a7a9] border-2 text-center text-black rounded-md p-6 shadow-md transition hover:shadow-lg py-10"
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





            <section className="max-w-6xl mx-auto bg-white dark:bg-gray-900">
                <div className="container px-2 md:px-6 py-12 mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold text-gray-700">Do you have any feedback for us?</h1>
                    <div className="overflow-x-hidden flex flex-col-reverse md:flex-row items-start md:p-10 lg:flex lg:items-center">
                        <div className="wow animate__animated animate__fadeInLeft mt-8 lg:w-1/3 lg:mx-6">
                            <h1 className="text-lg font-semibold text-gray-800 capitalize dark:text-white lg:text-2xl">
                                Contact us for more info
                            </h1>

                            <div className="mt-6 space-y-8 md:mt-8">
                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#6c87a5] dark:text-[#6c87a5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                        Cecilia Chapman 711-2880 Nulla
                                        St. Mankato Mississippi 96522
                                    </span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#6c87a5] dark:text-[#6c87a5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(257) 563-7401</span>
                                </p>

                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-[#6c87a5] dark:text-[#6c87a5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">acb@example.com</span>
                                </p>
                            </div>

                            <div className="mt-6 w-80 md:mt-8">
                                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                                <div className="flex mt-4 -mx-1.5 ">
                                    <Link href="/" className="mx-1.5 dark:hover:text-[#6c87a5] text-gray-400 transition-colors duration-300 transform hover:text-[#6c87a5]">
                                        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                                        </svg>
                                    </Link>

                                    <Link href="/" className="mx-1.5 dark:hover:text-[#6c87a5] text-gray-400 transition-colors duration-300 transform hover:text-[#6c87a5]">
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                            <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                            <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                        </svg>
                                    </Link>

                                    <Link href="/" className="mx-1.5 dark:hover:text-[#6c87a5] text-gray-400 transition-colors duration-300 transform hover:text-[#6c87a5]">
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                        </svg>
                                    </Link>

                                    <Link href="/" className="mx-1.5 dark:hover:text-[#6c87a5] text-gray-400 transition-colors duration-300 transform hover:text-[#6c87a5]">
                                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>


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

export default Company