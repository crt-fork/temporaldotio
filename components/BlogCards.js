import clsx from 'clsx';
import React from 'react';

export default function BlogCards({ cards = [], className, columns = 3 }) {

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
            className={`block mx-auto lg:mx-3 border border-gray-300 rounded-2xl lg:max-w-sm mb-6 transition hover:scale-105 focus:scale-105 ${(!card.image)&& "bg-gray-900 text-white max-w-xl lg:w-[30%]"}`}>
            <div className={'flex items-center relative justify-center relative h-52 rounded-t-2xl'}
              style={{ background: card.backgroundColor }}>
              <img alt="Blog icon"
                className='absolute top-[60px] left-[30px]'
                src="/images/icons/blog.svg"
              />

            </div>

            <div className={`py-8 h-[calc(100%-13rem)] flex flex-wrap ${card.image ?"px-10":"px-8"}`}>

              <h3 className='text-3xl mb-4 font-bold'>{card.headline}</h3>
              <div className='flex w-full items-center'>
                <img className='rounded-full' src={`${card.headshot}`} alt="" />
                <div className='ml-4'>
                  <p className=''>{card.author}</p>
                  <p className=''><i>{card.position}</i></p>
                </div>
              </div>
              <p className={`${card.image? "text-sm": "text-2xl"}`}>{card.subhead} </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

