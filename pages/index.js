import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import JoinUs from '../components/JoinUs';
import LargeQuote from '../components/LargeQuote';
import Head from 'next/head';
import StackedUseCases from '../components/StackedUseCases';
import { TemporalCluster } from '../components/TemporalCluster';
import FAQ from '../components/FAQ';
import { TemporalSystemTools } from '../components/TemporalSystemTools';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Temporal.io | Home</title>
      </Head>
      <Hero />
      <TemporalCluster />
      <TemporalSystemTools />
      <StackedUseCases />
      <LargeQuote />
      <Testimonials />
      <JoinUs />
      <FAQ />
    </div>
  );
}
