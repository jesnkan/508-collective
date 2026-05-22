import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import BusinessPortfolio from '@/components/home/BusinessPortfolio';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BusinessPortfolio />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
