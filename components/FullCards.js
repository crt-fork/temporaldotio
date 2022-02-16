import React from 'react';
import { v4 as uuid } from 'uuid';

export default function FullCards({ cards = [], className}) {
  return (
    <div className={`${className}`}>

      <div className='mx-auto lg:flex'>

        {cards.map(card => (
          <div key={uuid()}
            className='pt-20 pb-10 lg:pb-20 px-8 md:px-10 lg:w-4/12 bg-gray-900 text-white border-white border-solid border-b lg:border-r last:border-r-0'>
            <img className='mb-14 lg:mb-80' src={`${card.icon}`} alt="icon" />
            <div className=''>
              <h3 className='text-3xl font-bold'>{card.headline}</h3>
            </div>
          </div>
        ))}

    </div>
  </div>
  );
}

