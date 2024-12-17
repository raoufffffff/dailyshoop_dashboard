import React from 'react'
import types from '../constanst/types'
import { NavLink, useParams } from 'react-router-dom'
const TyoeLinks = () => {
  const {id} = useParams()
  

    const ourTypes = types.map(e=> (
        <NavLink 
        to={`/type/${e.name}`}
        key={e.name}
        className={`${id === e.name && "font-bold text-[#dd2a5b]  underline border-b-[#dd2a5b] border-[#dd2a5b] md:text-black"}  flex items-center px-5 py-2   flex-1 mx-1 min-w-fit `}
        >
            {e.name}</NavLink>
    ))
  return (
    <ul
    className={`w-full  a pb-3 flex     overflow-x-scroll `}
    >
         <NavLink 
        to={`/`}
        className={`${!id && "font-bold text-[#dd2a5b]  underline border-b-[#dd2a5b] border-[#dd2a5b] md:text-black"}  flex items-center px-5 py-2   flex-1 mx-1 min-w-fit `}
        >
            all</NavLink>
{ourTypes}
    </ul>
  )
}

export default TyoeLinks