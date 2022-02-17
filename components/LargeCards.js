import React from 'react';
import lineBreak from '../utilities/lineBreak'

export default function LargeCards({ cards = [], className}) {
  return (
    <div className={`${className}`}>
      <div className='mx-auto px-10 lg:px-10 lg:flex lg:justify-center'>

      {cards.map((card, index) => (
        <div
          key={`large-cards-${index}`}
          className="lg:flex">
          <div className={`py-14 px-8 md:px-10 lg:pb-20 rounded-2xl mb-10 lg:mb-0 mx-auto lg:max-w-lg lg:mx-5 border	border-gray-300	 lg:min-h-[615px] lg:flex lg:flex-wrap lg:content-between ${(card.backgroundStyle == "dark") ? "bg-gray-900 text-white " : "bg-white" } `}>
            <div className=''>
              <img className='mb-16 lg:mb-20' src={`${card.icon}`} alt="icon" />
              <h3 className='text-3xl mb-4 lg:mb-20 font-bold'>{card.headline}</h3>
            </div>

            <div className=''>
              <p className='text-lg lg:mb-4 font-bold'>{card.date} </p>
              <p className={`text-lg linebreak-space  ${card.linkUrl && "mb-4"} `}>{lineBreak(card.body)} </p>

              { card.linkUrl &&
                <a href={`${card.linkUrl}`} className={`mb-10 sm:mb-0  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-12 px-6 rounded-lg w-full sm:w-auto border-solid border-2 font-medium px-6 py-4 bottom-shadow dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 transition ${((index + 1)== 2) ? "bg-gray-900 text-white border-white hover:bg-gray-700" : "border-gray-900 hover:bg-gray-700 hover:text-white" } `}>{card.linkCopy}</a>
              }
            </div>


          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

