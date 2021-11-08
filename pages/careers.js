import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import React from 'react';
import Head from 'next/head';

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main className="pt-4 sm:pt-0">
        <div className="mx-4 sm:mx-16">
          <div>
            <Head>
              <title>Temporal.io Careers</title>
              <meta property="title" content="Temporal.io Careers: Help Us Build Invincible Apps" />
              <meta
                property="og:title"
                content="Temporal.io Careers: Help Us Build Invincible Apps"
              />
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
              <meta
                property="twitter:image"
                content="https://temporal.io/logo-font-straight-dark.svg"
              />
              <meta property="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@temporaltech" />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.leverJobsOptions = {accountName: 'temporal', includeCss: true};`
                }}
              />
              <script
                async
                type="text/javascript"
                src="https://andreasmb.github.io/lever-jobs-embed/index.js"
              ></script>
            </Head>
            <h1 className="text-3xl sm:w-800 sm:mt-12 leading-lg sm:text-4xl sm:leading-4xl font-bold mb-4">
              Help us deliver a new way to build scalable and reliable applications!
            </h1>
            <h2 className="text-xl leading-tight italic">
              If none of these positions are a fit, email{' '}
              <a
                href="mailto:careers@temporal.io"
                className="underline text-blue-400 hover:text-blue-200"
              >
                careers@temporal.io
              </a>{' '}
              describing your dream job.
            </h2>
          </div>
          <div className="container sm:p-8 rounded-lg mt-16 sm:ml-16">
            <div id="lever-jobs-container">Loading... (contact us if this message persists)</div>
          </div>
          <div className="container sm:p-4 rounded-lg my-8 sm:ml-16">
            If the jobs aren't loading, your adblocker may be blocking <code>api.lever.co</code>
          </div>
        </div>
        <hr />
        <div className="mx-4 sm:mx-16 mb-12 bg-black bg-opacity-50">
          <h1
            id="external-jobs"
            className="text-3xl sm:w-800 mt-12 leading-lg sm:text-4xl sm:leading-4xl font-bold mb-4"
          >
            Temporal Users Who Are Hiring
          </h1>
          <ul className="container rounded-lg">
            <li className="test">
              If you are a company that uses Temporal, you can{' '}
              <a
                href="mailto:careers@temporal.io"
                className="underline text-blue-400 hover:text-blue-200"
              >
                email us to advertise a job here
              </a>{' '}
              for free.
            </li>
            <li className="test">
              If you are a developer that loves Temporal, you can{' '}
              <a
                href="http://eepurl.com/hhcaaX"
                className="underline text-blue-400 hover:text-blue-200"
              >
                sign up for our mailing list
              </a>{' '}
              to hear when jobs are advertised.
            </li>
          </ul>
          <h3
            id="external-joblist"
            className="text-xl sm:w-800 mt-12 leading-lg sm:text-xl sm:leading-4xl font-bold"
          >
            Companies hiring Developers to work with Temporal:
          </h3>
          <ul className="container rounded-lg my-8 sm:ml-16 space-y-4">
            <li>
              <span className="font-bold text-xl uppercase">Airbyte</span>
              <span className=" bg-lightteal text-black rounded-md hover:bg-blue-100 px-2 mx-2 hover:text-yellow-600">
                <a href="https://www.youtube.com/watch?v=K25Bt5asd8I">Meetup Speaker</a>
              </span>
              :{' '}
              <a
                href="https://jobs.lever.co/airbyte/11d4a6fe-a27e-4a1c-ac6c-7b7fe2b2a0fb"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Software Engineer
              </a>
              , Platform <span className="text-sm text-gray-400">Remote</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Atomic</span>:{' '}
              <a
                href="https://boards.greenhouse.io/atomicvest/jobs/4037964004"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Software Engineer
              </a>
              - Backend <span className="text-sm text-gray-400">SF, Remote</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Bolt</span>
              <span className=" bg-lightteal text-black rounded-md hover:bg-blue-100 px-2 mx-2 hover:text-yellow-600">
                <a href="https://www.youtube.com/watch?v=bjlFculKheI">Meetup Speaker</a>
              </span>
              :{' '}
              <a
                href="https://www.bolt.com/careers/software-engineer-platforms/f193e0fa-7cf0-42aa-8837-8bdd4dca3e22/"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Software Engineer
              </a>{' '}
              and{' '}
              <a
                href="https://www.bolt.com/careers/senior-software-engineer-platforms/ce0d1fe3-bb00-4b4a-99f0-848bbc5a87c3/"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Software Engineer
              </a>{' '}
              - Platforms <span className="text-sm text-gray-400">San Francisco</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Datadog</span>:{' '}
              <a
                href="https://www.datadoghq.com/careers/detail/?gh_jid=1825853"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Software Engineer - Site Reliability
              </a>{' '}
              <span className="text-sm text-gray-400">NY/Paris Remote</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Descript</span>
              <span className=" bg-temporalbrightpurple text-black rounded-md hover:bg-blue-100 px-2 mx-2 hover:text-yellow-600">
                <a href="https://docs.temporal.io/blog/descript-case-study">Case Study</a>
              </span>
              :{' '}
              <a
                href="https://boards.greenhouse.io/descript/jobs/4310029003?gh_jid=4310029003"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Software Engineer - Backend
              </a>{' '}
              <span className="text-sm text-gray-400">SF/Montreal/Remote</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Fronted</span>:{' '}
              <a
                href="https://docs.google.com/document/d/1muUEnuSSROdKR8QMxOe1V-Y9qBTCCrifOV3jcr3835c"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Backend Engineer
              </a>{' '}
              <span className="text-sm text-gray-400">London</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Nylas</span>:{' '}
              <a
                href="https://jobs.lever.co/nylas/d8788060-ef4f-48ea-8b7b-787c31ec4e46"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Software Engineer (Workflows)
              </a>{' '}
              <span className="text-sm text-gray-400">Toronto</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Nylas</span>:{' '}
              <a
                href="https://jobs.lever.co/nylas/50471019-fe86-4429-b857-98b17434d839"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Software Engineer (Workflows)
              </a>{' '}
              <span className="text-sm text-gray-400">Vancouver</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Nightfall AI</span>:{' '}
              <a
                href="https://jobs.lever.co/nightfall/2284505f-49e4-48b6-a530-4e1869a68fe4"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Backend Engineer
              </a>{' '}
              <span className="text-sm text-gray-400">US & Canada Remote</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Square</span>:{' '}
              <a
                href="https://www.linkedin.com/jobs/view/senior-software-engineer-cloud-database-infra-cash-app-at-cash-app-2315548952/"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Software Engineer (Cloud Database Infra), Cash App
              </a>{' '}
              <span className="text-sm text-gray-400">US Remote</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">SS&C Technologies</span>:{' '}
              <a
                href="https://wd1.myworkdaysite.com/en-US/recruiting/ssctech/SSCTechnologies/job/Denver-CO/Staff-Software-Engineer---Private-Cloud_R3140"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Staff Software Engineer - Private Cloud
              </a>{' '}
              <span className="text-sm text-gray-400">Denver/US Remote</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Stripe</span>
              <span className=" bg-lightteal text-black rounded-md hover:bg-blue-100 px-2 mx-2 hover:text-yellow-600">
                <a href="https://www.youtube.com/watch?v=xwJHaGRw9mA">Meetup Speaker</a>
              </span>
              :{' '}
              <a
                href="https://stripe.com/jobs/listing/infrastructure-engineer-developer-productivity-workflow-engine/2964407"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Infrastructure Engineer, Developer Productivity (Workflow Engine)
              </a>{' '}
              <span className="text-sm text-gray-400">North America Remote</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Snap</span>:{' '}
              <a
                href="https://eng.snap.com/monolith-to-multicloud-microservices-snap-service-mesh"
                className="underline text-blue-400 hover:text-blue-200"
              >
                General Engineering Hires
              </a>{' '}
              <span className="text-sm text-gray-400">Los Angeles, London, Israel</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Sureify</span>:{' '}
              <a
                href="https://apply.workable.com/sureify-1/j/EAF36BA284/"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Staff Software Engineer
              </a>{' '}
              <span className="text-sm text-gray-400">San Jose</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">Sureify</span>:{' '}
              <a
                href="https://apply.workable.com/sureify-1/j/8C8F075725/"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Software Engineer
              </a>{' '}
              <span className="text-sm text-gray-400">San Jose</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">WELL Health</span>:{' '}
              <a
                href="https://arc.dev/remote-jobs/j/well-health-inc-senior-software-engineer-backend-cip35uvrrf"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Senior Software Engineer (Backend)
              </a>{' '}
              <span className="text-sm text-gray-400">Remote anywhere</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">WellHive</span>:{' '}
              <a
                href="https://www.wellhive.com/software-engineer-integrations"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Software Engineer - Integrations
              </a>{' '}
              <span className="text-sm text-gray-400">US Remote</span>
            </li>
            <li>
              <span className="font-bold text-xl uppercase">WellHive</span>:{' '}
              <a
                href="https://www.wellhive.com/performance-test-engineer"
                className="underline text-blue-400 hover:text-blue-200"
              >
                Performance Test Engineer
              </a>{' '}
              <span className="text-sm text-gray-400">US Remote</span>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
