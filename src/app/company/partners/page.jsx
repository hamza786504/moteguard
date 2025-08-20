import ContactForm from '@/components/ContactForm';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Partners() {

    return (
        <>
            <section className="relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="h-[200px] md:h-[300px] flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft">
                    <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Company</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Partners
                        </h2>
                    </div>
                </div>
            </section>


            <section className="py-16 max-w-4xl mx-auto px-3">
                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0s">Leidos suppliers are critical to the company and customer's success. Our Leidos Alliance members share our customer-focused commitments and encapsulate our mission to make the world safer, healthier, and more efficient through technology, engineering, and science. </p>
                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.2s">The Leidos Alliance builds connections through partnership and collaboration that drives innovation, advances technology and builds efficiency. The program leverages the deep expertise of our supplier base and ensures every solution delivers customer mission success and is comprised of three levels: Corporate Alliance, Technology Alliance, and Emerging Technology Partners.</p>
                <p className='text-base md:text-lg text-start mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.4s">These companies have demonstrated proven, low-risk solutions with Leidos and on their own that have a significant benefit to the customer.</p>
            </section>

            <section className="max-w-2xl text-center mb-10 px-3 mx-auto">
                <h4 className="text-3xl md:text-5xl font-bold text-[#6c87a5] my-10 animate__animated animate__fadeInLeft wow" data-wow-delay="0s">
                    Corporate Alliance Partners
                </h4>
                <p className='text-base text-center md:text-base mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.2s">Our Corporate Alliance Partners are true collaborators through joint investment, R&D, that have strong technical capabilities underscored with a well-established relationship with Leidos.</p>
            </section>

            <div className="bg-gradient-to-r px-3 py-3 md:py-16 from-[#335f80] to-[#6c87a5]">
                <div className="max-w-6xl mx-auto">
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
                </div>
            </div>





            <section className="max-w-2xl text-center mb-10 mt-10 md:mt-16 mx-auto">
                <h4 className="text-3xl md:text-5xl font-bold text-[#6c87a5] mt-32 mb-10 animate__animated animate__fadeInLeft wow" data-wow-delay="0s">
                    Technology Alliance Partners
                </h4>
                <p className='text-base text-center md:text-lg mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.2s">Technology Alliance Partners are our close allies with innovative technologies and recognized expertise.</p>
            </section>

            <div className="bg-gradient-to-r px-3 py-3 md:py-16 from-[#335f80] to-[#6c87a5]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0s">
                            <Image
                                src="/images/hewlett.jpg"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.2s">
                            <Image
                                src="/images/net-app.jpg"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.4s">
                            <Image
                                src="/images/juniper.jpg"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.6s">
                            <Image
                                src="/images/cisco.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.8s">
                            <Image
                                src="/images/red-hat.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="1s">
                            <Image
                                src="/images/ibm.jpg"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="1.2s">
                            <Image
                                src="/images/hp.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="1.4s">
                            <Image
                                src="/images/splunk.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="1.6s">
                            <Image
                                src="/images/paloalto.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="1.8s">
                            <Image
                                src="/images/zscaler.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="2s">
                            <Image
                                src="/images/LOGO-elastic.jpg"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                    </div>
                </div>
            </div>



            <section className="max-w-2xl px-2 text-center mb-10 mx-auto">
                <h4 className="text-3xl md:text-5xl font-bold text-[#6c87a5] mt-32 mb-10 animate__animated animate__fadeInLeft wow" data-wow-delay="0s">
                    Emerging Technology Partners
                </h4>
                <p className='text-base text-center md:text-base mb-5 animate__animated animate__fadeInLeft wow' data-wow-delay="0.2s">Our Emerging Technology Partners are known associates with significant interest from the organization.</p>
            </section>

            <div className="bg-gradient-to-r py-3 px-3 md:py-16 from-[#335f80] to-[#6c87a5]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0s">
                            <Image
                                src="/images/automation-anywhere.jpg"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.2s">
                            <Image
                                src="/images/tanium.jpg"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.4s">
                            <Image
                                src="/images/data-iku.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.6s">
                            <Image
                                src="/images/hashicorp.webp"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                        <div className="bg-white rounded-sm p-8 wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="0.8s">
                            <Image
                                src="/images/rgs.png"
                                alt="logo"
                                width={150}
                                height={150}
                                className="object-contain"  // or object-cover depending on your needs
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="max-w-2xl text-center px-3 mt-32 mb-10 mx-auto">

                <h3 className="md:text-4xl text-3xl text-[#6c87a5] my-3">
                    Report an Ethics Concern
                </h3>
                <p className="text-center mt-8 mb-5 md:text-lg text-base">We take every report seriously and have zero tolerance for retaliation of any kind against individuals who, in good faith, raise questions or report concerns.</p>
                <Link href={"/"} className="inline-flex my-5 items-center justify-center md:p-3 p-2 px-4 md:px-6 rounded-3xl bg-[#6c87a5] border-[#6c87a5] text-sm md:text-base hover:bg-[#335f80] space-x-2 hover:border-[#335f80] border mb-2 text-white"><span>File a Report</span> <BsArrowRight className='text-white' size={20} /></Link>
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


            <ContactForm />
        </>
    )
}

export default Partners
