import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Link } from 'react-router-dom';

export default function PrintMedia() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const brandColor = "#0096FF"; // Azure

  return (
    <div className="bg-white text-black min-h-screen">
      <section ref={ref} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img 
            src="/print picture.jpg" 
            alt="Print Media" 
            className="w-full h-full object-cover"
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
            className="uppercase tracking-[0.3em] text-xs font-semibold mb-6 opacity-80"
          >
            A 508 Venture
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-[120px] font-heading font-medium tracking-tighter leading-none mb-8"
          >
            508 Print <br/><span className="italic" style={{ color: brandColor }}>Media</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl font-light opacity-80 max-w-2xl mx-auto"
          >
            Print beyond expectations. Precision, scale, and uncompromising quality.
          </motion.p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] mb-6 opacity-50">The Mission</h2>
            <p className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
              We transform ideas into physical realities, combining traditional craftsmanship with cutting-edge <span style={{ color: brandColor }}>printing technology</span>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-[30px]">
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: `${brandColor}20`, color: brandColor }}>
                01
              </div>
              <h3 className="text-xl font-heading font-medium mb-3">Commercial Printing</h3>
              <p className="text-gray-500 font-light text-sm">High-volume, premium quality offset and digital printing for global brands.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-[30px] translate-y-12">
               <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center" style={{ backgroundColor: `${brandColor}20`, color: brandColor }}>
                02
              </div>
              <h3 className="text-xl font-heading font-medium mb-3">Large Format</h3>
              <p className="text-gray-500 font-light text-sm">Monumental visuals for outdoor advertising, events, and retail spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 overflow-hidden bg-gray-100">
         <div className="flex gap-6 px-6 relative w-[200vw] animate-[marquee_30s_linear_infinite]">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="w-[400px] h-[500px] flex-shrink-0 rounded-[30px] overflow-hidden">
                <img src={`/print picture.jpg`} alt={`Gallery item ${i}`} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"/>
              </div>
            ))}
         </div>
      </section>

      <section className="py-32 px-6 md:px-12 text-center max-w-[800px] mx-auto">
        <h2 className="text-5xl font-heading tracking-tight mb-12">Ready to start printing?</h2>
        <Link 
          to="/#contact"
          className="inline-block px-10 py-5 rounded-full text-white font-semibold uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300 shadow-[0_10px_40px_rgba(0,150,255,0.4)]"
          style={{ backgroundColor: brandColor }}
        >
          Contact Print Media
        </Link>
      </section>
    </div>
  );
}
