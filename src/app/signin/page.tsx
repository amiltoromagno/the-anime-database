'use client'
import { signIn } from '@/services/authService'
import { redirect } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const login = async (event: FormData) => {
  const response = await signIn(event)
  if (!response.success){
    toast(response.message)
    return
  }
  redirect('/')
}

const SignIn = () => {
  return (
    <div className='h-full w-full flex justify-center items-center flex-col'>
      <div className='border rounded-md p-5 flex flex-col justify-end items-center space-y-2'>
        <h1>Sign In</h1>
        <form className='flex flex-col w-56 space-y-2'>
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
          <button formAction={login} className='border rounded-sm p-1'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
