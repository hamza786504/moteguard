import TextOverColor from '@/components/TextOverColor'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Employees() {
    return (
        <>
            <section className="mb-16 md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            For Employees
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            This page provides internal tools and support for employees of Leidos. Your username and password are required to access these resources.
                        </p>
                    </div>
                </div>
            </section>


            <div className="bg-gradient-to-r px-3 py-3 md:py-16 from-[#335f80] to-[#6c87a5]">
                <div className="max-w-6xl text-center mx-auto">
                    <h3 className="mb-8 text-white font-bold text-start text-3xl md:text-4xl">
                        Quick links
                    </h3>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0s">
                            <Image
                                src="/images/Dell Logo.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.2s">
                            <Image
                                src="/images/AWS_logo_RGB_0_0.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.4s">
                            <Image
                                src="/images/Carahsoft-Blue-Logo-Print.jpg"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.6s">
                            <Image
                                src="/images/new intel logo.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                    </div>
                    <Link href={"/"} className='capitalize text-base md:text-lg text-white p-3 px-5 rounded-full bg-[#6c87a5] hover:bg-[#335f80] mx-auto mt-10 inline-block'>New employee account setup</Link>
                </div>
            </div>


            {/* Image with text */}
            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}


                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/ANTAR.jpeg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                            Antarctic Support Contract
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Operating the world's longest supply chain to support research done through the National Science Foundation&apos;s U.S. Antarctic Program
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border[#335f80] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>READ ABOUT HOW WE DO IT</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>



            {/* Image with text */}
            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                            Antarctic Support Contract
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Operating the world's longest supply chain to support research done through the National Science Foundation&apos;s U.S. Antarctic Program
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border[#335f80] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>READ ABOUT HOW WE DO IT</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/ANTAR.jpeg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <TextOverColor
                heading="Elevate your career from within"
                paragraph="Ready to grow your career? Explore internal job openings across Leidos and find your next opportunity to advance, learn, and make an even greater impact."
                btns={[{ text: "Explore internal opportunities", href: "/" }]}
            />



            {/* Image with text */}
            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}


                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/ANTAR.jpeg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp leading-tight" data-wow-delay="0.2s">
                            Antarctic Support Contract
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Operating the world's longest supply chain to support research done through the National Science Foundation&apos;s U.S. Antarctic Program
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border[#335f80] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>READ ABOUT HOW WE DO IT</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Employees
