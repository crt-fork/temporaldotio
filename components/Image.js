import React from 'react';

export default function Image({className, mobileSrc, wideSrc, alt}) {
  return (
    <div className={` ${className}`}>
      <div className='sm:container mx-auto sm:px-10'>
        <picture>
          <source srcSet={`${wideSrc}`} media="(min-width: 640px)"></source>
          <img className='mx-auto' src={`${mobileSrc}`} alt={`${alt}`}></img>
        </picture>
      </div>
    </div>
  );
}

