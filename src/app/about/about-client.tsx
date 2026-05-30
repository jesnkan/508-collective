'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Caveat } from 'next/font/google';

const caveat = Caveat({ subsets: ['latin'], weight: '400' });

export default function AboutClient() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-32 pb-20 overflow-hidden selection:bg-[#FF1A1A]/30">
      
      {/* Inspired Hero Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-32 relative">
        {/* Top Story Header */}
        <div className="flex items-center gap-4 mb-16 md:mb-24 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-2xl md:text-3xl text-[#FF1A1A] ${caveat.className}`}
          >
            Our Story
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 h-[1px] bg-gradient-to-r from-[#FF1A1A]/30 to-transparent origin-left"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-mono text-xs text-foreground/40 tracking-widest"
          >
            01
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image with Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative will-change-transform"
          >
            {/* The Floating Blue Badge */}
            <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-24 h-24 md:w-32 md:h-32 bg-[#0096FF] rounded-full flex flex-col items-center justify-center text-white z-20 shadow-2xl shadow-[#0096FF]/30">
              <span className="font-bold text-[10px] md:text-xs tracking-widest uppercase">Est.</span>
              <span className="font-heading font-black text-lg md:text-xl">2024</span>
            </div>

            {/* The Image Container */}
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden z-10 shadow-2xl bg-foreground/5">
              <Image 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                alt="508 Leadership Vision" 
                fill
                className="object-cover filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>

            {/* Decorative Concentric Circles behind the image */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 border border-foreground/10 rounded-full z-0 pointer-events-none"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-foreground/10 rounded-full z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border border-foreground/10 rounded-full z-0 pointer-events-none bg-[#FF1A1A]/5 blur-xl"></div>
          </motion.div>

          {/* Right Column: Typography & Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center will-change-transform"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tighter leading-[1.1] mb-10 text-foreground">
              It all started with <br />
              <span className="text-[#FF1A1A]">a vision.</span>
            </h1>

            <div className="space-y-6 text-base md:text-lg font-light text-foreground/60 leading-relaxed mb-12 max-w-2xl">
              <p>
                In the early stages of our journey, we saw how often industries operated in silos—retail detached from agriculture, media disconnected from lifestyle. That gap sparked a shared vision to build something better.
              </p>
              <p>
                We recognized that many communities faced similar challenges: fragmented supply chains, limited premium experiences, and the pressure to find quality across different sectors without a unified standard of excellence.
              </p>
              <p>
                <strong className="font-semibold text-foreground">Driven by this vision,</strong> the 508 collective was born—a unified ecosystem where innovation thrives, resources are optimized, and businesses grow together.
              </p>
            </div>

            {/* Handwritten Quote */}
            <div className="relative pl-6 mt-8">
              <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-[#FF1A1A] to-[#0096FF] rounded-full"></div>
              <p className={`text-4xl md:text-5xl text-foreground/80 leading-tight ${caveat.className}`}>
                "No vision should ever be too bold to build."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Ecosystem Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-foreground/5 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-24 relative z-10">
           <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-4 text-[#0096FF]">The 508 Ecosystem</p>
           <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter uppercase leading-none">
              A Multi-Industry <br /> <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#0096FF] to-[#FF1A1A]">Powerhouse</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
           {[
             { title: "Retail & Commerce", desc: "Redefining the shopping experience through Depot Store and DSTV Retail.", icon: "🛍️" },
             { title: "Media & Branding", desc: "Precision printing and monumental branding solutions at 508 Print Media.", icon: "🎨" },
             { title: "Agribusiness", desc: "Sustainable farming and high-quality organic production at Success Farmhouse.", icon: "🌱" },
             { title: "Lifestyle", desc: "Curated tastes and refined living experiences through City Sips.", icon: "🍷" }
           ].map((item, i) => (
             <div key={i} className="p-10 rounded-[32px] bg-background border border-foreground/10 hover:border-[#0096FF]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group">
                <span className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed font-light">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto text-center border-t border-foreground/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto will-change-transform"
        >
          <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 text-[#FFD60A]">Leadership</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-8">
            Abbey <span className="italic font-light">Clottey</span>
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-foreground/40 mb-8">Founder & Chief Executive Officer</p>
          
          <div className="space-y-6 text-lg text-foreground/70 font-light leading-relaxed">
            <p>
              As the visionary force behind 508, Abbey Clottey has dedicated his career to building businesses that challenge the status quo. With a deep-rooted passion for innovation and community growth, he has steered the company across diverse industries with a singular focus: excellence.
            </p>
            <p>
              "Our goal is not just to participate in the market, but to redefine it. At 508, we believe that by fostering synergy between retail, agriculture, and media, we can create a sustainable future that benefits everyone."
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-40 px-6 text-center relative overflow-hidden bg-foreground/5 mx-6 md:mx-12 rounded-[40px] md:rounded-[60px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF1A1A]/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-heading font-bold tracking-tighter uppercase mb-8">
            Interested in <span className="text-[#FF1A1A] italic font-light">Partnering?</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 font-light mb-12 max-w-2xl mx-auto">
            We are always looking for visionary partners, investors, and talent to join our ecosystem. Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link href="/connect" className="px-10 py-5 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FF1A1A] hover:text-white transition-all shadow-xl hover:shadow-[#FF1A1A]/20">Get In Touch</Link>
             <Link href="/portfolio" className="px-10 py-5 border border-foreground/20 rounded-full font-bold uppercase tracking-widest text-xs hover:border-[#0096FF] hover:text-[#0096FF] transition-colors bg-background/50 backdrop-blur-sm">View Portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
