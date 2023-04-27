import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../styles/ColorPallete.css'

const LayoutPublic = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default LayoutPublic