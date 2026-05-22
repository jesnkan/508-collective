import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const indicatorOpacity = useTransform(scrollY, [0, 50], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100dvh] min-h-[700px] md:min-h-[800px] w-full flex flex-col overflow-hidden bg-background">
      {/* Immersive Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-background"></div>
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        ></div>

        {/* Technical Crosshairs and Lines */}
        {/* Horizontal Top */}
        <div className="absolute top-[15%] left-0 w-full h-[1px] bg-foreground/5"></div>
        {/* Vertical Left */}
        <div className="absolute top-0 left-[8%] md:left-[15%] w-[1px] h-full bg-foreground/5"></div>
        {/* Horizontal Bottom */}
        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-foreground/5"></div>
        {/* Vertical Right */}
        <div className="absolute top-0 right-[8%] md:right-[15%] w-[1px] h-full bg-foreground/5"></div>

        {/* Dots at intersections */}
        <div className="absolute top-[15%] left-[8%] md:left-[15%] w-1.5 h-1.5 bg-foreground/30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[15%] right-[8%] md:right-[15%] w-1.5 h-1.5 bg-foreground/30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-[20%] left-[8%] md:left-[15%] w-1.5 h-1.5 bg-foreground/30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-[20%] right-[8%] md:right-[15%] w-1.5 h-1.5 bg-foreground/30 -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="absolute top-[50%] left-4 lg:left-12 w-2 h-2 bg-foreground/30 rounded-sm"></div>
        <div className="absolute top-[50%] right-4 lg:right-12 w-2 h-2 bg-foreground/30 rounded-sm"></div>
        
        {/* Animated Abstract Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#0096FF]/30 rounded-full mix-blend-screen filter blur-[100px] opacity-60"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-[#FF1A1A]/30 rounded-full mix-blend-screen filter blur-[120px] opacity-50"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[30%] left-[10%] w-[20vw] h-[20vw] bg-[#FFD60A]/30 rounded-full mix-blend-screen filter blur-[80px] opacity-60"
        />
        
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </motion.div>

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-16 pt-32 pb-12 flex flex-col justify-between">
        
        <div className="flex-1 w-full relative flex flex-col md:flex-row items-center justify-center md:justify-end lg:pr-10">
          
          {/* Top-Left Small Text Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[5%] md:top-[10%] left-6 md:left-24 max-w-[200px] text-foreground/60 text-[10px] md:text-xs leading-relaxed hidden lg:block z-20"
          >
            Building sustainable futures,<br/>
            shaping industries, and<br/>
            delivering excellence.
          </motion.div>

          {/* Left Side: Big 508 */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8, x: -50 }}
             animate={{ opacity: 1, scale: 1, x: 0 }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="absolute left-[-10%] md:left-[-10%] lg:left-[-5%] top-[40%] md:top-1/2 -translate-y-1/2 pointer-events-none z-0 font-heading font-black tracking-tighter"
          >
             <h1 className="text-[50vw] md:text-[55vw] lg:text-[450px] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-br from-[#0096FF] via-[#FF1A1A] to-[#FFD60A] drop-shadow-2xl whitespace-nowrap overflow-visible">
               508
             </h1>
          </motion.div>

          {/* Right Side: Typography & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-[55%] lg:w-[45%] xl:w-[40%] flex flex-col items-start relative z-20 mt-32 md:mt-0 ml-auto md:mr-[-10%] lg:mr-[-5%] p-4 md:p-0 rounded-3xl"
          >
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-foreground/80 text-[10px] font-semibold uppercase tracking-[0.2em] pt-[1px]">
                The 508 Collective
              </span>
            </div>

            <h2 className="text-[11vw] md:text-[4vw] lg:text-[60px] leading-[1.0] font-heading font-bold tracking-tight text-foreground uppercase mb-6 drop-shadow-lg">
              Multiple Businesses.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0096FF] via-[#FF1A1A] to-[#FFD60A]">One Bold Vision.</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4 w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/portfolio"
                  className="bg-foreground text-background px-8 py-4 rounded-full font-bold uppercase tracking-[0.1em] text-xs flex items-center justify-center gap-4 transition-colors hover:bg-foreground/90 shadow-xl group"
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

              <div className="flex items-center gap-3 border-l border-foreground/20 pl-6 h-10 hidden sm:flex">
                 <div className="flex text-yellow-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                 </div>
                 <span className="text-foreground/80 font-medium text-sm">Industry<br/>Leading</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Cards (Bottom Left) */}
        <div className="absolute inset-x-0 bottom-8 md:bottom-12 lg:bottom-24 px-6 md:px-16 pointer-events-none flex justify-between items-end w-full max-w-[1600px] mx-auto z-20">
           
           {/* Bottom Left Card */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="bg-card/80 text-card-foreground border border-border rounded-2xl p-4 md:p-6 flex flex-col gap-1 md:gap-2 shadow-2xl backdrop-blur-xl pointer-events-auto"
           >
             <div className="flex items-center -space-x-2 mb-1 md:mb-2">
               <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0096FF] border-2 border-card z-30"></div>
               <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#FF1A1A] border-2 border-card z-20"></div>
               <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#FFD60A] border-2 border-card z-10"></div>
             </div>
             <div className="text-xl md:text-2xl font-bold font-heading">12M+</div>
             <div className="opacity-60 text-[8px] md:text-[10px] uppercase tracking-wider">Satisfied Customers</div>
           </motion.div>

        </div>

      </div>

    </section>
  );
}
