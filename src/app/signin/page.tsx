'use client'
import { apiSignIn } from '@/services/authService'
import React, { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await apiSignIn(email, password)
      alert('Success!')
    } catch(error: any) {
      alert(error.message)
    }
    setLoading(false)
  }

  return (
    <div className='h-full w-full flex justify-center items-center flex-col'>
      <div className='border rounded-md p-5 flex flex-col justify-end items-center space-y-2'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-56 space-y-2'>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className='text-black text-sm p-1'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className='text-black text-sm p-1'
          />
          <button type='submit' className='border rounded-sm p-1'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
