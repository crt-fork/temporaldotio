import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Banner = () => {
  const [open, setOpen] = useLocalStorage('2yranniversary', true);
  if (!open) return null;
  return (
    <header className="relative bg-gradient-to-r to-blue-100 from-blue-400">
      <div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
        <div className="pr-8 font-medium tracking-wide text-center sm:px-16">
          <a className="hover:underline" href="https://lu.ma/temporalintro">
            Join our Temporal Java SDK 102 workshop
            <span className="hidden md:inline"> on Dec 21</span>!
          </a>
        </div>
        <div className="absolute inset-y-0 right-0  pr-1 flex items-center sm:pr-2 sm:items-start">
          <button
            aria-label="Close banner"
            onClick={() => setOpen(false)}
            type="button"
            className="flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
            <span className="sr-only">Dismiss</span>
            <svg
              className="w-6 h-6 text-gray-100"
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
            </svg>{' '}
          </button>
        </div>
      </div>
    </header>
  );
};
