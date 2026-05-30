'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Caveat } from 'next/font/google';

const caveat = Caveat({ subsets: ['latin'], weight: '400' });

const BUSINESSES = [
  {
    id: 'success-farmhouse',
    name: 'Success Farmhouse',
    label: 'AGRICULTURAL EXCELLENCE',
    tagline: 'Growing sustainable futures.',
    description: 'At Success Farmhouse, we merge advanced agricultural technologies with sustainable practices to yield the highest quality organic produce. From massive rubber plantations to daily fresh vegetables and ethical poultry farming, we are rooting innovation in the soil of our communities.',
    color: '#10B981', // Emerald
    path: '/success-farmhouse',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop',
    // Morphing border radius values for a liquid look
    morph: ["40% 60% 70% 30% / 40% 50% 60% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 70%"],
    badge: 'EST. 2024'
  },
  {
    id: 'print-media',
    name: '508 Print Media',
    label: 'BRANDING & SCALE',
    tagline: 'Print beyond expectations.',
    description: 'Precision, scale, and uncompromising quality define 508 Print Media. We transform bold ideas into physical realities through commercial offset printing, large-format outdoor visuals, and monumental branding solutions that capture global attention.',
    color: '#0096FF', // Azure
    path: '/print-media',
    image: '/print picture.jpg',
    morph: ["0% 100% 100% 100% / 0% 100% 100% 100%", "20% 80% 100% 80% / 20% 100% 80% 100%", "0% 100% 100% 100% / 0% 100% 100% 100%"],
    badge: 'PREMIUM'
  },
  {
    id: 'city-sips',
    name: 'City Sips',
    label: 'LUXURY LIFESTYLE',
    tagline: 'Curated taste. Refined living.',
    description: 'City Sips is the ultimate destination for curated tastes and refined living. We offer a premium collection of wines and spirits, creating an atmosphere of sophistication where every sip tells a story of craftsmanship and luxury.',
    color: '#FF1A1A', // Red
    path: '/city-sips',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop',
    morph: ["100% 100% 0% 100% / 100% 100% 0% 100%", "80% 100% 20% 80% / 100% 80% 20% 100%", "100% 100% 0% 100% / 100% 100% 0% 100%"],
    badge: 'CURATED'
  },
  {
    id: 'dstv-retail',
    name: 'DSTV Retail',
    label: 'DIGITAL ENTERTAINMENT',
    tagline: 'Entertainment delivered.',
    description: 'Bridging the gap between world-class content and the devices that bring it to life. We provide end-to-end retail solutions for digital entertainment, hardware, and premium subscription services through a nationwide network of service hubs.',
    color: '#FFD60A', // Yellow
    path: '/dstv-retail',
    image: '/dstv picture.jpg',
    morph: ["100% 100% 100% 0% / 100% 100% 100% 0%", "100% 80% 100% 20% / 80% 100% 100% 20%", "100% 100% 100% 0% / 100% 100% 100% 0%"],
    badge: 'SERVICE'
  },
  {
    id: 'depot',
    name: '508 Depot',
    label: 'COMMERCE & LOGISTICS',
    tagline: 'Your trusted supply hub.',
    description: 'Our diverse commerce wing, bridging traditional markets with modern supply chain efficiency. Depot is the home of premium Ghanaian staples like 508 Roasted Corn, Organic Gari, and Shito Dedeede, delivered with consistency and trust.',
    color: '#0096FF', // Azure
    path: '/depot',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2070&auto=format&fit=crop',
    morph: ["100% 0% 100% 100% / 100% 0% 100% 100%", "80% 20% 100% 80% / 100% 20% 100% 80%", "100% 0% 100% 100% / 100% 0% 100% 100%"],
    badge: 'STAPLE'
  }
];

function BusinessSection({ business, index }: { business: typeof BUSINESSES[0], index: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const xBg = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? '20%' : '-20%', index % 2 === 0 ? '-20%' : '20%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.05, 0.05, 0]);

  return (
    <section ref={sectionRef} className={`mb-32 md:mb-64 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center relative ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
      
      {/* Scroll-Driven Background Text Parallax */}
      <motion.div 
        style={{ x: xBg, opacity: opacityBg }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[20vw] md:text-[300px] font-heading font-black uppercase tracking-tighter text-foreground whitespace-nowrap">
          {business.id.replace('-', ' ')}
        </span>
      </motion.div>

      {/* Text Side */}
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`lg:col-span-6 flex flex-col justify-center order-2 relative z-10 ${index % 2 !== 0 ? 'lg:order-2 lg:pl-12' : 'lg:order-1'}`}
      >
        <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-6" style={{ color: business.color }}>
          {business.label}
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter leading-[0.95] mb-10 text-foreground">
          {business.name}.
        </h2>
        <div className="space-y-6 text-lg md:text-xl font-light text-foreground/60 leading-relaxed mb-12 max-w-xl">
          <p>{business.description}</p>
        </div>
        
        <Link 
          href={business.path} 
          className="group inline-flex items-center gap-6 text-sm font-bold uppercase tracking-[0.2em] hover:translate-x-4 transition-transform duration-500"
          style={{ color: business.color }}
        >
          Discover Venture
          <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-current group-hover:text-background transition-all duration-500 shadow-xl">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </Link>
      </motion.div>

      {/* Image Side with Morphing Shapes & Liquid Accents */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`lg:col-span-6 relative order-1 z-10 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
      >
        {/* Floating Shape Badge from Inspo - With Drift Animation */}
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-8 -right-8 md:-top-14 md:-right-14 w-24 h-24 md:w-32 md:h-32 z-20 flex items-center justify-center"
          style={{ color: business.color }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
             {index % 2 === 0 ? (
               <path d="M50 0C65 0 100 35 100 50C100 65 65 100 50 100C35 100 0 65 0 50C0 35 35 0 50 0Z" opacity="0.95" />
             ) : (
               <path d="M50 0L65 35L100 50L65 65L50 100L35 65L0 50L35 35Z" opacity="0.95" />
             )}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-background font-heading font-black text-[10px] md:text-[12px] tracking-widest uppercase">
            508
          </div>
        </motion.div>

        {/* Liquid Badge - With Pulse/Float */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute ${index % 2 === 0 ? '-bottom-10 -left-10' : '-bottom-10 -right-10'} w-28 h-28 md:w-36 md:h-32 rounded-full z-20 flex items-center justify-center text-background font-heading font-black tracking-tighter text-xs md:text-base shadow-2xl shadow-black/50`}
          style={{ backgroundColor: business.color }}
        >
          {business.badge}
        </motion.div>

        {/* STUNNING MORPHING IMAGE CONTAINER */}
        <motion.div 
          animate={{ 
            borderRadius: business.morph
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`relative aspect-[4/3] overflow-hidden z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-foreground/5 will-change-[border-radius] group`}
        >
          <Image 
            src={business.image} 
            alt={business.name} 
            fill
            className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority={index < 1}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </motion.div>

        {/* Decorative Concentric Circles - With Slow Spin */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className={`absolute ${index % 2 === 0 ? '-bottom-20 -right-20' : '-bottom-20 -left-20'} w-80 h-80 border border-foreground/10 rounded-full z-0 pointer-events-none opacity-30`}
        ></motion.div>
        
        {/* Glow background element */}
        <div 
          className="absolute inset-0 blur-[150px] opacity-20 z-0 rounded-full scale-150"
          style={{ backgroundColor: business.color }}
        ></div>
      </motion.div>

    </section>
  );
}

export default function PortfolioClient() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-background min-h-screen text-foreground pt-32 pb-40 overflow-hidden font-sans selection:bg-primary/30 relative">
      
      {/* Custom Vertical Progress Indicator */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center">
        <div className="h-32 w-[1px] bg-foreground/10 relative overflow-hidden">
          <motion.div 
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 left-0 w-full h-full bg-primary origin-top"
          />
        </div>
        <span className="font-mono text-[10px] rotate-90 translate-y-8 tracking-widest text-foreground/30 uppercase">Scroll</span>
      </div>

      {/* Dynamic Header exactly like inspo */}
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-20 md:mb-32">
        <div className="flex items-center gap-4 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-2xl md:text-3xl text-primary ${caveat.className}`}
          >
            Our Ecosystem
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent origin-left"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-mono text-xs text-foreground/40 tracking-widest"
          >
            02
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {BUSINESSES.map((business, i) => (
          <BusinessSection key={business.id} business={business} index={i} />
        ))}
      </div>

      {/* Footer CTA */}
      <section className="mt-20 py-20 md:py-40 px-6 text-center relative overflow-hidden bg-foreground/5 mx-6 md:mx-12 rounded-[40px] md:rounded-[60px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
          <p className={`text-3xl md:text-5xl text-foreground/80 leading-tight mb-12 ${caveat.className}`}>
            "One Vision. Multiple Industries. Boundless Excellence."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link href="/connect" className="px-10 py-5 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all shadow-xl">Get In Touch</Link>
             <Link href="/about" className="px-10 py-5 border border-foreground/20 rounded-full font-bold uppercase tracking-widest text-xs hover:border-primary transition-colors bg-background/50 backdrop-blur-sm">Our Philosophy</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
