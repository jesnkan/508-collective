'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-background text-foreground py-20 md:py-32 rounded-t-[40px] md:rounded-t-[60px] relative z-40 overflow-hidden mt-[-40px] md:mt-[-60px]">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-7xl font-heading font-medium tracking-tighter mb-6 leading-tight">
              Let's Build <br/>
              <span className="text-foreground/40 italic">Together.</span>
            </h2>
            <p className="text-foreground/60 mb-8 md:mb-12 max-w-md font-light text-base md:text-lg">
              Reach out to explore partnerships, inquire about our businesses, or discover how 508 can elevate your next big idea.
            </p>

            <form className="space-y-6 md:space-y-8">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full bg-transparent border-b border-foreground/20 py-3 md:py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors tracking-widest text-[10px] md:text-xs uppercase"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-b border-foreground/20 py-3 md:py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors tracking-widest text-[10px] md:text-xs uppercase"
                />
              </div>
              <div className="relative group">
                <textarea
                  placeholder="HOW CAN WE HELP?"
                  rows={4}
                  className="w-full bg-transparent border-b border-foreground/20 py-3 md:py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors tracking-widest text-[10px] md:text-xs uppercase resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative px-8 md:px-10 py-4 md:py-5 overflow-hidden rounded-full border border-foreground hover:border-transparent transition-all duration-300 w-full md:w-auto"
              >
                <div className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]"></div>
                <span className="relative z-10 text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground group-hover:text-background transition-colors duration-300">
                  Send Inquiry
                </span>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="glass-card mb-8 md:mb-12 flex-1 rounded-[24px] md:rounded-[40px] overflow-hidden relative group min-h-[250px] md:min-h-[300px]">
              <div className="absolute inset-0 bg-foreground/5 backdrop-blur-sm z-10 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <p className="text-foreground font-heading text-xl md:text-2xl tracking-tight mb-4 drop-shadow-md">Visit Headquarters</p>
                 <a href="https://maps.google.com/?q=508+Print+Media,+Adenta,+GH" target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest text-[10px] md:text-xs border-b border-primary text-primary pb-1 pointer-events-auto">Get Directions</a>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=508+Print+Media,+Adenta,+GH&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full filter grayscale contrast-125 opacity-70 group-hover:filter-none group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-foreground/40 uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-4">Direct Line</h4>
                <a href="tel:+233559459452" className="flex items-center gap-3 text-foreground hover:text-green-400 transition-colors group">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-green-400 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                   </div>
                   <span className="font-medium text-base md:text-lg">+233 55 945 9452</span>
                </a>
              </div>
              <div>
                 <h4 className="text-foreground/40 uppercase tracking-widest text-[10px] md:text-xs font-semibold mb-4">Headquarters</h4>
                 <p className="text-foreground/80 font-light leading-relaxed text-sm md:text-base">
                   508 Print Media,<br/>
                   Adenta,<br/>
                   GH
                 </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}