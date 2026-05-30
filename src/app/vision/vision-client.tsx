'use client';

import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Sparkles, Target, Zap, Shield, Globe } from 'lucide-react';

// Animation variants for text reveal
const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

function SplitText({ text, className }: { text: string, className?: string }) {
  const words = text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] py-[0.1em]">
          <motion.span
            custom={i}
            variants={wordVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

function PillarCard({ icon: Icon, title, description, color, delay }: { icon: any, title: string, description: string, color: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative p-1 bg-white dark:bg-foreground/[0.02] border border-foreground/5 rounded-[40px] hover:border-primary/20 transition-all duration-700 will-change-transform"
    >
      <div className="relative z-10 p-10 h-full flex flex-col bg-card dark:bg-background rounded-[38px]">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl"
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          <Icon size={32} />
        </div>
        <h3 className="text-2xl font-heading font-bold mb-4 tracking-tight text-foreground">{title}</h3>
        <p className="text-foreground/50 font-light leading-relaxed mb-8 flex-1">
          {description}
        </p>
        <div className="w-12 h-1 bg-foreground/5 group-hover:w-full transition-all duration-700 rounded-full" style={{ backgroundColor: color }}></div>
      </div>
    </motion.div>
  );
}

function VisionContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Minimal scroll usage for buttery smoothness
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Very subtle, GPU-light parallax
  const textY = useTransform(smoothProgress, [0, 0.2], [0, -40]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* Hyper-Optimized Background - CSS ONLY, no transforms */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,150,255,0.03)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,26,26,0.03)_0%,transparent_50%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center z-10">
        <motion.div 
          style={{ y: textY }}
          className="max-w-6xl will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            <Sparkles size={12} className="text-primary" />
            The Future of Ghana
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading font-black tracking-tighter leading-[0.85] uppercase mb-10">
            One <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-yellow-500 italic font-light">Ecosystem.</span> <br />
            Infinite <span className="text-foreground/20">Growth.</span>
          </h1>

          <SplitText 
            text="Building the most ambitious multi-industry holding company in West Africa."
            className="text-lg md:text-2xl font-light text-foreground/40 max-w-3xl mx-auto leading-relaxed"
          />
        </motion.div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4 text-foreground/10">
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative py-32 md:py-60 px-6 z-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="lg:sticky lg:top-40 mb-12 lg:mb-0">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6">Our Manifesto</h2>
              <p className="text-4xl md:text-7xl font-heading font-black tracking-tighter leading-none uppercase">
                Redefining the <br /> <span className="text-foreground/30 italic font-light">Standard.</span>
              </p>
            </div>
            
            <div className="space-y-16 lg:pt-40">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 md:p-16 bg-foreground text-background rounded-[50px] relative overflow-hidden group"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 <p className="text-xl md:text-3xl font-heading font-medium tracking-tight leading-tight relative z-10">
                   "We don't just build businesses; we build legacies. Our vision is to create a seamless synergy between industries that empowers communities and drives sustainable economic transformation."
                 </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-8 border border-foreground/10 rounded-[32px] hover:bg-foreground/5 transition-colors">
                    <Target className="text-primary mb-6" size={28} />
                    <h4 className="text-lg font-bold mb-3 uppercase tracking-tighter">Strategic Clarity</h4>
                    <p className="text-xs text-foreground/40 font-light leading-relaxed">Precision in execution. We identify high-growth sectors and apply our unique 508 operational excellence model.</p>
                 </div>
                 <div className="p-8 border border-foreground/10 rounded-[32px] hover:bg-foreground/5 transition-colors">
                    <Zap className="text-yellow-500 mb-6" size={28} />
                    <h4 className="text-lg font-bold mb-3 uppercase tracking-tighter">Radical Innovation</h4>
                    <p className="text-xs text-foreground/40 font-light leading-relaxed">Breaking traditional boundaries. Whether in agriculture or media, we inject modern technology into established markets.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Pillars of Vision */}
      <section className="relative py-32 px-6 z-10 bg-foreground text-background rounded-[40px] md:rounded-[100px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-6 block">Structural Integrity</span>
             <h2 className="text-3xl md:text-6xl font-heading font-black tracking-tighter uppercase mb-8">
               Five Pillars. One Bold <span className="italic font-light text-background/30">Future.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
             <PillarCard 
                icon={Shield} 
                title="RETAIL" 
                description="Revolutionizing the customer experience through direct-to-consumer digital channels and premium distribution hubs." 
                color="#0096FF" 
                delay={0.05}
             />
             <PillarCard 
                icon={Globe} 
                title="MEDIA" 
                description="High-end print and digital storytelling that bridges the gap between global standards and local narratives." 
                color="#FF1A1A" 
                delay={0.1}
             />
             <PillarCard 
                icon={Zap} 
                title="AGRICULTURE" 
                description="Sustainable, tech-driven farming that ensures food security while providing industrial-scale commodities for export." 
                color="#10B981" 
                delay={0.15}
             />
             <PillarCard 
                icon={Target} 
                title="LIFESTYLE" 
                description="Curating luxury, taste, and experience. From fine wines to leisure, we define the modern Ghanaian lifestyle." 
                color="#FFD60A" 
                delay={0.2}
             />
             <PillarCard 
                icon={Sparkles} 
                title="COMMERCE" 
                description="The logistics backbone of the ecosystem. Ensuring efficiency, transparency, and trust in every transaction." 
                color="#0096FF" 
                delay={0.25}
             />
             
             {/* Dynamic CTA Card */}
             <motion.div
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative p-10 rounded-[40px] bg-primary flex flex-col items-center justify-center text-center overflow-hidden group will-change-transform"
             >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <h3 className="text-2xl font-heading font-black tracking-tighter uppercase mb-6 relative z-10">Join the <br /> Revolution.</h3>
                <Link href="/connect" className="px-8 py-4 bg-white text-primary rounded-full text-[10px] font-bold uppercase tracking-widest relative z-10 hover:scale-105 transition-transform active:scale-95 shadow-2xl">
                  Partner with Us
                </Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-40 md:py-60 px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-10">
               Ready to <span className="text-primary">Grow?</span>
            </h2>
            <p className="text-base md:text-xl font-light text-foreground/40 mb-12 max-w-2xl mx-auto leading-relaxed">
              We are actively expanding our portfolio and looking for visionary partners, innovators, and investors to join us on this journey.
            </p>
            <Link 
              href="/connect" 
              className="group flex items-center gap-6 px-10 py-5 bg-foreground text-background rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl active:scale-95"
            >
              Start a Conversation
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="relative py-12 px-6 text-center border-t border-foreground/5 z-10">
        <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/15">
          508 Ecosystem &copy; 2026 • Vision & Strategy
        </p>
      </footer>

    </div>
  );
}

export default function VisionClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return <VisionContent />;
}
