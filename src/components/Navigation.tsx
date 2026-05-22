import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(0px)']
  );

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'PORTFOLIO', path: '/portfolio' },
    { name: 'ABOUT', path: '/#about' },
    { name: 'DEPOT', path: '/depot' },
    { name: 'VISION', path: '/#vision' },
    { name: 'CONNECT', path: '/#contact' },
  ];

  return (
    <>
      <motion.header
        style={{ backgroundColor, backdropFilter }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          <Link to="/" className="font-heading text-2xl md:text-3xl font-black tracking-tight text-gradient hover:opacity-70 transition-opacity">
            508
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-[0.2em] hover:text-white/70 transition-colors relative"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side area */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-white dark:hover:text-white/70 hover:text-white/70 transition-colors flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={14} className="md:w-4 md:h-4" /> : <Moon size={14} className="md:w-4 md:h-4" />}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background md:hidden flex flex-col pt-32 px-12"
          >
            <nav className="flex flex-col gap-8">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-heading font-bold tracking-tighter text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pb-12">
               <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-semibold mb-6">Connect With Us</p>
               <div className="flex gap-4">
                  {['IG', 'X', 'LI'].map((social) => (
                    <a key={social} href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-xs font-bold">{social}</a>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
