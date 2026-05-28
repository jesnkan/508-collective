'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "508 didn't just understand our vision; they evolved it. Their ecosystem approach is revolutionary.",
    author: "Sarah Jenkins",
    role: "Director of Operations, Global Retail"
  },
  {
    quote: "The synergy across 508's businesses provides an unparalleled advantage. A true luxury holding company.",
    author: "Michael Chang",
    role: "CEO, Nexa Logistics"
  },
  {
    quote: "From Print to Retail, the consistency in quality and bold execution is what makes 508 an industry leader.",
    author: "Elena Rodriguez",
    role: "Marketing Head, Verve Lifestyle"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-foreground py-32 relative z-30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-background/40 mb-20">Voices of Trust</h2>

        <div className="relative h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-background leading-tight mb-12">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="font-semibold text-background uppercase tracking-widest text-sm mb-1">{testimonials[currentIndex].author}</p>
                <p className="text-background/50 text-xs uppercase tracking-wider">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-background' : 'w-4 bg-background/20 hover:bg-background/40'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}