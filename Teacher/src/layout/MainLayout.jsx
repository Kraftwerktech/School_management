import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className=' bg-transparent w-full min-h-screen'>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      
      
      
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className='ml-0 lg:ml-[280px] pt-[67px] transition-all'>
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout