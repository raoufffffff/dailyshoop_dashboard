import React from 'react'
import {  Outlet } from 'react-router-dom'

const App = () => {
  
  return (
    <main
    className='min-h-screen w-dvw overflow-x-hidden'
    >
      
      <Outlet />
    </main>
  )
}

export default App