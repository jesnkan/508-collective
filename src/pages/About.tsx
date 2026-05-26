import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

const VALUES = [
  {
    title: "Innovation",
    description: "We don't just follow industry standards; we set them. Every 508 venture is built on the foundation of forward-thinking solutions."
  },
  {
    title: "Sustainability",
    description: "From Success Farmhouse to our retail operations, we prioritize long-term ecological and economic health."
  },
  {
    title: "Excellence",
    description: "Uncompromising quality is the hallmark of our brand, whether it's a premium vintage at City Sips or a large-scale print project."
  },
  {
    title: "Community",
    description: "Our businesses are designed to create value, foster growth, and build meaningful connections within the communities we serve."
  }
];

export default function About() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-32 pb-20 overflow-hidden">
      <SEO 
        title="About Us | The 508 Vision"
        description="Learn more about 508 (Five Zero Eight), a multi-industry conglomerate building the future of retail, media, agriculture, and lifestyle in Ghana and beyond."
        keywords="about 508, five zero eight company, 508 ecosystem, business philosophy, innovation ghana, sustainable agriculture, premium retail"
      />

      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-8 text-primary">The Genesis</p>
          <h1 className="text-5xl md:text-8xl lg:text-[120px] font-heading font-medium tracking-tighter leading-[0.9] mb-12">
            Building <span className="italic font-light opacity-50">Impactful</span> <br />
            Businesses.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl font-light text-foreground/60 leading-relaxed">
              508 (Five Zero Eight) is more than a parent company. It is a bold laboratory of innovation where we breathe life into diverse industries, from the soil of our farms to the precision of our print media.
            </p>
            <div className="flex flex-col gap-4 border-l border-foreground/10 pl-8">
              <span className="text-4xl font-heading font-bold tracking-tighter italic">5+</span>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-foreground/40">Thriving Ventures</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 bg-foreground/[0.02] border-y border-foreground/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-8">
                Our <span className="text-primary">Philosophy</span>
              </h2>
              <p className="text-lg text-foreground/70 font-light leading-relaxed mb-12 max-w-xl">
                We believe that true growth happens at the intersection of diverse expertise. By operating across multiple industries, we create a unique synergy that allows us to solve complex problems with creative, multi-dimensional perspectives.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {VALUES.map((value, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-background border border-foreground/5 hover:border-primary/20 transition-colors group"
                  >
                    <h3 className="text-lg font-heading font-bold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                    <p className="text-sm text-foreground/50 leading-relaxed font-light">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square lg:aspect-auto h-full min-h-[500px] rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Modern Office" 
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-12 left-12 right-12">
                 <p className="text-2xl md:text-3xl font-heading font-medium tracking-tight text-white drop-shadow-lg">
                    "We don't just build companies. We build legacies."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center mb-24">
           <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-4 text-foreground/40">The 508 Ecosystem</p>
           <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter uppercase leading-none">
              A Multi-Industry <br /> <span className="italic font-light">Powerhouse</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "Retail & Commerce", desc: "Redefining the shopping experience through Depot Store and DSTV Retail.", icon: "🛍️" },
             { title: "Media & Branding", desc: "Precision printing and monumental branding solutions at 508 Print Media.", icon: "🎨" },
             { title: "Agribusiness", desc: "Sustainable farming and high-quality organic production at Success Farmhouse.", icon: "🌱" },
             { title: "Lifestyle", desc: "Curated tastes and refined living experiences through City Sips.", icon: "🍷" }
           ].map((item, i) => (
             <div key={i} className="p-10 rounded-[32px] bg-foreground/5 hover:bg-foreground/10 transition-all border border-foreground/5 flex flex-col items-center text-center">
                <span className="text-4xl mb-6">{item.icon}</span>
                <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed font-light">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Abbey Clottey - CEO" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-semibold mb-6 text-primary">Leadership</p>
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
            
            <div className="mt-12 flex gap-6">
               <a href="#" className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </a>
               <a href="#" className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-heading font-bold tracking-tighter uppercase mb-8">
            Interested in <span className="text-primary italic font-light">Partnering?</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 font-light mb-12 max-w-2xl mx-auto">
            We are always looking for visionary partners, investors, and talent to join our ecosystem. Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="/#contact" className="px-10 py-5 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors shadow-xl">Get In Touch</a>
             <a href="/portfolio" className="px-10 py-5 border border-foreground/20 rounded-full font-bold uppercase tracking-widest text-xs hover:border-primary transition-colors">View Portfolio</a>
          </div>
        </div>
      </section>
    </div>
  );
}
