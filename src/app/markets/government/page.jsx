import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
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


function Government() {
   



    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Markets</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Government
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            Collaborating with government agencies to help citizens thrive
                        </p>
                    </div>
                </div>
            </section>


            <section className="px-3 animate__animated animate__fadeInLeft wow py-16 mx-auto max-w-xl" data-wow-delay="0s">
                <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
                    Our talented employees work alongside government agencies to solve technical challenges and implement newfound efficiencies all with the goal of helping citizens thrive.  We support important programs that expedite identity theft recovery, protect electronic health records, streamline paper tax filings, enhance consumer fraud investigations, support census data collection, and enable scientific research.
                </p>
            </section>

            <section
                className="relative bg-center my-0 py-32 px-2 bg-cover"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/gov.jpg')"
                }}
            >
                {/* <div className='absolute inset-0 bg-black/20 h-full w-full'></div> */}
                <div className="p-10 max-w-4xl rounded-xl text-start mx-auto px-4 md:px-5">
                    <h3 className="animate__animated animate__fadeInUp wow text-white text-center text-3xl md:text-5xl leading-tight" data-wow-delay="0s">
                        Modernizing enterprise IT services
                    </h3>
                    <p className="mt-7 md:max-w-8/12 text-white text-center mx-auto text-sm md:text-base font-normal animate__animated animate__fadeInUp wow" data-wow-delay="0.5s">With the completion of the acquisition of 1901 Group we are combining transformative Enterprise IT Operations Centers and a secure FedRAMP platform with the depth and scale of Leidos to provide truly modernized, mission-critical IT for our customers. </p>
                </div>
            </section>


            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.8s">
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
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp mb-7" data-wow-delay="0.2s">
                            Cybersecurity
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            Our cybersecurity capabilities defend government networks and critical systems from external threats, insider threats, and optimize system resiliency. We provide information assurance capabilities to key federal customers and specialize in transitioning SOCs to a more proactive security intelligence posture and offer expert counsel to government Chief Information Security Officer's (CISO&apos;s).
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border-[#6c87a5] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>VIEW OUR CYBER SOLUTION</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>



                </div>
            </section>

            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp mb-7" data-wow-delay="0.2s">
                            Digital modernization
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            eidos works to strike the right balance in legacy IT modernization by implementing complex IT and application solutions aligned with organizational objectives, information security compliance, and change management best practices. Our experts design, integrate, operate, and maintain network, platform, and application solutions that improve the agility of headquarters and field offices alike.
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border-[#6c87a5] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>LEARN MORE</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.8s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/cyber.jpg"
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
                                src="/images/cyber.jpg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp mb-7" data-wow-delay="0.2s">
                            Forms processing
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            We operate and maintain two high-performance systems that streamline the processing of more than 100 million IRS paper tax filings, information returns, and remittances annually. We oversee the conversion of paper tax filings and information returns to electronic forms as well as the data capture, management, and storage of sensitive taxpayer records.
                        </p>
                    </div>
                </div>
            </section>

            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp mb-7" data-wow-delay="0.2s">
                            Health
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            A leading provider of health solutions for federal and select non-federal customers, Leidos has vast expertise in health digital modernization, mission software systems, managed health services, and life sciences.
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border-[#6c87a5] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>LEARN MORE</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.8s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/cyber.jpg"
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
                                src="/images/OperationsLogistics.webp"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp mb-7" data-wow-delay="0.2s">
                            Operations & logistics
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            As the contractor responsible for running the world’s longest supply chain to Antarctica, we excel at fulfilling logistics requirements whether they are for long-term sustainment or short-term training. Our logisticians take pride in orchestrating the moving parts so that you can go about your important work more efficiently.
                        </p>
                    </div>
                </div>
            </section>

            <section className="overflow-x-hidden bg-gradient-to-r from-[#cbced0] via-[#e6e5e7] to-[#e6e5e7] py-0">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Content */}
                    <div className="p-20 px-5 md:p-14 w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#6c87a5] wow animate__animated animate__fadeInUp mb-7" data-wow-delay="0.2s">
                            Mission software systems
                        </h2>
                        <p className="mt-4 text-gray-700 text-lg wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            To build effective technology solutions, you must first have a critical understanding of the important work of the customer, their core mission and priority outcomes. Our mission software systems are designed to manage complexity in environments that require precision, speed, and scale in equal measure.
                        </p>
                        <div className="mt-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <Link
                                href="#"
                                className="space-x-3 inline-flex items-center px-6 py-3 border-2 border-[#6c87a5] text-[#6c87a5] font-semibold rounded-full hover:bg-[#6c87a5] hover:text-white transition-colors duration-300"
                            >
                                <span>LEARN MORE</span> <BsArrowRight size={22} />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center relative wow animate__animated animate__fadeInRight" data-wow-delay="0.8s">
                        <div className="relative w-full h-[500px]">
                            <Image
                                src="/images/cyber.jpg"
                                alt="Get it on iBooks"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="overflow-x-hidden py-16 px-3 md:px-0">
                <div className="me-0 ms-auto pb-10 md:pb-0 max-w-5xl shadow-sm shadow-[#cbced0] bg-gradient-to-r to-[#a8a7a9] from-white/0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className='flex flex-col justify-center p-10'>
                            <h4 data-wow-delay="0s" className='animate__animated animate__fadeInLeft wow text-2xl md:text-4xl text-[#6c87a5] mb-5'>Success Stories</h4>
                            <p data-wow-delay="0.3s" className="animate__animated animate__fadeInLeft wow text-start text-gray-900 text-base md:text-lg">Trusted expertise for government programs and commercial energy projects</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 p-5 wow animate__animated animate__fadeInRight">
                            <div>
                                <Image
                                    src="/images/insights/insight1.jpg"
                                    alt="logo"
                                    width={400}
                                    height={400}
                                    className=""
                                    priority // Add this for important images
                                />
                            </div>
                            <div>
                                <Image
                                    src="/images/insights/insight1.jpg"
                                    alt="logo"
                                    width={400}
                                    height={400}
                                    className=""
                                    priority // Add this for important images
                                />
                            </div>
                            <div>
                                <Image
                                    src="/images/insights/insight1.jpg"
                                    alt="logo"
                                    width={400}
                                    height={400}
                                    className=""
                                    priority // Add this for important images
                                />
                            </div>
                            <div>
                                <Image
                                    src="/images/insights/insight1.jpg"
                                    alt="logo"
                                    width={400}
                                    height={400}
                                    className=""
                                    priority // Add this for important images
                                />
                            </div>
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

export default Government;
