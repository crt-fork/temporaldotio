import React from 'react';
import Head from 'next/head';
import Careers from '../components/careers.mdx';

export default function CareersPage({ allJobs }) {
  return (
    <div className="bg-gradient-to-l from-gray-800 to-gray-900">
      <Head>
        <title>Temporal.io Careers</title>
        <meta property="title" content="Temporal.io Careers: Help Us Build Invincible Apps" />
        <meta property="og:title" content="Temporal.io Careers: Help Us Build Invincible Apps" />
        <meta
          property="description"
          content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
        />
        <meta
          property="og:description"
          content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
        />
        <meta property="og:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="og:url" content="http://temporal.io" />
        <meta
          property="twitter:title"
          content="Temporal.io Careers: Help Us Build Invincible Apps"
        />
        <meta
          property="twitter:description"
          content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
        />
        <meta property="twitter:image" content="https://temporal.io/logo-font-straight-dark.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@temporalio" />
      </Head>

      <section className="max-w-screen-lg px-8 p-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl  mt-12 leading-lg sm:text-4xl sm:leading-4xl md:font-bold mb-4">
            Careers at Temporal
          </h1>
          <h2 className="text-xl md:text-2xl">
            Help us deliver a new way to build scalable and reliable applications!
          </h2>
        </div>
        <div className="mt-24">
          <div>
            {Object.entries(allJobs).map(([team, jobs]) => {
              return (
                <div key={team} className="mb-10">
                  <h3 className="mb-5 text-4xl font-semibold tracking-wide">{team}</h3>
                  <div className="space-y-3">
                    {jobs.map((job) => (
                      <a
                        href={job.hostedUrl}
                        className="bg-gray-700 p-5 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-3 hover:bg-gray-600"
                        key={job.hostedUrl}>
                        <p className="col-span-3 text-xl mr-5">{job.text}</p>
                        <p className="col-span-1 flex items-center text-md space-x-2">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{job.location}</span>
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="text-xl">
            If none of these positions are a fit for you, email{' '}
            <a
              href="mailto:careers@temporal.io"
              className="underline text-blue-100 hover:text-blue-200">
              careers@temporal.io
            </a>{' '}
            describing your dream job.
          </h2>
        </div>
      </section>
      <section className="max-w-screen-lg p-10 pb-24 mx-auto">
        <h1
          id="external-jobs"
          className="text-3xl mt-12 leading-lg sm:text-4xl sm:leading-4xl font-bold mb-4">
          Temporal Users Who Are Hiring
        </h1>
        <h2 id="external-joblist" className="text-lg max-w-screen-lg leading-loose">
          If you're a company that uses Temporal, you can{' '}
          <a
            href="mailto:careers@temporal.io"
            className="underline text-blue-200 hover:text-blue-200">
            email us to advertise a job here
          </a>{' '}
          for free. If you're a developer you can{' '}
          <a
            href="http://eepurl.com/hhcaaX"
            className="underline text-blue-200 hover:text-blue-200">
            sign up for our mailing list
          </a>{' '}
          to get notified
        </h2>
        <ul className="my-8 space-y-5">
          <div className="job-listings">
            <Careers />
          </div>
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const LEVER_API_URL = 'https://api.lever.co/v0/postings/temporal?mode=json';

  const getJobPostings = async (url) => {
    const res = await fetch(url);
    return res.json();
  };

  const res = await getJobPostings(LEVER_API_URL);

  const groupByKey = (list, key) =>
    list.reduce((hash, obj) => ({ ...hash, [obj[key]]: (hash[obj[key]] || []).concat(obj) }), {});

  const allJobs = res.map(({ text, hostedUrl, categories, id }) => {
    return {
      team: categories.team,
      location: categories.location,
      text,
      hostedUrl,
      id
    };
  });

  return {
    props: {
      allJobs: groupByKey(allJobs, 'team')
    },
    revalidate: 60
  };
};
