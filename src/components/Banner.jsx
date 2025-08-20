import React from 'react'
import { FiArrowRight } from 'react-icons/fi';

function Banner() {
    return (
        <>
            <section
        className="relative banner overflow-hidden max-h-[500px] md:max-h-screen max-md:min-h-[calc(100vh-5.5rem)]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen object-cover"
        >
          <source src="/images/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="animate__animated animate__fadeInLeft absolute flex items-center md:items-start justify-center flex-col top-1/2 -translate-y-1/2 md:translate-y-0 md:top-0 md:bottom-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 bg-[#6c87a5]/60 max-md:rounded-lg md:p-4 p-7 md:px-16 md:pe-32 md:[clip-path:polygon(77%_0%,100%_60%,60%_100%,0%_100%,0_0)]">
          <h1 className="animate__animated animate__fadeInRight animate__delay-1s text-white text-center md:text-start text-4xl md:text-6xl max-w-[400px] leading-snug font-bold">
            Making Smart Smarter
          </h1>
          <button className="animate__animated animate__fadeInRight animate__delay-2s cursor-pointer capitalize bg-white p-2 mt-8 text-sm md:text-lg font-bold text-[#6c87a5] rounded-lg px-5 border-none hover:bg-[#6c87a5] hover:text-white flex items-center justify-start space-x-3">
            <span className="text-nowrap">Learn about our solution</span>{' '}
            <FiArrowRight size={18} />
          </button>
        </div>
      </section>
        </>
    )
}

export default Banner
