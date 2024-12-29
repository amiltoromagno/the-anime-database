'use client'
import React, { useEffect, useState } from 'react'
import DrawerComponent from 'react-modern-drawer'
import { LuMenu } from 'react-icons/lu'
import 'react-modern-drawer/dist/index.css'
import { PiSignIn } from 'react-icons/pi'
import { PiSignInFill } from 'react-icons/pi'
import { FaListUl } from 'react-icons/fa'
import { VscSignIn } from 'react-icons/vsc'
import { IoMdClose } from "react-icons/io";
import ThemeToggle from './ThemeToggle'
import { createClient } from '@/utils/supabase/client'

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
  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    const supabase = createClient();
    const { data }: { data: any } = await supabase.auth.getUser();
    setUser(data.user);
  }

  useEffect(() => {
    setIsMounted(true)
    fetchUser()
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
        <div className='h-14 flex w-full justify-between items-center'>
          <ThemeToggle />
          <IoMdClose className='text-4xl cursor-pointer' onClick={toggleDrawer}/>
        </div>
        <div className='h-12'>

        </div>
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
