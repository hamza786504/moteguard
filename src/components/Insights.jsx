import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

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

export default function Insights() {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl capitalize mb-8">Insights</h2>
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

  );
}
