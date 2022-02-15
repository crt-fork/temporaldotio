import React from 'react';
import lineBreak from '../utilities/lineBreak'
import { v4 as uuid } from 'uuid';

export default function Testimonials({ cards = [], className}) {
  return (
    <div className={`px-10 mx-auto w-full max-w-screen-xl masonry sm:masonry-2 lg:masonry-3 ${className}`}>
      {cards.map((card, i) => (
        <div className={`border border-white rounded-2xl py-10 px-6 break-inside ${i === 0 ? 'mb-6' : 'my-6'}`}
          key={uuid()}>
          <h3 className='text-3xl	font-bold'>{card.company}</h3>
          <img className='py-6' src="/images/icons/quote.svg" alt="" />
          <p className='linebreak-space sm:text-lg'>{lineBreak(card.quote)}</p>
          <p className='text-right text-lg'>{card.name}</p>
          <p className='text-right text-lg'>{card.title}</p>
        </div>
      ))}
    </div>
  );
}

