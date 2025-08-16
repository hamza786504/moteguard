"use client";
import ContactForm from '@/components/ContactForm';
import TextOverColor from '@/components/TextOverColor';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsArrowRight, BsSearch } from 'react-icons/bs';
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
  },
  {
    title: "Article",
    description:
      "The importance of transformational logistics for defense operations",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "Leidos Is Securing the Agentic AI Future with LLM Trust and Safety",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "News",
    description:
      "FBI selects Leidos to modernize world's largest biometric and criminal history repository",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Q&A",
    description:
      "Meet a Leidos Summer Intern: Ethan Le",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "Recognizing the Vital Role of Social Workers in Military and Veteran Support",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Q&A",
    description:
      "Meet Leidos Summer Intern: Sam Tadle",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "AI, Security, and Mission Success: Insights from Rob Linger",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "Intelligent air traffic technology boosts efficiency at major airports",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "News",
    description:
      "Supporting Future Aviation Leaders: Leidos Helps Expand the Air Traffic Control Association’s Scholarship Program",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "For cybersecurity compliance, pay attention to the safety demonstration",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "Meet Leidos Summer Intern: Emily Andrews",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "News",
    description:
      "Leidos wins $8.8M contract to develop protection for mobile communications",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "Leidos-Led Team Celebrates Major NATO Milestone with Launch of IT Modernization Program",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "Data centers need more than just large-scale power",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "News",
    description:
      "Leidos and Elroy Air to demonstrate autonomous aerial resupply drone for U.S. Marine Corps",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "Armed Forces Day: Our People, Their Stories",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "Leidos Releases Open-Source AI Tool to Expose and Combat Mutative Cyber Threats",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "The mainstreaming of battery energy storage",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "News",
    description:
      "Leidos, global partners to boost NATO capabilities through cloud modernization",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
  {
    title: "Article",
    description:
      "Cloud, Evolved: Driving Mission Intelligence, Not Just Infrastructure",
    image: "/images/insights/insight1.jpg",
    buttonText: "Read More",
    buttonLink: "/insights",
  },
];

const filters = [
  {
    name: "Health & Civil",
    heading: "Health & Civil Solutions",
    paragraph:
      "We provide innovative healthcare and civil solutions, enhancing public well-being through technology and expert support.",
    gradient: "from-pink-600 to-red-700",
  },
  {
    name: "National Security",
    heading: "National Security Solutions",
    paragraph:
      "Empowering national defense with cutting-edge intelligence, surveillance, and reconnaissance systems.",
    gradient: "from-red-700 to-purple-800",
  },
  {
    name: "Commercial & International",
    heading: "Commercial & International Programs",
    paragraph:
      "Delivering commercial space, telecom, and defense innovations globally with high-impact collaborations.",
    gradient: "from-purple-800 to-emerald-500",
  },
  {
    name: "Digital Modernization",
    heading: "Digital Modernization",
    paragraph:
      "Transforming legacy systems into smart digital ecosystems with AI, cloud, and cybersecurity.",
    gradient: "from-emerald-500 to-sky-600",
  },
  {
    name: "Defense Systems",
    heading: "Defense Systems",
    paragraph:
      "The Defense Systems Sector develops and produces advanced space, aerial, surface, and sub-surface manned and un-manned defense systems.",
    gradient: "from-sky-600 to-violet-800",
  },
];

function Careers() {
  const [active, setActive] = useState("Health & Civil");
  const selected = filters.find((f) => f.name === active);

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
      <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from-red-600 to-red-900 overflow-hidden">
        {/* Overlay with clip path for md and above */}
        <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-pink-500/20 md:pe-20 md:w-2/3 z-10 wow animate__animated animate__fadeInLeft wow">
          <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
            <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
              FIND YOUR NEW CAREER PATH AT LEIDOS
            </h2>
            <div className="max-w-[400px] mt-7 w-full relative bg-white inline-block">
              <input type="text" name="search" id="search" placeholder='Enter Keywords, Job ID, or Title' className='p-3 bg-transparent border-none w-full' />
              <BsSearch size={22} className='absolute top-1/2 right-5 -translate-y-1/2 text-red-800' />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl capitalize mb-8">Featured Careers</h2>
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
                  <h3 className="text-xl font-semibold mb-2 text-[#a52a2a]">
                    {insight.title}
                  </h3>
                  <p className="text-gray-700 text-base flex-grow">
                    {insight.description}
                  </p>
                  <Link
                    href={insight.buttonLink}
                    className="mt-4 !inline-block px-5 py-2 rounded-md text-base font-semibold text-white transition hover:bg-[#872323] bg-[#a52a2a]"
                  >
                    {insight.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="wow animate__animated animate__fadeInUp flex items-center justify-center" data-wow-delay="1.3s">
            <Link href={"/insights"} className="inline-flex !mx-auto cursor-pointer capitalize bg-red-800 p-3 mt-8 text-sm md:text-base font-bold text-white rounded-lg px-5 border-none hover:bg-red-900 hover:text-white items-center justify-center space-x-3">
              <span className='text-nowrap'>View More Insights</span> <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>


      <TextOverColor
        heading="Opportunities Around the World"
        paragraph="Everything we do is built on our commitment to doing the right thing for our customers, employees, and the communities we support worldwide. Learn more about the values and culture that are the foundation of our global business."
      />


      {/* Filterable Gallary */}
      <div className={`min-h-screen md:max-h-[500px] transition-all duration-700 bg-gradient-to-b ${selected.gradient} text-white flex items-center`}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-start md:justify-center mb-16 md:mb-32">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setActive(filter.name)}
                className={`text-base md:text-lg font-medium transition duration-300 relative group`}
              >
                <span
                  className={`${active === filter.name ? "underline" : "no-underline"
                    }`}
                >
                  {filter.name}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold animate-slideInLeft">
                {selected.heading}
              </h2>
              <p className="text-lg leading-relaxed animate-slideInLeft delay-100">
                {selected.paragraph}
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold animate-fadeInUp hover:scale-105 transition-transform">
                Learn More <FiArrowRight size={20} />
              </button>
            </div>
            <div className="flex justify-center md:justify-end animate-slideInRight">
              <Image
                src="/images/section-bg.jpg"
                alt="section-img"
                width={600}
                height={600}
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>



      <ContactForm />
    </>
  )
}

export default Careers;
