import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

AnnouncementBar.propTypes = {
  children: PropTypes.any,
  closeFn: PropTypes.func.isRequired
}

export default function AnnouncementBar({children, closeFn }) {
  return (
    <div className='py-3.5 px-10 text-lg bg-black text-white'>
      <div className='flex justify-between items-center'>
        <div className='text-left max-w-xs sm:max-w-sm md:max-w-full md:text-center grow'>
          {children}
        </div>
        <button onClick={closeFn}
          className='ml-10 p-2.5 hover:text-blue-200'>
            <FontAwesomeIcon className='h-[1em]'
              icon={["fal", 'times']}/>
        </button>
      </div>
    </div>
  );
}
