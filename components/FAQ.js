import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const faqs = [
  {
    question: 'Do you offer a hosted version?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: 'When NOT to use Temporal?',
    answer: `If you're building something simple`
  },
  {
    question: 'Is Temporal open-source?',
    answer: `If you're building something simple`
  },
  {
    question: `What's the difference between Temporal and Homegrown Scripts and Queues?`,
    answer: (
      <span>
        <span className="text-temporalblue">Developer happiness has increased</span>. Thinking in
        terms of workflows and activities has{' '}
        <span className="text-temporalblue">clarified our product</span> and allowed us to{' '}
        <span className="text-temporalblue">share workflow components</span> with different teams.
      </span>
    )
  },
  {
    question: `What's the difference between Temporal and DAG-based Workflow Engines`,
    answer: (
      <span>
        <span className="text-temporalblue">Developer happiness has increased</span>. Thinking in
        terms of workflows and activities has{' '}
        <span className="text-temporalblue">clarified our product</span> and allowed us to{' '}
        <span className="text-temporalblue">share workflow components</span> with different teams.
      </span>
    )
  },
  {
    question: `What's the difference between Temporal and BPM Engines`,
    answer: (
      <span>
        <span className="text-temporalblue">Developer happiness has increased</span>. Thinking in
        terms of workflows and activities has{' '}
        <span className="text-temporalblue">clarified our product</span> and allowed us to{' '}
        <span className="text-temporalblue">share workflow components</span> with different teams.
      </span>
    )
  },
  {
    question: `What's the difference between Temporal and JSON/YAML-based Workflow Engines`,
    answer: (
      <span>
        <span className="text-temporalblue">Developer happiness has increased</span>. Thinking in
        terms of workflows and activities has{' '}
        <span className="text-temporalblue">clarified our product</span> and allowed us to{' '}
        <span className="text-temporalblue">share workflow components</span> with different teams.
      </span>
    )
  }
];

const FAQ = () => {
  return (
    <section className="sm:my-28">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-bold sm:text-6xl">Frequently Asked Questions</h2>
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
