'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100dvh] min-h-[700px] md:min-h-[800px] w-full flex flex-col overflow-hidden bg-background">
      {/* Immersive Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-background"></div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Technical Lines */}
        <div className="absolute top-[15%] left-0 w-full h-[1px] bg-foreground/5"></div>
        <div className="absolute top-0 left-[8%] md:left-[15%] w-[1px] h-full bg-foreground/5"></div>
        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-foreground/5"></div>
        <div className="absolute top-0 right-[8%] md:right-[15%] w-[1px] h-full bg-foreground/5"></div>

        {/* Animated Abstract Blobs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#0096FF]/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-60 will-change-transform"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-[#FF1A1A]/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-50 will-change-transform"
        />

        <div className="absolute inset-0 opacity-10 dark:opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply dark:mix-blend-overlay"></div>
      </motion.div>

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-16 pt-32 pb-12 flex flex-col">

        {/* Main Content Area */}
        <div className="flex-1 w-full relative flex flex-col items-center md:items-end justify-center">

          {/* Big "508" Background Text */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2 }}
             className="absolute left-1/2 md:left-0 top-[25%] md:top-1/2 -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 pointer-events-none z-0 font-heading font-black tracking-tighter will-change-transform"
          >
            <h1 className="text-[60vw] md:text-[500px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#0096FF] via-[#FF1A1A] to-[#FFD60A] opacity-20 md:opacity-100">
              508
            </h1>
          </motion.div>

          {/* Foreground Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[500px] lg:w-[600px] flex flex-col items-center md:items-start relative z-20 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-foreground/80 text-[10px] font-semibold uppercase tracking-[0.2em] pt-[1px]">
                The 508 Collective
              </span>
            </div>

            <h2 className="text-[12vw] md:text-[60px] lg:text-[72px] leading-[0.95] font-heading font-bold tracking-tight text-foreground uppercase mb-10">
              Multiple <br className="hidden md:block" />Businesses.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0096FF] via-[#FF1A1A] to-[#FFD60A]">One Bold Vision.</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/portfolio"
                  className="bg-foreground text-background px-10 py-5 rounded-full font-bold uppercase tracking-[0.1em] text-xs flex items-center justify-center gap-4 transition-colors hover:bg-foreground/90 shadow-2xl group"
                >
                  Explore Ecosystem
                  <div className="w-6 h-6 bg-background/20 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer Widgets Area */}
        <div className="mt-auto w-full flex justify-center md:justify-start">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="bg-card/40 border border-foreground/10 rounded-2xl p-5 md:p-6 flex flex-col gap-2 shadow-xl backdrop-blur-xl"
           >
             <div className="flex items-center -space-x-2">
               <div className="w-7 h-7 rounded-full bg-[#0096FF] border-2 border-card z-30"></div>
               <div className="w-7 h-7 rounded-full bg-[#FF1A1A] border-2 border-card z-20"></div>
               <div className="w-7 h-7 rounded-full bg-[#FFD60A] border-2 border-card z-10"></div>
             </div>
             <div>
               <div className="text-2xl font-bold font-heading">12M+</div>
               <div className="opacity-50 text-[10px] uppercase tracking-wider font-semibold">Satisfied Customers</div>
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}