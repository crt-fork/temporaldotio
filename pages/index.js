import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import JoinUs from '../components/JoinUs';
import LargeQuote from '../components/LargeQuote';
import Footer from '../components/Footer';
import Head from 'next/head';
import StackedUseCases from '../components/StackedUseCases';

import FAQ from '../components/FAQ';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Temporal.io | Home</title>
      </Head>
      <Hero />
      <div className="bg-spaceblack">
        <StackedUseCases />
        <LargeQuote />
        <Testimonials />
        <FAQ />
        <JoinUs />
      </div>
      <Footer />
    </div>
  );
}
