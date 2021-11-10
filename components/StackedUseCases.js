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
        Define <span className="">retries, rollbacks, cleanup, and even human-in-the-loop</span>{' '}
        steps in the case of failure. With end to end visibility across multiple services.
      </div>
    ),
    title: 'Microservices Orchestration'
  },
  {
    icon: '/icons/icon-sharding.svg',
    content: (
      <div>
        <span className="">
          Reliability, consistency, failure compensation, long running operations, and distributed
          transactions
        </span>{' '}
        for your most critical financial operations.
      </div>
    ),
    link: '/usecases#transactions',
    title: 'Financial Transactions'
  },
  {
    icon: '/icons/icon-streaming.svg',
    content: (
      <div>
        When ad-hoc provisioning doesn't scale and Kubernetes or Fargate doesn't give you enough
        control, <span className="">write your own control plane</span> in languages you know best.
      </div>
    ),
    link: '/usecases#provisioning',
    title: 'Resource Provisioning'
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
    link: '/usecases#monitoring',
    title: 'Monitoring'
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
    link: '/usecases#monitoring',
    title: 'Long Running Processes'
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
    link: '/usecases#monitoring',
    title: 'Distributed Transactions'
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
            Learn more
          </DirectionalControl>
        </div>
      </div>
    </section>
  </>
);

export default StackedUseCases;
