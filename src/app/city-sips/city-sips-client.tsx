'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CitySipsClient() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans selection:bg-[#FF1A1A]/40">
      <section ref={ref} className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop"
            alt="City Sips"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
          {/* Deep glass reflection / glow */}
          <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#FF1A1A] rounded-full blur-[150px] opacity-20 mix-blend-multiply dark:mix-blend-screen"></div>
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 60 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[1px] bg-gradient-to-b from-transparent to-[#FF1A1A] mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 text-[#FF1A1A]"
          >
            A 508 Venture
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl lg:text-[140px] font-heading font-medium tracking-tighter leading-none mb-8"
          >
            City <span className="italic font-light">Sips</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-base md:text-xl font-light text-foreground/50 tracking-widest max-w-2xl mx-auto uppercase"
          >
            Curated taste. Refined living.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-heading tracking-tight leading-relaxed font-light italic text-foreground/80">
          "More than a store. A sanctuary for those who appreciate the <span className="text-foreground not-italic font-medium border-b border-[#FF1A1A]">art of the pour</span>."
        </h2>
      </section>

      <section className="py-12 md:py-20 px-6 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
         {[
           { title: "Rare Vintages", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2615&auto=format&fit=crop" },
           { title: "Artisan Spirits", image: "https://images.unsplash.com/photo-1608885898957-a559228e8749?q=80&w=2574&auto=format&fit=crop" },
           { title: "Curated Experiences", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2670&auto=format&fit=crop" }
         ].map((item, i) => (
           <div key={i} className="group relative h-[400px] md:h-[600px] overflow-hidden rounded-xl">
             <Image 
               src={item.image} 
               alt={item.title} 
               fill
               sizes="(max-width: 768px) 100vw, 33vw"
               className="object-cover filter brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <h3 className="text-2xl md:text-3xl font-heading text-foreground mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-2xl">{item.title}</h3>
             </div>
           </div>
         ))}
      </section>

      <section className="py-20 md:py-32 px-6 text-center border-t border-foreground/5 mt-12 md:mt-20">
        <Link 
          href="/#contact"
          className="inline-block px-10 py-5 md:px-12 md:py-6 rounded-none text-foreground border border-foreground/20 hover:border-[#FF1A1A] hover:bg-[#FF1A1A]/10 font-semibold uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-500 w-full md:w-auto"
        >
          Explore the Collection
        </Link>
      </section>
    </div>
  );
}
