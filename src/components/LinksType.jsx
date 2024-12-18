import React from 'react';
import types from '../constanst/types';
import { NavLink, useParams } from 'react-router-dom';

const TyoeLinks = () => {
  const { id } = useParams();

  const ourTypes = types.map((type) => (
    <NavLink
      to={`/type/${type.name}`}
      key={type.name}
      className={`px-4 py-2 mx-2 text-sm md:text-base rounded-lg whitespace-nowrap transition-all 
        ${
          id === type.name
            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold'
            : 'text-gray-600 hover:text-purple-600 hover:underline'
        }`}
    >
      {type.name}
    </NavLink>
  ));

  return (
    <div className="w-full a overflow-x-auto bg-gray-100 py-2">
      <div className="flex flex-nowrap items-center px-4">
        {/* "All" option */}
        <NavLink
          to="/"
          className={`px-4 py-2 mx-2 text-sm md:text-base rounded-lg whitespace-nowrap transition-all 
            ${
              !id
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold'
                : 'text-gray-600 hover:text-purple-600 hover:underline'
            }`}
        >
          All
        </NavLink>
        {ourTypes}
      </div>
    </div>
  );
};

export default TyoeLinks;
