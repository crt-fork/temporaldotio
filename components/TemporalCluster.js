import React from 'react';

export const TemporalCluster = () => {
  return (
    <>
      <div className="p-8 max-w-xl bg-gray-700 rounded-lg">
        <h2 className="text-xl mb-3 text-gray-50">Temporal Cluster</h2>
        <h3 className="text-4xl font-bold mb-4 tracking-wide">Reliability on Rails</h3>
        <p className="text-lg leading-relaxed mb-3">
          Open source server that scales from a single Go binary to large clusters handling hundreds
          of millions of concurrent Workflows. Run locally or provide as a platform to your
          developers like Netflix, Stripe, and HashiCorp.
        </p>
        <div className="flex items-center space-x-2 mt-10 text-xl text-blue-200">
          <a className="hover:underline" href="https://docs.temporal.io/docs/server/introduction">
            Temporal Cluster docs
          </a>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
