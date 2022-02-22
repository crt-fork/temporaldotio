import React from 'react';
import PropTypes from 'prop-types';

ColumnLayout.propTypes = {
  left: PropTypes.any,
  right: PropTypes.any,
  className: PropTypes.string,
  leftProps: PropTypes.object,
  rightProps: PropTypes.object
}
export default function ColumnLayout({
  left,
  right,
  className,
  leftProps = {},
  rightProps = {},
}) {
  return <ColumnLayout.Container
    className={className}
    overhang={overhang}
    left={left}
    right={right}
    leftProps={leftProps}
    rightProps={rightProps}/>;
}

ColumnLayout.Container = function Container({ left, right, leftProps = {}, rightProps = {} }) {
  return right ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
      <div
        {...leftProps}
        className={clsx('lg:col-span-5 xl:col-span-6 flex flex-col', leftProps.className)}
      >
        { left }
      </div>
      <div
        {...rightProps}
        className={clsx(
          'mt-4 -mx-4 sm:mx-0 lg:mt-0 lg:col-span-7 xl:col-span-6',
          rightProps.className
        )}
      >
        { right }
      </div>
    </div>
  ) : (
    <div {...leftProps} className={clsx('max-w-7xl mx-auto sm:px-6 md:px-8', leftProps.className)}>
      { left }
    </div>
  )
}
