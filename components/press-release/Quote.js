import React from 'react';
import lineBreak from '../../utilities/lineBreak'

export default function Quote({ copy = {}, className}) {
  return (
    <div className={`bg-gray-900 text-white py-20 lg:py-48 ${className}`}>  
      <div className='container mx-auto px-10'>
        <p className='font-bold text-4xl sm:text-5xl xl:text-6xl pb-5 md:max-w-[90%] mx-auto'>{copy.quote}</p>
        <p className='text-2xl text-right'>{copy.name}</p>
        <p className='text-2xl text-right'>{copy.title}</p>
      </div>
    </div>
  );
}

