import Image from 'next/image';
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

const teamMembers = [
    {
        name: "Tom Bell",
        title: "Chief Executive Officer",
        image: "/images/team/tom-bell.jpg"
    },
    {
        name: "Liz Porter",
        title: "President, Health & Civil Sector",
        image: "/images/team/liz-porter.jpg"
    },
    {
        name: "Steve Hull",
        title: "President, Digital Modernization Sector",
        image: "/images/team/steve-hull.jpg"
    },
    {
        name: "Vicki Schmanske",
        title: "President, Commercial & International Sector",
        image: "/images/team/vicki-schmanske.jpg"
    },
    {
        name: "Roy Stevens",
        title: "President, National Security Sector",
        image: "/images/team/roy-stevens.jpg"
    },
    {
        name: "Cindy Gruensfelder",
        title: "President, Defense Systems Sector",
        image: "/images/team/serena-martin.jpg"
    },
    {
        name: "Chris Cage",
        title: "Chief Financial Officer",
        image: "/images/team/jacob-henry.jpg"
    },
    {
        name: "Jim Carlini",
        title: "Chief Technology Officer",
        image: "/images/team/cindy-gruensfelder.jpg"
    },
];

function Leadership() {
    return (
        <>
            <section className="relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
                {/* Overlay with clip path for md and above */}
                <div className="h-[200px] md:h-[300px] flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft">
                    <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
                        <p className='text-white'>Home / Company</p>
                        <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
                            Leadership
                        </h2>
                    </div>
                </div>
            </section>



            <section className="py-12 px-4 md:px-12 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-start text-light mb-10 text-black text-3xl">Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="relative h-80 w-full wow animate__animated animate__fadeInUp group overflow-hidden rounded-lg shadow-lg bg-white" data-wow-delay={`${0.3 * index}s`}
                            >
                                {/* Team Member Image */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    layout='fill'
                                    className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-[#335f80]/70 bg-opacity-60 flex flex-col justify-start items-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-6/12">
                                    <h3 className="text-white text-lg font-semibold mb-1">{member.name}</h3>
                                    <p className="text-gray-300 text-center text-sm mb-4">{member.title}</p>
                                    <div className="flex gap-4 text-white text-sm">
                                        <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                                        <FaTwitter className="hover:text-sky-400 cursor-pointer" />
                                        <FaInstagram className="hover:text-[#e6e5e7]0 cursor-pointer" />
                                        <FaPinterestP className="hover:text-[#335f80] cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section
                className="relative bg-center my-0 py-32 px-2 bg-cover"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/section-bg.jpg')"
                }}
            >
                {/* <div className='absolute inset-0 bg-black/20 h-full w-full'></div> */}
                <div className="p-10 max-w-4xl rounded-xl text-start mx-auto px-4 md:px-5">
                    <h3 className=" text-white text-start text-2xl md:text-5xl">
                        Lorem ipsum dolor sit
                    </h3>
                    <p className="mt-7 md:max-w-8/12 text-white text-start text-base md:text-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe nam ratione rem non eligendi a in cupiditate, fugit suscipit?</p>
                    <div className="flex items-center justify-start space-x-1 sm:space-x-3 mt-7">
                        <button
                            className="px-3 md:px-6 py-2 border-2 border-[#335f80] font-medium rounded-md text-white bg-[#6c87a5] hover:bg-[#335f80] transition-colors duration-200 whitespace-nowrap uppercase text-sm md:text-lg"
                        >
                            contact us
                        </button>
                        <button className="animate__animated animate__fadeInRight animate__delay-2s cursor-pointer capitalize bg-white p-2 text-sm md:text-lg font-bold text-[#6c87a5] rounded-lg px-3 md:px-6 py-2 border-[#6c87a5] border-2 hover:bg-[#6c87a5] hover:text-white flex items-center justify-start space-x-3">
                            <span className='text-nowrap uppercase'>Get A quote</span>
                        </button>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Leadership
