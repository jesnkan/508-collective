import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import BusinessPortfolio from '@/components/home/BusinessPortfolio';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import Contact from '@/components/home/Contact';
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Five Zero Eight | Multiple Businesses. One Bold Vision."
        description="508 (Five Zero Eight) is a multi-industry company building impactful businesses across retail, media, agriculture, lifestyle, and commerce. Innovation and growth in Ghana."
        keywords="508, Five Zero Eight, 508 Vision, multi-industry business, retail innovation, media services, sustainable agriculture"
      />
      <Hero />
      <About />
      <BusinessPortfolio />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
