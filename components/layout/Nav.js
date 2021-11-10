import Link from 'next/link';

const links = [
  { href: '/usecases', label: 'Usecases' },
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
        <ul className="items-center justify-between flex md:text-xl space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
