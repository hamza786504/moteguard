"use client";
import React from 'react'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
    "/images/partners/1.webp",
    "/images/partners/2.webp",
    "/images/partners/3.webp",
    "/images/partners/4.webp",
    "/images/partners/5.webp",
    "/images/partners/3.webp",
    "/images/partners/2.webp",
];


function Partners() {
    const leftToRightSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        rtl: false, // Left to right
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <>
            <section className="py-10 max-w-6xl mx-auto">
                <h2 className="text-center text-2xl md:text-3xl lg:text-5xl mb-10 mx-auto md:max-w-[500px]">Our people, partners, and communities</h2>
                <Slider {...leftToRightSettings}>
                    {logos.map((src, index) => (
                        <div key={index} className="px-0 wow animate__animated animate__fadeInUp" data-wow-delay={(0.3 * index) + "s"} >
                            <div className="flex items-center h-40">
                                <Image
                                    src={src}
                                    alt={`Logo ${index}`}
                                    width={150}
                                    height={80}
                                    className="object-cover h-[200px] mx-auto"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    )
}

export default Partners
