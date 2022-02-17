import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

CopyGrid.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.className
}

export default function CopyGrid({rows = undefined, columns = 4, children, className}) {
  return (
    <div className={clsx(className)}>
      {/* TODO: why is dynamic grid-cols-X css not being applied? */}
      <div className={clsx(
        'mx-auto',
        'container',
        'grid',
        'grid-cols-1',
        'gap-0',
        'sm:grid-cols-2',
        'md:grid-cols-4',
        columns && `lg:grid-cols-${columns}`,
        rows && `grid-rows-${rows}`,
      )}>
        {children}
      </div>
    </div>
  );
}
