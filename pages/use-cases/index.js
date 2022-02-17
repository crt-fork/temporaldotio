import Hero from '@/components/Hero';
import CallOut from '@/components/CallOut';
import CopyGrid from '@/components/CopyGrid';
import Testimonials from '@/components/Testimonials';
import VideoCards from '@/components/VideoCards';
import Expander from '@/components/base/Expander';
import ProCons from '@/components/ProCons';
import { v4 as uuid } from 'uuid';
import {CalloutFooter} from '@/components/base/Footer';

Users.title = 'Case Studies | Temporal';
Users.description = 'Hear real life stories about real world solutions with developers that have partnered with us.';

export default function Users() {
  const customers = [
    { copy: 'Snapchat logo', logo: '/images/logos/snapchat-white.svg' },
    { copy: 'Netflix logo',  logo: '/images/logos/netflix-white.svg' },
    { copy: 'Datadog logo',  logo: '/images/logos/datadog-white.svg' },
    { copy: 'Hashicorp logo',  logo: '/images/logos/hashicorp-white.svg' },
    { copy: 'Stripe icon',  logo: '/images/logos/stripe-white.svg' },
    { copy: 'Coinbase logo',  logo: '/images/logos/coinbase-white.svg' },
    { copy: 'Airbyte logo',  logo: '/images/logos/airbyte-white.svg' },
    { copy: 'Box logo',  logo: '/images/logos/box-white.svg' },
    { copy: 'Checkr logo',  logo: '/images/logos/checkr-white.svg' },
    { copy: 'Descript logo',  logo: '/images/logos/descript-white.svg' },
    { copy: 'zebra medical vision logo',  logo: '/images/logos/zebraMedical-white.svg' },
    { copy: 'Instacart Logo',  logo: '/images/logos/temporal_logos_instacart_white.svg' },
  ]
  return (
    <div>
      <section>
        {/* TODO: HERO subhaed text mobile styling */}
        <Hero
          copy={{
            title: 'index',
            headline: "The most innovative companies rely on Temporal.",
            subhead: "Useful skills in tangible situations."
          }}
          className='mt-24 mb-10 md:mt-52 md:mb-20'
        />
      </section>
      <section className='hidden md:block'>
        <CopyGrid
          columns="4"
          classNames={"bg-black text-white"}>
          {customers.map((cust, i) => (
            <div
              className="flex justify-center items-center square"
              key={uuid()}>
              <img src={cust.logo} alt={cust.copy} />
              {/* <h3 className='text-4xl font-sans font-bold'>{cust.copy}</h3> */}
            </div>
          ))}
        </CopyGrid>
      </section>
      <section className='mt-8 lg:mt-28 text-center'>
        <CallOut
          textAlign='center'
          copy={{
          headline: "Built with Temporal.",
          subhead: <>Temporal is the simple, scalable open source way<br/> to write and run reliable cloud applications. </>
        }}/>
      </section>
      <section
        id='business-transactions'
        className='mt-20 lg:mt-48'>
        <CallOut
          textAlign='center'
          copy={{
          headline: 'Business Transactions.',
          subhead: 'No more double spends or dropped payments. Reliability, consistency, failure compensation, long running operations, and Business Transactions for your most critical transfers.'
        }}>
          {/* TODO: TO MAKE CMS READY, Make RichText Capable w/ dangerouslySetInnerHTML */}
          {/* <Expander
            closedCopy={'Show more about Business Transactions'}
            expandedCopy={'Show less about Business Transactions'}>
              <ProCons
              leftHeading='Motivation'
              left={
                <div className='text-sm sm:text-2xl text-left'>
                  <p>Most businesses have to deal with managing complex monetary transactions and transfers, including:</p>
                  <ul className='mt-6 list-disc pl-8'>
                    <li>Handling consumer's subscriptions, installment payments, and communications in a reliable and timely manner.</li>
                    <li>Integrating with multiple payment systems and shopping platform backends.</li>
                    <li>Detecting suspicious and fraudulent Activities.</li>
                  </ul>
                  <p className='mt-6'>Similar to microservices orchestration, such workflows need a way to deliver the transactional consistency—but across multiple third-party vendors. Each of these third-party systems has a potential for failure, delays, or intermittent availability issues. Despite the challenges, the entire process represents a long-running transaction that needs to eventually complete in a predictable way. </p>
                  <p className='mt-6'>In some cases, instead of trying to complete the process by continuously retrying, compensation rollback logic should be executed. Saga Pattern is one way to standardize compensation APIs.</p>
                </div>
              }
              rightHeading='Benefits'
              right={
                <div className="text-sm sm:text-2xl text-left">
                  <p>Temporal provides an extensive toolset for dealing with the unpredictability of external services via reliable and transparent mechanisms: built-in execution guarantees, exponential Activity retries, timeouts.</p>
                  <p className='mt-6'>Temporal boasts native Saga Pattern support out of the box. Simply define a compensation action for each Workflow Activity. That way, when a failure happens in one of the downstream services, compensation actions will run for each of the Activities that previously succeeded.</p>
                  <h4 className='mt-14 font-bold'>Additional resources</h4>
                  <a className="mt-6 block underline text-black"
                    target="_blank"
                    href="https://github.com/temporalio/temporal-java-samples/tree/master/src/main/java/io/temporal/samples/bookingsaga">
                    Explore the Saga example in Java
                  </a>
                  <a className="mt-6 block underline text-black"
                    target="_blank"
                    href="https://github.com/temporalio/samples-go/tree/main/expense ">
                    Explore the Expenses example in Go
                  </a>
                </div>
              }/>
          </Expander> */}
        </CallOut>
      </section>
      <section className="mt-14">
        <VideoCards
          cards = {[
            {
              image: "/images/logos/usecases/coinbase.svg",
              alt: 'Coinbase logo',
              // backgroundColor: '#0646FF',
              headline: "Reliable crypto transactions at Coinbase",
              link: "https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase/",
            },
            {
              image: "/images/logos/usecases/doordash.svg",
              alt: 'Doordash logo',
              backgroundColor: '#FFFFFF',
              headline: "Building Reliable Workflows: Cadence as a Fallback for Event-Driven Processing",
              link: "https://doordash.engineering/2020/08/14/workflows-cadence-event-driven-processing/",
              newTab: true
            },
            {
              image: "/images/logos/usecases/box.svg",
              alt: 'Box logo',
              // backgroundColor: '#0646FF',
              headline: "Temporal: a central brain for Box",
              link: "https://docs.temporal.io/blog/temporal-a-central-brain-for-box/",
            }
          ]}
        />
      </section>
      <section
        id='async-business-processes'
        className='mt-20 lg:mt-48'>
        <CallOut
          textAlign='center'
          key={uuid()}
          copy={{
            headline: "Business Process Applications.",
            subhead: 
            <span className='text-left'>
              <p className='mb-10'>
                Business process applications and async services commonly need to keep track
                of state across sessions, batch processes, offline user actions and
                schedules.
              </p>
              <p className='mb-10'>
                Temporal workflows provide developers with a simple programming model for
                managing state. Temporal Server maintains an application’s state at scale
                and ensures correctness regardless of what’s failing.
              </p>
              <p className='mb-10'>
                Distributed Cron, at massive scale. Reliable polling that is as simple or
                sophisticated as you need. Run 100s of millions parallel cron jobs that
                survive any machine failure.
              </p>
            </span>
          }}>
          {/* <Expander
          closedCopy={'Show more about Async Business Processes'}
          expandedCopy={'Show less about Async Business Processes'}>
            <ProCons
              leftHeading='Motivation'
              left={
                <div className='text-sm sm:text-2xl text-left'>
                  <p>Many business processes naturally have a long duration and may run for hours, days, months, or even years:</p>
                  <ul className='mt-6 list-disc pl-8'>
                    <li className='mt-6'>Expense approval process requiring manual intervention from a human</li>
                    <li className='mt-6'>A process of labeling data for ML where an expert fills metadata via a user interface.</li>
                    <li className='mt-6'>Fraud detection system, where workflows react to events generated by consumer behavior.</li>
                    <li className='mt-6'>Customer loyalty program where the workflow accumulates reward points and applies them when requested.</li>
                    <li className='mt-6'>User nurturing process that sends educational emails based on the schedule and past user Activities.</li>
                  </ul>
                  <p className="mt-6">It's typical to use a distributed asynchronous event-driven architecture in such scenarios. Unfortunately, this means that the code is now scattered across multiple handlers and does not resemble the structure of the original business process.</p>
                </div>
              }
              rightHeading='Benefits'
              right={
                <div className='text-sm sm:text-2xl text-left'>
                  <p>Temporal provides a holistic approach for implementing long-running Workflows. Workflow execution is paused and resumed by the runtime as required. Developers no longer have to focus on edge cases and boilerplate code that handles long periods of inactivity, and can instead concentrate exclusively on business logic.</p>
                  <p className='mt-6'>Temporal has direct support for asynchronous events (aka signals). Temporal's simple programming model handles a lot of complexity around state persistence and ensures external action execution through built-in retries.</p>
                  <p className='mt-6'>A sophisticated Workflow may have a few different paths that branch out, that you want to execute in parallel, but then join them back together, even if each track might take days to run. With Temporal, it's straightforward to express complicated decision paths since everything is represented as code rather than via a GUI or JSON configuration.</p>
                </div>
              }
            />
          </Expander> */}
        </CallOut>
        <VideoCards
          className={'mt-10 md:mt-14'}
          cards = {[
            {
              image: "/images/logos/usecases/snap.png",
              alt: 'Snapchat logo',
              headline: "Build a Reliable System in a Microservices World at Snap",
              link: "https://eng.snap.com/build_a_reliable_system_in_a_microservices_world_at_snap/ ",
              newTab: true
            },
            {
              image: "/images/logos/usecases/airbyte.svg",
              alt: 'Airbyte logo',
              headline: "Durable, scalable EL(T) with OSS Airbyte and Temporal",
              link: "https://docs.temporal.io/blog/airbyte-case-study/",
            },
            {
              image: "/images/logos/usecases/descript.svg",
              alt: 'Descript logo',
              headline: "Revolutionizing Audio with Descript and Temporal",
              link: "https://docs.temporal.io/blog/descript-case-study/",
            },
            {
              image: "/images/logos/usecases/checkr.svg",
              alt: 'Checkr logo',
              headline: "How Temporal simplified Checkr workflows",
              link: "https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows/",
            },
            {
              image: "/images/logos/usecases/zebra.svg",
              alt: 'Zebra Medical Vision logo',
              headline: "Medical diagnostics you can count on with Zebra Medical Vision and Temporal",
              link: "https://docs.temporal.io/blog/zebra-medical-case-study/",
            }
          ]}
        />
      </section>
      <section
        id='infrastructure-management'
        className='mt-20 lg:mt-48'>
        <CallOut
          textAlign='center'
          key={uuid()}
          copy={{
            headline: "Infrastructure Management.",
            subhead: "Whether you are implementing CI/CD pipelines or creating managed clouds, write your own control plane in languages you know best."
          }}
        >
          {/* <Expander
            closedCopy={'Show more about Infrastructure Management'}
            expandedCopy={'Show less about Infrastructure Management'}>
            <ProCons
              leftHeading='Motivation'
              left={
                <div className='text-sm sm:text-2xl text-left'>
                  <p>Provisioning resources depends on a series of potentially long-running operations with many possibilities for intermittent failures. While existing deployment tools support simple operations, many scenarios may still require a custom provisioning flow:</p>
                  <ul className='mt-6 list-disc pl-8'>
                    <li className='mt-6'>Automatic infrastructure provisioning for a new customer in multi-tenant environments.</li>
                    <li className='mt-6'>Particularly large deployments when tens or even hundreds of thousands of resources should be configured.</li>
                    <li className='mt-6'>Provisioning of custom resources that are not supported by off-the-shelf tools.</li>
                    <li className='mt-6'>Complex configuration logic that is determined at deployment time.</li>
                  </ul>
                  <p className='mt-6'>It's beneficial to have a single workflow engine to manage all the various tasks: spinning up the cluster, long term monitoring, managing upgrades, database schema migrations, automated staged rollout of new features.</p>
                  <p className='mt-6'>Some provisioning operations may take dozens of minutes or even hours to complete. Ad-hoc solutions may fail in the middle and leave the system in an undefined state.</p>
                </div>
              }
              rightHeading='Benefits'
              right={
                <div className='text-sm sm:text-2xl text-left'>
                  <p>Temporal Workflows can express complex decision trees using a general-purpose programming language. Support for long-running operations, polling, responding to events, automatic retries are excellent building blocks for a robust provisioning flow. If a lengthy provisioning Workflow fails in the middle, Temporal would handle the error and restart the flow at the right spot.</p>
                  <p className='mt-6'>Temporal can route Activity execution to a specific process or host, which is useful for many provisioning scenarios.</p>
                  <p className='mt-6'>Many resource management operations require locking to ensure that only one mutation is executed on any given resource at a time. Temporal provides a strong guarantee of uniqueness via the operation identifier. This primitive enables the implementation of locking behavior in a fault-tolerant and scalable manner.</p>
                </div>
              }
            >
            </ProCons>
          </Expander> */}
        </CallOut>
        <VideoCards
          className={'mt-10 md:mt-14'}
          columns={2}
          cards = {[
            {
              image: '/images/logos/usecases/datadog.svg',
              alt: 'How Datadog uses Temporal',
              // backgroundColor: '#632BA6',
              headline: 'How Datadog uses Temporal',
              link: 'https://www.youtube.com/watch?v=Hz7ZZzafBoE',
              play: 'dark',
              isVideo: true,
              newTab: true,
            },
            {
              image: '/images/logos/usecases/netflix.png',
              alt: 'How Netflix uses Temporal',
              // backgroundColor: '#000000',
              headline: 'How Netflix uses Temporal',
              link: 'https://www.youtube.com/watch?v=LliBP7YMGyA',
              play: 'dark',
              isVideo: true,
              newTab: true,
            },
            {
              image: "/images/logos/logo-Hashicorp.svg",
              alt: 'How Hashicorp uses Temporal video',
              backgroundColor: '#FFFFFF',
              headline: "Using Temporal to orchestrate cluster lifecycle in HashiCorp Consul",
              link: "https://www.youtube.com/watch?v=kDlrM6sgk2k&t=1188s",
              newTab: true
            },
            {
              image: '/images/logos/usecases/stripe.png',
              alt: 'How Stripe uses Temporal',
              // backgroundColor: '#665BFF',
              headline: 'How Stripe uses Temporal',
              link: 'https://www.youtube.com/watch?v=Crkcr1S-NSc',
              play: 'dark',
              isVideo: false,
              newTab: true,
            },
          ]}
        />
      <section className='mb-20 lg:mb-48 xl:mb-56'>
        {/* <Expander
          closedCopy='Show more Success Stories'
          expandedCopy='Show less Success Stories'>
            <div id="story-1">
              <h2 className='mt-14 mb-12 text-4xl sm:text-6xl md:text-8xl text-center font-bold'>Microservices Orchestration</h2>
              <ProCons
                leftHeading='Motivation'
                left={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>It is common to break a large application into microservices structured around the application's distinct business capabilities:</p>
                    <ul className='mt-6 list-disc pl-8'>
                      <li className='mt-6'>Each microservice is owned by separate teams who make their own technology choices and release processes.</li>
                      <li className='mt-6'>Each microservice typically has its own storage and interacts with other services via a well-defined API.</li>
                      <li className='mt-6'>Application/Product developers need to call multiple microservices to achieve the desired outcome.</li>
                      <li className='mt-6'>Every time you cross a system boundary, your chance of failure multiplies.</li>
                      <li className='mt-6'>Product developers spend a lot of effort implementing queues, timeouts and retries to ensure that API calls eventually succeed, preserving business rules across multiple independent sub-domains.</li>
                      <li className='mt-6'>Service interdependencies can be remarkably complicated. Processes can run asynchronously or in parallel, some tasks need information from other systems, and the next steps often depend on the outcome of previous Activities.</li>
                    </ul>
                  </div>
                }
                rightHeading='Benefits'
                right={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>Temporal solves this by providing a central orchestrator providing "reliability on rails" to every team.</p>
                    <ul className='mt-6 list-disc pl-8'>
                      <li className="mt-6">Retries, Timeouts, Sagas: It guarantees that Workflow code eventually completes, has built-in support for exponential Activity retries, and simplifies the coding of the compensation logic with native Saga pattern support. You can define retries, rollbacks, or even a human intervention step in the case of failure.</li>
                      <li className="mt-6">Workflows as Code: Workflows are defined in general-purpose programming languages (Go, Java, PHP, and TypeScript/JavaScript) that bring the ultimate flexibility especially when compared to text-based DSL engines.</li>
                      <li className="mt-6">Observability: Temporal tracks the entire event history of each Workflow's state. Contrast this with ad-hoc orchestration based on queues where getting a current status of each request is virtually impossible.</li>
                      <li className="mt-6">Scale: Temporal seamlessly scales to a large number of Workflows running in parallel.</li>
                    </ul>
                    <h3 className='font-bold text-lg sm:text-3xl md:text-4xl mt-6 sm:mt-mt-14'>
                      Additional resources
                    </h3>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://theburningmonk.com/2020/08/choreography-vs-orchestration-in-the-land-of-serverless/">
                      Orchestration vs Choreography
                    </a>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://banzaicloud.com/blog/introduction-to-cadence/">
                      Using Temporal Workflows to spin up Kubernetes by Banzai Cloud
                    </a>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://eng.uber.com/customer-obsession-ticket-routing-workflow-and-orchestration-engine/">
                      Improving the User Experience with Uber’s Customer Obsession Ticket Routing Workflow and Orchestration Engine
                    </a>
                  </div>
                }>
              </ProCons>
            </div>
            <div id="story-2">
              <h2 className='mt-14 mb-12 text-4xl sm:text-6xl md:text-8xl text-center font-bold'>Monitoring &amp; Polling</h2>
              <ProCons
                leftHeading='Motivation'
                left={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>There is often a need for monitoring and periodic maintenance of IT systems on top of infrastructure provisioning. Polling is executing a regular action to check for a state change, for example:</p>
                    <ul className='mt-6 list-disc pl-8'>
                      <li className='mt-6'>Pinging a host to make sure it's online and responsive.</li>
                      <li className='mt-6'>Once-per-minute health checks of a production deployment.</li>
                      <li className='mt-6'>Polling an API for a specific resource to become available.</li>
                      <li className='mt-6'>Triggering and executing periodic backups.</li>
                      <li className='mt-6'>Pushing configuration updates when they become available.</li>
                      <li className='mt-6'>Failing over in an active-passive setup when the primary instance becomes unhealthy.</li>
                    </ul>
                    <p className='mt-6'>As monitoring is often an example of periodic execution of business logic, it can benefit from Temporal's distributed cron engine.</p>
                  </div>
                }
                rightHeading='Benefits'
                right={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>Temporal provides guaranteed execution with at-least-once semantics with automatic retries.</p>
                    <p className='mt-6'>Polling configuration can be as straightforward or sophisticated as needed:</p>
                    <p className='mt-6'>Workflows can run on a cron schedule with a single configuration setting.Alternatively, you can manually control the delays between intervals with sleep commands. For example, you can switch to more frequent executions in case of detected downtime.</p>
                    <p className='mt-6'>The history service provides visibility into history for periodic Workflow executions.</p>
                    <p className="mt-6">Scalability is another crucial advantage of using Temporal for periodic execution. Many use cases require periodic execution for a large number of entities. At Uber, some applications run recurring Workflows for each customer. Imagine 100s of millions parallel cron jobs that don't require a separate batch processing framework.</p>
                    <p className="mt-6">Temporal support for long-running Activities and unlimited retries also makes it a great fit for monitoring use cases.</p>
                    <h3 className='font-bold text-lg sm:text-3xl md:text-4xl mt-6 sm:mt-mt-14'>
                      Cluster Lifecycle Workflow
                    </h3>
                    <p className="mt-6">Imagine a system that manages a large number of compute clusters. It monitors that a cluster is up and running, its CPU and network utilization, run backups and software upgrades.</p>
                    <h3 className='font-bold text-lg sm:text-3xl md:text-4xl mt-6 sm:mt-mt-14'>
                      Additional resources
                    </h3>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://github.com/temporalio/temporal-go-samples/tree/master/cron">
                      Cron example in Go
                    </a>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://github.com/temporalio/temporal-java-samples/blob/master/src/main/java/io/temporal/samples/hello/HelloCron.java">
                      Cron example in Java
                    </a>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://github.com/temporalio/temporal-java-samples/blob/master/src/main/java/io/temporal/samples/hello/HelloPeriodic.java">
                      Periodic execution example in Java
                    </a>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://docs.temporal.io/docs/go/distributed-cron">
                      Go SDK docs
                    </a>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://docs.temporal.io/docs/java/distributed-cron">
                      Java SDK docs
                    </a>
                  </div>
                }>
              </ProCons>
            </div>
            <div id="story-3">
              <h2 className='mt-14 mb-12 text-4xl sm:text-6xl md:text-8xl text-center font-bold'>Data Pipelines</h2>
              <ProCons
                leftHeading='Motivation'
                left={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>Most business applications rely on data processing pipelines of some sort:</p>
                    <ul className='mt-6 list-disc pl-8'>
                      <li className='mt-6 '>ETL process that moves data between databases.</li>
                      <li className='mt-6 '>Machine learning training solution.</li>
                      <li className='mt-6 '>Data aggregation and analytics.</li>
                      <li className='mt-6 '>Staging data from a transactional database to a warehouse.</li>
                    </ul>
                    <p className="mt-6">Many of these jobs are not pure data manipulation programs. They also need to enrich the data and tie relevant services together. For example, processing a record may require external API calls that can fail and potentially take a long time.</p>
                    <p className="mt-6">It is common to have large data sets partitioned across many hosts or databases or have billions of files in a distributed storage. Running a myriad of data processing jobs in parallel is a hard engineering problem. You have to track to their individual statuses, schedule them on available workers, and ensuring that all the subtasks succeed.</p>
                  </div>
                }
                rightHeading='Benefits'
                right={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>Temporal provides hard guarantees around the durability of data and seamlessly deals with long-running operations, retries, and intermittent failures. Temporal handles the distributed nature of these systems automatically.</p>
                    <p className='mt-6'>Temporal is an ideal solution for implementing a full scan of a dataset in a scalable and resilient way. The standard pattern is to run an Activity (or multiple parallel Activities for partitioned data sets) that performs the scan and heartbeats its progress back to Temporal. In the case of a host failure, the operation is retried on a different host and continues execution from the last reported progress.</p>
                    <p className="mt-6">One crucial feature of Temporal is its ability to route task execution to a specific process or host. It is often useful to control how ML models and other large files are distributed across hosts. For example, if an ML model is partitioned by the city, the requests should be routed to hosts that contain the corresponding city model.</p>
                  </div>
                }>
              </ProCons>
            </div>
            <div id="story-4">
              <h2 className='mt-14 mb-12 text-4xl sm:text-6xl md:text-8xl text-center font-bold'>DSL Workflows</h2>
              <ProCons
                leftHeading='Motivation'
                left={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>With Temporal, you usually implement business logic with programming languages like Java and Go. However, there are cases when using a domain-specific language (DSL) can be more appropriate.</p>
                    <p className="mt-6">Another use case would be a legacy system that uses some form of DSL for process definition but is not operationally stable and scalable. It could be a home-grown solution, or a system like Apache Airflow, various BPMN engines, and even AWS Step Functions.</p>
                  </div>
                }
                rightHeading='Migrated DSLS to Temporal'
                right={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>An application can utilize the Temporal SDK to interpret the DSL definition. This automatically makes the DSL execution highly fault-tolerant, scalable, and durable since it's running on Temporal. This means that users can migrate their existing portfolio of internal DSL-based process definitions and take advantage of Temporal as an execution engine.</p>
                    <p className="mt-6">If your company uses multiple workflow engines internally, it can be very beneficial to unify them with Temporal. For one, it is more efficient to support a single product instead of many. Additionally, it's hard to overestimate the benefit sharing Activities will bring across the company.</p>
                    <p className="mt-6">On top of that, Temporal comes with unmatched scalability and stability characteristics.</p>
                    <h3 className='font-bold text-lg sm:text-3xl md:text-4xl mt-6 sm:mt-mt-14'>Additional resources</h3>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://github.com/checkr/states-language-cadence">
                      An implementation of Amazon States Language from Checkr
                    </a>
                    <a className='mt-6 block underline text-black'
                      target='_blank'
                      href="https://github.com/temporalio/samples-go/blob/master/dsl">
                      Example Go Workflow driven by YAML config file
                    </a>
                  </div>
                }>
              </ProCons>
            </div>
            <div id="story-5">
              <h2 className='mt-14 mb-12 text-4xl sm:text-6xl md:text-8xl text-center font-bold'>Scalable Actors</h2>
              <ProCons
                leftHeading='Motivation'
                left={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>A typical pattern is to have a Workflow instance per business entity:</p>
                    <ul className='mt-6 list-disc pl-8'>
                      <li className='mt-6 '>A Workflow that tracks the status of a single IoT device.</li>
                      <li className='mt-6 '>A loyalty program that accumulates reward points per customer.</li>
                      <li className='mt-6 '>A routine that manages a unique resource in a conflict-free manner.</li>
                    </ul>
                    <p className='mt-6'>Each flow responds to asynchronous events from a target entity, persists some corresponding state, and takes actions according to the defined rules.</p>
                    <p className="mt-6">This programming paradigm is commonly known as the Actor Model.</p>
                  </div>
                }
                rightHeading='Actors in Temporal'
                right={
                  <div className='text-sm sm:text-2xl text-left'>
                    <p>Temporal Workflows are suitable to implement scalable actor systems. A Workflow execution represents a single actor, uses signals for events, and automatically keeps track of the state using the backend service.</p>
                    <p className="mt-6">There can be tens of millions of actors running simultaneously, and each actor will be in charge of processing messages for its corresponding entity.</p>
                  </div>
                }>
              </ProCons>
            </div>
        </Expander> */}
      </section>
      </section>
      <section className='bg-gray-900 text-white'>
          <CallOut
            textAlign='center'
            key={uuid()}
            copy={{
              headline: "Our users trust us.",
              subhead: "Not only do our customers love us, but they also join us for our community events and share how they’re using us to grow their businesses."
            }}
            className="text-center pt-32 pb-10"
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
              name: "Anthony Dmitriyev",
              title: 'Software Engineer, Coinbase'
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

        {/* Call Out */}
       <CalloutFooter />
      </section>
    </div>
  )
}
