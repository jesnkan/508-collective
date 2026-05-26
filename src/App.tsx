/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Connect from '@/pages/Connect';
import Portfolio from '@/pages/Portfolio';
import PrintMedia from '@/pages/PrintMedia';
import DSTVRetail from '@/pages/DSTVRetail';
import CitySips from '@/pages/CitySips';
import Depot from '@/pages/Depot';
import SuccessFarmhouse from '@/pages/SuccessFarmhouse';

import { ReactLenis } from 'lenis/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Premium loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="dark" storageKey="508-theme" attribute="class">
        <BrowserRouter>
          <ScrollToTop />
          <div className="relative min-h-screen bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30">
            <Loader isLoading={loading} />
            
            <div 
              className={`transition-opacity duration-1000 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}
            >
              <Navigation />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/connect" element={<Connect />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/print-media" element={<PrintMedia />} />
                  <Route path="/dstv-retail" element={<DSTVRetail />} />
                  <Route path="/city-sips" element={<CitySips />} />
                  <Route path="/depot" element={<Depot />} />
                  <Route path="/success-farmhouse" element={<SuccessFarmhouse />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ReactLenis>
  );
}
