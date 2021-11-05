import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const TemporalSystemTools = () => {
  return (
    <section className="py-16 lg:ml-20 grid grid-cols-1 lg:grid-cols-12  items-center justify-center text-white">
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
        <div className="text-lg space-y-4">
          <p>
            Open source service that scales from a single binary to fleets independently scalable
            services. Pluggable persistence with PostgreSQL, MySQL, Cassandra, and ElasticSearch.
          </p>
          <p>Try with Docker, self-host on Kubernetes, or let Temporal Cloud do it for you!</p>

          <Link href="/">
            <a className="text-[#47b7f8] font-semibold tracking-wide text-lg block">Learn more</a>
          </Link>
        </div>
      </div>
    </section>
  );
};
