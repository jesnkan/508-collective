'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PrintMediaClient() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const brandColor = "#0096FF"; // Azure

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section ref={ref} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 will-change-transform">
          <Image 
            src="/print picture.jpg" 
            alt="Print Media" 
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/60 mix-blend-multiply"></div>
          {/* Brand glow overlay */}
          <div className="absolute inset-0 opacity-40 mix-blend-color" style={{ backgroundColor: brandColor }}></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 text-foreground max-w-5xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6 opacity-80"
          >
            A 508 Venture
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-8xl lg:text-[120px] font-heading font-medium tracking-tighter leading-none mb-8"
          >
            508 Print <br/><span className="italic" style={{ color: brandColor }}>Media</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl font-light opacity-80 max-w-2xl mx-auto"
          >
            Print beyond expectations. Precision, scale, and uncompromising quality.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.3em] mb-6 opacity-50">The Mission</h2>
            <p className="text-3xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
              We transform ideas into physical realities, combining traditional craftsmanship with cutting-edge <span style={{ color: brandColor }}>printing technology</span>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="p-6 md:p-8 bg-foreground/5 rounded-[24px] md:rounded-[30px]">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mb-6 flex items-center justify-center text-sm md:text-base font-bold" style={{ backgroundColor: `${brandColor}20`, color: brandColor }}>
                01
              </div>
              <h3 className="text-lg md:text-xl font-heading font-medium mb-3">Commercial Printing</h3>
              <p className="text-foreground/60 font-light text-sm">High-volume, premium quality offset and digital printing for global brands.</p>
            </div>
            <div className="p-6 md:p-8 bg-foreground/5 rounded-[24px] md:rounded-[30px] sm:translate-y-12">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mb-6 flex items-center justify-center text-sm md:text-base font-bold" style={{ backgroundColor: `${brandColor}20`, color: brandColor }}>
                02
              </div>
              <h3 className="text-lg md:text-xl font-heading font-medium mb-3">Large Format</h3>
              <p className="text-foreground/60 font-light text-sm">Monumental visuals for outdoor advertising, events, and retail spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 overflow-hidden bg-foreground/5">
         <div className="flex gap-4 md:gap-6 px-6 relative w-[200vw] animate-[marquee_30s_linear_infinite] will-change-transform">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="w-[280px] h-[350px] md:w-[400px] md:h-[500px] flex-shrink-0 rounded-[20px] md:rounded-[30px] overflow-hidden relative">
                <Image 
                  src={`/print picture.jpg`} 
                  alt={`Gallery item ${i}`} 
                  fill
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 280px, 400px"
                />
              </div>
            ))}
         </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-12 text-center max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-heading tracking-tight mb-8 md:mb-12">Ready to start printing?</h2>
        <Link 
          href="/#contact"
          className="inline-block px-8 py-4 md:px-10 md:py-5 rounded-full text-white font-semibold uppercase tracking-wider text-xs md:text-sm hover:scale-105 transition-transform duration-300 shadow-[0_10px_40px_rgba(0,150,255,0.4)] w-full md:w-auto"
          style={{ backgroundColor: brandColor }}
        >
          Contact Print Media
        </Link>
      </section>
    </div>
  );
}
