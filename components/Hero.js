import React from 'react';
import DirectionalControl from './DirectionalControl';
import Companies from './Companies';
import ExplainTemporal from './ExplainTemporal';
import { TemporalSDKs } from './TemporalSDKs';

export default function Hero() {
  return (
    <section>
      <div className="bg-svg">
        <div className="my-12 md:mt-16 flex flex-col space-y-5 justify-center items-center px-2">
          <h1 className="text-60 leading-60 lg:text-8xl tracking-wide capitalize font-bold text-center">
            Build Invincible Apps
          </h1>
          <p className="text-xl md:text-3xl max-w-screen-md text-center md:leading-normal">
            Temporal is the open source microservice orchestration platform for writing durable
            workflows as code.
          </p>
          <div className="py-4 text-lg font-medium flex flex-col justify-center sm:justify-start space-y-4 sm:space-y-0 sm:flex-row sm:space-x-14 items-center">
            <DirectionalControl href="https://docs.temporal.io/">Start Building</DirectionalControl>
            <ExplainTemporal />
          </div>
        </div>
        <div className="mt-20 mb-28">
          <Companies />
        </div>
      </div>
      <TemporalSDKs />
    </section>
  );
}
