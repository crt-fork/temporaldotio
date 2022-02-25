import React from 'react';
import PropTypes from 'prop-types';

LogoFeature.propTypes = {
  copy: PropTypes.string,
  logos: PropTypes.array,
  className: PropTypes.string
}

export default function LogoFeature({ copy, logos = [], className}) {
  return (
    <div className={`${className}`}>
      <div className='container mx-auto px-10'>
        <p className='max-w-[600px] mx-auto lg:text-2xl font-light'>{copy}</p>
        <div className='flex flex-wrap mx-auto pt-32 justify-center	items-center'>
          {logos.map((logo, i) => (
            <img className='mx-4 mb-8 lg:mx-8 max-w-[100px] lg:max-w-none	' src={`${logo.image}`} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

