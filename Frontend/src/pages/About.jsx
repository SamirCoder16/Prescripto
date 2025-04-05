import React from 'react'
import { assets }  from '../assets/assets_frontend/assets.js'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>



      <div className='my-10 flex flex-col md:flex-row gap-12'>
       <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Welcome to prescripto, Your trusted partner in managing your Hailthcare Needs Conveniently  And Effiencly. 
          at Preescripto. We Understand the Challenge indivisuals Faces when it comes to Scheduling Doctor Appointment And
          Managing Their Health Records. 
        </p>
        <p>Prescripto is commited to Excellence heathcare technology. We Continously Strive To Enhance Our platform , integretion The latest Advancement to improve 
          User Ecprience and Deliveer Superior Service. Whether you'r Booking Your First Appointment or Managing Ongoing Core . Prescripto is Here To support you
          Every step of the way
        </p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Our Vision at prescripto is to create A seamless Healthcare Exprience for Every Users. We Aim To Bridge The Gap Between Paitent And Health care Providers. Making it Easier
          For your to access the care of you need, When you Need it. 
        </p>
       </div>
      </div>


      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-400 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY</b>
          <p>Streamlined Appointment Scheduling That Fits into your Busy Lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-400 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE</b>
          <p>Access To A Network Of Trusted Healthcare Professionals in Your Area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-400 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION</b>
          <p>Tailored Recommendation And Reimenders To help you Stay On Top Of Your Health.</p>
        </div>
      </div>

    </div>
  )
}

export default About