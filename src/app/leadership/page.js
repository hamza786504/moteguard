import React from 'react'

function Leadership() {
    return (
        <>
            <section className="relative w-full bg-gradient-to-r from-red-600 to-red-900 overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="h-[200px] md:h-[300px] flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-pink-500/20 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft">
                    <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Leadership</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Leadership
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Leadership
