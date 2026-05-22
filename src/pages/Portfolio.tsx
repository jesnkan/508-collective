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

export default function Portfolio() {
  return (
    <div className="bg-background min-h-screen text-foreground pt-32 pb-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <header className="mb-24 text-center md:text-left">
          <p className="uppercase tracking-[0.3em] font-mono text-xs font-semibold mb-4 text-[#0096FF]">508 Ecosystem</p>
          <h1 className="text-5xl md:text-8xl font-heading font-black tracking-tighter uppercase mb-6 drop-shadow-lg">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0096FF] via-[#FF1A1A] to-[#FFD60A]">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-foreground/70 max-w-3xl">
            Explore the diverse businesses that make up the 508 vision. From printing and logistics to agriculture and premium retail.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {BUSINESSES.map((business, i) => (
             <Link 
               to={business.path} 
               key={business.id} 
               className={`group block overflow-hidden rounded-3xl relative border border-foreground/10 bg-foreground/[0.02] ${i === 0 ? 'lg:col-span-2 aspect-[21/9]' : 'aspect-square lg:aspect-[4/5]'}`}
             >
                <div className="absolute inset-0">
                  <img src={business.image} alt={business.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                </div>
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10 pointer-events-none">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs px-4 py-2 border border-foreground/20 rounded-full tracking-widest backdrop-blur-md bg-background/50 uppercase">
                      0{i + 1} / {business.name.split(' ')[1] || 'Venture'}
                    </span>
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center border border-foreground/20 backdrop-blur-md transition-transform duration-500 group-hover:bg-foreground group-hover:text-background"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter mb-4" style={{ color: business.color, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                      {business.name}
                    </h2>
                    <p className="text-xl font-light text-white/90 drop-shadow-md pb-2">
                       {business.tagline}
                    </p>
                  </div>
                </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
