import Head from 'next/head'
import Hero from '@/components/Hero';
import CallOut from '@/components/CallOut';
import Testimonials from '@/components/Testimonials';
import CalloutFooter from '@/components/base/Footer';
import CallOutBackground from '@/components/CallOutBackground';
import FeatureCards from '@/components/FeatureCards';
import Timeline from '@/components/Timeline';
import LogoFeature from '@/components/LogoFeature';
import BlogCards from '@/components/BlogCards';

export default function AboutPage() {
  return <>
    <Head>
      <title>About</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/images/logos/logo-temporal-no-copy.svg" />
    </Head>
    <main>
      {/* Hero */}
      <section>
        <Hero
          copy={{
            title: 'index',
            headline: 'About Temporal.',
            subhead: (
              <>
                We exist to shield developers from unnecessary risk and eliminate everything that gets in their way.
                <br />So they can focus on writing code and creating what’s next.
              </>
            ),
          }}
          className="mt-24 mb-10 md:mt-[12.5rem] md:mb-20"
        />
      </section>

      <section>
        <CallOutBackground
          key={'on-a-mission'}
          copy={{
            headline: "We’re on a mission to  champion engineers  everywhere.",
            subhead: "We envision a world where developers are  empowered: influencing and leading the  direction of every business.",
          }}
          background="/images/backgrounds/about-callout.png"
          className="py-40 lg:pt-96 lg:pb-20 text-white"
        />
      </section>

      
       <section>
        <CallOut
          textAlign="left"
          key={'temporal-raises'}
          copy={{
            headline: "Temporal raises $100 Million Series B to invest in open source and developer communities.",
            linkCopy: "Read Max’s blog.",
            linkUrl: ""
          }}
          className="bg-gray-900 py-40 lg:py-80 text-white"
        />
      </section>

      <section className="mt-20 sm:mt-32 lg:mt-64 xxl:mt-96">
        <CallOut
          key={'15-years'}
          textAlign="center"
          copy={{
            headline: '15 years  in the making.',
            subhead:
              'We’re growing at an incredible speed and want you to be a part of it. If none of these  positions are a fit for you, email careers@temporal.io describing your dream job.',
          }}
          className="mb-32"
        />
        <Timeline
          textAlign="left"
          key={'timeline'}
          items= {[
            {
              year: "2004",
              icon: "/images/icons/timeline/amazon.png",
              alt: '',
              copy: "Max was the Tech Lead on Simple Queue Service (SQS) at Amazon.",
            },
            {
              year: "2009",
              icon: "/images/icons/timeline/amazon.png",
              alt: '',
              copy: "Max and Samar worked on the Simple Workflow Service (SWF) using the SQS engine at Amazon.",
            },
            {
              year: "2014",
              icon: "/images/icons/timeline/azure.png",
              alt: '',
              copy: "Samar was the Tech Lead on Azure Service Bus at Microsoft. Lead a side project that turned into Azure Durable Functions.",
            },
            {
              year: "2015",
              icon: "/images/icons/timeline/cherami.png",
              alt: '',
              copy: "Max and Samar both joined Uber and built two open source projects Cherami and Cadence",
            },
            {
              year: "2019",
              icon: "/images/icons/timeline/temporal.png",
              alt: '',
              copy: "Max and Samar founded Temporal Technologies inc.",
            },
            {
              year: "2020",
              icon: "/images/icons/timeline/temporal.png",
              alt: '',
              copy: "Temporal raises $18.75M Series A ",
            },
            {
              year: "2022",
              icon: "/images/icons/timeline/temporal.png",
              alt: '',
              copy: "Temporal.io raises $103 Million Series B, company valuation passes $1.5 Billion",
            }

          ]}
          className=""
        />
      </section>

      <section className="mt-20 sm:mt-32 lg:mt-64 xxl:mt-96">
        <CallOut
          key={'backed-by'}
          textAlign="center"
          copy={{
            headline: 'Backed by',
          }}
          className="mb-16"
        />
        <LogoFeature
          key={'logo-feature'}

          copy="As senior software architects, Maxim and Samar saw organizations struggling as they adopted distributed systems and microservices architectures. They designed Temporal to tame this complexity and empower developers to write reliable, fault-tolerant applications at any scale."
          logos={[
            {
              image:"/images/logos/index-ventures.svg",
              alt:"Index Ventures logo"
            },
            {
              image:"/images/logos/amplify-partners.svg",
              alt:"Amplify Partners logo"
            },
            {
              image:"/images/logos/sequoia.svg",
              alt:"Sequoia logo"
            },
            {
              image:"/images/logos/madrona.svg",
              alt:"Madrona logo"
            }
          ]}
          className=""
        />
        
      </section>

      <section className="mt-20 sm:mt-32 lg:mt-64 xxl:mt-96">
        <CallOut
          key={'more-about'}
          textAlign="center"
          copy={{
            headline: 'More about  Temporal.',
            subhead: 'Morbi nec leo sodales, ultricies lacus fringilla, tempus enim. Phasellus vel magna quis metus tempor tincidunt a ac erat. Quisque magna diam, euismod ut condimentum id.'
          }}
        />


        <BlogCards
          cards={[
            {
              headline: 'An Open Letter to the Temporal User Community',
              author: 'by Maxim Fateev',
              position: 'CEO & Co-Founder',
              headshot: '/images/icons/maxim.svg',
              url: '/'
            },
            {
              headline: 'Why I joined Temporal',
              author: 'by Charles Zedlewski',
              position: 'CPO',
              headshot: '/images/icons/charles.svg',
              url: '/'
            },
            {
              headline: 'A journey',
              author: 'by Samar Abbas',
              position: 'CTO and Co-Founder',
              headshot: '/images/icons/samar.svg',
              url: '/'
            }
          ]}
          className=""
        />
        
        
      </section>

      <section className="mt-20 sm:mt-32 lg:mt-64 xxl:mt-96">
        <CallOut
          key={'join-team'}
          textAlign="center"
          copy={{
            headline: 'Join  our team.',
            subhead: 'We’re growing at an incredible speed and want you to be a part of it. If none of these positions are a fit for you, email careers@temporal.io describing your dream job.'
          }}
        />

        <FeatureCards
          alignContent="start"
          cards={[
            {
              icon: '/images/icons/spiral.svg',
              alt: 'orbital icon',
              headline: 'Product',
              subhead:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec est non urna bibendum gravida. ',
              tags:['Product Management', 'Product Design', 'Front-End Platform', 'Technical Writing', 'Product Marketing', 'DevRel'],
              linkCopy: 'View Product job posings',
              linkUrl: "/",
            },
            {
              icon: '/images/icons/wrench.svg',
              alt: 'wrench icon',
              headline: 'Engineering',
              subhead:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec est non urna bibendum gravida. ',
              tags:['Backend Engineers', 'Software Engineers', 'Infrastructure', 'DevOps', 'Data Engineers', 'Language Runtime', 'IT Support Engineer'],
              linkCopy: 'View Engineering job posings',
              linkUrl: "/"
            },
            {
              icon: '/images/icons/brackets.svg',
              alt: 'code brackets icon',
              headline: 'Operations',
              subhead:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec est non urna bibendum gravida. ',
              tags:['Recruiting', 'Human Resources'],
              linkCopy: 'View Operations job posings',
              linkUrl: "/"
            },
          ]}
          className=""
        />
        
      </section>



     










      <section className="bg-gray-900 text-white">
        <CallOut
          key={'userTrust'}
          textAlign="center"
          copy={{
            headline: 'People trust us.',
            subhead:
              'Not only do our users love us, but they also join us for our community events and share how they’re using us to grow their businesses.',
          }}
          className="text-center pt-32 pb-10"
        />
        <Testimonials
          cards={[
            {
              company: 'HashiCorp',
              quote:
                'HashiCorp needed to build long-running, reliable, fault-tolerant tasks for the HashiCorp Cloud Platform. Temporal’s technology satisfied all of these requirements out of the box and allowed our developers to focus on business logic.  Without Temporal’s technology, we would’ve spent a significant amount of time rebuilding Temporal and would’ve very likely done a worse job.',
              name: 'Mitchell Hashimoto',
              title: 'Co-founder, Hashicorp',
            },
            {
              company: 'Checkr',
              quote:
                'Developer happiness has increased. Thinking in terms of workflows and activities has clarified our product and allowed us to share workflow components with different teams.',
              name: 'Ben Jacobson',
              title: 'Staff Software Engineer, Checkr',
            },
            {
              company: 'Coinbase',
              quote:
                'Temporal maintains high reliability while providing tremendous visibility. Things we thought to be much more complex... feel much easier!',
              name: 'Anthony Dmitriyev',
              title: 'Software Engineer, Coinbase',
            },
            {
              company: 'Descript',
              quote:
                'A game changing revelation - Temporal gave us the ability to test our workflows with unit tests. JSON or YAML are completely untestable!',
              name: 'Nicolas Gere',
              title: 'Software Engineer, Descript',
            },
            {
              company: 'Box',
              quote:
                "The API gives you this illusion of single threaded execution... It's amazing.",
              name: 'Steven Cipolla',
              title: 'Senior Staff Software Engineer, Box',
            },
          ]}
        />

        <CalloutFooter />
      </section>

    </main>
  </>;
}