import React, { useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import Items from '../../components/Items'

const Type = () => {
    const {id} = useParams()
    useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },[])
  return (
        <div
        className='flex flex-col min-h-screen overflow-y-hidden relative  w-full gap-1 mt-5'
        >
           <Items id={id}/>
        </div>
  )
}

export default Type