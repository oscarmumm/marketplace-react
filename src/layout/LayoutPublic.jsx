import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <main className='container-fluid'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LayoutPublic