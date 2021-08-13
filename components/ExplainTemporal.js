import DirectionalControl from './DirectionalControl';

function ResponsivePlayer({ videoId }) {
  return (
    <div
      className=" h-0 relative overflow-hidden shadow-temporalblue"
      style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="rounded-lg  absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
}

export default function ExplainTemporal() {
  return (
    <section id="explain-temporal" className="container mx-auto px-8 py-16">
      <h1 className="mb-10 sm:mb-20 text-3xl font-bold tracking-wide text-center sm:text-60 leading-48 sm:leading-72">
        Temporal in 2 Minutes
      </h1>
      <div className="max-w-screen-lg w-full mx-auto">
        <ResponsivePlayer videoId="f-18XztyN6c" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row justify-center items-center my-8">
        <DirectionalControl href="https://www.youtube.com/channel/UCGovZyy8OfFPNlNV0i1fI1g">
          More on YouTube
          <svg
            className="w-4 inline ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </DirectionalControl>
        <DirectionalControl secondary href="https://docs.temporal.io/docs/external-resources">
          More resources
        </DirectionalControl>
      </div>
    </section>
  );
}
