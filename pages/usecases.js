import Head from 'next/head';
import Layout from '../usecases/_mdxprovider';
import Orchestration from '../usecases/orchestration.mdx';
import Transactions from '../usecases/transactions.mdx';
import Provisioning from '../usecases/provisioning.mdx';
import Monitoring from '../usecases/monitoring.mdx';
import Pipelines from '../usecases/pipelines.mdx';
import Processes from '../usecases/long-running-processes.mdx';
import DSL from '../usecases/dsl.mdx';
import Actors from '../usecases/actors.mdx';

export default function Page() {
  return (
    <Layout>
      <section
        id="usecases-group"
        className={`container mx-auto justify-evenly px-6 py-16 max-w-screen-lg`}>
        <h1 className="sm:mb-4 text-4xl sm:text-60 leading-48 sm:leading-72 font-bold">
          Use Cases
        </h1>
        <h2 className="text-lg md:text-xl sm:w-800 leading-lg sm:text-2xl sm:leading-2xl mb-10">
          There are many applications for a highly scalable, fault-oblivious system like Temporal.
          Here are just some of the most popular, to jog your imagination.
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2  gap-10 text-center md:text-left mb-12">
          <li>
            <a className=" hover:text-blue-200 bg-gray-600 p-4 rounded-lg" href="#orchestration">
              Microservices Orchestration
            </a>
          </li>
          <li>
            <a className=" hover:text-blue-200 bg-gray-600 p-4 rounded-lg" href="#transactions">
              Distributed Transactions
            </a>
          </li>
          <li>
            <a className=" hover:text-blue-200 bg-gray-600 p-4 rounded-lg" href="#provisioning">
              Infrastructure Provisioning
            </a>
          </li>
          <li>
            <a className=" hover:text-blue-200 bg-gray-600 p-4 rounded-lg" href="#Monitoring">
              Monitoring and Polling
            </a>
          </li>
          <li>
            <a className=" hover:text-blue-200 bg-gray-600 p-4 rounded-lg" href="#Pipelines">
              Data Pipelines
            </a>
          </li>
          <li>
            <a className=" hover:text-blue-200 bg-gray-600 p-4 rounded-lg" href="#Processes">
              Long Running Processes
            </a>
          </li>
          <li>
            <a className=" hover:text-blue-200 bg-gray-600 p-4 rounded-lg" href="#DSL">
              DSL Workflows
            </a>
          </li>
          <li>
            <a className=" hover:text-blue-200 bg-gray-600 p-4 rounded-lg" href="#Actors">
              Scalable Actors
            </a>
          </li>
        </ul>
        <section className="grid grid-cols-1 md:grid-cols-usecases gap-4 auto-cols-min">
          <Header
            id="orchestration"
            extra={
              <ul className="list-disc pl-8 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://eng.snap.com/build_a_reliable_system_in_a_microservices_world_at_snap/">
                    Snapchat
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://doordash.engineering/2020/08/14/workflows-cadence-event-driven-processing/">
                    Doordash
                  </a>
                </li>
              </ul>
            }>
            Microservices Orchestration
          </Header>
          <div className="md:px-8 max-w-[65ch]">
            <Orchestration slugPrefix="orchestration" />
          </div>
          <Header
            id="provisioning"
            extra={
              <ul className="list-disc pl-8 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://www.youtube.com/watch?v=eWFpl-nzGsY&feature=youtu.be">
                    Datadog
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://www.youtube.com/watch?v=kDlrM6sgk2k&t=1188s&ab_channel=HashiCorp">
                    Hashicorp
                  </a>
                </li>
              </ul>
            }>
            Infrastructure Provisioning
          </Header>
          <div className="md:px-8 max-w-[65ch]">
            <Provisioning slugPrefix="provisioning" />
          </div>
          <Header
            id="transactions"
            extra={
              <ul className="list-disc pl-8 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://docs.temporal.io/blog/reliable-crypto-transactions-at-coinbase/">
                    Coinbase
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://docs.temporal.io/blog/temporal-a-central-brain-for-box/">
                    Box
                  </a>
                </li>
              </ul>
            }>
            Distributed Transactions
          </Header>
          <div className="md:px-8 max-w-[65ch]">
            <Transactions slugPrefix="transactions" />
          </div>
          <Header
            id="Pipelines"
            extra={
              <ul className="list-disc pl-8 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://docs.temporal.io/blog/descript-case-study/">
                    Descript
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://docs.temporal.io/blog/zebra-medical-case-study/">
                    Zebra Medical Vision
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://docs.temporal.io/blog/airbyte-case-study/">
                    Airbyte
                  </a>
                </li>
              </ul>
            }>
            Data <br />
            Pipelines
          </Header>
          <div className="md:px-8 max-w-[65ch]">
            <Pipelines slugPrefix="Pipelines" />
          </div>
          <Header
            id="Processes"
            extra={
              <ul className="list-disc pl-8 my-4 text-md hidden md:block">
                <li>
                  <a
                    className="hover:text-blue-200"
                    href="https://docs.temporal.io/blog/how-temporal-simplified-checkr-workflows/">
                    Checkr
                  </a>
                </li>
              </ul>
            }>
            Long Running Processes
          </Header>
          <div className="md:px-8 max-w-[65ch]">
            <Processes slugPrefix="Processes" />
          </div>
          <Header id="Monitoring">
            Monitoring <br /> and Polling
          </Header>
          <div className="md:px-8 max-w-[65ch]">
            <Monitoring slugPrefix="Monitoring" />
          </div>
          <Header id="DSL">
            DSL <br /> Workflows
          </Header>
          <div className="md:px-8 max-w-[65ch]">
            <DSL slugPrefix="DSL" />
          </div>
          <Header id="Actors">
            Scalable <br /> Actors
          </Header>
          <div className="md:px-8 max-w-[65ch]">
            <Actors slugPrefix="Actors" />
          </div>
        </section>
      </section>
    </Layout>
  );
}

function Header({ id, children, extra }) {
  return (
    <div
      className="self-start sticky top-0
    w-full mb-4 py-4 pt-10
 border-t-2 border-temporalblue md:min-h-[300px] bg-gray-900
    ">
      <div>
        <h2
          className="text-4xl font-bold
        leading-lg sm:text-3xl sm:leading-2xl mb-8">
          <a className="hover:underline hover:text-blue-200" href={`#${id}`}>
            {children}
          </a>
        </h2>
        {extra}
      </div>
      <a className="font-italic underline hover:text-blue-200" href="#usecases-group">
        back to top
      </a>
    </div>
  );
}
