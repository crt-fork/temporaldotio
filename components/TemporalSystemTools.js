import React from 'react';
import Image from 'next/image';
import DirectionalControl from './DirectionalControl';

export const TemporalSystemTools = () => {
  return (
    <>
      <div className="bg-gray-1000">
        <section className="max-w-screen-2xl mx-auto pt-4 pb-28 lg:ml-20 grid grid-cols-1 lg:grid-cols-12  items-center justify-center text-gray-100">
          <div className="col-span-1 lg:col-span-7">
            <Image
              className="object-cover"
              src="/temporal-system-tools.svg"
              width="900"
              height="600"
              alt=""
            />
          </div>
          <div className="col-span-1 md:col-span-5 px-8">
            <h2 className="text-4xl font-bold mb-4 tracking-wide">Temporal System Tools</h2>
            <div className="text-lg">
              <p>
                Open source service that scales from a single binary to fleets independently
                scalable services. Pluggable persistence with PostgreSQL, MySQL, Cassandra, and
                ElasticSearch.
              </p>
              <p>Try with Docker or let Temporal Cloud do it for you!</p>
            </div>
            <DirectionalControl
              className="w-48 mt-10"
              href="https://docs.temporal.io/docs/server/introduction">
              Learn more
            </DirectionalControl>
          </div>
        </section>
      </div>
    </>
  );
};
