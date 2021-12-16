import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import LargeQuote from '../components/LargeQuote';
import Head from 'next/head';
import StackedUseCases from '../components/StackedUseCases';
import { TemporalServer } from '../components/TemporalServer';
import FAQ from '../components/FAQ';
import { TemporalDevTools } from '../components/TemporalDevTools';
import { Community } from '../components/Community';
import { Cloud } from '../components/Cloud';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Temporal.io | Home</title>
      </Head>
      <Hero />
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-28 gap-10 grid grid-cols-1 md:grid-cols-2 items-start justify-center">
        <TemporalServer />
        <TemporalDevTools />
      </div>
      <Cloud />
      <StackedUseCases />
      <LargeQuote />
      <Testimonials />
      <Community />
      <FAQ />
    </div>
  );
}
