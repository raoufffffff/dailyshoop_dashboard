import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

const TabelLinks = () => {
    const [searchparams, setsearchparams] = useSearchParams()

  return (
<div className="flex flex-nowrap items-center px-4">
        {/* "All" option */}
        <NavLink
          to="/order"
          className={`px-4 py-2 mx-2 text-sm md:text-base rounded-lg whitespace-nowrap transition-all 
            ${
              !searchparams.get("about")
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold'
                : 'text-gray-600 hover:text-purple-600 hover:underline'
            }`}
        >
          new order
        </NavLink>
        <NavLink
          to="/order/?about=take"
          className={`px-4 py-2 mx-2 text-sm md:text-base rounded-lg whitespace-nowrap transition-all 
            ${
              searchparams.get("about") == "take"
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold'
                : 'text-gray-600 hover:text-purple-600 hover:underline'
            }`}
        >
          take
        </NavLink>
        <NavLink
          to="/order/?about=done"
          className={`px-4 py-2 mx-2 text-sm md:text-base rounded-lg whitespace-nowrap transition-all 
            ${
              searchparams.get("about") == "done"
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold'
                : 'text-gray-600 hover:text-purple-600 hover:underline'
            }`}
        >
          done
        </NavLink>
        <NavLink
          to="/order/?about=cancel"
          className={`px-4 py-2 mx-2 text-sm md:text-base rounded-lg whitespace-nowrap transition-all 
            ${
              searchparams.get("about") == "cancel"
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold'
                : 'text-gray-600 hover:text-purple-600 hover:underline'
            }`}
        >
          cancel
        </NavLink>
      </div>  )
}

export default TabelLinks