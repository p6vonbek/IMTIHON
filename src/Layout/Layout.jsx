import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '80px' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
