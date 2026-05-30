'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  // For the horizontal scroll effect within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px]"
          style={{ background: 'radial-gradient(circle, rgba(0,150,255,0.05) 0%, rgba(0,150,255,0) 70%)' }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px]"
          style={{ background: 'radial-gradient(circle, rgba(255,26,26,0.05) 0%, rgba(255,26,26,0) 70%)' }}
        ></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <h2 className="text-3xl md:text-6xl lg:text-8xl font-heading font-medium tracking-tighter leading-[1.2] md:leading-[1.1] text-foreground">
            508 is a multi-industry company building <span className="text-foreground/40 italic">impactful businesses</span> across retail, media, agriculture, lifestyle, and commerce.
          </h2>
        </motion.div>

        <div className="mt-24 md:mt-40 relative">
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-foreground/10"></div>

          <div className="py-12 md:py-20 overflow-hidden">
            <motion.div style={{ x: x1 }} className="flex gap-4 md:gap-8 whitespace-nowrap opacity-[0.03] will-change-transform text-foreground">
              <span className="text-[60px] md:text-[150px] font-heading font-bold uppercase tracking-tighter">
                Retail • Media • Agriculture • Lifestyle • Commerce •
              </span>
            </motion.div>
            <motion.div style={{ x: x2 }} className="flex gap-4 md:gap-8 whitespace-nowrap opacity-[0.03] -mt-8 md:-mt-16 will-change-transform text-foreground">
              <span className="text-[60px] md:text-[150px] font-heading font-bold uppercase tracking-tighter">
                Innovation • Vision • Growth • Future • Trust •
              </span>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground/10"></div>
        </div>
      </div>
    </section>
  );
}