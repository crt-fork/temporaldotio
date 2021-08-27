import React from 'react';
import { Nav } from './Nav';
import DirectionalControl from './DirectionalControl';
// import { Banner } from './Banner'; // company announcements - not needed for now
import { CodeSwitcher } from './CodeSwitcher/CodeSwitcher';
import Companies from './Companies';
import ExplainTemporal from './ExplainTemporal';

export default function Hero() {
  return (
    <div>
      {/* <Banner /> */}
      <section className="container mx-auto p-4">
        <Nav />
        <div className="my-12 md:my-14 flex flex-col space-y-5 justify-center items-center">
          <h1 className="text-60 leading-60 lg:text-8xl tracking-wide capitalize font-bold text-center">
            Build Invincible Apps
          </h1>
          <p className="text-xl md:text-2xl max-w-screen-md text-center">
            Temporal is the open source microservices orchestration engine for running highly
            reliable mission-critical applications at any scale.
          </p>
          <div className="py-4 text-lg font-medium flex flex-col justify-center sm:justify-start space-y-4 sm:space-y-0 sm:flex-row sm:space-x-14 items-center">
            <DirectionalControl href="https://docs.temporal.io/">Get Started</DirectionalControl>
            <ExplainTemporal />
          </div>
          <div className="flex space-x-2 items-center md:text-lg ">
            <img className="w-5 h-5" src="/icons/icon-github.svg" alt="GitHub Icon" />
            <p>
              <a
                className="hover:text-temporalblue hover:underline"
                href="https://github.com/temporalio/temporal"
                rel="noreferrer"
                target="_blank">
                View Source and give us a star!
              </a>
            </p>
            <div className="flex space-x-2 items-center text-lg">
              <img className="w-5 h-5" src="/icons/icon-star.svg" alt="GitHub Icon" />
            </div>
          </div>
          <div className="hidden md:block">
            <CodeSwitcher />
          </div>
          <div className="py-10">
            <Companies />
          </div>
        </div>
      </section>
    </div>
  );
}
