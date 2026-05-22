import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Link } from 'react-router-dom';

export default function SuccessFarmhouse() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  const brandColor = "#10B981"; // Emerald green

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      <section ref={ref} className="relative h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[60px] shadow-sm">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop" 
            alt="Success Farmhouse" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30 mix-blend-multiply dark:mix-blend-multiply"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-foreground mt-24">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: 'easeOut' }}
             className="w-20 h-20 mx-auto mb-8 rounded-full border border-foreground/40 flex items-center justify-center backdrop-blur-md"
          >
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-heading font-medium tracking-tight leading-none mb-6 text-foreground drop-shadow-lg"
          >
            Success <br/><span className="dark:text-foreground text-background/90">Farmhouse</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl font-light text-foreground/90 max-w-2xl mx-auto drop-shadow-md"
          >
            Growing sustainable futures. Innovation rooted in nature.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
         <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] font-semibold text-xs tracking-widest uppercase mb-6">
              Agricultural Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-8 leading-tight">
              A modern approach to agribusiness and sustainable farming.
            </h2>
            <p className="text-lg text-foreground/70 font-light leading-relaxed mb-8">
              At Success Farmhouse, we merge advanced agricultural technologies with sustainable practices to yield the highest quality organic produce and foster community growth.
            </p>
         </div>
         <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1592982537447-66a90802c673?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Farming technology"/>
            <div className="absolute inset-0 border-[8px] border-foreground/20 mix-blend-overlay rounded-[40px] pointer-events-none"></div>
         </div>
      </section>

      <section className="py-24 px-6 text-center dark:bg-secondary bg-foreground dark:text-foreground text-background rounded-t-[60px] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/20 blur-[80px] rounded-full"></div>
        
        <h2 className="text-4xl md:text-5xl font-heading mb-12 relative z-10">Cultivate Success</h2>
        <Link 
          to="/#contact"
          className="inline-block px-10 py-5 rounded-full bg-[#10B981] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#0c9668] transition-colors duration-300 relative z-10 shadow-[0_10px_30px_rgba(16,185,129,0.3)]"
        >
          Discover Our Produce
        </Link>
      </section>
    </div>
  );
}
