import { Nav } from '../components/Nav';
import Footer from '../components/Footer';
import React from 'react';
import Head from 'next/head';
import Lightbox from 'react-image-lightbox';

export default function PressPage() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <Nav />
        <div>
          <Head>
            <title>Temporal.io Press</title>
            <meta
              property="title"
              content="Temporal.io Press: Guidelines For People Writing/Speaking About Temporal"
            />
            <meta
              property="og:title"
              content="Temporal.io Careers: Guidelines For People Writing/Speaking About Temporal"
            />
            <meta
              property="description"
              content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
            />
            <meta
              property="og:description"
              content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
            />
            <meta property="og:image" content="https://temporal.io/logo-font-straight-dark.svg" />
            <meta property="og:url" content="http://temporal.io" />
            <meta
              property="twitter:title"
              content="Temporal.io Careers: Guidelines For People Writing/Speaking About Temporal"
            />
            <meta
              property="twitter:description"
              content="Temporal is the open source platform for mission critical code that interacts with unreliable, distributed services."
            />
            <meta
              property="twitter:image"
              content="https://temporal.io/logo-font-straight-dark.svg"
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@temporaltech" />
          </Head>
          <h1 className=" text-60 leading-60 uppercase mt-8 mb-4 lg:mb-16">Press & Assets</h1>
          <p className="text-xl max-w-700">
            We LOVE it when developers and media talk about us! Please let us know when you do so we
            can{' '}
            <a
              className="underline text-blue-400 hover:text-blue-200"
              href="https://docs.temporal.io/docs/external-resources">
              share it with the community
            </a>
            , and also be mindful of our guidelines (below). If in doubt, email{' '}
            <span className="font-bold">press@temporal.io</span> and we will be happy to work with
            you.
          </p>
        </div>

        <section className="mb-8">
          <h3 className="mt-8 text-xl font-bold">Temporal's corporate address:</h3>
          <p className="mt-2 ml-4">Temporal Technologies, Inc</p>
          <p className="mt-2 ml-4">300 Lenora Street PMB 1743</p>
          <p className="mt-2 ml-4">Bellevue, WA 98121</p>
        </section>
        <section
          id="guidelines"
          className={`
        border-b border-spaceblack
        container mx-auto
        bg-temporalblue text-spaceblack
        flex flex-col p-8 mt-8
        `}>
          <h1 className="sm:mb-8 mb-4 text-4xl sm:text-60 leading-48 sm:leading-72">
            Brand Guidelines
          </h1>
          <ul className="list-disc pl-4">
            <li className="">Only show the logo in black or white</li>
            <li className="">Don't alter, rotate or modify the logo</li>
            <li className="">Don't combine the logo with other art elements</li>
            <li className="">
              Ensure the logo is given ample space and is not crowded on the page
            </li>
            <li className="">Minimum logo size is 32pixels</li>
            <li className="">
              Do not use custom fonts for the Temporal brand name. Only use the official brand
              logo/name asset (Aeonik Regular/Medium for headlines, Aeonik Light for body copy)
            </li>
          </ul>
        </section>
        <section
          id="brand assets"
          className={`
        border-b border-spaceblack
        container mx-auto
      text-spaceblack bg-gray5
        flex flex-col p-8
        `}>
          <h2 className="sm:mb-8 mb-4 text-4xl sm:text-60 leading-48 sm:leading-72">
            Brand Assets (PNG)
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Asset url="/press/favicon.png" label="White logo icon on Black (Circle)" />
            <Asset url="/press/master-favicon.png" label="Black logo icon on White (Transparent)" />
            <Asset
              // url="/press/twitter-banner-logo-text-black-on-white.png"
              url="/press/trim-banner-logo-text-black-on-white.png"
              label="Black logo+text on White Banner"
            />
            <Asset
              // url="/press/twitter-banner-logo-text-white-on-black.png"
              url="/press/trim-banner-logo-text-white-on-black.png"
              label="White logo+text on Black Banner"
            />
            <Asset
              url="/press/twitter-banner-black-on-white.png"
              label="Black on White Banner (logo only)"
            />
            <Asset
              url="/press/twitter-banner-white-on-black.png"
              label="White on Black Banner (logo only)"
            />
            <Asset
              url="/press/twitter-banner-text-white-on-black.png"
              label="White on Black Banner (text only)"
            />
            <Asset
              url="/press/twitter-banner-text-black-on-white.png"
              label="Black on White Banner (text only)"
            />
          </ul>

          <h2 className="mt-16 mb-4 sm:mb-8 text-4xl sm:text-60 leading-48 sm:leading-72">
            Brand Assets (SVG)
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Asset url="/press/logo-only-white-on-black.svg" label="White logo on Black (Square)" />
            <Asset url="/press/logo-only-black-on-white.svg" label="Black logo on White (Square)" />
            <Asset url="/press/twitter-card.svg" label="Black logo+text on White" />
            <Asset url="/press/icon-dark.svg" label="Black logo (Transparent)" />
            <Asset url="/press/icon-light.svg" label="White logo (Transparent)" dark />
            <Asset
              url="/press/logo-with-text-white-nobg.svg"
              label="White logo+text (Transparent)"
              dark
            />
            <Asset
              url="/press/logo-with-text-black-nobg.svg"
              label="Black logo+text (Transparent)"
            />
          </ul>
          <h2 className="mt-16 mb-4 sm:mb-8 text-4xl sm:text-60 leading-48 sm:leading-72">Misc</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Asset url="/press/Temporal_logos_black_white.png" label="Black/White square" />
            <Asset url="/press/Temporal_logos_alt_colors.png" label="Alt colors" />
            <Asset url="/press/Temporal_Logo_Animation.gif" label="Temporal loading spinner" />
            <Asset url="/press/Illustration_01.png" label="Temporal Illustration" />
            <Asset url="/press/Illustration_02.png" label="Temporal Illustration" />
            <Asset url="/press/Illustration_03.png" label="Temporal Illustration" />
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="mt-16 mb-4 sm:mb-8 text-4xl sm:text-60 leading-48 sm:leading-72">
            Color Palette
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <li>
              <div className="border border-white bg-spaceblack p-16"></div>
              <span>Space Black #141414</span>
            </li>
            <li>
              <div className="border border-white bg-offwhite p-16"></div>
              <span>Off White #F2F2F2</span>
            </li>
            <li>
              <div className="border border-white bg-temporalblue p-16"></div>
              <span>Temporal Blue #C7EDEF</span>
            </li>
            <li>
              <div className="border border-white bg-temporalpurple p-16"></div>
              <span>Temporal Purple #B8B4DC</span>
            </li>
            <li>
              <div className="border border-white bg-temporalbrightblue p-16"></div>
              <span>Temporal Bright Blue #127AE5</span>
            </li>
            <li>
              <div className="border border-white bg-temporalbrightpurple p-16"></div>
              <span>Temporal Bright Purple #8F86DA</span>
            </li>
            <li>
              <div className="border border-white bg-orange1 p-16"></div>
              <span>Temporal Orange 1 #FFA280</span>
            </li>
            <li>
              <div className="border border-white bg-orange2 p-16"></div>
              <span>Temporal Orange 2 #FF7065</span>
            </li>
            <li>
              <div className="border border-white bg-green1 p-16"></div>
              <span>Temporal Green 1 #9EE587</span>
            </li>
            <li>
              <div className="border border-white bg-green2 p-16"></div>
              <span>Temporal Green 2 #32D67B</span>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

function Asset({ url, label, dark }) {
  const [open, setOpen] = React.useState(false);

  return (
    <li className="flex flex-col items-center text-center">
      <button onClick={() => setOpen(true)}>
        <img
          className={
            'presetTransition hover:scale-110 h-16 w-16 sm:h-32 sm:w-32 object-contain' +
            (dark ? ' bg-gray-800 bg-opacity-25 hover:bg-opacity-100' : '')
          }
          src={url}
          aria-label={label}
          alt={label}
        />
        {open && <Lightbox mainSrc={url} onCloseRequest={() => setOpen(false)} />}
      </button>
      {label}
    </li>
  );
}
