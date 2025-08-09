import Image from 'next/image'
import React from 'react'

function EthicsAndBusinessIntegrity() {
    return (
        <>
            <section className="relative w-full bg-gradient-to-r from-red-600 to-red-900 overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-pink-500/20 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft">
                    <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
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


            <div className="section max-w-xl mx-auto px-2 py-16 space-y-4">
                <p className="text-normal text-start text-sm md:text-base animate__animated animate__flipInX wow">
                    Leidos maintains the highest standards of integrity and ethical behavior. Our robust policies, procedures, training, and communications create a comprehensive program, cultivating a culture of integrity that touches every aspect of employee conduct.
                </p>
                <div className="my-10 flex items-center justify-center flex-col md:flex-row flex-wrap">
                    <div className="w-full md:w-1/2">
                        <p className="animate__animated animate__fadeInLeft wow text-normal text-start text-sm md:text-base" data-wow-delay="0.2s">
                            Leidos maintains the highest standards of integrity and ethical behavior. Our robust policies, procedures, training, and communications create a comprehensive program, cultivating a culture of integrity that touches every aspect of employee conduct.
                        </p>
                        <button
                            className="animate__animated animate__fadeInLeft wow px-3 md:px-5 py-2 border-2 border-red-900 font-medium rounded-3xl mt-5 text-white bg-red-800 hover:bg-red-900 transition-colors duration-200 whitespace-nowrap uppercase text-sm md:text-lg" data-wow-delay="0.5s"
                        >
                            contact us
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 relative h-60 wow animate__animated animate__fadeInRight">
                        <Image
                            src="/images/ethisphere.webp"
                            alt="image"
                            layout='fill'
                            className="animate__animated animate__fadeInRight w-full h-40 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out" data-wow-delay="0.7s"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EthicsAndBusinessIntegrity
