import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function Count({ copy = {}, className}) {
  let animateActive = true;
  const [hasRun, setHasRun] = useState(false);

  const onVisible = (isVisible, callBackFn) => {
    if (isVisible && !hasRun) {
      setHasRun(true);
      return callBackFn()
    }
  }

  return (
    <div className={`bg-white ${className}`}>
      <div className='mx-auto text-center'>
        <h2 className='text-4xl px-6 sm:text-6xl md:text-8xl  font-bold'> {copy.headline} </h2>
        <div className='count-background'>
          <CountUp
            start={copy.number - 74700000}
            end={copy.number}
            separator=","
            duration={1}
            onStart={() => animateActive = false}
          >

            {({ countUpRef, start }) => (
                <VisibilitySensor
                  onChange={(isVisible) => (animateActive) && onVisible(isVisible, start)}
                  active={animateActive}
                  delayedCall>
                    <span className='count-numbers text-[13vw] font-bold'  ref={countUpRef} />
                </VisibilitySensor>
            )}

          </CountUp>
        </div>

        <p className='px-6'>
            {copy.subhead}
        </p>
      </div>
    </div>
  );
}

