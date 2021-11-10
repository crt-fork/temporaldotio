export default function LargeQuote() {
  return (
    <section className="mx-4 mt-20">
      <div
        id="final-quote"
        className="shadow-xl w-full max-w-screen-lg mx-auto rounded-lg bg-gray-700">
        <blockquote className="text-xl sm:text-2xl sm:leading-9 px-8  pt-8 pb-2">
          <p className="mb-4">
            “HashiCorp needed to build long-running, reliable, fault-tolerant tasks for the
            HashiCorp Cloud Platform.{' '}
          </p>
          <p className="mb-4">
            Temporal’s technology satisfied all of these requirements out of the box and allowed our
            developers to focus on business logic.{' '}
          </p>
          <p>
            Without Temporal’s technology, we would’ve spent a significant amount of time rebuilding
            Temporal and would’ve very likely done a worse job.”
          </p>
        </blockquote>
        <div className="flex items-center p-8 border-spaceblack">
          <img
            className="inline mr-4 w-16 h-16 rounded-full shadow-md"
            src="/logos/photo-Mitchell.png"
            alt="Mitchell Hashimoto"
          />
          <div>
            <p className="">Mitchell Hashimoto</p>
            <p className="font-bold">Co-founder, Hashicorp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
