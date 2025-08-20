import Link from 'next/link';
import React from 'react'

const menuData = [
    {
        title: "Company Overview",
        slug: "company",
        subMenu: [
            { title: "Who We Are", slug: "who-we-are" },
            { title: "Our Business", slug: "our-business" },
            { title: "Leadership", slug: "leadership" },
            { title: "Responsibility & Sustainability", slug: "responsibility-and-sustainability" },
            { title: "Ethics & Business Integrity", slug: "ethics-and-business-integrity" },
            { title: "Partners", slug: "partners" },
            { title: "Contract Vehicles", slug: "contract-vehicles" },
            { title: "Global", slug: "global" },
            { title: "History", slug: "history" }
        ]
    },
    {
        title: "Markets",
        slug: "markets",
        subMenu: [
            { title: "Aviation", slug: "aviation" },
            { title: "Defense", slug: "defense" },
            { title: "Energy & Industry", slug: "energy" },
            { title: "Government", slug: "government" },
            { title: "Healthcare", slug: "health" },
            { title: "Homeland Security", slug: "homeland" },
            { title: "Intelligence", slug: "intelligence" },
            { title: "Science", slug: "science" },
            { title: "Space", slug: "space" }
        ]
    },
    {
        title: "Capabilities",
        slug: "capabilities",
        subMenu: [
            { title: "Trusted Mission AI", slug: "../ai" },
            { title: "CyberSecurity", slug: "cyber" },
            { title: "Digital Modernization", slug: "digital-modernization" },
            { title: "Integrated Systems", slug: "integrated-systems" },
            { title: "Mission Operations", slug: "mission-operations" },
            { title: "Mission Software System", slug: "mission-software-systems" },
            { title: "Rapid Prototyping Manufacturing", slug: "rapid-prototyping-manufacturing" },
        ]
    },
    {
        title: "Careers",
        slug: "careers",
        subMenu: [
            { title: "Latest Opportunities", slug: "/" },
            { title: "Life at Leidos", slug: "life" },
            { title: "Pay & Benefits", slug: "pay-benifits" },
            { title: "Frequently Asked Questions", slug: "faq" },
            { title: "Careers in Australia", slug: "careers-australia" },
            { title: "Careers in the UK", slug: "careers-uk" }
        ]
    }
];


function Footer() {
  return (
    <>
      <footer className="max-w-6xl mb-0 md:mb-10 md:mx-auto md:rounded-2xl pt-5 md:pt-16 mt-16 px-4 sm:px-10 overflow-hidden relative py-10 bg-[#335f80]">
        <div className="rounded-full h-[250px] w-[250px] bg-[#6c87a5] absolute shadow-xl z-20 right-0 -bottom-1/2"></div>
        <div className="rounded-full h-[300px] w-[100px] bg-[#6c87a5] absolute bottom-0 right-0 translate-10 z-10"></div>
        <div className="rounded-full h-[300px] w-[100px] bg-[#6c87a5] absolute top-0 left-0 -translate-10 z-10"></div>
        <div className="sm:px-6 ms-5 md:ms-15">
          <div className="grid grap-0 sm:gap-4 grid-cols-2 lg:grid-cols-4">
            {menuData.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className='mt-5 z-50 wow animate__animated animate__fadeInUp'
                  data-wow-delay={`${idx * 0.3}s`}
                >
                  <h5 className='capitalize mb-4 text-white text-xl font-bold'>{data.title}</h5>
                  <ul className='space-y-1'>
                    {data.subMenu?.map((menu, id) => (
  <li key={id} className='text-lg cursor-pointer font-normal hover:underline text-white capitalize'>
    <Link href={`/${menu.slug.toLowerCase().trim()}`} className='text-sm'>
      {menu.title}
    </Link>
  </li>
))}

                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
