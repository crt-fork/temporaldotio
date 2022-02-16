import React from 'react';

export default function FeatureCards({ cards = [], className}) {
  return (
    <div className={`${className}`}>
      <div className='container mx-auto px-10 lg:flex'>
        <div className='mx-auto lg:flex'>
          {cards.map((card, i) => (

            <div
            className='py-14 px-8 md:px-10 rounded-2xl mx-auto lg:mx-3  lg:max-w-sm  border-4	border-gray-100	card-shadow mb-6'
            key={`feat-card-${i}`}>
              <img className='mb-14' src={`${card.icon}`} alt={card.alt} />
              <div className='lg:flex lg:flex-wrap lg:content-end lg:h-4/5'>
                <h3 className='text-3xl mb-4 line-through font-bold'>{card.super}</h3>
                <h3 className='text-3xl mb-4 font-bold'>{card.headline}</h3>
                <p className='text-2xl lg:text-lg'>{card.subhead} </p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

