import clsx from 'clsx';
import React from 'react';
import lineBreak from '../utilities/lineBreak'
import PropTypes from 'prop-types';

CallOutBackground.propTypes = {
  copy: PropTypes.shape({
    headline: PropTypes.string,
    subhead: PropTypes.string,
  }),
  background: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
}

export default function CallOutBackground({
  copy = {},
  background,
  className,
}) {

  return (
    <div className={`bg-cover ${className}`} style={{backgroundImage: "url(" + background + ")"}}>
      <div
        className={clsx(
          "container mx-auto px-8 sm:px-10 ",
        )}
        
      >
        <div  className={clsx(
            "sm:max-w-[80%] mx-auto",
          )}>
          <h2
            className={clsx(
              "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl md:mb-6 lg:mb-12 font-bold ",
            )}
          >
            {lineBreak(copy.headline)}
          </h2>
          <p className="hidden md:block text-sm md:text-base  xl:text-3xl 2xl:text-5xl font-light leading-tight	md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight">
            {lineBreak(copy.subhead)}
          </p>
        </div>
        
      </div>
    </div>
  );
}
