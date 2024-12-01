'use client'
import React, { useEffect, useState } from 'react'
import DrawerComponent from 'react-modern-drawer'
import { LuMenu } from 'react-icons/lu'
import 'react-modern-drawer/dist/index.css'
import { PiSignIn } from 'react-icons/pi'
import { PiSignInFill } from 'react-icons/pi'
import { FaListUl } from 'react-icons/fa'
import { VscSignIn } from 'react-icons/vsc'

const menuItems = [
  {
    label: 'Sign In',
    url: '/signin',
    icon: <PiSignIn />
  },
  {
    label: 'Sign Up',
    url: '/signup',
    icon: <PiSignInFill />
  },
  {
    label: 'My List',
    url: '/animelist',
    icon: <FaListUl />
  },
  {
    label: 'Logout',
    url: '',
    icon: <VscSignIn />
  }
]

const Drawer = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <LuMenu className='text-[60px] cursor-pointer' onClick={toggleDrawer} />
      <DrawerComponent
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='!bg-primary-white dark:!bg-primary-black p-2 pr-4 text-2xl flex flex-col items-end'
      >
        <ul className='flex flex-col gap-4'>
          {menuItems.map((item: any) => (
            <li key={item.label} className='flex items-center justify-end gap-4'>
              {item.label}
              {item.icon}
            </li>
          ))}
        </ul>
      </DrawerComponent>
    </div>
  )
}

export default Drawer
