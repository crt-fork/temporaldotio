import React from 'react';

const allSites = [
  {
    src: '/logos/logo-Box2.png',
    label: 'Box logo',
    url: 'https://docs.temporal.io/blog/Temporal-a-central-brain-for-Box'
  },
  {
    src: '/logos/logo-Snapchat.png',
    label: 'Snapchat logo',
    url: 'https://eng.snap.com/build_a_reliable_system_in_a_microservices_world_at_snap'
  },
  {
    src: '/logos/logo-Checkr.png',
    label: 'Checkr logo',
    url: 'https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows'
  },
  {
    src: '/logos/logo-Datadog.png',
    label: 'Datadog logo',
    url: 'https://www.youtube.com/watch?v=eWFpl-nzGsY'
  },
  {
    src: '/logos/logo-Coinbase.svg',
    label: 'Coinbase logo',
    url: 'https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase'
  },
  {
    src: '/logos/logo-Stripe.png',
    label: 'Stripe logo',
    url:
      'https://stripe.com/jobs/listing/infrastructure-engineer-developer-productivity-workflow-engine/2964407'
  },
  {
    src: '/logos/logo-Descript.png',
    label: 'Descript logo',
    url: 'https://docs.temporal.io/blog/descript-case-study'
  }
];

export default function HeroLogos() {
  const [site, setSite] = React.useState(allSites[0]);

  React.useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      if (i === allSites.length) i = 0;

      setSite(allSites[i]);
      i += 1;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a className="" href={site.url}>
      <img
        className="presetTransition animate-fade-in-down inline mx-2 hover:scale-110 object-contain h-10 w-10"
        src={site.src}
        key={site.src}
        aria-label={site.label}
        alt={site.label}
      />
    </a>
  );
}
