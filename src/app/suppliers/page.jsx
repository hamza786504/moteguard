import ContactForm from '@/components/ContactForm'
import TextOverColor from '@/components/TextOverColor'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FiArrowRight } from 'react-icons/fi'

function Suppliers() {
    return (
        <>
            <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
                    <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            For Suppliers
                        </h2>
                        <p className="text-base md:text-lg text-white my-3">
                            Our suppliers and subcontractors are critical to our success, and we are committed to teaming with suppliers that best fit our needs and those of our customers. We are especially committed to teaming with our small business partners to leverage their diverse strengths.
                        </p>
                    </div>
                </div>
            </section>


            <section className="max-w-2xl py-16 mx-auto">
                <div className="flex flex-wrap space-x-2 mb-3 flex-row">
                    <a href='#file-a-report' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">File a report</a>
                    <a href='#ethics-program-structure' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Ethics Program Structure</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">History of Ethics</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Code of Conduct</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Compliance</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Anti-Corruption</a>
                    <a href='#' className="p-1 px-3 rounded-3xl bg-transparent border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] hover:border-[#335f80] border mb-2 hover:text-white">Human Trafficking</a>
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


            <section className="max-w-2xl mx-auto py-16 px-3">
                <div id="file-a-report" className='flex flex-col items-start '>
                    <h3 className="text-start mb-8 font-bold text-3xl md:text-4xl my-5 text-[#6c87a5]">
                        Start doing business with Leidos
                    </h3>
                    <p className="text-start md:text-lg text-base">Thanks for your interest in doing business with Leidos. To be a supplier for Leidos, you must first be invited by a Leidos team member. We encourage you to reach out to our program or growth teams to discuss your capabilities and line cards. We recommend exploring our website to learn more about Leidos before reaching out.</p>
                    <p className="text-start my-5 md:text-lg text-base">If you are already a registered Leidos supplier, use the link below to login to your supplier profile. To ensure a mutually beneficial relationship, please include in your supplier profile the NAICS codes, commodities and a short description of your core capabilities. Note that registration in our supplier portal does not necessarily qualify you as a supplier or guarantee work with Leidos.</p>
                    <Link href={"/"} className="text-start md:mx-auto inline-flex my-5 items-center justify-start md:p-3 p-2 px-4 md:px-6 rounded-3xl bg-[#6c87a5] border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] space-x-2 hover:border-[#335f80] border mb-2 text-white"><span>Supplier Portal Link</span> <BsArrowRight className='text-white' size={20} /></Link>
                    <br />

                    <h3 className="text-start mb-8 font-bold text-3xl md:text-4xl my-5 text-[#6c87a5]">
                        Accounts Payable and Invoicing
                    </h3>
                    <p className="text-start md:text-lg text-base">We appreciate your business! To ensure a seamless invoicing process and timely payments, please review the Leidos Accounts Payable Invoicing Welcome Guide. This document contains all the information you need on the following:</p>
                    <Link href={"/"} className="text-start md:mx-auto inline-flex my-5 items-center justify-start md:p-3 p-2 px-4 md:px-6 rounded-3xl bg-[#6c87a5] border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] space-x-2 hover:border-[#335f80] border mb-2 text-white"><span>View The Guide</span> <BsArrowRight className='text-white' size={20} /></Link>
                </div>
            </section>


            <TextOverColor heading="Ethics and Supplier Code of Conduct" paragraph="Our suppliers are vital to the success of Leidos. Our goal is to partner with responsible companies that share both our values and our commitment to high ethical standards. The Leidos Supplier Code of Conduct (the Code) outlines our expectations for suppliers, including their employees, personnel, agents, and subcontractors. Suppliers must adhere to the Code and uphold our value of integrity while conducting business with or on behalf of Leidos." btns={[{ text: "Supplier Code of Conduct", href: "/" }]} />
            <span className='my-16 block'></span>

            <TextOverColor heading={`"Small business is good business"`} paragraph="At Leidos, partnering with small businesses is more than a commitment—it's a core part of our business strategy and supported at the highest levels of management. Our dedication to small businesses is deeply ingrained in our history, as Leidos was once a small business itself." btns={[{ text: "Inside our small business strategy", href: "/" }]} />




            <section className="max-w-2xl mx-auto py-16 px-3">
                <div id="file-a-report" className='flex flex-col items-start '>
                    <h3 className="text-start mb-8 font-bold text-3xl md:text-4xl my-5 text-[#6c87a5]">
                        Small business development program
                    </h3>
                    <p className="text-start md:text-lg text-base">We believe small businesses, including small disadvantaged, women-owned, veteran-owned, HUBzone companies and historically black colleges and universities as well as minority institutions bring good capabilities and technical know-how to assist Leidos and better serve our customers.</p>
                    <br />
                    <br />
                    <h3 className="text-start mb-8 font-bold text-3xl md:text-4xl my-5 text-[#6c87a5]">
                        Small business profile database
                    </h3>
                    <p className="text-start my-5 md:text-lg text-base">Our database allows small businesses the opportunity to submit or update their company's capabilities and past performance information directly to our line organizations. Additionally, we offer the following links to the Small Business Program sites of our customers. These links will provide important updates regarding small business contracting and subcontracting regulations.</p>


                    <h3 className="text-start mb-8 font-bold text-3xl md:text-4xl my-5 text-[#6c87a5]">
                        Supplier diversity
                    </h3>
                    <p className="text-start md:text-lg text-base">We believe that a focus on inclusion and diversity across Leidos improves team performance, influences innovative business strategies and drives positive results by advancing our workforce, cultivating an inclusive workplace and advancing our reputation in the marketplace. This extends through our supply chain, where the inclusion of minority-owned and operated businesses is fundamental to our ability to meet the important missions of our customers. </p>
                    <br />
                    <br />
                    <h3 className="text-start mb-8 font-bold text-3xl md:text-4xl my-5 text-[#6c87a5]">
                        SLATE
                    </h3>
                    <p className="text-start my-5 md:text-lg text-base">SLATE is a Leidos web-based claim submission tool hosted by our partner Unanet. Suppliers using the SLATE tool are required to log their Labor and Expense claims on a daily, or weekly, basis to be approved for processing NLT Sunday (the end of the work week).</p>
                    <button className="animate__animated animate__fadeInRight mb-12 animate__delay-2s cursor-pointer capitalize bg-[#6c87a5] p-2 mt-8 text-sm md:text-lg font-bold text-white rounded-lg px-5 border-none hover:bg-[#335f80] flex items-center justify-start space-x-3">
                        <span className="text-nowrap">Learn about our solution</span>{' '}
                        <FiArrowRight size={18} />
                    </button>
<h3 className="text-start mb-8 font-bold text-3xl md:text-4xl my-5 text-[#6c87a5]">
                        Sustainability and social responsibility
                    </h3>
                    <p className="text-start my-5 md:text-lg text-base">Leidos is committed to advancing Global Citizenship in all aspects of our business, including our procurement activities. We understand the potential effects our procurement decisions have both on the environment and in our communities, and we support operating in a socially and environmentally responsible manner including the protection of internationally proclaimed human rights. Principles of sustainability are woven into the fabric of Leidos culture through our mission, vision, and corporate values. We are committed to a management approach that protects the environment by avoiding, mitigating, and remediating negative impacts of our operations. We expect our suppliers to comply with all local environmental, health, and safety regulations and encourage them to join us in protecting the environment by informing us of environmentally preferable product offerings, using processes, materials, and transportation methods that support sustainability of the environment throughout the supply chain (e.g., applying energy-efficient, environmentally friendly technologies to reduce waste, and emissions to air, water, and soil). Further, we expect our suppliers to not engage in the discrimination of employees or discriminate in the selection of lower-tier suppliers on the basis of sex, race, color, age, religion, creed, sexual orientation, national origin or citizenship, ancestry, disability, marital status, gender identity, military or veteran status, or any other basis protected by law.</p>
                            <h3 className="text-start mb-8 font-bold text-3xl md:text-4xl my-5 text-[#6c87a5]">
                        Health and safety questionnaire
                    </h3>
                    <p className="text-start my-5 md:text-lg text-base">Before issuing a subcontract or task order for fieldwork, a subcontractor&apos;s safety qualifications must be reviewed and approved by the Leidos Corporate Health & Safety department.</p>
                    <p className="text-start my-5 md:text-lg text-base">If you're a contractor working with our Energy, Infrastructure & Automation or Climate, Energy & Environment operations, complete the following form.</p>
                    <button className="animate__animated animate__fadeInRight mb-12 animate__delay-2s cursor-pointer bg-[#6c87a5] p-2 mt-8 text-sm md:text-lg font-bold text-white rounded-lg px-5 border-none hover:bg-[#335f80] flex uppercase items-center justify-start space-x-3">
                        <span className="text-nowrap">Download questionnaire</span>{' '}
                        <FiArrowRight size={18} />
                    </button>



                      <h3 className="text-start mb-8 font-bold text-3xl md:text-4xl my-5 text-[#6c87a5]">
                        Closeout procedures
                    </h3>
                    <p className="text-start my-5 md:text-lg text-base">We would like to express our sincere thanks for your efforts to help Leidos meet our business objectives with uncompromising integrity and business ethics.</p>
                    <button className="animate__animated animate__fadeInRight mb-12 animate__delay-2s cursor-pointer bg-[#6c87a5] p-2 mt-8 text-sm md:text-lg font-bold text-white rounded-lg px-5 border-none hover:bg-[#335f80] flex uppercase items-center justify-start space-x-3">
                        <span className="text-nowrap">Federal Subcontractor</span>{' '}
                        <FiArrowRight size={18} />
                    </button>

                </div>
            </section>

            <ContactForm />
        </>
    )
}

export default Suppliers
