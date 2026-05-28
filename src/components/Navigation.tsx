'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Subtle scroll animation for the header
  const headerY = useTransform(scrollY, [0, 50], [24, 12]);
  const scale = useTransform(scrollY, [0, 50], [1, 0.98]);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'ABOUT', path: '/about' },
    { name: 'DEPOT', path: '/depot' },
    { name: 'VISION', path: '/#vision' },
    { name: 'CONNECT', path: '/connect' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.header
          style={{
            y: headerY,
            scale,
          }}
          className="pointer-events-auto flex items-center bg-background/70 backdrop-blur-xl md:backdrop-blur-2xl border border-foreground/10 rounded-full shadow-2xl px-4 md:px-8 py-2 w-fit max-w-[95vw] gap-8 md:gap-24"
        >
          {/* Logo Section - Significantly Pushed Left */}
          <Link
            href="/"
            className="flex items-center justify-center hover:scale-110 transition-transform shrink-0 relative h-11 md:h-14 w-32 md:w-40"
          >
            {mounted ? (
              <Image
                src={theme === 'dark' ? "/508 dark logo.png" : "/508 logo.png"}
                alt="508 Logo"
                fill
                className="object-contain"
                priority
              />
            ) : (
               <div className="w-full h-full" />
            )}
          </Link>

          {/* Desktop Nav - Centered with large breathing room */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-[10px] font-bold text-foreground/50 uppercase tracking-[0.2em] px-4 py-2 rounded-full hover:text-foreground hover:bg-foreground/5 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions - Significantly Pushed Right */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-foreground/60 hover:text-foreground flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover-bg-foreground/5 text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-8 text-foreground/50 hover:text-foreground p-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-heading font-bold tracking-tight text-foreground"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}