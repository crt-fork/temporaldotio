import React from 'react';
import lineBreak from '../../utilities/lineBreak'

export default function Hero({ copy = {}, className}) {
  return (
    <div className={`pt-24 pb-10 md:pb-20 lg:pt-52 ${className}`}>  
      <div className='container mx-auto px-10'>
        <h1 className='text-4xl sm:text-7xl xl:text-9xl font-bold  mx-auto'> {lineBreak(copy.headline)} </h1>
      </div>
    </div>
  );
}

