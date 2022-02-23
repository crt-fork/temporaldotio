import React from "react";
import CountUp from "react-countup";

export default function Count({ copy = {}, className }) {

  return (
    <div className={`bg-white ${className} `}>
      <div className="mx-auto text-center">
        <h2 className="text-4xl px-6 sm:text-6xl md:text-8xl font-bold	">
          {" "}
          {copy.headline}{" "}
        </h2>
        <div className="count-background">
          <CountUp
            start={0}
            end={86400 * 70000}
            separator=","
            duration={86400}
            delay={0}
            useEasing={false}
          >
            {({ countUpRef }) => (
              <span
                className="count-numbers text-[13vw] font-mono font-black"
                ref={countUpRef}
              />
            )}
          </CountUp>
        </div>

        <p className="px-6">{copy.subhead}</p>
      </div>
    </div>
  );
}
