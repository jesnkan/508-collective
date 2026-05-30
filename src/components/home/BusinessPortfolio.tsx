'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

  // Very slight parallax translation to avoid heavy GPU load
  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-full min-h-[50vh] md:min-h-[80vh] rounded-[24px] md:rounded-[40px] overflow-hidden group mb-8 md:mb-24 md:sticky md:top-24 border border-foreground/10 ${index % 2 === 0 ? 'lg:w-[85%]' : 'lg:w-[85%] lg:ml-auto'} will-change-transform`}
    >
      <Link href={business.path} className="absolute inset-0 block z-0">
        {/* Background Image with slight Parallax */}
        <motion.div style={{ y }} className="absolute inset-[-10%] w-[120%] h-[120%] bg-black">
          <div className="absolute inset-0 bg-black/50 md:bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10"></div>
          <Image 
            src={business.image} 
            alt={business.name} 
            fill
            className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000"
            sizes="(max-width: 768px) 100vw, 85vw"
            priority={index < 2}
          />
        </motion.div>

        {/* Flat Color Overlay (Replaces expensive mix-blend-mode) */}
        <div
          className="absolute inset-0 z-20 opacity-30 group-hover:opacity-60 transition-opacity duration-700"
          style={{ background: `linear-gradient(to bottom right, ${business.color}, transparent)` }}
        ></div>

        <div className="absolute inset-0 z-30 p-8 md:p-24 flex flex-col justify-between">

          <div className="flex justify-between items-start">
            <span className="text-white font-mono text-[10px] md:text-sm tracking-widest border border-white/20 rounded-full px-3 py-1 bg-black/40 backdrop-blur-md">
              0{index + 1}
            </span>
            <div
              className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md -rotate-45 group-hover:rotate-0 transition-transform duration-500 overflow-hidden"
              style={{ backgroundColor: `${business.color}20` }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white md:w-6 md:h-6">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-7xl font-heading font-medium tracking-tighter text-white mb-2 md:mb-4 translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500 hover:text-white">
              {business.name}
            </h3>
            <p className="text-lg md:text-3xl font-sans text-white/90 font-light opacity-100 md:opacity-0 group-hover:opacity-100 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
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
    <section id="portfolio" className="py-20 md:py-32 bg-background relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.3em] text-foreground/50 mb-4">Our Ecosystem</h2>
          <p className="font-heading text-4xl md:text-7xl text-foreground font-medium tracking-tighter leading-tight">
            Five Pillars. <br className="md:hidden" /> <span className="text-foreground/30">Infinite Growth.</span>
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