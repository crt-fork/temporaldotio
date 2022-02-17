import clsx from 'clsx';
import React from 'react';
import OfficeHoursCta from '@/components/base/OfficeHoursCta';
import lineBreak from '../utilities/lineBreak'
import PropTypes from 'prop-types';

CallOut.propTypes = {
  copy: PropTypes.object,
  textAlign: PropTypes.string,
  desktopLayout: PropTypes.string,
  className: PropTypes.string,
  officeHours: PropTypes.object,
  children: PropTypes.any
}

export default function CallOut({
  copy = {},
  textAlign = "left" || "right" || "center",
  desktopLayout,
  className,
  officeHours,
  children,
}) {
  const setAlign = (val) => (!!val ? `text-${val}` : "");

  return (
    <div className={`${className}`}>
      <div
        className={clsx(
          "container mx-auto px-8 sm:px-10",
          `${setAlign(textAlign)}`
        )}
      >
        <h2
          className={clsx(
            "leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 lg:mb-12 font-bold mx-auto tracking-tight ",
            desktopLayout == "half" ? "lg:mx-0" : "sm:max-w-[80%]"
          )}
        >
          {lineBreak(copy.headline)}
        </h2>
        <p className="text-sm sm:text-2xl max-w-[960px] mx-auto">
          {copy.subhead}{" "}
          {copy.subheadLinkCopy && (
            <a className="underline" href={`${copy.subheadLinkUrl}`}>
              {copy.subheadLinkCopy}
            </a>
          )}
        </p>
        <div
          className={clsx(
            "mb-4 md:mb-6 text-lg font-medium flex flex-col justify-center items-center",
            copy.button &&
              "sm:justify-start sm:space-y-0 sm:flex-row sm:space-x-14"
          )}
        >
          {copy.button && (
            <a
              href={`${copy.url}`}
              className="hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:text-white border-solid border-2 border-white inline-block mt-4 lg:mt-8 font-medium px-6 py-4 rounded-lg w-full sm:w-auto"
            >
              {copy.button}
            </a>
          )}

          {!!officeHours && officeHours.sessions && (
            <OfficeHoursCta
              className="flex border-solid border-2 border-white mt-4 lg:mt-8"
              btnCopy={officeHours.btnCopy}
              sessions={officeHours.sessions}
            />
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
