import DirectionalControl from './DirectionalControl';

const QUOTES = [
  {
    url: 'https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows/',
    img: 'https://avatars1.githubusercontent.com/u/114386',
    quote: (
      <span>
        <span className="text-blue-200">Developer happiness has increased</span>. Thinking in terms
        of workflows and activities has <span className="text-blue-200">clarified our product</span>{' '}
        and allowed us to <span className="text-blue-200">share workflow components</span> with
        different teams.
      </span>
    ),
    name: 'Ben Jacobson',
    title: 'Staff Software Engineer, Checkr',
    logo: '/logos/logo-Checkr-square.svg',
    logoAlt: 'Checkr Logo'
  },
  {
    url: 'https://docs.temporal.io/blog/descript-case-study',
    img: 'https://avatars.githubusercontent.com/u/2502591?v=4',
    quote: (
      <span>
        A <span className="text-blue-200">game changing</span> revelation - Temporal gave us{' '}
        <span className="text-blue-200">the ability to test our workflows</span> with unit tests.
        JSON or YAML are completely untestable!
      </span>
    ),
    name: 'Nicolas Gere',
    title: 'Software Engineer, Descript',
    logo: '/logos/logo-Descript-square.svg',
    logoAlt: 'Descript Logo'
  },
  {
    url: 'https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase',
    img: 'https://pbs.twimg.com/profile_images/943640175/new_photo_400x400.jpg',
    quote: (
      <span>
        Temporal maintains <span className="text-blue-200">high reliability</span> while providing{' '}
        <span className="text-blue-200">tremendous visibility</span>. Things we thought to be much
        more complex... feel much easier!
      </span>
    ),
    name: 'Anthony Dmitriyev',
    title: 'Software Engineer, Coinbase',
    logo: '/logos/logo-Coinbase-square.svg',
    logoAlt: 'Coinbase Logo'
  },
  {
    url: 'https://docs.temporal.io/blog/temporal-a-central-brain-for-box/',
    img: '/logos/photo-steven.png',
    quote: (
      <span>
        The API gives you this{' '}
        <span className="text-blue-200">illusion of single threaded execution</span>
        ... It's amazing.
      </span>
    ),
    name: 'Steven Cipolla',
    title: 'Senior Staff Software Engineer, Box',
    logo: '/logos/logo-Box-square.svg',
    logoAlt: 'Box Logo'
  }
];

const Testimonials = () => {
  return (
    <section
      id="case-studies"
      className="container mt-16 mb-28 mx-auto px-4 md:px-8 py-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {QUOTES.map((quote) => (
          <Quote
            key={quote.url}
            url={quote.url}
            img={quote.img}
            quote={quote.quote}
            name={quote.name}
            logo={quote.logo}
            logoAlt={quote.logoAlt}
            title={quote.title}
          />
        ))}
      </div>
      <div className="mt-24 flex justify-center">
        <DirectionalControl secondary href="https://docs.temporal.io/blog/tags/case-study">
          View Case Studies
        </DirectionalControl>
      </div>
    </section>
  );
};

const Quote = ({ quote, name, title, img, logo, logoAlt }) => (
  <div>
    <p className="mb-8 relative mx-auto text-xl sm:text-2xl md:leading-10">“ {quote} ”</p>
    <div className="flex items-center justify-center mb-12">
      <div className="flex space-x-5">
        <div className="flex -space-x-3 items-center">
          <img className="rounded-full shadow-md w-10 h-10" src={img} alt={`${name}`} />
          <img
            className="z-10 rounded-full w-12 h-12 border-solid border-4 border-gray-900"
            src={logo}
            alt={logoAlt}
          />
        </div>
        <div className="text-left">
          <p className="text-lg">{name}</p>
          <p className="font-light">{title}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
