import Link from 'next/link';

const links = [
  { href: '/usecases', label: 'Use Cases' },
  { href: '/careers', label: 'Jobs' },
  { href: 'https://docs.temporal.io/blog', label: 'Blog' },
  { href: 'https://docs.temporal.io/', label: 'Docs' },
  { href: 'https://temporal.io/meetup', label: 'Meetup' }
];

export function Nav() {
  return (
    <nav className="container mx-auto p-4">
      <ul className="flex items-center justify-around md:justify-between py-4">
        <li className="hidden md:block">
          <Link href="/">
            <a href="/" className="text-blue-500 no-underline ">
              <img src="/logo-with-text.svg" className="w-36 h-w-36" alt="Temporal logo" />
            </a>
          </Link>
        </li>
        <ul className="items-center justify-between flex md:text-xl space-x-5">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
          <a className="nav-link" href="https://github.com/temporalio/temporal">
            <svg className="hidden sm:block w-6 h-6 mb-1.5" viewBox="0 0 14 14" aria-label="github">
              <path
                d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                fill="currentColor"
                fillRule="nonzero"></path>
            </svg>
          </a>
        </ul>
      </ul>
    </nav>
  );
}
