import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ---- Left Section ------ */}
            <div>
                <img onClick={()=>{ navigate('/'); scrollTo(0,0)}} className='mb-5 w-40 cursor-pointer' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>A Prescripto Doctor Appointment Application is a digital platform designed to streamline the process of scheduling, managing, and tracking doctor appointments. It enhances patient convenience, reduces administrative workload, and improves healthcare accessibility.</p>
            </div>

              {/* ---- Center Section ----- */}
              <div>
                 <p className='text-xl font-medium mb-5'>COMPANY</p>
                 <ul className='flex flex-col gap-2 text-gray-600'>
                    <li className='hover:underline transition-all hover:text-gray-800 cursor-pointer hover:scale-y-110' onClick={()=> {navigate('/'); scrollTo(0,0)}}>Home</li>
                    <li className='hover:underline transition-all hover:text-gray-800 cursor-pointer hover:scale-y-110' onClick={()=> {navigate('/about'); scrollTo(0,0)}}>About Us</li>
                    <li className='hover:underline transition-all hover:text-gray-800 cursor-pointer hover:scale-y-110' onClick={()=> {navigate('/contact'); scrollTo(0,0)}}>Contact Us</li>
                    <li>Privacy Policy</li>
                 </ul>
              </div>

                {/* ---- Right Section ------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>samirparvez48@gmail.com</li>
                </ul>
            </div>
        </div>
        {/*  CopyRight text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center text-gray-800'>Copyright | Samir Parvez - 2025© Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer