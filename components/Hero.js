import React from 'react';
import { Nav } from './Nav';
import DirectionalControl from './DirectionalControl';
import { Banner } from './Banner'; // company announcements
import Companies from './Companies';
import ExplainTemporal from './ExplainTemporal';
import { TemporalClient } from './TemporalClient';

export default function Hero() {
  return (
    <>
      <Banner />
      <section className="container mx-auto p-4">
        <Nav />
        <div className="bg-svg">
          <div className=" my-12 md:mt-24 flex flex-col space-y-5 justify-center items-center">
            <h1 className="text-60 leading-60 lg:text-8xl tracking-wide capitalize font-bold text-center">
              Build Invincible Apps
            </h1>
            <p className="text-xl md:text-3xl max-w-screen-md text-center text-gray-700">
              Temporal is the open source microservice orchestration platform for writing durable
              workflows as code.
            </p>
            <div className="py-4 text-lg font-medium flex flex-col justify-center sm:justify-start space-y-4 sm:space-y-0 sm:flex-row sm:space-x-14 items-center">
              <DirectionalControl href="https://docs.temporal.io/">Get Started</DirectionalControl>
              <ExplainTemporal />
            </div>
          </div>
        </div>
        <TemporalClient />
        <div className="my-28">
          <Companies />
        </div>
      </section>
    </>
  );
}
