import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function TextOverColor({ heading, paragraph, btns = [] }) {
    return (
        <>
            <section className="relative py-16 md:py-32 bg-gradient-to-r from-[#6c87a5] to-[#335f80] overflow-hidden">
                {/* Top-right background image */}
                <div
                    className="absolute top-0 right-0 bg-no-repeat bg-left bg-cover h-96 w-[600px] z-0"
                    style={{ backgroundImage: `url(/images/polygon-10percent.svg)` }}
                ></div>
                {/* Bottom-left circle */}
                <div className="absolute bottom-0 -left-[250px] bg-[#cbced0]0 shadow-2xl rounded-full h-42 md:h-[500px] w-42 md:w-[500px] z-0 animate_animated animate-fadeInRight wow"></div>

                {/* Main Content */}
                <div className="relative  z-10 max-w-2xl mx-auto px-4">
                    <h2 className="wow animate__animated animate__fadeInUp text-white text-2xl mb-10 leading-normal md:text-5xl">
                        {heading}
                    </h2>
                    <p className='!z-10 mb-3 text-white font-normal md:text-lg text-base wow animate__animated animate__fadeInUp' data-wow-delay="0.2s">
                        {paragraph}
                    </p>
                    <div className="flex space-x-2 items-center justify-start">
                        {btns.map((btn, id) => {
                            return (
                                <Link key={id} href={btn.href} className='flex items-center justify-center !z-10 text-white p-3 px-7 space-x-3 mt-10 bg-[#6c87a5] hover:bg-[#335f80] md:text-base text-sm wow animate__animated animate__fadeInUp font-bold rounded-full' data-wow-delay={`${0.4 + (id + 1)}s`} >
                                    <span>{btn.text}</span>
                                    <BsArrowRight size={18} />
                                </Link>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )
}

export default TextOverColor
