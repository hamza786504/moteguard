import Link from 'next/link';
import React from 'react'

const menuData = [
    {
        title: "Company Overview",
        slug: "company",
        subMenu: [
            { title: "Who We Are", slug: "company/who-we-are" },
            { title: "Our Business", slug: "company/our-business" },
            { title: "Leadership", slug: "company/leadership" },
            { title: "Responsibility & Sustainability", slug: "company/responsibility-and-sustainability" },
            { title: "Ethics & Business Integrity", slug: "company/ethics-and-business-integrity" },
            { title: "Partners", slug: "company/partners" },
            { title: "Contract Vehicles", slug: "company/contract-vehicles" },
            { title: "Global", slug: "company/global" },
            { title: "History", slug: "company/history" }
        ]
    },
    {
        title: "Markets",
        slug: "markets",
        subMenu: [
            { title: "Aviation", slug: "markets/aviation" },
            { title: "Defense", slug: "markets/defense" },
            { title: "Energy & Industry", slug: "markets/energy" },
            { title: "Government", slug: "markets/government" },
            { title: "Healthcare", slug: "markets/healthcare" },
            { title: "Homeland Security", slug: "markets/homeland-security" },
            { title: "Intelligence", slug: "markets/intelligence" },
            { title: "Science", slug: "markets/science" }
        ]
    },
    {
        title: "Capabilities",
        slug: "capabilities",
        subMenu: [
            { title: "Capabilities Overview", slug: "capabilities/capabilities-overview" },
            { title: "Trusted AI Mission", slug: "capabilities/trusted-ai-mission" },
            { title: "Integrated Systems", slug: "capabilities/integrated-systems" },
            { title: "Mission Operation", slug: "capabilities/mission-operation" }
        ]
    },
    {
        title: "Careers",
        slug: "careers",
        subMenu: [
            { title: "Careers Overview", slug: "careers/careers-overview" },
            { title: "Latest Opportunities", slug: "careers/latest-opportunities" },
            { title: "Life at Moteguard", slug: "careers/life-at-moteguard" },
            { title: "Pay & Benefits", slug: "careers/pay-benefits" },
            { title: "Frequently Asked Questions", slug: "careers/faq" },
            { title: "Careers in Australia", slug: "careers/careers-australia" },
            { title: "Careers in the UK", slug: "careers/careers-uk" }
        ]
    }
];


function Footer() {
  return (
    <>
      <footer className="max-w-6xl mb-0 md:mb-10 md:mx-auto md:rounded-2xl pt-5 md:pt-16 mt-16 px-4 sm:px-10 overflow-hidden relative py-10 bg-red-900">
        <div className="rounded-full h-[250px] w-[250px] bg-red-700 absolute shadow-xl z-20 right-0 -bottom-1/2"></div>
        <div className="rounded-full h-[300px] w-[100px] bg-red-800 absolute bottom-0 right-0 translate-10 z-10"></div>
        <div className="rounded-full h-[300px] w-[100px] bg-red-800 absolute top-0 left-0 -translate-10 z-10"></div>
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
