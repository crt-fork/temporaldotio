import React from 'react';

const sites = [
  {
    src: '/logos/logo-Coinbase.svg',
    alt: 'Coinbase logo',
    url: 'https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase'
  },
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
      <div className="flex flex-wrap md:space-x-5 font-bold items-center justify-center">
        {sites.map((site, i) => (
          <a className="md:mt-4 flex" key={i} href={site.url}>
            <img
              className="w-32 h-32 md:w-44 md:h-44 hover:text-temporalblue"
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
          Snap
        </a>
        ,{' '}
        <a
          className="nav-link"
          href="https://www.youtube.com/watch?v=kDlrM6sgk2k&t=1188s&ab_channel=HashiCorp">
          Hashicorp
        </a>
        ,{' '}
        <a
          className="nav-link"
          href="https://www.youtube.com/watch?v=eWFpl-nzGsY&feature=youtu.be">
          Datadog
        </a>
        ,{' '}
        <a
          className="nav-link"
          href="https://doordash.engineering/2020/08/14/workflows-cadence-event-driven-processing/">
          Doordash
        </a>{' '}
        &{' '}
        <a className="nav-link" href="https://docs.temporal.io/docs/external-resources">
          others
        </a>
      </p>
    </div>
  );
}
