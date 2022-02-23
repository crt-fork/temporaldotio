import React, { useState } from "react";
import CountUp from "react-countup";

export default function Count({ copy = {}, className }) {
  const updateRate = 10000;

  const [fontSize, setFontSize] = useState("text-[13vw]");
  const duration = 0.1;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(updateRate);

  return (
    <div className={`bg-white ${className} `}>
      <div className="mx-auto text-center">
        <h2 className="text-4xl px-6 sm:text-6xl md:text-8xl font-bold	">
          {" "}
          {copy.headline}{" "}
        </h2>
        <div className="count-background">
          <CountUp
            start={start}
            end={end}
            separator=","
            duration={duration}
            delay={0}
            useEasing={false}
            onEnd={() => {
              const fontSizeUpdate = "text-[11vw]";
              // The easing function for this isn't passed into the core lib that it uses
              // so instead we'll update every milisecond so the easing function is flattened out
              // to be more linear. I'd swap it to a better lib but ¯\_(ツ)_/¯ nobody got time for that
              if (end >= 100000000000 && fontSize !== fontSizeUpdate) {
                setFontSize(fontSizeUpdate);
              }

              setEnd((end) => {
                setStart(end);
                return end + updateRate;
              });
            }}
          >
            {({ countUpRef }) => (
              <span
                className={`count-numbers font-mono font-black ${fontSize}`}
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
