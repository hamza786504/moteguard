"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi';

const faqs = [
    {
        question: "Army ITES-3S",
        answer:
            "he overall objective of ITES-3S is to provide industry best practice, best value, non-personal services to enable a broad range of enterprise-level support services for IT integration and service management activities to the Army, other DOD agencies and all other Federal agencies, including, but not limited to, locations CONUS, OCONUS and warzone areas. The scope includes Command, Control, Communications, Computers and Information Management (C4IM) requirements as well as services and solutions necessary for the Army and other services to meet current and future DOD-CIO standards.",
    },
    {
        question: "Army Modernization Program (AMP)",
        answer:
            "Multiple Award Contract (MAC) Indefinite Delivery/Indefinite Quantity (IDIQ) awarded by Army Research Laboratory to support requirements of the Army Research Laboratory, the Department of Defense, and other Government agencies. Services include applied research, advanced technology development, and demonstration, validation and operational systems development to support the Army Modernization plan and its priorities. Those priorities are long-range precision fire, next generation combat vehicle, future of vertical lift platforms, advanced Army networks, advanced air and missile defense, and soldier lethality and protection.",
    },
    {
        question: "Army Responsive Strategic Sourcing for Services (RS3)",
        answer:
            "Under this contract, Leidos provides Federal and State Government Agencies and Organizations with world class program management and procurement services for their Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance (C4ISR) and knowledge-based professional engineering services mission requirements.",
    },
    {
        question: "Defense Enclave Services (DES)",
        answer:
            "The Defense Enclave Services (DES) contract provides network modernization to 22 fourth estate agencies and field activities. Under DES, Common Use IT systems are now under a Single Service Provider architecture, including application hosting, storage services, cybersecurity, video services, IT services management, message and directory services, end user support, and network access services.",
    },
    {
        question: "DISA ENCORE III",
        answer:
            "DISA Encore III is a follow-on to the DISA Encore II IDIQ vehicle and focuses on modernizing IT capabilities at the federal level, particularly within DOD. The scope of Encore III includes all activities within the Military Services and DOD. Other Federal agencies may utilize this contract to satisfy their Information Technology (IT) requirements after making the appropriate Economy Act Determination in accordance with Federal Acquisition Regulation (FAR 17.5). IT solutions that can be requested under this contract vehicle encompass a range of capabilities from legacy systems to emerging net-centric technologies, cyber security, mobile environments, web-scale IT, cloud-based disaster recovery and evolving network interfaces. The government can use this vehicle to obtain support covering different operating levels in areas such as Command and Control (C2), Intelligence, Mission support areas, unified capabilities, enterprise services, business systems and other elements of the DOD Information Network (DODIN). The work performed under this contract includes supporting the government by furnishing personnel, materials, travel, services, managed services and other items needed to satisfy the worldwide development, deployment, operation, maintenance and sustainment requirements of DISA and its customers.",
    },
    {
        question: "DISA Systems Engineering Technology Innovation (SETI)",
        answer:
            "SETI is a contract vehicle that has a focused scope to provide new, non-commodity and innovative information technology engineering solutions, embracing cutting-edge technologies and methodologies for mission partners across DOD. The SETI vehicle was designed for current complex and unique requirements, as well as built to be technology-agnostic in order to solve capability gaps in all future mission needs. Mission partners: DOD Offices and Agencies; Office of the Secretary of Defense (OSD); Federal Agencies; Coast Guard; Intelligence Community; Combatant Commands; Joint Staff; Air Force; Army; Marine Corps; Navy; Mission Partner Engagement Office (MEPO); and International Partners.",
    },


    {
        question: "DTIC IAC MAC",
        answer:
            "The broad technical scope (22 different technology areas) of DTIC IAC MAC includes all RDT&E services and other R&D-related analytical services. Authorized Users: DOD components; U.S. Government agencies (federal, state, local); Industry, Academia and other institutions; international organizations in which the U.S. Government is a member or participant; and Foreign Governments or foreign military organizations with which the United States or DOD has international agreements. Task orders may be valued from $15M and up with a POP of up to 5 years (not base plus option, but 5 years).",
    },
    {
        question: "GSA Alliant 2",
        answer:
            "The Alliant 2 GWAC provides Federal Government agencies with integrated Information Technology (IT) solutions for evolving needs on a global basis. This GWAC allows for the application of technology to meet business needs including the ability to perform all current, leading edge and/or emerging IT services required to satisfy all IT services requirements anywhere and anytime worldwide. Alliant 2 provides flexible access to customized IT solutions from a large, diverse pool of industry partners that includes a $75 Billion program ceiling. The scope of the Alliant 2 GWAC includes any and all components of an integrated Information Technology (IT) solution, including all current and any new technologies which may emerge during the lifecycle of the Contract.",
    },
    {
        question: "GSA ASTRO",
        answer:
            "GSA ASTRO is a family of multiple/separate MA-IDIQ contracts that is sponsored by the DOD. This vehicle is administered by GSA FEDSIM. The scope includes operations, maintenance, readiness, research, development, systems integration, and support for manned, unmanned, and optionally manned platforms and/or robotics, as well as the services that support those platforms and robotics.",
    },
    {
        question: "DISA Systems Engineering Technology Innovation (SETI)",
        answer:
            "SETI is a contract vehicle that has a focused scope to provide new, non-commodity and innovative information technology engineering solutions, embracing cutting-edge technologies and methodologies for mission partners across DOD. The SETI vehicle was designed for current complex and unique requirements, as well as built to be technology-agnostic in order to solve capability gaps in all future mission needs. Mission partners: DOD Offices and Agencies; Office of the Secretary of Defense (OSD); Federal Agencies; Coast Guard; Intelligence Community; Combatant Commands; Joint Staff; Air Force; Army; Marine Corps; Navy; Mission Partner Engagement Office (MEPO); and International Partners.",
    },
];

const faqs2 = [
    {
        question: "GSA MAS Professional Services",
        answer:
            "he overall objective of ITES-3S is to provide industry best practice, best value, non-personal services to enable a broad range of enterprise-level support services for IT integration and service management activities to the Army, other DOD agencies and all other Federal agencies, including, but not limited to, locations CONUS, OCONUS and warzone areas. The scope includes Command, Control, Communications, Computers and Information Management (C4IM) requirements as well as services and solutions necessary for the Army and other services to meet current and future DOD-CIO standards.",
    },
    {
        question: "GSA MAS",
        answer:
            "GSA MAS Information Technology (IT) and Office Management offers cutting-edge information technology services, cloud, contact center solutions, digital transformation, AI/ML, systems development, programming, and solutions based IT products. Leidos can offer a complete single-source solution via any of the numerous labor categories including: program managers; software engineers; cloud migration engineers; systems analysts; cyber security specialists; network engineers; and many more.",
    }
];


function ContractVehicles() {
    const [openIndex, setOpenIndex] = useState(null);
    const [openIndex2, setOpenIndex2] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const toggleAccordion2 = (index) => {
        setOpenIndex2(openIndex2 === index ? null : index);
    };
    return (
        <>
           <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Company</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Contract Vehicles
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            Key players in government support, holding major contracts for civilian and defense agencies, including acquisition, delivery, and quantity agreements.
                        </p>
                    </div>
                </div>
            </section>



            <div className="max-w-2xl mx-auto px-3 py-16">
                <p className="text-start text-base md:text-lg mb-8 animate__animated animate__fadeInUp wow">
                    Leidos holds many of the largest and most important government-wide acquisition, indefinite delivery and quantity, blanket purchase agreement, and customer-specific task order contract vehicles in support of civilian and defense agencies. Whether you’re a potential government customer or a prospective supplier, through this listing you can find our technical and professional services under pre-negotiated terms and conditions. Below is a sampling of the notable contracts, schedules, and vehicles Leidos currently holds.
                </p>


                {/* 1st accordion */}
                <h3 className="text-[#6c87a5] text-3xl md:text-5xl leading-normal font-bold mb-10">
                    Governmentwide Multiple Agency Contracts (MACs) and IDIQs
                </h3>
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

                <hr className='mb-10 mt-20' />
                {/* 2nd accordion */}

                <h3 className="text-[#6c87a5] text-3xl md:text-5xl leading-normal font-bold mb-10">
                    GSA Schedules
                </h3>
                <div className="accordion-group">
                    {faqs2.map((faq, index) => (
                        <div
                            key={index}
                            className={`animate__animated animate__fadeInLeft wow accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${openIndex2 === index ? "bg-[#cbced0] border-[#6c87a5]" : ""
                                }`}
                            data-wow-delay={`${index * 0.2}s`}
                        >
                            <button
                                onClick={() => toggleAccordion2(index)}
                                className={`group inline-flex items-center justify-between text-left text-lg font-normal leading-8 w-full transition duration-500 ${openIndex2 === index
                                    ? "font-medium text-[#6c87a5]"
                                    : "text-gray-900 hover:text-[#6c87a5]"
                                    }`}
                            >
                                <h5 className='text-2xl md:text-3xl'>{faq.question}</h5>
                                {openIndex2 === index ? (
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

                            {openIndex2 === index && (
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



            <section>
                <div className='max-w-6xl mx-auto rounded-xl mt-5 py-3 md:p-10 pb-0'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Partner with Leidos Card */}
                        <div className="overflow-hidden transition-all duration-300">
                            <div className="p-4 md:p-8">
                                <h2 className="wow animate__animated animate__fadeInLeft text-4xl font-extralight text-black mb-4">
                                    Capabilities  
                                </h2>
                                <span className="wow animate__animated animate__fadeInLeft inline-block h-2 w-18 bg-[#6c87a5] content-none"></span>
                                <p className="wow animate__animated animate__fadeInLeft text-lg text-gray-600 my-10" data-wow-delay="0.3s">
                                    Our technical core capabilities underpin the work we do for our customers every day. 
                                </p>
                                <Link href={"/insights"} className="wow animate__animated animate__fadeInLeft inline-flex !mx-auto cursor-pointer capitalize bg-[#6c87a5] p-3 mt-0 text-sm md:text-base font-bold text-white rounded-lg px-5 border-none mb-10 hover:bg-[#335f80] hover:text-white items-center justify-center space-x-3" data-wow-delay="0.6s">
                                    <span className='text-nowrap'>View Our Capabilities</span> <FiArrowRight size={18} />
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

        </>
    )
}

export default ContractVehicles
