'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        // ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOut * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { value: 5, label: 'Businesses Managed', suffix: '' },
    { value: 200, label: 'Customers Served', suffix: 'k+' },
    { value: 15, label: 'Years Operating', suffix: '+' },
    { value: 10, label: 'Industries Impacted', suffix: '' }
  ];

  return (
    <section className="bg-foreground text-background py-20 md:py-32 rounded-t-[40px] md:rounded-t-[60px] -mt-[40px] md:-mt-[60px] relative z-30 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-background/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="pt-8 md:pt-0 md:px-8 first:pl-0 flex flex-col justify-center"
            >
              <div className="text-5xl md:text-8xl font-heading font-medium tracking-tighter mb-2 md:mb-4 text-background flex">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] md:text-sm font-semibold uppercase tracking-widest text-background/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}