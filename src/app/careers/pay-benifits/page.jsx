import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

function PayBenifits() {




  return (
    <>
      <section className="md:px-0 px-5 relative w-full bg-gradient-to-r from[#335f80] to-[#335f80] overflow-hidden">
        <div className="min-h-[300px] py-10 h-auto flex items-center relative md:inset-0 md:[clip-path:polygon(90%_0%,100%_60%,60%_100%,0%_100%,0_0)] md:bg-gray-600 md:pe-20 md:w-1/2 z-10 wow animate__animated animate__fadeInLeft wow">
          <div className="md:pe-20 flex flex-col items-start max-w-xl mx-auto md:mx-0 md:ml-16 md:my-auto justify-center">
            <h2 className="font-extrabold wow animate__animated animate__fadeInRight text-5xl md:text-6xl text-white leading-snug">
              Pay & Benefits
            </h2>
          </div>
        </div>
      </section>


      <section className="px-3 animate__animated animate__fadeInLeft wow pb-5 pt-14 mx-auto max-w-2xl" data-wow-delay="0s">
        
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
          Pay and benefits are fundamental to any career decision. That's why we craft compensation packages that reflect the importance of the work we do for our customers. 
        </p>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.4s">The benefits as described below are available to all U.S. benefits eligible employees with minor exceptions. Employees in an "alternative employment status" such as consulting employees may be eligible for some coverage but may not have access to the full suite of benefits.  Similarly, employees of Leidos subsidiaries such as QTC, and Leidos Biomedical Research have separate benefits packages.</p>
        <h2 className="animate__animated animate__fadeInLeft wow text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start mt-10" data-wow-delay="0.6s">
          Compensation
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.2s">
         We structure our salaries to be competitive for the region, market conditions, hardship, and hazards. We also:
        </p>
        <ul className='list-disc space-y-4'>
          <li>Reward your contributions to the company and our customers' mission.</li>
          <li>Recognize and reward notable advances for your profession, the company, and your customers.</li>
          <li>Ensure fairness, comply with applicable federal, state, and international laws, and meet applicable audit entities' standards.</li>
        </ul>
      </section>

      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
          Having technical issues applying for a job?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          If you are having technical issues applying for a position on our career site, choose <span className="text-[#6c87a5]">Career Question</span> in the Type of Request drop-down list below to request help.
        </p>
      </section>

      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
          Are you an employee and need IT help?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          The Leidos Service Desk is a centralized support center for computing resources and information needs for employees. View the information below to <span className="text-[#6c87a5]">learn how to get help online or call the help desk.</span>
        </p>
      </section>


      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
          Need assistance due to a disability or limited English proficiency?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          If you have a disability and need help using our site, use the drop-down list above and choose <span className="text-[#6c87a5]">Accommodation Request</span> to request help.
        </p>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          Leidos ensures nondiscrimination in all programs and activities in accordance with the Title VI of the Civil Rights Act of 1964. If you need more information or special assistance for persons with disabilities or limited English proficiency, contact the<span className="text-[#6c87a5]"> Leidos Employee Services.</span>
        </p>
      </section>


      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
          Do you have a question about Leidos QTC Health Services?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          If you need assistance or wish to request information specific to Leidos QTC Health Services, please reach out to a member of the team by phone at 800-260-1515 or 909-859-2100. Alternatively, you can submit your inquiry online through our contact form. We&apos;re here to help!
        </p>
        <Link href={"/"} className="animate__animated animate__fadeInLeft wow rounded-3xl mt-5 bg-[#6c87a5] p-3 px-6 hover:bg-[#335f80] inline-flex items-center justify-center space-x-3 text-white" data-wow-delay="0.6s"><span>Contact</span> <BsArrowRight size={18} /></Link>
      </section>

      <section className="px-3 animate__animated animate__fadeInLeft wow py-5 mx-auto max-w-2xl" data-wow-delay="0s">
        <h2 className="text-[#6c87a5] font-bold leading-tight text-4xl md:text-5xl text-start">
          Do you need proof of employment and/or income?
        </h2>
        <p className="animate__animated animate__fadeInLeft wow text-start my-4 text-base md:text-lg" data-wow-delay="0.3s">
          Current and former Leidos (formerly known as SAIC, employment prior to September 28, 2013) employees can provide proof of employment and income with secure, 24/7 access through a toll-free number and website.
        </p>
        <Link href={"/"} className="animate__animated animate__fadeInLeft wow rounded-3xl mt-5 bg-[#6c87a5] p-3 px-6 hover:bg-[#335f80] inline-flex items-center justify-center space-x-3 text-white" data-wow-delay="0.6s"><span>Employment Verification</span> <BsArrowRight size={18} /></Link>
      </section>
    </>
  )
}

export default PayBenifits;
