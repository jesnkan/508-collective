import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ isLoading }: { isLoading: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const startTime = Date.now();
      const duration = 2800; // Reach 100% slightly before the 3 second unmount
      
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
        setProgress(currentProgress);
        
        if (elapsed < duration) {
          requestAnimationFrame(updateProgress);
        }
      };
      
      requestAnimationFrame(updateProgress);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Subtle noise */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

          <div className="relative flex flex-col items-center justify-center w-full max-w-md px-6 z-10 w-64">
            
            <div className="w-full flex justify-between items-end mb-4 overflow-hidden">
               <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
                 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50"
               >
                 Loading
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 className="font-heading text-4xl font-light tracking-tighter"
               >
                 {progress}%
               </motion.div>
            </div>

            {/* Progress Bar Container */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="w-full h-[1px] bg-foreground/10 relative overflow-hidden origin-left"
            >
              {/* Active Progress */}
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-foreground origin-left"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 flex gap-2"
            >
              {['5', '0', '8'].map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
                  className="font-heading text-lg font-bold"
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="font-heading text-lg font-light text-foreground/50 ml-1"
              >
                Ecosystem
              </motion.span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
