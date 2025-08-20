import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

function JobSearch() {
    return (
        <>
            <section>
                <div className='max-w-6xl mx-auto rounded-xl mt-5 p-3 md:p-10 pb-0'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Partner with Leidos Card */}
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="p-4 md:p-8">
                                <h2 className="wow animate__animated animate__fadeInLeft text-4xl font-extralight text-black mb-4">
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
                        <div className="relative flex items-center justify-center mt-0 md:mt-10 transition-all duration-300">
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

            <section>
                <div className='max-w-6xl mx-auto rounded-xl mb-5 pt-0 p-3 md:p-10'>
                    <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-0">
                        {/* Partner with Leidos Card */}
                        <div className="relative flex items-center justify-center transition-all duration-300">
                            <div
                                className="h-[300px] lg:h-[400px] w-full bg-[#6c87a5] rotate-z-0"
                                style={{ clipPath: 'polygon(100% 0%,100% 30%,0% 100%,0% 100%,0 0)' }}
                            ></div>

                            {/* Using fill layout - parent must have position and dimensions */}
                            <div className="wow animate__animated animate__fadeInLeft absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 w-10/12 h-[300px] lg:h-[400px]">
                                <Image
                                    src="/images/insights/insight1.jpg"
                                    alt="Partner with Leidos"
                                    fill
                                    className="object-contain"
                                    priority={true}
                                />
                            </div>
                        </div>

                        {/* Job Search Card */}
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="flex flex-col justify-center px-0 pt-16 md:p-16 pb-0">
                                <h2 className="wow animate__animated animate__fadeInRight text-3xl font-bold text-gray-900 mb-4">
                                    Job Search
                                </h2>
                                <p
                                    className="wow animate__animated animate__fadeInRight text-lg text-gray-600 mb-6"
                                    data-wow-delay="0.3s"
                                >
                                    Your most important challenge is ahead, take the next step in your
                                    career and explore the opportunities at Leidos.
                                </p>
                                <div
                                    data-wow-delay="0.6s"
                                    className="wow animate__animated animate__fadeInRight flex flex-wrap md:flex-nowrap gap-4"
                                >
                                    <input
                                        type="text"
                                        placeholder="Enter keyword, job ID, or title"
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 h-12 focus:ring-[#335f80] focus:border-[#335f80] outline-none transition-all"
                                    />
                                    <button className="w-full md:w-auto mb-32 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap">
                                        Search jobs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default JobSearch
