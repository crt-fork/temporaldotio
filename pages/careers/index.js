Careers.title = 'Careers | Temporal';
Careers.description =
  'Come work with us. We’re on a mission to change the way we build applications. We want you to be a part of this journey';

export default function Careers({ allJobs }) {
  return (
    <div>
      <section className="max-w-screen-lg px-8 p-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl  mt-12 leading-lg sm:text-4xl sm:leading-4xl md:font-bold mb-4">
            Careers at Temporal
          </h1>
          <h2 className="text-xl md:text-2xl">
            Help us deliver a new way to build scalable and reliable
            applications!
          </h2>
        </div>
        <div className="mt-24">
          <div>
            {Object.entries(allJobs).map(([team, jobs]) => {
              return (
                <div key={team} className="mb-10">
                  <h3 className="mb-5 text-4xl font-semibold tracking-wide">
                    {team}
                  </h3>
                  <div className="space-y-3">
                    {jobs.map((job) => (
                      <a
                        href={job.hostedUrl}
                        className="p-5 rounded-lg grid grid-cols-1 md:grid-cols-4 gap-3 hover:bg-gray-100"
                        key={job.hostedUrl}
                      >
                        <p className="col-span-3 text-xl mr-5">{job.text}</p>
                        <p className="col-span-1 flex items-center text-md space-x-2">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
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
            <a href="mailto:careers@temporal.io" className="underline">
              careers@temporal.io
            </a>{' '}
            describing your dream job.
          </h2>
        </div>
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
    list.reduce(
      (hash, obj) => ({
        ...hash,
        [obj[key]]: (hash[obj[key]] || []).concat(obj),
      }),
      {}
    );

  const allJobs = res.map(({ text, hostedUrl, categories, id }) => {
    return {
      team: categories.team,
      location: categories.location,
      text,
      hostedUrl,
      id,
    };
  });

  return {
    props: {
      allJobs: groupByKey(allJobs, 'team'),
    },
    revalidate: 60,
  };
};
