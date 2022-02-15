import React from 'react';

export default function AnnouncementBar({children}) {
  return (
    <div className='py-3.5 px-10 bg-black text-white'>
      <div className='relative'>
        {children}
        <button className='absolute'></button>
      </div>
    </div>
  );
}
