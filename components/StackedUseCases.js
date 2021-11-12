import Link from 'next/link';
import Image from 'next/image';
import DirectionalControl from './DirectionalControl';

const Stack = ({ content, link, title, icon }) => (
  <div className="stack after:transition-all  relative">
    <Link href={link}>
      <a>
        <div className="stack__content transition-all h-full w-full rounded-lg relative flex flex-col items-start">
          <div className="mb-3 rounded-lg bg-blue-300 p-2 w-12 h-12">
            <Image width="60" height="60" src={icon} alt={`${title} icon`} />
          </div>
          <h2 className="text-2xl tracking-wide font-semibold">{title}</h2>
          <p className="flex-grow font-light my-4 text-lg">{content}</p>
        </div>
      </a>
    </Link>
  </div>
);

const USE_CASES = [
  {
    icon: '/icons/icon-sharding.svg',
    link: '/usecases#orchestration',
    content: (
      <div>
        Tame your exploding Microservices Hairball. Standardize{' '}
        <span className="">retries, timeouts, and cancellation</span> and test/version the same way
        you write all your other software! Examples: Snapchat, Checkr, Doordash
      </div>
    ),
    title: 'Microservices Orchestration'
  },
  {
    icon: '/icons/icon-sharding.svg',
    content: (
      <div>
        No more double spends or dropped payments. Reliability, consistency, failure compensation,
        long running operations, and distributed transactions for your most critical transfers.
        Examples: Coinbase, Box.
      </div>
    ),
    link: '/usecases#transactions',
    title: 'Distributed Transactions'
  },
  {
    icon: '/icons/icon-streaming.svg',
    content: (
      <div>
        Whether you are implementing CI/CD pipelines or creating managed clouds,{' '}
        <span className="">write your own control plane</span> in languages you know best. Examples:
        HashiCorp, Datadog, Stripe.
      </div>
    ),
    link: '/usecases#provisioning',
    title: 'Infrastructure Provisioning'
  },
  {
    icon: '/icons/icon-storage.svg',
    content: (
      <div>
        Reliable polling that is as simple or sophisticated as you need, at massive scale. Imagine{' '}
        <span className="">100s of millions parallel cron jobs</span> that survive any machine
        failure.
      </div>
    ),
    link: '/usecases#Monitoring',
    title: 'Monitoring'
  },
  {
    icon: '/icons/icon-storage.svg',
    content: (
      <div>
        Distributed Cron, at massive scale. Reliable polling that is as simple or sophisticated as
        you need. Run 100s of millions parallel cron jobs that survive any machine failure.
      </div>
    ),
    link: '/usecases#Processes',
    title: 'Long Running Processes'
  },
  {
    icon: '/icons/icon-storage.svg',
    content: (
      <div>
        Run millions of data processing jobs in parallel. Track to their individual statuses, easily
        scale up and down workers, and decimate downtime. Examples: Descript, Zebra Medical Vision,
        Airbyte
      </div>
    ),
    link: '/usecases#Pipelines',
    title: 'Data Pipelines'
  }
];

const StackedUseCases = () => (
  <>
    <section id="use-cases" className="bg-gray-800 bg-svg">
      <div
        className={`
    container mx-auto
    px-8 py-36
    `}>
        <h3 className="text-4xl md:text-5xl font-bold mb-20">
          Simple building blocks,
          <br /> hundreds of uses cases
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12  mx-auto">
          {USE_CASES.map((useCase) => (
            <Stack
              icon={useCase.icon}
              content={useCase.content}
              link={useCase.link}
              title={useCase.title}
              key={useCase.link}
            />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <DirectionalControl secondary href="/usecases">
            Read more
          </DirectionalControl>
        </div>
      </div>
    </section>
  </>
);

export default StackedUseCases;
