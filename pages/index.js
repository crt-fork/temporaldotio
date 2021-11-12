import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import LargeQuote from '../components/LargeQuote';
import Head from 'next/head';
import StackedUseCases from '../components/StackedUseCases';
import { TemporalCluster } from '../components/TemporalCluster';
import FAQ from '../components/FAQ';
import { TemporalDevTools } from '../components/TemporalDevTools';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Temporal.io | Home</title>
      </Head>
      <Hero />
      <TemporalCluster />
      <TemporalDevTools />
      <StackedUseCases />
      <LargeQuote />
      <Testimonials />
      <FAQ />
    </div>
  );
}
