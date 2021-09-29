import { useLocalStorage } from '../hooks/useLocalStorage';

export function Banner() {
  const [open, setOpen] = useLocalStorage('meetupOpen', true);
  if (!open) return null;
  return (
    <div className="relative bg-temporalblue text-spaceblack text-center py-2">
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
      <a
        className=" hover:text-blue-800"
        href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M2RtN2ZmZzdiY2trM282MDgwdHFhcXE2a2Mgc3d5eEB0ZW1wb3JhbC5pbw&tmsrc=swyx%40temporal.io">
        📆 Join our Intro to Temporal Workshop{' '}
        <span role="img" aria-label="Celebration" className="hidden md:inline">
          to ask your questions
        </span>
        !
      </a>
      <button onClick={() => setOpen(false)}>
        <svg
          className="absolute right-0 top-0 mr-2 mt-3 md:mt-2 w-5 sm:w-6 h-5 sm:h-6 text-spaceblack"
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
}
