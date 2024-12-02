import React from 'react'
import DrawerComponent from './Drawer'

const Header = () => {
  return (
    <div className='h-10 flex justify-between items-center'>
      <div>Logo</div>
      <div className='md:hidden'>
        <DrawerComponent/>
      </div>
    </div>
  )
}

export default Header
