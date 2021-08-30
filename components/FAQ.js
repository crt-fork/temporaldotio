import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const Strong = ({ children }) => (
  <strong className="font-bold text-temporalblue">{children}</strong>
);
const Link = ({ href, children }) => (
  <a href={href} className="text-temporalblue hover:text-blue-200 hover:underline">
    {children}
  </a>
);

const faqs = [
  {
    question: 'Is Temporal open source?',
    answer: (
      <span>
        Yes,{' '}
        <Link href="https://github.com/temporalio/temporal/blob/master/LICENSE">MIT licensed</Link>.
        We have very large companies using open source Temporal in production without paying us a
        dime. You can:{' '}
        <ul className="list-disc pl-4">
          <li className="ml-4">
            <Link href="https://github.com/temporalio/temporal">view our source here</Link> (give us
            a star!),
          </li>
          <li className="ml-4">
            <Link href="https://github.com/temporalio/docker-compose">run Temporal locally</Link>{' '}
            with Docker, and{' '}
          </li>
          <li className="ml-4">
            <Link href="https://docs.temporal.io/docs/server/production-deployment">
              contribute to our self hosting docs
            </Link>
            .
          </li>
        </ul>
      </span>
    )
  },
  // Todo: add comparison docs
  // {
  //   question: `What's the difference between Temporal and Airflow, Camunda, Argo, Step Functions...`,
  //   answer: (
  //     <span>

  //     </span>
  //   )
  // },
  {
    question: 'Is there a hosted version of Temporal?',
    answer: (
      <span>
        Yes, we are building out Temporal Cloud right now with select enterprise scale Design
        Partners. If you would like to work with us, you can{' '}
        <Link href="https://us17.list-manage.com/survey?u=2334a0f23e55fd1840613755d&id=f1895b6f4a">
          register your interest in Temporal Cloud here.
        </Link>
      </span>
    )
  },
  {
    question: 'How does Temporal work under the hood?',
    answer: (
      <div>
        <ul className="list-disc my-4 pl-4">
          <li>
            Temporal Server runs as a cluster of 4 horizontally scalable Go services with a
            pluggable persistence layer (MySQL, PostgreSQL, or Cassandra), optional ElasticSearch
            visibility and an integrated Web UI.
          </li>
          <li>
            Application code sends Commands and Signals to lightweight Task Queues maintained by
            Temporal Server, which are polled by a scalable fleet of Workers.
          </li>
          <li>
            Workers execute Workflow and Activity code written in Temporal SDKs to determine state
            transitions, which are durably persisted by Temporal Server.
          </li>
        </ul>
        <p>
          You can{' '}
          <Link href="https://docs.temporal.io/docs/server-architecture">
            read our docs on Temporal's architecture
          </Link>{' '}
          or{' '}
          <Link href="https://docs.temporal.io/blog/workflow-engine-principles">
            watch our CEO's 23 minute talk on our design principles
          </Link>
          . More explanations from employees and users are available on our{' '}
          <Link href="https://temporal.io/youtube">YouTube</Link> and{' '}
          <Link href="https://docs.temporal.io/docs/external-resources/">External Resources</Link>{' '}
          page. If you just want code, you can read through{' '}
          <Link href="https://github.com/temporalio/temporal">Temporal's source</Link>!
        </p>
      </div>
    )
  },
  {
    question: (
      <span>
        Temporal seems to do everything. When should I <span className="">NOT</span> use Temporal?
      </span>
    ),
    answer: (
      <div>
        <ul className="list-disc sm:pl-4">
          <li className="ml-4">
            <Strong>Real-time</Strong>: While task latency is an important advantage of Temporal
            compared to other workflow systems, Temporal is not a good fit for realtime usecases
            like gaming and streaming as we optimize for transactional consistency over absolute
            lowest latency.
          </li>
          <li className="ml-4">
            <Strong>Non-Critical</Strong>: Temporal persists every state transition and retries
            failures by default. If you are sending "fire and forget" notifications, Temporal is
            overkill because the resiliency we provide is not needed.
          </li>
          <li className="ml-4">
            <Strong>Non-Developers</Strong>: Temporal is strongly opinionated about enabling{' '}
            <em>developers</em> to write <Strong>workflows as code</Strong> in general purpose
            languages. If you are not a developer, Temporal probably isn't the right fit for you.
            However if you are <em>building</em> low code automation tools and DSLs, that is one of
            the top use cases for Temporal!
          </li>
        </ul>
      </div>
    )
  },
  {
    question: 'What is your roadmap? When will there be a $MY_LANGUAGE SDK?',
    answer: (
      <span>
        We currently have{' '}
        <Link href="https://docs.temporal.io/application-development">Go, Java, and PHP SDKs</Link>,
        with TypeScript SDK in alpha. We do not publish a public roadmap, but will be building more
        SDKs according to demand.{' '}
        <Link href="https://temporal.io/careers">We are actively hiring for this</Link> if you'd
        like to help!
      </span>
    )
  },
  {
    question: 'I still have more questions!',
    answer: (
      <span>
        Join <Link href="https://temporal.io/meetup">our monthly meetup</Link>, ask questions in{' '}
        <Link href="https://community.temporal.io/">our forum</Link> and{' '}
        <Link href="https://temporal.io/slack">Slack</Link>, and{' '}
        <Link href="https://twitter.com/temporalio">ask us on Twitter</Link>!
      </span>
    )
  }
];

const FAQ = () => {
  return (
    <section className="sm:mb-28 border-t border-lightgray">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-bold sm:text-6xl" id="FAQ">
            Frequently Asked Questions
          </h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex space-x-5 items-center">
                        <span className="ml-5 h-7 flex items-center">
                          <svg
                            className={`${open ? 'rotate-0' : '-rotate-90'}
                            h-6 w-6 transform transition-transform`}
                            aria-hidden="true"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </span>
                        <span className="text-left text-2xl">{faq.question}</span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      enter="transition-opacity duration-75"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <Disclosure.Panel as="dd" className="mt-2">
                        <p className="text-lg leading-8 pl-16">{faq.answer}</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
