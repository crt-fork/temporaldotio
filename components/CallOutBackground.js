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
              "text-3xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 lg:mb-12 font-bold",
            )}
          >
            {lineBreak(copy.headline)}
          </h2>
          <p className="text-sm xl:text-3xl">
            {lineBreak(copy.subhead)}
          </p>
        </div>
        
      </div>
    </div>
  );
}
