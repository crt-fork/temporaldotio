import React from 'react';
import PropTypes from 'prop-types';

Timeline.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string
}

export default function Timeline({items = [], className}) {
  return (
    <div className={`${className}`}>
      <div className='container mx-auto px-10 lg:flex'>
        <div className='mx-auto'>
          {items.map((item, i) => (
            <div
            className='flex flex-wrap items-center mb-20 timeline-date'
            key={`timeline-item-${i}`}>
                
              <div className='w-[200px] mr-[80px] flex relative'>
                <p className='text-7xl font-bold'>{item.year}</p>
                <span className='timeline-ball'></span>
                <span className='timeline-line'></span>
              </div>

              <div className='flex border border-gray-300 drop-shadow-md rounded-lg	max-w-[800px] md:w-[57%] lg:w-[60%]	xl:w-full p-8 pr-12 items-center'>
                <img className='mr-[35px] w-[55px]' src={`${item.icon}`} alt={item.alt}></img>
                <p className='text-lg'>{item.copy}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

