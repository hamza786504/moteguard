import TextOverColor from '@/components/TextOverColor';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
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


function NewsRoom() {
  return (
    <>
      <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
        {/* Overlay with clip path for md and above */}
        <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
          <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
            <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
              Newsroom
            </h2>
          </div>
        </div>
      </section>





      <TextOverColor
        heading="Media Contact"
        paragraph="Discover how the Leidos team helped the Transportation Security Administration secure the 104th Rose Bowl game with walk-through metal detectors deployment, screening 93,000 in attendance."
        btns={[{ href: "mailto:mediaRelations@leidos.com", text: "MediaRelations@leidos.com" }]}
      />



      <section className="py-16 bg-gradient-to-r from-green-100 to-[#cbced0] px-3">
        <h2 className="text-center font-extrabold mb-10 text-[#6c87a5] text-2xl md:text-4xl">
          Leidos in the News
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

          {/* Card */}
          <div className="rounded-lg group py-10 bg-white hover:bg-[#6c87a5] p-5 md:p-10 wow animate__animated animate__fadeInUp" data-wow-delay="0s">
            <h4 className="text-2xl md:text-3xl font-bold text-[#6c87a5] text-center mx-auto group-hover:text-white">
              Army inks potential $4.2 billion deal for intel-gathering blimps
            </h4>
            <p className="text-center text-sm md:text-base my-4 text-gray-900 group-hover:text-white">
              Axios, April 9, 2025
            </p>
            <Link href="/" className="flex items-center justify-center space-x-2 text-[#6c87a5] group-hover:text-white">
              <span>READ THE ARTICLE</span> <FaArrowRight size={14} />
            </Link>
          </div>

          {/* Card */}
          <div className="rounded-lg group py-10 bg-white hover:bg-[#6c87a5] p-5 md:p-10 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <h4 className="text-2xl md:text-3xl font-bold text-[#6c87a5] text-center mx-auto group-hover:text-white">
              Retired Leidos exec shares how the company instilled agility into its corporate culture
            </h4>
            <p className="text-center text-sm md:text-base my-4 text-gray-900 group-hover:text-white">
              Washington Technology, April 1, 2025
            </p>
            <Link href="/" className="flex items-center justify-center space-x-2 text-[#6c87a5] group-hover:text-white">
              <span>READ THE ARTICLE</span> <FaArrowRight size={14} />
            </Link>
          </div>

          {/* Card */}
          <div className="rounded-lg group py-10 bg-white hover:bg-[#6c87a5] p-5 md:p-10 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
            <h4 className="text-2xl md:text-3xl font-bold text-[#6c87a5] text-center mx-auto group-hover:text-white">
              Leidos Successfully Flies Guided Small Cruise Missile
            </h4>
            <p className="text-center text-sm md:text-base my-4 text-gray-900 group-hover:text-white">
              Defense Daily, March 31, 2025
            </p>
            <Link href="/" className="flex items-center justify-center space-x-2 text-[#6c87a5] group-hover:text-white">
              <span>READ THE ARTICLE</span> <FaArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>



      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl capitalize mb-8">News Releases</h2>
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
                    className="mt-4 !inline-block px-5 py-2 rounded-md text-base font-semibold text-white transition hover:bg-[#872323] bg-[#6c87a5]"
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


      <section className="overflow-x-hidden py-10 px-3 md:px-0">
        <div className="me-0 ms-auto md:pb-0 max-w-5xl shadow-sm shadow-[#cbced0] bg-gradient-to-r to-[#a8a7a9] from-white/0">
          <div className="flex flex-wrap flex-col md:flex-row">
            <div className='w-full md:w-5/12 flex flex-col justify-center p-5 pb-0 md:p-10'>
              <h4 data-wow-delay="0s" className='animate__animated animate__fadeInLeft wow text-2xl md:text-4xl text-[#6c87a5] mb-5'>Corporate Resources</h4>
              <p data-wow-delay="0.3s" className="animate__animated animate__fadeInLeft wow text-start text-gray-900 text-base md:text-lg">Explore key information about our company.</p>
            </div>
            <div className="w-full md:w-7/12 md:py-10 wow animate__animated animate__fadeInRight">
              <ul className='list-disc p-10 grid grid-cols-2 gap-y-4'>
                <li>
                  <Link href="/" className='text-lg'>Executive Leadership</Link>
                </li>
                <li>
                  <Link href="/" className='text-lg'>Responsibility & Sustainability</Link>
                </li>
                <li>
                  <Link href="/" className='text-lg'>Investor Relations</Link>
                </li>
                <li>
                  <Link href="/" className='text-lg'>Brand Resources</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>




      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#6c87a5] capitalize mb-8">Featured Insights</h2>
          <p className="mb-5 text-base md:text-lg mt-7">Expertise, industry leadership, unique perspectives, and more.</p>
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
                    className="mt-4 !inline-block px-5 py-2 rounded-md text-base font-semibold text-white transition hover:bg-[#872323] bg-[#6c87a5]"
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
    </>
  )
}

export default NewsRoom
