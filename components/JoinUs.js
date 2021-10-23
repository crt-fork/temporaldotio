import DirectionalControl from './DirectionalControl';

export default function JoinUs() {
  return (
    <section
      id="join-us"
      className={`
    border-t border-lightgray
    flex flex-col sm:flex-row 
    `}>
      <div className="flex-1 flex flex-col justify-between sm:border-r border-lightgray px-8 py-16">
        <h2 className="text-4xl leading-48 sm:text-60 sm:leading-60 mb-8 max-w-xl mx-auto">
          We are hiring
        </h2>
        <div className="mx-auto max-w-lg space-y-3">
          <div className="flex space-x-3 items-start">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg">We've got experience at the largest scale.</p>
          </div>
          <div className="flex space-x-3 items-start">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className=" text-lg">Backing from the greatest investors.</p>
          </div>
          <div className="flex space-x-3 items-start">
            <svg
              className="w-8 h-8 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg">
              <span className="text-lg text-temporalblue">We just need you.</span> Come help build
              the most mission critical platform on Earth.
            </p>
          </div>
        </div>
        <ul className="list-disc pl-4 mx-auto space-y-3 sm:px-16 my-4">
          <li>
            <strong className="font-bold">Engineering</strong>: Cloud Security, Infrastructure,
            Language Runtime, Backend
          </li>
          <li>
            <strong className="font-bold">Operations</strong>: Executive Assistant, Technical
            Recruiter, HR Business Partner
          </li>
          <li>
            <strong className="font-bold">Product</strong>: Sales, Solutions, Product Management,
            Developer Success
          </li>
        </ul>
        <div className="inline-flex flex-col items-center">
          <DirectionalControl className="mb-6" href="/careers">
            Join Us
          </DirectionalControl>
          <p className="text-lg inline">Even our users are hiring Temporal developers!</p>
        </div>
      </div>
      <div className="flex flex-col flex-1 border-t sm:border-t-0 border-lightgray">
        <div className="px-4 sm:px-8 py-4 sm:py-16 flex-1 border-b border-lightgray flex items-center">
          <img
            className="rounded-full w-16 my-4 mr-8 border border-lightgray"
            src="/logos/photo-samar.png"
            alt="samar abbas"></img>
          <div>
            <div className="mb-2 sm:mb-4 font-bold text-lg">Samar Abbas (CTO)</div>
            <div className="max-w-md">
              AWS, Microsoft, Uber engineering leadership veteran, created Durable Task Framework
              which was the basis of Azure Durable Functions. Co-created Cadence (Temporal
              predecessor) with Maxim.
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-8 py-4 sm:py-16  flex-1 border-b border-lightgray flex items-center">
          <img
            className="rounded-full w-16 my-4 mr-8 border border-lightgray"
            src="/logos/photo-maxim.png"
            alt="Maxim Fateev"></img>
          <div>
            <div className="mb-2 sm:mb-4 font-bold text-lg">Maxim Fateev (CEO)</div>
            <div className="max-w-md">
              AWS, Google, Uber, engineering leadership veteran, led development of SQS replicated
              message store and the SWF project at AWS. Co-created Cadence (Temporal predecessor)
              with Samar.
            </div>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1 flex items-center justify-center border-lightgray border-r">
            <a href="https://amplifypartners.com/portfolio-news/our-investment-in-temporal/">
              <img
                style={{ filter: 'brightness(1.5) grayscale(1)' }}
                className="my-2 lg:my-8 h-24 w-24 lg:h-32 lg:w-32 object-contain transform hover:scale-125 transition-transform"
                src="/logos/logo-amplify.png"
                alt="vc"></img>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center border-lightgray border-r">
            <a href="https://medium.com/sequoia-capital/temporal-the-promise-of-more-resilient-applications-87c46469d74a">
              <img
                style={{ filter: 'brightness(1.5) grayscale(1)' }}
                className="my-2 lg:my-8 h-24 w-24 lg:h-32 lg:w-32 object-contain transform hover:scale-125 transition-transform"
                src="/logos/logo-sequoia.png"
                alt="vc"></img>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              style={{ filter: 'brightness(3.5) grayscale(1)' }}
              className="my-2 lg:my-8 h-24 w-24 lg:h-32 lg:w-32 object-contain"
              src="/logos/logo-madrona.png"
              alt="vc"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
