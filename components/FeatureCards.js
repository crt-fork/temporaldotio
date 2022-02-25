import React from 'react';
import PropTypes from 'prop-types';

FeatureCards.propTypes = {
  alignContent: PropTypes.string,
  cards: PropTypes.array,
  className: PropTypes.string
}

export default function FeatureCards({ alignContent, cards = [], className}) {
  return (
    <div className={`${className}`}>
      <div className='container mx-auto px-10 lg:flex'>
        <div className='mx-auto lg:flex'>
          {cards.map((card, i) => (

            <div
            className='py-14 px-8 md:px-10 rounded-2xl mx-auto lg:mx-3  lg:max-w-sm  border	border-gray-300	 mb-6'
            key={`feat-card-${i}`}>
              <img className='mb-14' src={`${card.icon}`} alt={card.alt} />
              <div className={`lg:flex lg:flex-wrap lg:h-4/5 ${(alignContent == "start") ? "lg:content-start" : "lg:content-end" }`}>
                <h3 className='text-3xl mb-4 line-through font-bold'>{card.super}</h3>
                <h3 className='text-3xl mb-4 font-bold'>{card.headline}</h3>
                <p className='text-2xl lg:text-lg'>{card.subhead} </p>
                {card.tags && (
                  <ul className='pt-7'>
                    {card.tags.map((tag, i) => (
                      <li className='inline-block bg-gray-200 px-[14px] py-[8px] text-xs mr-[9px] mb-[10px] rounded-full'>{tag}</li>
                    ))}
                  </ul>
                )}
                
              </div>
              {card.linkCopy && (
                <a className='underline' href={`${card.linkUrl}`}>
                  {card.linkCopy}
                </a>
              )}
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

