'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Premium loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30">
      <AnimatePresence>
        {loading && <Loader isLoading={loading} key="loader" />}
      </AnimatePresence>
      
      <div 
        className={`transition-opacity duration-700 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
