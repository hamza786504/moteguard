"use client";
import ContactForm from '@/components/ContactForm';
import TextOverColor from '@/components/TextOverColor';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
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

function Faq() {
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
        <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-pink-500/20 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
          <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
            <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
              Contact
            </h2>
            <p className="text-base md:text-lg text-white my-3">
              Contact us with your questions and feedback using the contact form below.
            </p>
          </div>
        </div>
      </section>


      <section className="px-3 animate__animated animate__fadeInLeft wow pb-5 pt-14 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-red-800 font-bold leading-tight text-4xl md:text-5xl text-start">
          Fraud and Scam Awareness
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          Beware of fake employment opportunities using Leidos’ name. Leidos will never ask you to provide payment-related information during any part of the employment application process (i.e., ask you for money or to purchase cryptocurrency), nor will Leidos ever advance money as part of the hiring process (i.e., send you a check or money order before doing any work). Further, Leidos will only communicate with you through emails that are generated by the Leidos.com automated system never from free commercial services (e.g., Gmail, Yahoo, Hotmail) or via WhatsApp, Telegram, etc. If you received an email purporting to be from Leidos that asks for payment-related information or any other personal information (e.g., about you or your previous employer), and you are concerned about its legitimacy, please make us aware immediately by emailing us at LeidosCareersFraud@leidos.com. Additionally, you can verify the legitimacy of any employment opportunity by finding the job posting on our <span className="text-red-800">career site</span> or by reaching out through the contact us form above and selecting <strong>Career Question</strong> as your inquiry type.
        </p>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.6s">If you believe you are the victim of a scam, contact your local law enforcement and <span className="text-red-800">report the incident to the U.S. Federal Trade Commission.</span></p>
      </section>

      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-red-800 font-bold leading-tight text-4xl md:text-5xl text-start">
          Having technical issues applying for a job?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          If you are having technical issues applying for a position on our career site, choose <span className="text-red-800">Career Question</span> in the Type of Request drop-down list below to request help.
        </p>
      </section>

      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-red-800 font-bold leading-tight text-4xl md:text-5xl text-start">
          Are you an employee and need IT help?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          The Leidos Service Desk is a centralized support center for computing resources and information needs for employees. View the information below to <span className="text-red-800">learn how to get help online or call the help desk.</span>
        </p>
      </section>


      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-red-800 font-bold leading-tight text-4xl md:text-5xl text-start">
          Need assistance due to a disability or limited English proficiency?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          If you have a disability and need help using our site, use the drop-down list above and choose <span className="text-red-800">Accommodation Request</span> to request help.
        </p>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          Leidos ensures nondiscrimination in all programs and activities in accordance with the Title VI of the Civil Rights Act of 1964. If you need more information or special assistance for persons with disabilities or limited English proficiency, contact the<span className="text-red-800"> Leidos Employee Services.</span>
        </p>
      </section>


      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-red-800 font-bold leading-tight text-4xl md:text-5xl text-start">
          Do you have a question about Leidos QTC Health Services?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          If you need assistance or wish to request information specific to Leidos QTC Health Services, please reach out to a member of the team by phone at 800-260-1515 or 909-859-2100. Alternatively, you can submit your inquiry online through our contact form. We&apos;re here to help!
        </p>
        <Link href={"/"} className="animate__animated animate__fadeInLeft wow rounded-3xl mt-5 bg-red-800 p-3 px-6 hover:bg-red-900 inline-flex items-center justify-center space-x-3 text-white" data-wow-delay="0.6s"><span>Contact</span> <BsArrowRight size={18} /></Link>
      </section>

      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-red-800 font-bold leading-tight text-4xl md:text-5xl text-start">
          Do you need proof of employment and/or income?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          Current and former Leidos (formerly known as SAIC, employment prior to September 28, 2013) employees can provide proof of employment and income with secure, 24/7 access through a toll-free number and website.
        </p>
        <Link href={"/"} className="animate__animated animate__fadeInLeft wow rounded-3xl mt-5 bg-red-800 p-3 px-6 hover:bg-red-900 inline-flex items-center justify-center space-x-3 text-white" data-wow-delay="0.6s"><span>Employment Verification</span> <BsArrowRight size={18} /></Link>
      </section>




        <TextOverColor
                heading="Ethics Helpline"
                paragraph="Leidos has a strong culture of ethics and integrity. Our Code of Conduct is a broad statement of principles for conducting business according to the highest ethical standards. We take every report seriously and have zero tolerance for retaliation of any kind against individuals who, in good faith, raise questions or report concerns. You may submit an online report or call using the Ethics Helpline, which is hosted by an independent, third-party provider."
                btns={[{href : "/" , text : "FILE A REPORT"}]}
            />
      
      <ContactForm />
    </>
  )
}

export default Faq;
