import clsx from 'clsx';
import React from 'react';

export default function VideoCards({ cards = [], className, columns = 3 }) {
  // TODO: convert to mediaCards Component (accept images or video links)
  return (
    <div className={`${className}`}>
      <div className={clsx(
        'mx-auto px-10 lg:flex lg:flex-wrap lg:justify-center',
        columns === 2 && 'max-w-screen-lg'
      )}>
        {cards.map((card, i) => (
          <a key={`video-card-${i}`}
            href={`${card.link}`}
            target={` ${card.newTab ? "_blank": "_self"}`}
            className={`block mx-auto lg:mx-3 rounded-2xl lg:max-w-sm card-shadow mb-6 transition hover:scale-105 focus:scale-105 ${(!card.image)&& "bg-gray-900 text-white max-w-xl lg:w-[30%]"}`}>
            <div className={'flex items-center relative justify-center relative h-52 rounded-t-2xl'}
              style={{ background: card.backgroundColor }}>
              {card.image &&
                <img alt={`${card.alt}`}
                  className='absolute'
                  src={`${card.image}`}
                />
              }
              {!!card.play && (
                <img alt=""
                  className={`absolute ${(!card.image) && "top-12 left-8"}`}
                  src={`${(card.play == "light") ? "/images/icons/play-light.svg" : "/images/icons/play-dark.svg" }`}
                />
              )}
            </div>

            <div className={`py-8 ${card.image ?"px-10":"px-8"}`}>
            { card.super &&
              <h3 className='text-3xl mb-4 line-through font-bold'>{card.super}</h3>
            }
              <h3 className='text-3xl mb-4 font-bold'>{card.headline}</h3>
              <p className={`${card.image? "text-sm": "text-2xl"}`}>{card.subhead} </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

