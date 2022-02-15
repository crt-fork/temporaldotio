import React from 'react';
import lineBreak from '../../utilities/lineBreak'

export default function BodyCopy({ copy = {}, className}) {
  return (
    <div className={`${className}`}>  
      <div className='max-w-[900px] mx-auto px-10'>
        <p className='linebreak-space text-lg	md:text-2xl' >{lineBreak(copy.body)} </p>
      </div>
    </div>
  );
}

