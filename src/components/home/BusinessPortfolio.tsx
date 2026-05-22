import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const BUSINESSES = [
  {
    id: 'print-media',
    name: '508 Print Media',
    tagline: 'Print beyond expectations.',
    color: '#0096FF', // Azure
    path: '/print-media',
    visual: 'printing textures, paper movement, animated ink effects',
    image: '/print picture.jpg'
  },
  {
    id: 'dstv-retail',
    name: 'DSTV Retail',
    tagline: 'Entertainment delivered.',
    color: '#FFD60A', // Yellow (resembling MultiChoice/DSTV)
    path: '/dstv-retail',
    visual: 'glowing screens, device mockups, digital signals',
    image: '/dstv picture.jpg'
  },
  {
    id: 'city-sips',
    name: 'City Sips',
    tagline: 'Curated taste. Refined living.',
    color: '#FF1A1A', // Red
    path: '/city-sips',
    visual: 'luxury wine aesthetics, deep glass reflections',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'depot',
    name: '508 Depot',
    tagline: 'Your trusted supply hub.',
    color: '#0096FF', // Azure
    path: '/depot',
    visual: 'warehouse motion, logistics lines',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'success-farmhouse',
    name: 'Success Farmhouse',
    tagline: 'Growing sustainable futures.',
    color: '#10B981', // Emerald
    path: '/success-farmhouse',
    visual: 'lush greens, aerial farm transitions',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop'
  }
];

function Card({ business, index }: { business: typeof BUSINESSES[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ scale }}
      className={`relative w-full min-h-[80vh] rounded-[40px] overflow-hidden group mb-12 lg:mb-24 sticky top-12 shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-foreground/10 ${index % 2 === 0 ? 'lg:w-[80%]' : 'lg:w-[80%] lg:ml-auto'}`}
    >
      <Link to={business.path} className="absolute inset-0 block z-0">
        {/* Background Image with Parallax */}
        <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%] bg-black">
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-700 z-10"></div>
          <img src={business.image} alt={business.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000" />
        </motion.div>

        {/* Glow/Gradient overlay based on brand color */}
        <div 
          className="absolute inset-0 z-20 opacity-40 group-hover:opacity-80 transition-opacity duration-700 mix-blend-overlay"
          style={{ background: `linear-gradient(to bottom right, ${business.color}, transparent)` }}
        ></div>

        <div className="absolute inset-0 z-30 p-12 lg:p-24 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-white font-mono text-sm tracking-widest border border-white/20 rounded-full px-4 py-1 bg-black/40 backdrop-blur-md">
              0{index + 1}
            </span>
            <div 
              className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md -rotate-45 group-hover:rotate-0 transition-transform duration-500 overflow-hidden"
              style={{ backgroundColor: `${business.color}20` }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-5xl lg:text-7xl font-heading font-medium tracking-tighter text-white mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 hover:text-white">
              {business.name}
            </h3>
            <p className="text-xl lg:text-3xl font-sans text-white/90 font-light opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
              {business.tagline}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BusinessPortfolio() {
  return (
    <section id="portfolio" className="py-32 bg-background relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/50 mb-4">Our Ecosystem</h2>
          <p className="font-heading text-5xl md:text-7xl text-foreground font-medium tracking-tighter">
            Five Pillars. <span className="text-foreground/30">Infinite Growth.</span>
          </p>
        </div>

        <div className="relative">
          {BUSINESSES.map((business, index) => (
            <Card key={business.id} business={business} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
