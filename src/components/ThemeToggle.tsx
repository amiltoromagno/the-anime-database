'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return

  return (
    <div className='h-9 border-2 rounded-full flex items-center w-20 p-1'>
      {theme === 'dark' ? (
        <FiSun
          onClick={() => setTheme('light')}
          className={`cursor-pointer ${
            theme === 'dark' && 'translate-x-0'
          }`}
        />
      ) : (
        <FiMoon
          onClick={() => setTheme('dark')}
          className={`cursor-pointer ${
            theme === 'light' && 'translate-x-[46px]'
          }`}
        />
      )}
    </div>
  )
}

export default ThemeToggle
