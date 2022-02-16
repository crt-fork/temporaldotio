import React from 'react';

export default function CodeCards({ cards = [], className}) {
  return (
    <div className={`${className}`}>
      <div className='mx-auto px-10 lg:flex lg:justify-center'>
        {cards.map((card, i) => (
          <div
            className='block mx-auto lg:mx-3 rounded-2xl lg:max-w-sm card-shadow mb-6 max-w-[560px] bg-white overflow-hidden'
            key={`code-cards-${i}`}>

            <div className={`relative justify-center rounded-t-2xl hidden lg:block`}>
              <img className='w-full' src={`${card.image}`} alt="Code" />
            </div>

            <div className='pt-8 pb-10 sm:pt-14 lg:pt-10 lg:pb-18 pl-8 pr-16 sm:pr-12 bg-white'>
              <h3 className='text-3xl mb-4 font-bold'>{card.headline}</h3>
              <p className='text-sm'>{card.subhead} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

