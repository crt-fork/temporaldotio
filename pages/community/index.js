import Hero from '../../components/Hero';
import CallOut from '@/components/CallOut';
import VideoCards from '@/components/VideoCards';
import LargeCards from '@/components/LargeCards';
import Testimonials from '@/components/Testimonials';
import OfficeHours from '@/components/OfficeHours'
import CalloutFooter from '@/components/base/Footer';

Community.title = 'Community l Temporal';
Community.description = 'From community events and support to workshops and tutorials, we’re here to champion developers everywhere.';

export default function Community({ heading = '' }) {
  return (
    <div>
      <section>
        <Hero
          copy={{
            title: 'index',
            headline: "Join our Community.",
            subhead: "We are here to champion developers everywhere."
          }}
          ctas={[
            {
              copy:"Join our Slack Channel",
              url:"https://temporal.io/slack",
              style: 'dark',
            }
          ]}
          className="mt-24 mb-20 md:mt-52 md:mb-48"
        />
      </section>

      <section id='events'>
        <CallOut
          copy={{
            headline: "Join us at an  upcoming event.",
          }}
          textAlign='center'
          className="text-center"
        />

        <LargeCards
          cards={[
            {
              icon: "/images/icons/calendar-dark.svg",
              backgroundStyle: 'light',
              headline: "Temporal Flagship Community Meetup",
              date: "Last Tuesday of every month!",
              body: "​We'd especially love to take your questions live!  Our community meetup events will be recorded and shared on YouTube and Twitter.",
              linkCopy: "Register for Free",
              linkUrl: "https://lu.ma/temporal",
            },
            {
              icon: "/images/icons/microphone-light.svg",
              backgroundStyle: 'dark',
              headline: "Want to co-host a meetup with us?",
              date: "",
              body: "​This is your meetup space too! We’d love to host you in an upcomming meetup.  Previous guests included: Stripe, Datadog, Netflix, and more.",
              linkCopy: "Join our Slack Channel",
              linkUrl: "https://temporal.io/slack",
            },
          ]}

          className=""
        />
      </section>
      <section>
        <CallOut
          copy={{
            headline: "Great community with incredible speakers and Live Q&A",
            subhead: "Hundreds of developers come to our meetups for key user presentations, updates from Temporal, and code demo walkthroughs. Too good to be true? Check out our past talks! "
          }}
          textAlign='center'
          className="pt-32 md:pt-40 lg:pt-64 xl:pt-96 pb-10 lg:pb-16"
        />
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
              link: "https://www.youtube.com/watch?v=eWFpl-nzGsY",
              play: "dark",
              isVideo: true,
              newTab: true
            },
          ]}

          className="mb-32 lg:mb-64 xl:mb-96"
        />
      </section>
      <section id="workshops">
        <CallOut
          copy={{
            headline: "Level-up with our  Workshops and Tutorials.",
            subhead: "Everything you need to know about our core concepts and SDKs."
          }}
          textAlign='center'
          className="pb-10 lg:pb-16"
        />
        <VideoCards
          cards={[
            {
              headline: "Intro Workshop with Go",
              subhead: "- Márk Sági-Kazár (Banzai Cloud/Cisco)",
              play: "light",
              link: "https://www.youtube.com/watch?v=UwdGmdTO3Ts&list=PLl9kRkvFJrlSNuTvL0dl3VE5GEe1HFtjf&index=2",
              isVideo:true,
              newTab: true
            },
            {
              headline: "Intro Workshop with TypeScript SDK ",
              subhead: "",
              play: "light",
              link: "https://www.youtube.com/watch?v=CeHSmv8oF_4&t=2s",
              isVideo:true,
              newTab: true
            },
            {
              headline: "Intro Workshop with Java",
              subhead: "",
              play: "light",
              link: "https://www.youtube.com/watch?v=VoSiIwkvuX0&t=20s",
              isVideo:true,
              newTab: true
            },
            {
              headline: "Temporal Workflow Engine Principles",
              subhead: "",
              play: "light",
              link: "https://www.youtube.com/watch?v=t524U9CixZ0",
              isVideo:true,
              newTab: true
            },
            {
              headline: "Productionizing Temporal Workers - Samar Abbas, CTO",
              subhead: "",
              play: "light",
              link: "https://www.youtube.com/watch?v=bKRIkbxrVjs",
              isVideo:true,
              newTab: true
            },
            {
              headline: "Temporal in 2 minutes",
              subhead: "",
              play: "light",
              link: "https://www.youtube.com/watch?v=f-18XztyN6c&t=1s ",
              isVideo:true,
              newTab: true
            },
          ]}

          className="mb-32 lg:mb-64 xl:mb-96"
        />
      </section>

      <section>
        <CallOut
          copy={{
            headline: "Have a question?  Need answers?",
          }}
          textAlign='center'
          className=""
        />
        <LargeCards
          cards={[
            {
              icon: "/images/icons/speech-dark.svg",
              backgroundStyle: 'light',
              headline: "Join our support community",
              body: "Get support and search for frequently asked questions in using Temporal!",
              linkCopy: "Go to the Community",
              linkUrl: "https://community.temporal.io/",
            },
            {
              icon: "/images/icons/slack-dark.svg",
              backgroundStyle: 'light',
              headline: "Join our Slack channel",
              date: "",
              body: "​Keep up to date and join in live discussions about Temporal and related tools!",
              linkCopy: "Join our Slack Channel",
              linkUrl: "https://temporal.io/slack",
            },
          ]}

          className="mb-20 lg:mb-48"
        />
      </section>

      <section className='bg-gray-900 text-white'>
        <CallOut
          copy={{
            headline: "Our users trust us.",
            subhead: "Not only do our customers love us, but they also join us for our community events and share how they’re using us to grow their businesses."
          }}
          textAlign='center'
          className="pt-32 pb-10"
        />

        <Testimonials
          copy={{
          }}
          cards={[
            {
              company: "HashiCorp",
              quote: "HashiCorp needed to build long-running, reliable, fault-tolerant tasks for the HashiCorp Cloud Platform.  Temporal’s technology satisfied all of these requirements out of the box and allowed our developers to focus on business logic.  Without Temporal’s technology, we would’ve spent a significant amount of time rebuilding Temporal and would’ve very likely done a worse job.",
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

      <CalloutFooter />  
      </section>
    </div>
  );
}
