import React from 'react'
import Navbar from './assets/Navbar'
import Sidebar from './assets/Sidebar'
import Main from './assets/Main'

function Dashboard() {
  return (
    <div className='flex flex-row bg-[#f0f4f5] min-h-screen text-black '>


<Sidebar/>
<Main/>


    </div>
  )
}

export default Dashboard
