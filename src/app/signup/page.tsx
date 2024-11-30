'use client'
import { signUp } from '@/services/authService'
import { redirect } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const newUser = async (event: FormData) => {
  const response = await signUp(event)
  toast(response.message)
  if (response.success) redirect('/signin')
}

const SignUp = () => {
  return (
    <div className='h-full w-full flex justify-center items-center flex-col'>
      <div className='border rounded-md p-5 flex flex-col justify-end items-center space-y-2'>
        <h1>Sign Up</h1>
        <form className='flex flex-col w-56 space-y-2'>
          <input
            type='text'
            placeholder='Username'
            name='username'
            required
            className='text-sm p-1'
          />
          <input
            type='text'
            placeholder='Email'
            name='email'
            required
            className='text-sm p-1'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            required
            className='text-sm p-1'
          />
          <button formAction={newUser} className='border rounded-sm p-1'>
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
