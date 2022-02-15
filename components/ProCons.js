import React from 'react';

export default function ProCons({left ={}, leftHeading, right ={}, rightHeading}) {
  return (
    <div className='container mx-auto px-10 mb-10 lg:mb-12'>
      <div className="grid lg:grid-cols-2 gap-x-8">
        <div className='mt-10 lg:mt-12'>
          <h3 className='text-3xl lg:text-4xl font-bold mb-6 lg:mb-8'>{leftHeading}</h3>
          {left}
        </div>
        <div className='mt-10 lg:mt-12'>
          <h3 className='text-3xl lg:text-4xl font-bold mb-6 lg:mb-8'>{rightHeading}</h3>
          {right}
        </div>
      </div>
    </div>
  )
}
