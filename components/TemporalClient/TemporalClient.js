import React from 'react';
import { CodeSwitcher } from './CodeSwitcher';

export const TemporalClient = () => {
  return (
    <section className="mt-12 mb-28 rounded-lg md:shadow-blue container mx-auto p-4 bg-gray-800">
      <div className="md:p-10 max-w-screen-2xl w-full mx-auto">
        <h2 className="text-xl mb-3 text-gray-100">Temporal Client</h2>
        <h3 className="text-4xl md:text-5xl font-bold">
          Microservice orchestration,
          <br /> without the pain
        </h3>
        <p className="my-5 max-w-2xl text-lg md:text-xl">
          Seamless and fault tolerant application state tracking, automatic retries, timeouts,
          rollbacks due to process failures, and more. Seamless and fault tolerant application state
          tracking, automatic retries, timeouts, rollbacks due to process failures, and more.
        </p>
        <a href="https://docs.temporal.io" className="text-blue-100 text-lg hover:underline">
          Learn more
        </a>
        <div className="mt-12 gap-10 grid grid-cols-1 lg:grid-cols-12 place-items-end">
          <div className="lg:col-span-5 space-y-3">
            <p className=" border-l-4 border-l-green-400 bg-green-500 p-5 rounded-lg">
              Workflows orchestrate the execution of activities, which are particular tasks in your
              business logic{' '}
            </p>
            <p className=" border-l-4 border-l-red-400 bg-red-500 p-5 rounded-lg">
              Activities can sleep for days, and can continue right where they left off
            </p>
            <p className=" border-l-4 border-l-blue-400 bg-blue-500 p-5 rounded-lg">
              Activities have timeouts, and will be retried by default!
            </p>
          </div>
          <CodeSwitcher />
        </div>
      </div>
    </section>
  );
};
