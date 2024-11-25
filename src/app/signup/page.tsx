'use client'
import { signUp } from '@/services/authService'
import React, { useState } from 'react'

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
            className='text-black text-sm p-1'
          />
          <input
            type='text'
            placeholder='Email'
            name='email'
            required
            className='text-black text-sm p-1'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            required
            className='text-black text-sm p-1'
          />
          <button formAction={signUp} className='border rounded-sm p-1'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
