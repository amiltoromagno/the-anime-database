'use client'
import React, { useState } from 'react'

const Home = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailOrUsername, password })
    })

    if (res.ok) {
      alert('OK!')
    } else {
      const { error } = await res.json()
      setError(error)
    }
  }

  return (
    <div className='h-full w-full flex justify-center items-center flex-col'>
      <div className='border rounded-md p-5 flex flex-col justify-end items-center space-y-2'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-56 space-y-2'>
          <input
            type='text'
            placeholder='Email or Username'
            value={emailOrUsername}
            onChange={e => setEmailOrUsername(e.target.value)}
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
            Login
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}

export default Home
