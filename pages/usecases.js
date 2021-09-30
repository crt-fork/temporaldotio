import Layout from '../usecases/_mdxprovider';
import { Nav } from '../components/Nav';
import { Banner } from '../components/Banner';
import Orchestration from '../usecases/orchestration.mdx';
import Transactions from '../usecases/transactions.mdx';
import Provisioning from '../usecases/provisioning.mdx';
import Monitoring from '../usecases/monitoring.mdx';
import Pipelines from '../usecases/pipelines.mdx';
import Processes from '../usecases/long-running-processes.mdx';
import DSL from '../usecases/dsl.mdx';
import Actors from '../usecases/actors.mdx';
import Footer from '../components/Footer';
export default function Page() {
  return (
    <Layout>
      {/* <Banner /> */}
      <section id="usecases-group" className={`container mx-auto justify-evenly px-8 py-16`}>
        <Nav />
      </section>
      <section
        id="usecases-group"
        className={`container mx-auto justify-evenly px-8 py-16 max-w-[75ch]`}>
        <h1 className="sm:mb-4 text-4xl sm:text-60 leading-48 sm:leading-72 font-bold">
          Use Cases
        </h1>
        <h2 className="text-xl sm:w-800 leading-lg sm:text-2xl sm:leading-2xl mb-8">
          There are many applications for a highly scalable, fault-oblivious system like Temporal.
          Here are just some of the most popular, to jog your imagination.
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left mb-12">
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#orchestration">
              Microservices Orchestration
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#transactions">
              Distributed Transactions
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#provisioning">
              Infrastructure Provisioning
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#Monitoring">
              Monitoring and Polling
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#Pipelines">
              Data Pipelines
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#Processes">
              Long Running Processes
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#DSL">
              DSL Workflows
            </a>
          </li>
          <li>
            <a className="hover:underline text-blue-300 hover:text-blue-200" href="#Actors">
              Scalable Actors
            </a>
          </li>
        </ul>
        <section className="grid grid-cols-1 md:grid-cols-usecases gap-4 auto-cols-min">
          <Header
            id="orchestration"
            extra={
              <ul className="list-disc pl-4 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://eng.snap.com/build_a_reliable_system_in_a_microservices_world_at_snap/">
                    Snapchat
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://doordash.engineering/2020/08/14/workflows-cadence-event-driven-processing/">
                    Doordash
                  </a>
                </li>
              </ul>
            }>
            Microservices Orchestration
          </Header>
          <div className="bg-black text-gray-200 md:px-8 max-w-[65ch]">
            <Orchestration slugPrefix="orchestration" />
          </div>
          <Header
            id="provisioning"
            extra={
              <ul className="list-disc pl-4 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://www.youtube.com/watch?v=eWFpl-nzGsY&feature=youtu.be">
                    Datadog
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://www.youtube.com/watch?v=kDlrM6sgk2k&t=1188s&ab_channel=HashiCorp">
                    Hashicorp
                  </a>
                </li>
              </ul>
            }>
            Infrastructure Provisioning
          </Header>
          <div className="bg-black text-gray-200 md:px-8 max-w-[65ch]">
            <Provisioning slugPrefix="provisioning" />
          </div>
          <Header
            id="transactions"
            extra={
              <ul className="list-disc pl-4 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase/">
                    Coinbase
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://docs.temporal.io/blog/temporal-a-central-brain-for-box/">
                    Box
                  </a>
                </li>
              </ul>
            }>
            Distributed Transactions
          </Header>
          <div className="bg-black text-gray-200 md:px-8 max-w-[65ch]">
            <Transactions slugPrefix="transactions" />
          </div>
          <Header
            id="Pipelines"
            extra={
              <ul className="list-disc pl-4 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://docs.temporal.io/blog/descript-case-study/">
                    Descript
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://docs.temporal.io/blog/zebra-medical-case-study/">
                    Zebra Medical Vision
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://docs.temporal.io/blog/airbyte-case-study/">
                    Airbyte
                  </a>
                </li>
              </ul>
            }>
            Data <br />
            Pipelines
          </Header>
          <div className="bg-black text-gray-200 md:px-8 max-w-[65ch]">
            <Pipelines slugPrefix="Pipelines" />
          </div>
          <Header
            id="Processes"
            extra={
              <ul className="list-disc pl-4 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="text-blue-300 hover:text-blue-200"
                    href="https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows/">
                    Checkr
                  </a>
                </li>
              </ul>
            }>
            Long Running Processes
          </Header>
          <div className="bg-black text-gray-200 md:px-8 max-w-[65ch]">
            <Processes slugPrefix="Processes" />
          </div>
          <Header id="Monitoring">
            Monitoring <br /> and Polling
          </Header>
          <div className="bg-black text-gray-200 md:px-8 max-w-[65ch]">
            <Monitoring slugPrefix="Monitoring" />
          </div>
          <Header id="DSL">
            DSL <br /> Workflows
          </Header>
          <div className="bg-black text-gray-200 md:px-8 max-w-[65ch]">
            <DSL slugPrefix="DSL" />
          </div>
          <Header id="Actors">
            Scalable <br /> Actors
          </Header>
          <div className="bg-black text-gray-200 md:px-8 max-w-[65ch]">
            <Actors slugPrefix="Actors" />
          </div>
        </section>
      </section>
      <Footer />
    </Layout>
  );
}

function Header({ id, children, extra }) {
  return (
    <div
      className="self-start sticky top-0
    bg-spaceblack w-full mb-4 py-4 pt-10
 border-t-2 border-temporalblue md:min-h-[300px]
    ">
      <div>
        <h2
          className="text-4xl font-bold
        leading-lg sm:text-3xl sm:leading-2xl ">
          <a className="hover:underline text-blue-300 hover:text-blue-200" href={`#${id}`}>
            {children}
          </a>
        </h2>
        {extra}
      </div>
      <a
        className="font-italic hover:underline text-blue-600 hover:text-blue-500"
        href="#usecases-group">
        back to top
      </a>
    </div>
  );
}
