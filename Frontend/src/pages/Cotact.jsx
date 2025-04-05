import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Cotact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>54709 Willims Station <br /> Suite 350, Whasington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-01325 <br /> Email: samirparvez48@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='px-6 py-3 border text-gray-500 border-gray-500 hover:bg-black rounded-full hover:text-white transition-all duration-300'>Explore Jobs </button>
        </div>
      </div>

    </div>
  )
}

export default Cotact