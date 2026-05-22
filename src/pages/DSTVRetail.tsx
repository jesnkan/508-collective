import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Link } from 'react-router-dom';

export default function DSTVRetail() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const brandColor = "#FFD60A"; // Yellow

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section ref={ref} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            src="/dstv picture.jpg" 
            alt="DSTV Retail" 
            className="w-full h-full object-cover opacity-40 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          {/* Brand glow overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-color" style={{ backgroundColor: brandColor }}></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-xs font-semibold mb-6 text-foreground/50"
          >
            A 508 Venture
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[120px] font-heading font-medium tracking-tighter leading-none mb-8"
          >
            DSTV <span className="italic" style={{ color: brandColor, textShadow: `0 0 80px ${brandColor}` }}>Retail</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl font-light text-foreground/70 max-w-2xl mx-auto"
          >
            Entertainment delivered. The ultimate destination for premium electronics and subscriptions.
          </motion.p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] mb-6 text-foreground/50">The Mission</h2>
            <p className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
              Bridging the gap between world-class content and the <span style={{ color: brandColor }}>devices that bring it to life</span>.
            </p>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-[#FFD60A]/10 blur-[80px] rounded-full"></div>
             <div className="glass-card p-12 rounded-[40px] relative border border-[#FFD60A]/20 bg-foreground/5 backdrop-blur-xl">
               <h3 className="text-2xl font-heading font-medium mb-6">Retail Experience</h3>
               <p className="text-foreground/60 font-light leading-relaxed mb-8">
                 We provide end-to-end retail solutions for digital entertainment, hardware, and subscription services, creating immersive in-store and online experiences.
               </p>
               <ul className="space-y-4">
                 {['Smart TVs & Audio', 'Decoders & Installation', 'Smart Home Integration', 'Premium Subscriptions'].map(item => (
                   <li key={item} className="flex items-center gap-4 text-sm font-medium tracking-wide">
                     <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandColor }}></div>
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center border-t border-foreground/10">
        <h2 className="text-4xl md:text-6xl font-heading tracking-tight mb-12">Upgrade your entertainment.</h2>
        <Link 
          to="/#contact"
          className="inline-block px-10 py-5 rounded-full text-black font-semibold uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300 shadow-[0_10px_40px_rgba(255,214,10,0.3)]"
          style={{ backgroundColor: brandColor }}
        >
          Find a Store
        </Link>
      </section>
    </div>
  );
}
