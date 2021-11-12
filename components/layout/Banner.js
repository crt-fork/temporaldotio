import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Banner = () => {
  const [open, setOpen] = useLocalStorage('2yranniversary', true);
  if (!open) return null;
  return (
    <div className="relative bg-gradient-to-r to-blue-100 from-blue-400 text-gray-100 text-center tracking-wide py-2">
      {/* <a className=" hover:text-blue-800" href="https://docs.temporal.io/blog/funding-announcement">
      <span role="img" aria-label="Celebration" className="hidden md:inline">
        🎉
      </span>
      Announcing our $18.75m Series A
      <span role="img" aria-label="Celebration" className="hidden md:inline">
        {' '}
        led by Sequoia! 🎉
      </span>
    </a> */}
      <a className=" hover:underline" href="https://temporal.io/meetup">
        <span role="img" aria-label="birthday cake">
          🎂
        </span>{' '}
        Join our next meetup ft. Datadog and TypeScript SDK
        {/* <span role="img" aria-label="Celebration" className="hidden md:inline">
          to ask your questions
        </span> */}
        !
      </a>
      <button onClick={() => setOpen(false)}>
        <svg
          className="absolute right-0 top-0 mr-2 mt-3 md:mt-2 w-5 sm:w-6 h-5 sm:h-6 text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
