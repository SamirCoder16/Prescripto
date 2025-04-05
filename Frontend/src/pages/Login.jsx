import React, { useState } from 'react'

const Login = () => {

  const [state, setstate] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')

  const onSubmitHandler = async (e) => {
     e.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login Account'}</p>
        <p className=''>Please {state === 'Sign Up' ? 'Sign Up' : 'Log in'} to book appointment</p>
        {
          state === 'Sign Up' &&  
          <div className='w-full'>
          <p>Full Name</p>
          <input 
          required
          value={name}
          onChange={(e)=>{
          setName(e.target.value)
          }}
          type="text" placeholder='Enter Your Name' className='p-2 mt-1 w-full border border-gray-300 rounded-lg outline-none bg-white text-gray-600 shadow-sm transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-primary focus:shadow-lg focus:scale-105' />
        </div>
        }
       
        <div className='w-full'>
          <p>Email</p>
          <input 
          required
          value={email}
          onChange={(e)=>{
          setEmail(e.target.value)
          }}
           type="email" placeholder='Enter Your Email'  className='p-2 mt-1 w-full border border-gray-300 rounded-lg outline-none bg-white text-gray-600 shadow-sm transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-primary focus:shadow-lg focus:scale-105' />
        </div>
        <div className='w-full'>
          <p>password</p>
          <input 
          required
          value={password}
          onChange={(e)=>{
          setPassword(e.target.value)
          }}
           type="password" placeholder='Enter Your Password'  className='p-2 mt-1 w-full border border-gray-300 rounded-lg outline-none bg-white text-gray-600 shadow-sm transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-primary focus:shadow-lg focus:scale-105' />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
      {
        state === 'Sign Up'
        ? <p>Already have an Account? <span onClick={()=> setstate('Login')} className='text-primary hover:underline cursor-pointer'>Click here</span></p> 
        : <p>Create a New Account? <span onClick={()=> setstate('Sign Up')} className='text-primary hover:underline cursor-pointer'>Click here</span></p>
      }
       </div>
    </form>
  )
}

export default Login