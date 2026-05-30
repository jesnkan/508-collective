'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FarmhouseClient() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  const brandColor = "#10B981"; // Emerald green

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <section ref={ref} className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[60px] shadow-sm">
        <motion.div style={{ y }} className="absolute inset-0 z-0 will-change-transform">
          <Image 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop" 
            alt="Success Farmhouse" 
            fill
            className="object-cover opacity-90"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30 mix-blend-multiply dark:mix-blend-multiply"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-foreground mt-12 md:mt-24">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: 'easeOut' }}
             className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 rounded-full border border-foreground/40 flex items-center justify-center backdrop-blur-md"
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-8 md:h-8"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-8xl font-heading font-medium tracking-tight leading-none mb-6 text-foreground drop-shadow-lg"
          >
            Success <br/><span className="dark:text-foreground text-foreground/90 md:text-background/90">Farmhouse</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl font-light text-foreground/90 max-w-2xl mx-auto drop-shadow-md"
          >
            Growing sustainable futures. Innovation rooted in nature.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
         <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] font-semibold text-[10px] md:text-xs tracking-widest uppercase mb-6">
              Agricultural Excellence
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6 md:mb-8 leading-tight">
              A modern approach to agribusiness and sustainable farming.
            </h2>
            <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed mb-8">
              At Success Farmhouse, we merge advanced agricultural technologies with sustainable practices to yield the highest quality organic produce and foster community growth.
            </p>
         </div>
         <div className="relative h-[350px] md:h-[500px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1592982537447-66a90802c673?auto=format&fit=crop&q=80&w=1000" 
              fill
              className="object-cover" 
              alt="Farming technology"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border-[4px] md:border-[8px] border-foreground/20 mix-blend-multiply dark:mix-blend-overlay rounded-[30px] md:rounded-[40px] pointer-events-none"></div>
         </div>
      </section>

      {/* NEW SECTION: Our Produce & Yields */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-foreground/10">
        <div className="text-center mb-16 md:mb-24">
           <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">Our Harvest & <span className="text-[#10B981] italic">Yields</span></h2>
           <p className="text-foreground/60 max-w-2xl mx-auto text-lg md:text-xl font-light">From daily fresh consumption to industrial commodities, discover what grows at Success Farmhouse.</p>
        </div>

        {/* Bento Grid Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Vegetables */}
          <div className="group relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden bg-foreground/5 p-8 flex flex-col justify-end">
            <Image 
              src="/farmproduce/harvested-peppers.jpeg" 
              fill 
              alt="Organic Vegetables" 
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 z-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
            <div className="relative z-20 text-white">
              <span className="px-3 py-1 bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/50 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Organic</span>
              <h3 className="text-3xl font-heading font-bold mb-2">Assorted Vegetables</h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">Pesticide-free, nutrient-dense greens harvested daily at peak freshness.</p>
              <Link href="/depot" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-[#10B981] transition-colors">
                Buy at Depot Store →
              </Link>
            </div>
          </div>

          {/* Card 2: Poultry & Eggs */}
          <div className="group relative h-[400px] md:h-[500px] rounded-[32px] overflow-hidden bg-foreground/5 p-8 flex flex-col justify-end">
            <Image 
              src="/farmproduce/live-birds.jpeg" 
              fill 
              alt="Farm Eggs & Poultry" 
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 z-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
            <div className="relative z-20 text-white">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Free Range</span>
              <h3 className="text-3xl font-heading font-bold mb-2">Poultry & Eggs</h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">Healthy live birds and daily gathered eggs raised with ethical standards.</p>
              <Link href="/depot" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-yellow-400 transition-colors">
                Buy at Depot Store →
              </Link>
            </div>
          </div>

          {/* Card 3: Rubber Plantation (Spans larger on desktop) */}
          <div className="group relative h-[400px] md:h-[500px] lg:col-span-3 rounded-[32px] overflow-hidden bg-foreground/5 p-8 md:p-12 flex flex-col justify-end md:justify-center border border-foreground/10">
            <Image 
              src="/farmproduce/rubber-production.jpeg" 
              fill 
              alt="Rubber Plantation" 
              className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 z-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 md:hidden"></div>
            
            <div className="relative z-20 text-white max-w-2xl">
              <span className="px-3 py-1 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Industrial Commodity</span>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">Rubber Plantations</h3>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">Beyond daily consumption, Success Farmhouse cultivates massive rubber plantations. We supply sustainably tapped, high-grade natural rubber sheets for industrial applications worldwide.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/depot" className="px-8 py-4 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                  View Specs in Depot
                </Link>
                <Link href="/#contact" className="px-8 py-4 border border-white text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Wholesale Inquiry
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION: Farm Gallery Marquee */}
      <section className="py-20 md:py-32 overflow-hidden bg-foreground/[0.02]">
        <div className="text-center mb-12 md:mb-20">
           <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-4 text-foreground">Straight from the Source</h2>
           <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg font-light px-6">A glimpse into the daily harvest at Success Farmhouse.</p>
        </div>

        <div className="relative w-full flex overflow-x-hidden">
          {/* We duplicate the images array to create a seamless infinite scroll effect */}
          {[1, 2].map((marqueeIndex) => (
            <motion.div
              key={marqueeIndex}
              className="flex gap-4 md:gap-8 px-2 md:px-4 whitespace-nowrap will-change-transform"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40,
              }}
            >
              {[
                '/farmproduce/tomatoes.jpeg',
                '/farmproduce/green-peppers.jpeg',
                '/farmproduce/cauliflower.jpeg',
                '/farmproduce/habanero-peppers.jpeg',
                '/farmproduce/cucumber-vines.jpeg',
                '/farmproduce/harvested-peppers.jpeg',
                '/farmproduce/red-chilies-basket.jpeg',
                '/farmproduce/live-birds.jpeg'
              ].map((src, index) => (
                <div key={index} className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] rounded-[24px] md:rounded-[40px] overflow-hidden flex-shrink-0 border border-foreground/5 shadow-2xl">
                  <Image 
                    src={src} 
                    alt={`Farm Produce Gallery ${index}`} 
                    fill 
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                    sizes="(max-width: 768px) 280px, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 text-center bg-foreground text-background dark:bg-secondary dark:text-foreground rounded-t-[40px] md:rounded-t-[60px] overflow-hidden relative mt-12">
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#10B981]/20 blur-[80px] rounded-full"></div>
        
        <h2 className="text-3xl md:text-5xl font-heading mb-8 md:mb-12 relative z-10">Cultivate Success</h2>
        <Link 
          href="/#contact"
          className="inline-block px-8 py-4 md:px-10 md:py-5 rounded-full bg-[#10B981] text-white font-semibold uppercase tracking-wider text-xs md:text-sm hover:bg-[#0c9668] transition-colors duration-300 relative z-10 shadow-[0_10px_30px_rgba(16,185,129,0.3)] w-full md:w-auto"
        >
          Discover Our Produce
        </Link>
      </section>
    </div>
  );
}
