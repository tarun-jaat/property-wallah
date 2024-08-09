import React from 'react'
import Navbar from '../Components/Common/Navbar'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className=' overflow-y-scroll h-[95vh]'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Home