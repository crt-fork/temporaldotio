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
import OfficeHours from '@/components/OfficeHours'
import CalloutFooter from '@/components/base/Footer';
import CodeSnippet from '@/components/CodeSnippets';

Home.title = 'Homepage | Temporal';
Home.keywords = 'Microservices, workflows, orchestration, backend, cloud architectures, distributed applications';
Home.description = 'Introducing a new and infinitely better way to develop applications. Build durable apps with Temporal and never look back.';

const goSnippet = `func RemindUserWorkflow(ctx workflow.Context, userID string, intervals []int) error {
  // Send reminder emails, e.g. after 1, 7, and 30 days
  for _, interval := range intervals {
    _ = workflow.Sleep(ctx, days(interval)) // Sleep for days!
    _ = workflow.ExecuteActivity(ctx, SendEmail, userID).Get(ctx, nil)
    // Activities have timeouts, and will be retried by default!
  }
  // ...
}`

const javaSnippet =`public class RemindUserWorkflowImpl implements RemindUserWorkflow {
  public void EmailUser(String userId, int[] intervals) {
    // Send reminder emails, e.g. after 1, 7, and 30 days
    for (int interval : intervals) {
      Workflow.sleep(Duration.ofDays(interval)); // Sleep for days!
      activities.sendEmail(interval, userId);    // Activities retried by default!
    }
    // Easily cancelled when user unsubscribes
  }
}`

const phpSnippet = `class RemindUserWorkflow implements RemindUserWorkflowInterface {
  public function emailUser($userID, $intervals) {
    // Send reminder emails, e.g. after 1, 7, and 30 days
    foreach ($intervals as &$interval) {
        yield Workflow::timer($interval * DAYS);                  // Sleep for days!
        yield $this->userActivity->sendEmail($interval, $userID); // Activities retried by default!
    }
    // Easily cancelled when user unsubscribes
  }
}`

const typescriptSnippet = `async function remindUserWorkflow(userId: string, intervals: number[]) {
  // Send reminder emails, e.g. after 1, 7, and 30 days
  for (const interval of intervals) {
    await sleep(\`\${interval} days\`); // Sleep for days!
    await activities.sendEmail(interval, userId); // Activities retried by default!
  }
  // Easily cancelled when user unsubscribes
}`

export default function Home() {
  return (
    <div>
      <section>
        <Hero
          copy={{
            title: 'index',
            headline: 'Less plumbing, more coding.',
            subhead: (
              <>
                Temporal is the simple, scalable open source way
                <br /> to write and run reliable cloud applications.
              </>
            ),
          }}
          officeHours={OfficeHours}
          ctas={[
            {
              copy: 'Join our Slack Channel',
              url: 'https://temporal.io/slack',
              style: 'light',
            },
          ]}
          className="mt-24 mb-10 md:mt-[12.5rem] md:mb-20"
        />
        <LogoList />
      </section>
      <section className="mt-20 sm:mt-32 lg:mt-64 xxl:mt-96">
        <CallOut
          textAlign="center"
          key={'better-for-engineers'}
          copy={{
            headline: 'We make things  better for engineers.',
            subhead:
              "Just because the services you depend on are unreliable doesn't mean your application has to be.",
          }}
        />
        <div className="mb-32">
           <div className="mt-8">
            <video
              className="w-full max-w-screen-lg mx-auto"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={"/videos/TemporalIntro.webm"} type="video/webm" />
              <source src={"/videos/TemporalIntro.mp4"} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section>
        <CallOut
          textAlign="left"
          key={'distributedSystems'}
          copy={{
            headline: `Distributed systems
            should hold you up,
            not hold you back.`,
          }}
          className="bg-gray-900 py-40 lg:py-80 text-white"
        />
      </section>
      <section className="mt-20 sm:mt-32 lg:mt-64 xxl:mt-96">
        <CallOut
          key={'mapLogicTasks'}
          copy={{
            headline: 'Write code,  get Workflows.',
            subhead: 'Build durable apps with Temporal and never look back.',
          }}
          textAlign="center"
          className="text-center pt-20 pb-10"
        />
        <CodeSnippet language={"go"} logoComponent={<img src={`/images/logos/go.png`} alt={`Go SDK logo icon`} className='invert object-none' />}>
          {goSnippet}
        </CodeSnippet>
        {/* <CodeSnippet language={"java"}>
          {javaSnippet}
        </CodeSnippet>
        <CodeSnippet language={"php"}>
          {phpSnippet}
        </CodeSnippet>
        <CodeSnippet language={"typescript"}>
          {typescriptSnippet}
        </CodeSnippet> */}


      </section>
      <section className="mt-20 sm:mt-32 lg:mt-64 xxl:mt-96">
        <CallOut
          key={`no-assembly-needed`}
          textAlign="center"
          copy={{
            headline: `Everything you  need in one place.`,
            subhead:
              'With Temporal your application will be durable, reliable, and scalable out of the box.',
          }}
        />
      </section>
      <section className="mt-10 sm:mt-10 lg:mt-32 xxl:mt-32">
        <PointsLogo />
      </section>

      <section className="mt-20 sm:mt-32 lg:mt-64 xxl:mt-96">
        <CallOut
          key={'code-and-scale'}
          textAlign="center"
          copy={{
            headline: 'Code like a monolith,  scale like a cloud.',
            subhead:
              'We empower developers to run reliable, fault-tolerant applications at any scale.',
          }}
        />
        <CodeIconList
          className="mt-4 lg:mt-6 mb-10 lg:mb-14"
          icons={[
            {
              src: '/images/logos/go.png',
              alt: 'Go SDK logo icon',
            },
            {
              src: '/images/logos/ts.png',
              alt: 'TypeScript SDK logo icon',
            },
            {
              src: '/images/logos/php.png',
              alt: 'php SDK logo icon',
            },
            {
              src: '/images/logos/java.png',
              alt: 'java SDK logo icon',
            },
          ]}
        />
        <div className="container mx-auto px-8 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 align-items-center">
          <div className="flex justify-end">
            <SplitCard
              key={`split-card-home-1`}
              icon="/images/icons/server-regular.svg"
              iconAttributes={{
                style: {
                  height: 45,
                  width: 45,
                },
                role: 'presentation',
              }}
              alt=""
              headline={'Open Source  (self-hosted)'}
              copy={
                <>
                  <p>
                    The most fully featured platform to write & run your
                    stateful applications with the largest user community. Years
                    of maturation across hundreds of high scale applications.
                    MIT license.
                  </p>
                  <a
                    className="underline mt-5 inline-block"
                    href="https://docs.temporal.io/"
                  >
                    Get Started
                  </a>
                </>
              }
              color="light"
            />
          </div>
          <div className="flex justify-start">
            <SplitCard
              key={`split-card-home-2`}
              icon="/images/icons/cloud-regular.svg"
              iconAttributes={{
                style: {
                  height: 45,
                  width: 45,
                  filter: 'invert(100%)',
                },
                role: 'presentation',
              }}
              alt=""
              headline={'Temporal Cloud  (managed services)'}
              copy={
                <>
                  <p>
                    Focus on your application and outsource the operations,
                    scale, configuration, infrastructure and maintenance of
                    Temporal to us. Pay only for what you use. 100% compatible
                    with open source Temporal.
                  </p>
                  <a
                    className="underline mt-5 inline-block"
                    target="_blank"
                    href="https://us17.list-manage.com/survey?u=2334a0f23e55fd1840613755d&id=f1895b6f4a"
                  >
                    Join the Cloud Waitlist
                  </a>
                </>
              }
              color="dark"
            />
          </div>
        </div>
      </section>
      <section>
        <Count
          copy={{
            headline: 'Uber scale.',
            number: '5074700000',
            subhead: 'Temporal State Transitions executed last month.',
          }}
          className="py-40 lg:pt-96"
        />
      </section>
      <section className="mt-20 sm:mt-32 lg:mt-48 xxl:mt-48">
        <CallOut
          textAlign="center"
          key={'theRightAnswer'}
          copy={{
            headline: 'What’s holding you back?',
            subhead: 'With Temporal your application transforms.',
          }}
          className="text-center pt-32 pb-10 lg:pb-14"
        />
        <FeatureCards
          cards={[
            {
              icon: '/images/icons/spiral.svg',
              alt: 'orbital icon',
              super: 'Brittle to run',
              headline: 'Reliable to run',
              subhead:
                'Temporal applications fail to execute less often and when parts of the application do fail, they always recover to a consistent state.',
            },
            {
              icon: '/images/icons/wrench.svg',
              alt: 'wrench icon',
              super: 'Complex & difficult to fix',
              headline: 'Easy to troubleshoot & repair',
              subhead:
                'The Temporal Web UI provides clear visibility into your Workflow Execution Events loop, where all failures, retries, and statuses are logged. Want this in CLI? No problem.',
            },
            {
              icon: '/images/icons/brackets.svg',
              alt: 'code brackets icon',
              super: 'Cumbersome to develop',
              headline: 'Fast to develop',
              subhead:
                'With Client, Server, and Workers, Temporal offers the best tradeoff of simple abstraction and infinitely scalable application.',
            },
          ]}
          className=""
        />
      </section>
      <section className="mt-20">
        <CallOutTweet
          key={'faultTolerant'}
          copy={{
            headline: 'Durable,  reliable,  scalable.',
            subhead: (
              <>
                The application state management
                <br /> platform you know you need.
              </>
            ),
          }}
          tweetId="1476530942739193860"
          className="pt-32"
        />
      </section>
      <section className="mt-20 sm:mt-32 lg:mt-48 xxl:mt-48">
        <CallOut
          key={'coolCompanies'}
          textAlign="center"
          copy={{
            headline: 'Take it from  these legends.',
            subhead:
              `Some of the best distributed systems developers hang out in our Forum, Slack and monthly Meetups. Come join us and share your lessons! Check out our <a href="/use-cases">Use Cases</a>`,
          }}
          className="text-center pt-32 md:pt-40 lg:pt-64 xl:pt-96 pb-10"
        ></CallOut>

        <VideoCards
          className="mb-20"
          cards={[
            {
              image: '/images/logos/usecases/stripe.png',
              alt: 'Video for how Stripe uses Temporal',
              // backgroundColor: '#665BFF',
              headline: 'How Stripe uses Temporal',
              link: 'https://www.youtube.com/watch?v=Crkcr1S-NSc',
              play: 'dark',
              isVideo: false,
              newTab: true,
            },
            {
              image: '/images/logos/usecases/netflix.png',
              alt: 'Video for how Netflix uses Temporal',
              // backgroundColor: '#000000',
              headline: 'How Netflix uses Temporal',
              link: 'https://www.youtube.com/watch?v=LliBP7YMGyA',
              play: 'dark',
              isVideo: true,
              newTab: true,
            },
            {
              image: '/images/logos/usecases/datadog.svg',
              alt: 'Video for how Datadog uses Temporal',
              // backgroundColor: '#632BA6',
              headline: 'How Datadog uses Temporal',
              link: 'https://www.youtube.com/watch?v=Hz7ZZzafBoE',
              play: 'dark',
              isVideo: true,
              newTab: true,
            },
          ]}
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
    </div>
  );
}
