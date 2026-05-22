import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
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

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-40 mix-blend-difference"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <Link to="/" className="font-heading text-3xl font-black tracking-tight text-gradient hover:opacity-70 transition-opacity">
          508
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {[
            { name: 'PORTFOLIO', path: '/portfolio' },
            { name: 'ABOUT', path: '/#about' },
            { name: 'DEPOT', path: '/depot' },
            { name: 'VISION', path: '/#vision' },
            { name: 'CONNECT', path: '/#contact' },
          ].map((item) => (
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
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white dark:hover:text-white/70 hover:text-white/70 transition-colors flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <div className="w-6 h-[2px] bg-white"></div>
            <div className="w-6 h-[2px] bg-white"></div>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
