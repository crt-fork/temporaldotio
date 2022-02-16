import React, { useEffect, useState } from 'react';
import '@/styles/globals.css';
import BaseLayout from '@/layouts/BaseLayout';
import Head from 'next/head';
import Script from 'next/script';
import { library } from '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faSlack,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPaperPlane,
  faPlus as falPlus,
  faMinus as falMinus,
  faTimes as falTimes,
} from '@fortawesome/pro-light-svg-icons';
import {
  faPlus as farPlus,
  faMinus as farMinus,
} from '@fortawesome/pro-regular-svg-icons';
import { SSRProvider } from 'react-bootstrap';

config.autoAddCss = false;
library.add(
  faGithub,
  faSlack,
  faTwitter,
  faYoutube,
  faPaperPlane,
  farPlus,
  falPlus,
  falMinus,
  farMinus,
  falTimes
);

const GLOBAL_DATA = {
  announcement: {
    showAnnouncement: true,
    copy: 'Temporal raises $100 Million Series B to invest in open source and developer communities.',
    // link: {
    //   href: '',
    //   copy: 'Read the article'
    // }
  },
  nav: {
    icon: {
      src: '/images/logos/logo-temporal-with-copy.svg',
      alt: 'temporal logo',
      href: '/',
    },
    links: [
      {
        copy: 'get started',
        href: 'https://docs.temporal.io/',
        target: '_self',
      },
      {
        copy: 'use cases',
        href: '/use-cases',
        target: '_self',
      },
      {
        copy: 'community',
        href: '/community',
        target: '_self',
      },
      {
        copy: `Temporal's Github Repository`,
        href: 'https://github.com/temporalio/temporal',
        target: '_blank',
        icon: 'github',
      },
    ],
    cta: {
      copy: 'join the cloud waitlist',
      target: '_blank',
      href: 'https://us17.list-manage.com/survey?u=2334a0f23e55fd1840613755d&id=f1895b6f4a',
    },
    mobileNavBtn: {
      icon: '/images/icons/hamburger.svg',
      alt: 'open navigation button',
    },
    mobileNavIcon: {
      src: '/images/logos/logo-temporal-no-text-white.svg',
      alt: 'temporal logo',
    },
  },
  footer: {
    signUp: {
      label: {
        copy: 'Sign up to our newsletter',
      },
      input: {
        placeholder: 'Enter your email address',
        icon: '',
      },
      submitBtn: {
        copy: 'Subscribe',
        icon: 'paper-plane',
      },
    },
    socials: [
      {
        alt: 'YouTube logo icon',
        icon: 'youtube',
        href: 'https://www.youtube.com/channel/UCGovZyy8OfFPNlNV0i1fI1g ',
      },
      {
        alt: 'Twitter logo icon',
        icon: 'twitter',
        href: 'https://twitter.com/temporalio',
      },
      {
        alt: 'Slack logo icon',
        icon: 'slack',
        href: 'https://temporal.io/slack',
      },
    ],
    linkColumns: [
      {
        heading: {
          copy: 'get started',
          target: '_self',
          href: 'https://docs.temporal.io/',
        },
        links: [
          {
            copy: 'documentation',
            target: '_self',
            href: 'https://docs.temporal.io/',
          },
          {
            copy: 'SDKs',
            target: '_self',
            href: 'https://docs.temporal.io/application-development',
          },
          {
            copy: 'resources & guides',
            target: '_self',
            href: 'https://docs.temporal.io/ ',
          },
          {
            copy: 'temporal server',
            target: '_self',
            href: 'https://docs.temporal.io/docs/server/introduction',
          },
          {
            copy: 'developer tools',
            target: '_self',
            href: 'https://docs.temporal.io/docs/devtools/introduction',
          },
          {
            copy: 'join the cloud waitlist',
            target: '_blank',
            href: 'https://us17.list-manage.com/survey?u=2334a0f23e55fd1840613755d&id=f1895b6f4a',
          },
        ],
      },
      {
        heading: { copy: 'use cases', target: '_self', href: '/use-cases' },
        links: [
          {
            copy: 'business transactions',
            target: '_self',
            href: '/use-cases#business-transactions',
          },
          {
            copy: 'business process applications',
            target: '_self',
            href: '/use-cases#async-business-processes',
          },
          {
            copy: 'infrastructure management',
            target: '_self',
            href: '/use-cases#infrastructure-management',
          },
        ],
      },
      {
        heading: { copy: 'Community', target: '_self', href: '/community' },
        links: [
          {
            copy: 'join our slack group',
            target: '_self',
            href: 'https://temporal.io/slack',
          },
          { copy: 'meetups', target: '_blank', href: 'https://lu.ma/temporal' },
          { copy: 'workshops', target: '_self', href: '/community#workshops' },
          {
            copy: 'blog',
            target: '_self',
            href: 'https://docs.temporal.io/blog/',
          },
          {
            copy: 'support forum',
            target: '_self',
            href: 'https://community.temporal.io/',
          },
        ],
      },
      {
        heading: { copy: 'careers' },
        links: [
          {
            copy: "We're hiring",
            target: '_blank',
            href: 'https://jobs.lever.co/temporal',
          },
        ],
      },
    ],
    legalItems: [
      { copy: 'security', href: 'https://docs.temporal.io/security/' },
      {
        copy: 'privacy policy',
        href: 'https://docs.temporal.io/privacy-policy/',
      },
      {
        copy: 'terms of service',
        href: 'https://docs.temporal.io/pdf/temporal-tos-2021-07-24.pdf',
      },
      { copy: '2022 © Temporal Technologies. All rights reserved.' },
    ],
    partners: [
      {
        image: {
          src: '/images/logos/logo-Index-v2.svg',
          alt: 'Index Ventures logo icon',
        },
        href: 'https://www.indexventures.com/',
      },
      {
        image: {
          src: '/images/logos/logo-Amplify.svg',
          alt: 'Amplify Partners logo icon',
        },
        href: 'https://amplifypartners.com/portfolio-news/our-investment-in-temporal/',
      },
      {
        image: {
          src: '/images/logos/logo-Sequoia-capital.svg',
          alt: 'Sequoia logo icon',
        },
        href: 'https://medium.com/sequoia-capital/temporal-the-promise-of-more-resilient-applications-87c46469d74a',
      },
      {
        image: {
          src: '/images/logos/logo-Madrona.svg',
          alt: 'Madrona Venture Group logo icon',
        },
        href: 'https://www.madrona.com/',
      },
    ],
  },
};

function MyApp({ Component, pageProps }) {
  const data = GLOBAL_DATA;
  const [showAnnouncement, setShowAnnouncement] = useState(
    data.announcement.showAnnouncement
  );
  const closeAnnouncementBar = () => setShowAnnouncement(false);

  useEffect(() => {
    const path = window.location.hash;
    if (typeof window !== undefined && path && path.includes('#')) {
      setTimeout(() => {
        const id = path.replace('#', '');
        const el = window.document.getElementById(id);
        const rect = el.getBoundingClientRect();
        window.scrollTo({
          top: pageYOffset + rect.top,
          behavior: 'smooth',
        });
      }, 100);
    }
  });

  useEffect(() => {
    console.log('showAnnouncement: ', showAnnouncement);
  }, [showAnnouncement]);

  return (
    <SSRProvider>
      <BaseLayout.AlertBar
        isShowAlert={showAnnouncement}
        closeFn={closeAnnouncementBar}
      >
        <p>
          {data.announcement.copy}{' '}
          {data?.announcement?.link && (
            <a
              className="text-blue-200 underline whitespace-pre"
              href={data.announcement.link.href}
            >
              {data.announcement.link.copy}
            </a>
          )}
        </p>
      </BaseLayout.AlertBar>
      <BaseLayout data={data}>
        <Head>
          <title>{Component.title}</title>
          <meta name="description" content={Component.description} />
          <meta name="keywords" content={Component.keywords || ''} />
          <link rel="icon" href="/images/logos/logo-temporal-no-copy.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </BaseLayout>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-163137879-1"
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          _html: `window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'UA-163137879-1');console.log("HulloThere")`,
        }}
      ></Script>
    </SSRProvider>
  );
}


export default MyApp
