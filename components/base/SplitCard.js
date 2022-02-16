import React from 'react';
import clsx from 'clsx';
import lineBreak from '@/utilities/lineBreak';
export default function SplitCard({ icon, iconAttributes, alt, color, headline, copy, className }) {
  return (
    <div className={clsx(
      'py-14 px-8 md:px-4 lg:px-10 rounded-2xl lg:max-w-md lg:min-h-[440px] card-shadow border-4 border-solid border-grey-100',
      className,
      (color == 'dark')
        ? 'bg-gray-900 text-white'
        : 'bg-white'
      )}>
      <img className='mb-36' src={`${icon}`} alt={alt} {...iconAttributes}/>
      <h3 className='text-3xl mb-4 font-bold linebreak-space'>{lineBreak(headline)}</h3>
      <p className='text-sm lg:text-lg'>{copy}</p>
    </div>
  );
}
