import React, { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link'
import OfficeHoursCta from '@/components/base/OfficeHoursCta';


export default function Hero({ copy = {}, ctas=[], officeHours = false, className, children }) {

  const [show, setShow] = useState(false);
  const [officeSession, setOfficeSession] = useState(undefined)
  const handleClose = () => setShow(false);
  const toggleShow = (val = false) => {
    if (typeof val !== undefined) {
      setShow(val)
    }
    setShow(!show);
  };
  const selectSession = (link = undefined) => {
    if (!!link && link !== officeSession) {
      setOfficeSession(link)
      setShow(true);
    }
  }
  return (
      <div className={`flex flex-col items-center justify-center container mx-auto px-4  ${className}`}>
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-6xl md:7xl lg:text-[7.5rem] xl:text-[8.75rem] mb-6 md:mb-12 max-w-[75%] tracking-tight text-center dark:text-white">{copy.headline}</h1>

        <p className="mb-10 md:mb-8 text-center text-2xl">{copy.subhead}</p>


        { ctas && (
          <div className='mb-4 md:mb-6 text-lg font-medium flex flex-col justify-center sm:justify-start sm:space-y-0 sm:flex-row sm:space-x-14 items-center'>
            { (!!officeHours && officeHours.sessions) &&
              <OfficeHoursCta
                btnCopy={officeHours.btnCopy}
                sessions={officeHours.sessions}
              />
            }
            {ctas.map((cta, i) => (
              <Link
                passHref={true}
                href={`${cta.url}`}
              >
                <a key={`hero-cta-${i}`}
                  className={clsx(
                    'mb-10 sm:mb-0  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-medium h-12 px-6 rounded-lg w-full flex items-center transition justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400',
                    (cta.style == 'light')
                      ? 'hover:bg-slate-900 border-2 border-slate-900 hover:text-white'
                      : 'bg-slate-900 hover:bg-slate-700 text-white'
                  )}>
                  {cta.copy}
                </a>
              </Link>
            ))}
          </div>
        )}
        <div>
          {children}
        </div>
    </div>
  );
}

