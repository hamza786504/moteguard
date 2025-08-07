import Link from 'next/link';
import React from 'react'

const menuData = [
  {
    title: "Company Overview",
    subMenu: [
      "Who We Are",
      "Our Business",
      "Leadership",
      "Responsibility & Sustainability",
      "Ethics & Business Integrity",
      "Partners",
      "Contract Vehicles",
      "Global",
      "History"
    ]
  },
  {
    title: "Markets",
    subMenu: [
      "Markets Overview",
      "Aviation",
      "Defense",
      "Energy & Industry",
      "Government",
      "Healthcare",
      "Homeland Security",
      "Intelligence",
      "Science"
    ]
  },
  {
    title: "Capabilities",
    subMenu: [
      "Capabilities Overview",
      "Trusted AI Mission",
      "Integrated Systems",
      "Mission Operation"
    ]
  },
  {
    title: "Careers",
    subMenu: [
      "Careers Overview",
      "Latest Opportunities",
      "Life at Moteguard",
      "Pay & Benefits",
      "Frequently Asked Questions",
      "Careers in Australia",
      "Careers in the UK"
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
                    {data.subMenu.map((menu, id) => (
                      <li key={id} className='text-lg cursor-pointer font-normal hover:underline text-white capitalize'>
                        <Link href={menu.toLocaleLowerCase().trim()} className='text-sm'>{menu}</Link>
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
