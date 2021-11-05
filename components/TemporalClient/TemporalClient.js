import React, { useState } from 'react';
import { CodeSwitcher } from './CodeSwitcher';
import { features } from './features';

export const TemporalClient = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="mt-12 mb-28 rounded-lg md:shadow-lg">
      <div className="md:p-10 max-w-screen-2xl w-full mx-auto">
        <h2 className="text-xl mb-3 text-gray-500">Temporal Client</h2>
        <h3 className="text-4xl md:text-5xl font-bold">
          Microservice orchestration,
          <br /> without the pain
        </h3>
        <div className="mt-12 gap-10 grid grid-cols-1 lg:grid-cols-12 place-items-end">
          <div className="lg:col-span-5 space-y-3">
            <p className=" border-l-4 border-l-green-700 bg-green-200 p-5 rounded-lg">
              Workflows orchestrate the execution of activities, which are particular tasks in your
              business logic{' '}
            </p>
            <p className=" border-l-4 border-l-red-700 bg-red-200 p-5 rounded-lg">
              Activities can sleep for days, and can continue right where they left off
            </p>
            <p className=" border-l-4 border-l-blue-700 bg-blue-200 p-5 rounded-lg">
              Activities have timeouts, and will be retried by default!
            </p>
          </div>
          <CodeSwitcher setTabIndex={setTabIndex} />
        </div>
      </div>
      <div className="rounded-b-lg px-10 py-5">
        <div className="mt-14 mb-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 grid-rows-5 justify-center">
          {features[tabIndex].links.map((feature, key) => (
            <div className="flex items-center  space-x-3" key={key}>
              <svg
                className="text-green-500 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg font-semibold tracking-wide capitalize">
                <a href={`https://docs.temporal.io${feature.href}`}>{feature.label}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
