import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero';
import CallOut from '@/components/CallOut';
import SplitCard from '@/components/base/SplitCard';
import Image from '@/components/Image';
import FeatureCards from '@/components/FeatureCards';
import VideoCards from '@/components/VideoCards';
import PointsLogo from '@/components/PointsLogo';
import Count from '@/components/Count';
import CallOutTweet from '@/components/CallOutTweet';
import Testimonials from '@/components/Testimonials';
import LogoList from '@/components/LogoList';
import CodeIconList from '@/components/CodeIconList';

Home.title = 'Homepage l Temporal';
Home.description = 'Introducing a new and infinitely better way to develop applications. Build durable apps with Temporal and never look back.';
export default function Home() {
  return (
    <div>
      <section>
        <Hero
          copy={{
            title: 'index',
            headline: "Less plumbing, more coding.",
            subhead: "Buckle up. We’re about to blow your mind."
          }}
          officeHours={{
            btnCopy: 'Attend Office Hours',
            sessions: [
              { copy: 'Intro to Temporal with Golang',
                link: 'https://calendly.com/candace-temporal/intro-to-temporal-with-golang'
              },
              { copy: 'Intro to Temporal with Java',
                link: 'https://calendly.com/candace-temporal/intro-to-temporal-with-golang-clone'
              },
              { copy: 'Intro to Temporal with TypeScript',
                link: ' https://calendly.com/candace-temporal/intro-to-temporal-with-typescript'
              },
              { copy: 'Intro to Temporal Architecture',
                link: ' https://calendly.com/candace-temporal/intro-to-temporal-architecture'
              },
              { copy: 'Intro to Temporal Architecture',
                link: ' https://calendly.com/candace-temporal/business-use-cases-for-temporal'
              },
            ]
          }}
          ctas={[
            {
              copy:"Join our Slack Channel",
              url:"https://temporal.io/slack",
              style: 'light',
            }
          ]}
          className="mt-24 mb-10 md:mt-[12.5rem] md:mb-20"
        />
        <LogoList/>
      </section>
      <section className='mt-20 sm:mt-32 lg:mt-64 xxl:mt-96'>
        <CallOut
          textAlign='left'
          key={'distributedSystems'}
          copy={{
            headline: "Don’t let the complexity of distributed systems hold you back."
          }}
          className="bg-gray-900 py-40 lg:py-80 text-white"
        />
      </section>
      <section className='mt-20 sm:mt-32 lg:mt-64 xxl:mt-96'>
        <CallOut
          key={'mapLogicTasks'}
          copy={{
            headline: "Write code,  get Workflows.",
            subhead: "Build durable apps with Temporal and never look back."
          }}
          textAlign='center'
          className="text-center pt-20 pb-10"
        />
        <Image
          className=""
          mobileSrc="/images/code-snippet-mobile.png"
          wideSrc="/images/code-snippet.png"
          alt="Code snippet example to illustrate streamlined workflows"
        />
      </section>
      <section className='mt-20 sm:mt-32 lg:mt-64 xxl:mt-96'>
        <CallOut
          textAlign='center'
          copy={{
          headline: 'No assembly required.',
          subhead: 'With Temporal you get durability, reliability and scalability out of the box.'
        }}/>
      </section>
      <section className='mt-20 sm:mt-32 lg:mt-64 xxl:mt-96'>
        <PointsLogo copyPoints={[
          {
            heading: 'Supercharged Durability.',
            copy: 'Your code will run forever and everrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.'
          },
          {
            heading: 'Baked-in Reliability.',
            copy: 'Your code will run despite failures!'
          },
          {
            heading: 'Effortless Scalability.',
            copy: 'Your code can scale up or down on command!'
          }
        ]}/>
      </section>
      <section>
        <Count
          copy={{
            headline:"Uber scale.",
            number: "5074700000",
            subhead: "Temporal state transitions executed last month."
          }}
          className="py-40 lg:py-96"
        />
      </section>
      <section>
        <CallOut
          textAlign='center'
          copy={{
            headline: 'Code like a monolith,  scale like a cloud.',
            subhead: 'We empower developers to run reliable, fault-tolerant applications at any scale.'
          }}
        />
        <CodeIconList
          className='mt-4 lg:mt-6 mb-10 lg:mb-14'
          icons={[
            {
              src: "/images/logos/go.svg",
              alt: "Go SDK logo icon"
            },
            {
              src: "/images/logos/ts.svg",
              alt: "TypeScript SDK logo icon"
            },
            {
              src: "/images/logos/php.svg",
              alt: "php SDK logo icon"
            },
            {
              src: "/images/logos/java.svg",
              alt: "java SDK logo icon"
            },
          ]}/>
        <div className='container mx-auto px-8 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 align-items-center'>
          <div className='flex justify-end'>
            <SplitCard
              key={`split-card-home-1`}
              icon="/images/icons/server-fire.svg"
              alt='server on fire icon'
              headline={'Open Source  (self-hosted)'}
              copy={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla augue, mattis et sagittis sed, posuere non felis.'}
              color='light'
              />
          </div>
          <div className='flex justify-start'>
            <SplitCard
              key={`split-card-home-2`}
              icon="/images/icons/umbrella.svg"
              alt='umbrella icon'
              headline={"Temporal Cloud  (managed&nbsp;hosting)"}
              copy={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla augue, mattis et sagittis sed, posuere non felis.'}
              color='dark'
            />
          </div>
        </div>
      </section>
      <section className='mt-20 sm:mt-32 lg:mt-64 xxl:mt-96'>
        <CallOut
          textAlign='center'
          key={'theRightAnswer'}
          copy={{
            headline: "What’s holding you back?",
            subhead: "Temporal is the right answer."
          }}
          className="text-center pt-32 pb-10 lg:pb-14"
        />
        <FeatureCards
          cards = {[
            {
              icon: "/images/icons/spiral.svg",
              alt: 'orbital icon',
              super: "Brittle to run",
              headline: "Reliable to run",
              subhead: "Temporal enforces reliable and scalable architecture for everyone who uses it, with well-tested code running in production from the smallest to largest scales. Our worst case is inability to make progress, not data loss. "
            },
            {
              icon: "/images/icons/wrench.svg",
              alt: 'wrench icon',
              super: "Complex & difficult to fix",
              headline: "Easy to troubleshoot & repair",
              subhead: "The Temporal Web UI provides clear visibility into your Workflow Execution Events loop, where all failures, retries, and statuses are logged. Want this in CLI? No problem."
            },
            {
              icon: "/images/icons/brackets.svg",
              alt: 'code brackets icon',
              super: "Cumbersome to develop",
              headline: "Fast to develop",
              subhead: "With Client, Server, and Workers, Temporal offers the best tradeoff of simple abstraction and infinitely scalable application."
            }
          ]}

          className=""
        />
      </section>
      <section className='mt-20 sm:mt-32 lg:mt-64 xxl:mt-96'>
        <CallOutTweet
          key={'faultTolerant'}
          copy={{
            headline: "Durable,  reliable,  scalable.",
            subhead: "We’re the application state management platform you didn’t know you needed.",
            body: "We empower developers to write reliable, fault-tolerant applications at any scale."
          }}
          tweetId="1476530942739193860"
          className="pt-32"
        />
      </section>
      <section className='mt-20 sm:mt-32 lg:mt-64 xxl:mt-96'>
        <CallOut
          textAlign='center'
          key={'coolCompanies'}
          copy={{
            headline: "Take it from  these legends.",
            subhead: "Some of the best distributed systems developers hang out in our Forum, Slack and monthly Meetups. Come join us and share your lessons! Check out our ",
            subheadLinkCopy: "Use Cases.",
            subheadLinkUrl: "/use-cases"
          }}
          className="text-center pt-32 md:pt-40 lg:pt-64 xl:pt-96 pb-10"
        >
        </CallOut>

        <VideoCards
          cards={[
            {
              image: "/images/logos/stripe.svg",
              alt: "Video for how Stripe uses Temporal",
              backgroundColor: '#665BFF',
              headline: "How Stripe uses Temporal",
              link: "https://www.youtube.com/watch?v=Crkcr1S-NSc",
              play: "dark",
              isVideo: true,
              newTab: true
            },
            {
              image: "/images/logos/netflix.svg",
              alt:"Video for how Netflix uses Temporal",
              backgroundColor: '#000000',
              headline: "How Netflix uses Temporal",
              link: "https://www.youtube.com/watch?v=LliBP7YMGyA",
              play: "light",
              isVideo: true,
              newTab: true
            },
            {
              image: "/images/logos/datadog.svg",
              alt:"Video for how Datadog uses Temporal",
              backgroundColor: '#632BA6',
              headline: "How Datadog uses Temporal",
              link: "https://www.youtube.com/watch?v=VoSiIwkvuX0",
              play: "dark",
              isVideo: true,
              newTab: true
            },
          ]}
        />
      </section>
      <section className='bg-gray-900 text-white'>
          <CallOut
          textAlign='center'
          key={'userTrust'}
          copy={{
            headline: "People trust us.",
            subhead: "Not only do our users love us, but they also join us for our community events and share how they’re using us to grow their businesses."
          }}
          className="text-center pt-32 pb-10"
        />
        <Testimonials
          cards={[
            {
              company: "HashiCorp",
              quote: "HashiCorp needed to build long-running, reliable, fault-tolerant tasks for the HashiCorp Cloud Platform. Temporal’s technology satisfied all of these requirements out of the box and allowed our developers to focus on business logic.  Without Temporal’s technology, we would’ve spent a significant amount of time rebuilding Temporal and would’ve very likely done a worse job.",
              name: "Mitchell Hashimoto",
              title: 'Co-founder, Hashicorp'
            },
            {
              company: "Checkr",
              quote: "Developer happiness has increased. Thinking in terms of workflows and activities has clarified our product and allowed us to share workflow components with different teams.",
              name: "Ben Jacobson",
              title: 'Staff Software Engineer, Checkr'
            },
            {
              company: "Coinbase",
              quote: "Temporal maintains high reliability while providing tremendous visibility. Things we thought to be much more complex... feel much easier!",
              name: "Ben Jacobson",
              title: 'Staff Software Engineer, Checkr'
            },
            {
              company: "Descript",
              quote: "A game changing revelation - Temporal gave us the ability to test our workflows with unit tests. JSON or YAML are completely untestable!",
              name: "Nicolas Gere",
              title: 'Software Engineer, Descript'
            },
            {
              company: "Box",
              quote: "The API gives you this illusion of single threaded execution... It's amazing.",
              name: "Steven Cipolla",
              title: 'Senior Staff Software Engineer, Box'
            },
          ]}
        />

        <CallOut
          textAlign='center'
          key={'invincibleApps'}
          copy={{
            headline: "Build invincible apps.",
            subhead: "There’s no better time to be invincible.",
          }}
          officeHours={{
            btnCopy: 'Attend Office Hours',
            sessions: [
              { copy: 'Intro to Temporal with Golang',
                link: 'https://calendly.com/candace-temporal/intro-to-temporal-with-golang'
              },
              { copy: 'Intro to Temporal with Java',
                link: 'https://calendly.com/candace-temporal/intro-to-temporal-with-golang-clone'
              },
              { copy: 'Intro to Temporal with TypeScript',
                link: ' https://calendly.com/candace-temporal/intro-to-temporal-with-typescript'
              },
              { copy: 'Intro to Temporal Architecture',
                link: ' https://calendly.com/candace-temporal/intro-to-temporal-architecture'
              },
              { copy: 'Intro to Temporal Architecture',
                link: ' https://calendly.com/candace-temporal/business-use-cases-for-temporal'
              },
            ]
          }}
          className="text-center pt-40 pb-20 lg:pt-96 lg:pb-48"
        />

      </section>
    </div>
  )
}
