import React from 'react'
import {  Outlet } from 'react-router-dom'
import Navbar from './components/nav/Navbar'

const App = () => {
  
  return (
    <main
    className='min-h-screen w-dvw overflow-x-hidden'
    >
     <Navbar /> 
      <Outlet />
    </main>
  )
}

export default App