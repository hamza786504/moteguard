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

function EthicsAndBusinessIntegrity() {
    const [tabSwitch, setTabSwitch] = useState("history");
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
                            Ethics & Business Integrity
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            We set the highest professional expectations.
                        </p>
                    </div>
                </div>
            </section>


            <div className="section max-w-xl mx-auto px-3 py-16 space-y-4">
                <p className="md:text-lg text-base text-normal text-start animate__animated animate__flipInX wow">
                    Leidos maintains the highest standards of integrity and ethical behavior. Our robust policies, procedures, training, and communications create a comprehensive program, cultivating a culture of integrity that touches every aspect of employee conduct.
                </p>
                <div className="my-10 flex items-center justify-center flex-col md:flex-row flex-wrap">
                    <div className="w-full md:w-1/2">
                        <p className="animate__animated animate__fadeInLeft wow text-normal text-start md:text-lg text-base" data-wow-delay="0.2s">
                            Leidos maintains the highest standards of integrity and ethical behavior. Our robust policies, procedures, training, and communications create a comprehensive program, cultivating a culture of integrity that touches every aspect of employee conduct.
                        </p>
                        <button
                            className="animate__animated animate__fadeInLeft wow px-5 py-3 md:px-5 md:py-2 font-medium rounded-3xl mt-5 text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap uppercase text-sm md:text-base" data-wow-delay="0.5s"
                        >
                            contact us
                        </button>
                    </div>
                    <div className="mt-10 md:mt-0 w-full md:w-1/2 relative h-60 wow animate__animated animate__fadeInRight">
                        <Image
                            src="/images/ethisphere.webp"
                            alt="image"
                            layout='fill'
                            className="animate__animated animate__fadeInRight w-full h-40 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out" data-wow-delay="0.7s"
                        />
                    </div>
                </div>
                <p className="md:text-lg text-base text-normal text-start animate__animated animate__flipInX wow">
                    We have a strong history of performance resting on our foundation of integrity. This foundation supports an environment where ethics and compliance is everyone's responsibility. Leidos employees proudly embrace these standards through their work and interactions. Managers at all levels must model the behavior they expect from their teams, and reinforce those values to promote a strong ethical culture within their organizations.
                </p>
                <hr className='my-10' />
                <div className="flex flex-wrap space-x-2 flex-row">
                    <a href='#file-a-report' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">File a report</a>
                    <a href='#ethics-program-structure' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Ethics Program Structure</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">History of Ethics</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Code of Conduct</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Compliance</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Anti-Corruption</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Human Trafficking</a>
                </div>


                <div id="file-a-report" className='flex flex-col items-start md:items-center'>
                    <h3 className="text-start md:text-center font-bold text-3xl md:text-4xl my-5 text-[#6c87a5] md:my-3">
                        Report an Ethics Concern
                    </h3>
                    <p className="text-start md:text-center md:text-lg text-base">We take every report seriously and have zero tolerance for retaliation of any kind against individuals who, in good faith, raise questions or report concerns.</p>
                    <Link href={"/"} className="text-start md:text-center md:mx-auto inline-flex my-5 items-center justify-center md:p-3 p-2 px-4 md:px-6 rounded-3xl bg-[#6c87a5] border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] space-x-2 hover:border-[#335f80] border mb-2 text-white"><span>File a Report</span> <BsArrowRight className='text-white' size={20} /></Link>
                </div>
            </div>


            <section className="max-w-4xl mx-auto px-2">
                <div id="ethics-program-structure">
                    <div className="flex items-center justify-center md:space-x-4 space-x-3">
                        <button className={`p-1 px-1 md:px-3 rounded-3xl bg-transparent text-base md:text-lg mb-2   font-bold hover:text-[#335f80] cursor-pointer ${tabSwitch === "history" && "text-[#335f80]"}`} onClick={() => { setTabSwitch("history") }}>
                            History of Ethics
                        </button>
                        <button className={`p-1 px-1 md:px-3 rounded-3xl bg-transparent text-base md:text-lg mb-2  font-bold hover:text-[#335f80] cursor-pointer ${tabSwitch === "structure" && "text-[#335f80]"}
                        `} onClick={() => { setTabSwitch("structure") }}>
                            Ethics Program Structure
                        </button>
                    </div>
                    <hr className="mt-5 mb-10" />
                    <div className="content">
                        {tabSwitch === "history" ? (
                            <>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">
                                    The Leidos foundation was built on a commitment to ethics since the company’s inception in 1969.
                                </p>

                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.2s">
                                    Ethical conduct is a hallmark of our business, and we commit to corporate integrity and compliance throughout all levels of the company. Leidos established ethics and compliance as a cornerstone of employee behavior by forming the Employee Ethics Council (EEC) in 1984. Comprised of representatives from across the enterprise, the EEC sought to embed ethics into our business culture. EEC members worked closely with line managers to identify and escalate ethics and compliance issues in their organization. EEC members also served as one of the eight channels for employees to report violations of the Leidos Code of Conduct and other ethics concerns.
                                </p>

                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.4s">
                                    Leidos pioneered a number of industry best practices in developing its Ethics and Compliance Programs. Leidos was one of the early signatories to the <strong className="text-[#6c87a5]">Defense Industry Initiative on Business Ethics and Conduct (DII)</strong>, an organization made up of companies from the aerospace and defense industry whose mission is to promote and advance a culture of ethical conduct among government contractors. Leidos is now considered a leader among the nearly 80 companies that comprise the DII. In 2020, Chairman and former CEO Roger Krone was elected to the DII Steering Committee and served as Vice Chair. The Chief Compliance Officer served as the Vice Chair of the DII Working Group.
                                </p>

                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.6s">
                                    In 1988, the Board of Directors created the Ethics and Corporate Responsibility Committee, currently known as the Corporate Ethics and Governance Committee (CGEC), comprised of board members responsible for reviewing and recommending policies and procedures that maintain a business environment committed to high standards of ethics, integrity, sustainability, and legal compliance. The Board’s close oversight of the company’s Ethics and Compliance Program is now considered to be a best practice in the defense industry.
                                </p>

                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.8s">
                                    In 2005, Leidos created a senior management position to oversee the Ethics and Compliance Program. Today, the Chief Compliance Officer, reports to the Chief Executive Officer and the Board Chair of the CGEC. Through comprehensive training, continuous communications and leadership actions, these efforts help to embed a values-based program into everyday activities across the enterprise.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">
                                    Leidos&apos; Ethics and Business Integrity Office is responsible for administering the Ethics and Compliance Program. The Ethics and Compliance Program seeks to continuously strengthen our culture of uncompromising integrity by promoting ethics through a variety of initiatives. Ethical business conduct is the responsibility of every employee. In fact, integrity is the first of the six stated Leidos values that employees are expected to emulate and aspire to exemplify. Leidos defines this value of integrity as "having the courage to make tough ethical decisions, taking pride in our work, being transparent with our team, and being respectful of everyone."
                                </p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.2s">
                                    Combining policies, procedures, training and communications, the Leidos Ethics and Compliance Program is comprehensive and touches every aspect of employee conduct. Current employees stand on the shoulders of those who founded the company in 1969 and who established its solid reputation over the decades. The company’s continued success stems from a culture that recruits and retains outstanding individuals committed to preserving its reputation.
                                </p>
                                <h4 className="text-2xl md:text-3xl text-[#6c87a5] font-semibold md:mb-10 mb-5 ">
                                    Code of Conduct
                                </h4>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.4s">Leidos has a strong culture of ethics and integrity. Our Code of Conduct is a broad statement of principles for conducting business according to the highest ethical standards. It applies to all Leidos subsidiaries and is available in eight languages. </p>
                                <button className="mb-5 flex my-5 items-center justify-center md:p-3 p-2 px-4 md:px-6 rounded-3xl bg-[#6c87a5] border-[#6c87a5] text-baes md:text-base hover:bg-[#335f80] space-x-2 hover:border-[#335f80] border text-white animate__animated animate__fadeInLeft wow" data-wow-delay="0.6s" >
                                    Access the Code of Conduct
                                </button>
                                <h4 className="mt-10 animate__animated animate__fadeInLeft wow text-2xl md:text-3xl text-[#6c87a5] font-semibold md:mb-10 mb-5" data-wow-delay="0.8s">
                                    Policies and Procedures
                                </h4>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="1s">The <strong className="text-[#6c87a5]">Code of Conduct</strong> (the Code) is the basis of Leidos corporate policies and practices and is designed to promote ethical business conduct and compliance with the law. All employees are required to conduct all business affairs ethically, to comply with the Code, and certify they read and understand the Code as part of their annual required training. The Leidos core values of integrity, inclusion, innovation, agility, collaboration, and commitment are emphasized in the Code and are the foundation of our culture.</p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">The Standards of Business Ethics and Conduct at Leidos is the foundational policy of the Ethics and Compliance Program. The Ethics Review Board (ERB), an executive management committee, meets quarterly in conjunction with an Audit Review Board and Enterprise Risk Management Committee, to review significant enterprise ethics and compliance matters and strengthen the ability to review risks across the company.</p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">The Chief Compliance Officer reports to the ERB on a range of issues, including significant ethics cases, trends, disciplinary actions, remedial measures, compliance risks, policy issues, training, communications, and new developments and initiatives. Members of the ERB include the CEO, Chief Financial Officer, General Counsel, Chief Compliance Officer, Chief Human Resources Officer and Head of Business Partnerships, Sector Presidents and corporate functional executives.</p>
                                <h4 className="text-xl md:text-3xl text-[#6c87a5] font-bold mb-10 ">
                                    Corporate Governance and Ethics Committee
                                </h4>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">The Chief Compliance Officer reports quarterly to the CGEC of the Leidos Board of Directors. The CGEC charter establishes its oversight of ethics policies and practices, including ethics awareness training, case trends disciplinary actions, and conflicts of interest. In order to provide effective oversight, the CGEC keeps itself knowledgeable about ethics and compliance conditions and trends in the broader industry and within Leidos.</p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">The CGEC also reviews policies and practices in the areas of sustainability, including the safety and protection of the environment; charitable contributions; and political, social and environmental issues that may affect the company's business operations, performance, public image or reputation.</p>
                                <h4 className="text-xl md:text-3xl text-[#6c87a5] font-bold mb-10 ">
                                    Ethics Training and Communications
                                </h4>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">The Ethics and Business Integrity Office promotes a culture of integrity at Leidos and provides ethics and compliance training, communications, and guidance to create a transparent environment and informed employee population.</p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">The Code and annual Ethics Awareness training reinforce Leidos’ core values and provide important information related to many key compliance and risk areas. The Code and ethics awareness training are updated annually, and our CEO delivers opening remarks in the training to reinforce our commitment to ethics, integrity, behavior, and accountability. Ethics Awareness training must be completed annually by all employees, including part-time employees.</p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">Other required annual courses for Leidos employees include labor charging, security awareness, and diversity, equity and inclusion training. Employees that work on certain programs and in specific job functions must also complete role-based compliance training. New Leidos employees must complete these required trainings within their first 30 days of employment along with environmental, health, and safety training. Other courses may be required based on an employee's role. </p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">Each year, the Ethics and Business Integrity Office endeavors to find new and innovative ways to underscore the importance of ethical decision-making for all employees. Using robust communications campaigns, the program routinely publishes a variety of ethics and compliance-related information by email directly to employees and also on the Leidos intranet. Articles and announcements posted to the intranet include sections for employees to provide comments and feedback, which promotes a two-way dialogue and candid conversation.</p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">As part of the office’s continuing efforts to promote transparency and confidence in its robust and independent investigation process, The Chief Compliance Officer publishes an annual all-employee email titled “Ethics Year in Review.” The email provides an overview of the company’s investigative process and activity from the previous year in an effort to be candid about the office’s efforts to promote a culture of ethics and integrity. The message provides detailed data about ethics-related cases, including the number and nature of cases investigated, the number of employees involved, the substantiation rate, and the remediation taken, including number of terminations.</p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">Further, the Ethics and Business Integrity Office periodically publishes “Ethics in the News,” highlighting recent, non-Leidos ethics and compliance-related news items. These articles reinforce the importance of Leidos values and acting with integrity at all times. The company encourages employees to use “Ethics in the News” as a resource to facilitate discussions about ethics with their colleagues and others they interact with on a daily basis.</p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">As a companion piece to “Ethics in the News,” the Ethics and Business Integrity Office publishes a series titled “Let’s Talk Ethics.” The articles feature actual Leidos ethics cases, including any corrective actions, where employees engaged in activities contrary to Leidos policies and the Code. The intent is to highlight and reinforce policies and procedures. </p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">The Ethics and Business Integrity Office engages in an ongoing ethics and awareness campaign to focus all employees on the necessity of ethical behavior and to emphasize its commitment that ethics concerns will reach the right people, that swift corrective action will be taken in valid ethics cases, and that the company has zero tolerance for retaliation of any kind.</p>
                                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s"> The campaign message is simple and clear: Protect Leidos and customer assets; foster a safe and healthy work environment; respect human rights; deal fairly and honestly with customers, third parties and public officials; conduct international business properly; report misconduct; and protect colleagues from retaliation. In sum, do the right thing every day. Leidos leadership and the Ethics and Business Integrity Office remain focused on increasing employees' understanding of how the Code of Conduct translates into day-to-day work experiences.</p>
                            </>
                        )}

                    </div>


                    <div className="py-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
                </div>

            </section>
        </>
    )
}

export default EthicsAndBusinessIntegrity
