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
    <nav className="container mx-auto pt-4 px-4">
      <style jsx>{`
        @media (min-width: 640px) {
          img {
            width: 225px !important;
            height: 56px !important;
          }
        }
        img {
          width: 180px;
          height: 45px;
          object-fit: contain;
        }
      `}</style>
      <div className="flex items-center justify-around md:justify-between pt-4">
        <div className="hidden md:block">
          <Link href="/">
            <a href="/" className="text-blue-500 no-underline">
              <img src="/logo-with-text-white-nobg.svg" alt="Temporal logo"></img>
            </a>
          </Link>
        </div>
        <ul className="items-center justify-between flex md:text-xl space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
