import React from 'react';

const sites = [
  {
    src: '/logos/logo-Airbyte.svg',
    alt: 'Airbyte logo',
    url: 'https://docs.temporal.io/blog/airbyte-case-study'
  },
  {
    src: '/logos/logo-Zebra-Medical-Vision.svg',
    alt: 'Zebra Medical Vision logo',
    url: 'https://docs.temporal.io/blog/zebra-medical-case-study/'
  },
  {
    src: '/logos/logo-Checkr.svg',
    alt: 'Checkr logo',
    url: 'https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows'
  },
  {
    src: '/logos/logo-Coinbase.svg',
    alt: 'Coinbase logo',
    url: 'https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase'
  },
  {
    src: '/logos/logo-Box.svg',
    alt: 'Box logo',
    url: 'https://docs.temporal.io/blog/Temporal-a-central-brain-for-Box'
  },
  {
    src: '/logos/logo-Descript.svg',
    alt: 'Descript logo',
    url: 'https://docs.temporal.io/blog/descript-case-study'
  }
];

export default function Companies() {
  return (
    <div>
      <p className="text-center text-2xl mt-10 mb-3 capitalize font-bold tracking-wide">
        Trusted by
      </p>
      <div className="flex flex-wrap items-center justify-center space-x-5 font-bold ">
        {sites.map((site, i) => (
          <a key={i} className="" href={site.url}>
            <img
              className="w-32 h-32 md:w-36 lg:w-44 md:h-36 lg:h-44"
              src={site.src}
              key={site.src}
              alt={site.alt}
            />
          </a>
        ))}
      </div>
      <p className="mt-5 text-xl text-center">
        <span className="opacity-75">Check out more from</span>{' '}
        <a
          className="nav-link"
          href="https://eng.snap.com/build_a_reliable_system_in_a_microservices_world_at_snap/">
          Snapchat
        </a>
        ,{' '}
        <a
          className="nav-link"
          href="https://spiralscout.com/blog/temporal-workflow-and-microservices">
          Spiral Scout
        </a>
        ,{' '}
        <a
          className="nav-link"
          href="https://www.youtube.com/watch?v=kDlrM6sgk2k&t=1188s&ab_channel=HashiCorp">
          Hashicorp
        </a>{' '}
        &{' '}
        <a className="nav-link" href="https://docs.temporal.io/blog/tags/case-study">
          more
        </a>
      </p>
    </div>
  );
}
