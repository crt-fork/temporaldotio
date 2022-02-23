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
        <p className='w-[600px] mx-auto'>{copy}</p>
        <div className='flex mx-auto pt-32 justify-center	items-center'>
          {logos.map((logo, i) => (
            <img className='mx-8' src={`${logo.image}`} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}

