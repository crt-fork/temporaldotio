import React from 'react';
import Image from 'next/image';
import DirectionalControl from './DirectionalControl';

export const TemporalDevTools = () => {
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
            {/* <h2 className="text-4xl font-bold mb-4 tracking-wide">Temporal DevTools</h2> */}
            <h2 className="text-xl mb-3 text-gray-50">Temporal DevTools</h2>
            <h3 className="text-4xl font-bold mb-4 tracking-wide">Observability & Control</h3>
            <div className="text-lg">
              <p className="mb-3">
                Make the "distributed systems murder mystery" as predictable as Scooby Doo, with a
                Web UI that provides end-to-end visibility and metadata search, and a CLI to query
                and administer your Cluster!
              </p>
            </div>
            <DirectionalControl
              className="w-48 mt-10"
              href="https://docs.temporal.io/docs/system-tools/introduction">
              Read docs
            </DirectionalControl>
          </div>
        </section>
      </div>
    </>
  );
};
